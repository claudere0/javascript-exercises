// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
// ]

const getTheTitles = function(objArr) {
    let titleArr = []
    for (let obj of objArr) {
        titleArr.push(obj.title)
    }
    return titleArr;
};

// console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
