const Arr1 = [
    {
        id: 1,
        name: "Sonal",
        Degree: "B.SC(IT)"
    },
    {
        id: 2,
        name: "Hardik",
        Degree: "BCA"
    },
    {
        id: 3,
        name: "Krishna",
        Degree: "BBA"
    },
    {
        id: 4,
        name: "Tirum",
        Degree: "B.com"
    },
    {
        id: 5,
        name: "Sonal",
        Degree: "B.SC(IT)"
    },
    {
        id: 6,
        name: "Sonal",
        Degree: "BCA"
    },
    {
        id: 7,
        name: "Krishna",
        Degree: "BBA"
    },
    {
        id: 8,
        name: "Krishna",
        Degree: "BBA"
    },
    {
        id: 9,
        name: "Krishna",
        Degree: "BBA"
    }

];
//console.log(Arr1);


// function FilterSameName() {
//     let DiscVal = [];
//     for (let index = 0; index < Arr1.length; index++) {
//         if (index > 0) {
//             let Flag = false
//             for (let index1 = 0; index1 < DiscVal.length; index1++) {
//                 if (Arr1[index].name == DiscVal[index1].name && Arr1[index].Degree == DiscVal[index1].Degree) {
//                     Flag = false;
//                     break;
//                 }
//                 else {
//                     Flag = true;
//                 }
//             }
//             if (Flag) {
//                 DiscVal.push(Arr1[index]);
//             }
//         }
//         else {
//             DiscVal.push(Arr1[index]);
//         }
//     }
//     return DiscVal;
// }
// console.log(FilterSameName());


// ********** Task 1 *********** //
const UniqNames = Arr1.filter((element, index) =>
    Arr1.findIndex(obj => (obj.name === element.name && obj.Degree === element.Degree)) === index);


// console.log( Arr1.filter(x => x.name == "Sonal" && x.Degree == "B.SC(IT)"));

// ********** Task 2 *********** //
const array = [1, 2, 3, [1, 2, [2, 3, 5, [1, 2, 5, 4], [1, 2, 3, 4]]], [8, 9, 8, 5, 47, 7, 8, [1, 2, 5, [1, 2, 2], [5, 9, 8, 9]]]];

//console.log(array);
//console.log(array.flat(Infinity));
// function JoniArray() {
//     debugger;
//     const oldArray = [...array];
//     const newArray = [];
//     for (const items of oldArray) {

//         const x = oldArray.pop();
//         if (!Array.isArray(x)) {
//             newArray.push(x);
//         }
//         else {
//             oldArray.push(...x);
//         }
//     }
//     return newArray.reverse();
// }

const NewArry = [];
function JoinNewArray(array) {
    const oldArray = array;
    for (const Items of oldArray) {
        if (!Array.isArray(Items)) {
            NewArry.push(Items)
        }
        else {
            JoinNewArray(Items);
        }
    }

    return NewArry
}

//console.log(JoinNewArray(array));

// function newArrayReduce(array) {
//     return array.reduce((arr, Val) => arr.concat(Array.isArray(Val) ? newArrayReduce(Val) : Val), [2]);
// }
// console.log(newArrayReduce(array));

//[1,2,3,1,2,2,3,5,1,2,5,4,1,2,3,4,8,9,8,5,47,7,8,1,2,5,1,2,2]




const studentData = [
    {
        id: 1,
        name: 'Jay',
        English: 20,
        Gujrati: 10,
        Hindi: 50
    },
    {
        id: 2,
        name: 'raj',
        English: 20,
        Gujrati: 20,
        Hindi: 50
    },
    {
        id: 3,
        name: 'paras',
        English: 20,
        Gujrati: 50,
        Hindi: 50
    },
    {
        id: 4,
        name: 'sagar',
        English: 20,
        Gujrati: 30,
        Hindi: 50
    },
    {
        id: 5,
        name: '2222',
        English: 20,
        Hindi: 50
    },
]

// console.log(studentData);

function SumofRsult(SubJects) {
    let TotMarks = 0;

    if (SubJects.English == "undefined" && SubJects.Hindi == "undefined" && SubJects.Gujrati == "undefined") {
        TotMarks = 0;
    }
    else {
        TotMarks = parseFloat(SubJects.English) + parseFloat(SubJects.Hindi) + parseFloat(SubJects.Gujrati);
    }
    return TotMarks;
}
function PerofRsult(SubJects) {
    let TotMarks = 0;

    if (SubJects.English == "undefined" && SubJects.Hindi == "undefined" && SubJects.Gujrati == "undefined") {
        TotMarks = 0;
    }
    else {
        TotMarks = Math.round((parseFloat(SubJects.English) + parseFloat(SubJects.Hindi) + parseFloat(SubJects.Gujrati)) / 1.5, 2);
    }
    return TotMarks;
}
const ResultArray = [];
let SortResultArray = [];
function GetResult() {
    //  debugger;
    let i = 0;
    for (let items of studentData) {
        ResultArray.push(new Object)
        ResultArray[i]["id"] = items.id;
        ResultArray[i]["name"] = items.name;
        ResultArray[i]["total"] = SumofRsult(items);
        ResultArray[i]["per"] = PerofRsult(items);
        ResultArray[i]["numbers"] = null;
        i++;
    }
  
    SortArray(ResultArray);

    return ResultArray
}
function SortArray(arr) {
    SortResultArray = ResultArray;

    SortResultArray.sort(function (a, b) {
        return b.per - a.per;
    });
    let rank = 1;
    SortResultArray[0].numbers = 1;
   ResultArray[ResultArray.findIndex(ResultArray,function(a) { return a[0].id ==  SortResultArray[0].id})].numbers = 1;
    for (let index = 1; index < SortResultArray.length; index++) {
        if (SortResultArray[index].per == 0 ||  Number.isNaN(parseFloat(SortResultArray[index].per))) {
         //   ResultArray[ResultArray.findIndex(SortResultArray[index].id)].numbers = "Failed";
            SortResultArray[index].numbers = "Failed";
        }
        else if (SortResultArray[index].per == SortResultArray[index - 1].per) {
            SortResultArray[index].numbers = SortResultArray[index - 1].per;
           // ResultArray[ResultArray.findIndex(SortResultArray[index].id)].numbers = SortResultArray[index - 1].per;

        }
        else {
            rank += 1;
            SortResultArray[index].numbers = rank;
           // ResultArray[ResultArray.findIndex(SortResultArray[index].id)].numbers = rank;
        }



    }

}
console.log(GetResult());

// debugger;
// ResultArray.sort(function(a,b){
//     return b.per - a.per;
//   });

//   var numTies = 0;
//   ResultArray[0].rank = 1;
//   for (i = 1; i < ResultArray.length; i++){
//     if (ResultArray[i].per === ResultArray[i-1].per){
//       numTies++;
//       ResultArray[i].numbers = ResultArray[i-1].numbers;
//     }
//     else{
//         ResultArray[i].numbers = i+numTies;
//       numTies = 0;
//     }
//    }

//   console.log(ResultArray);

// output: [
//     {
//         id: 1,
//         name: 'Jay',
//         total: 80,
//         per: 53,
//         numbers: 4
//     },
//     {
//         id: 2,
//         name: 'raj',
//         total: 90,
//         per: 54,
//         numbers: 3
//     },
//     {
//         id: 3,
//         name: 'paras',
//         total: 120,
//         per = 64,
//         numbers: 1
//     },
//     {
//         id: 1,
//         name: 'sagar',
//         total: 100,
//         per = 60,
//         numbers: 2
//     },
    // {
    //     id: 5,
    //     name: '2222',
//         total: 0,
//         per = 0,
//         numbers: Failed
    // },
// ]