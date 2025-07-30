// function saveToDb(data, success, failuer) {
//   let internetSpeed = Math.floor(Math.random() * 10 + 1);
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failuer();
//   }
// }

// saveToDb("Subhransu", () => {
//   console.log("Success: your data1 was saved");
//   saveToDb("Ritesh",()=>{
//      console.log("Success: your data2 was saved");
//      saveToDb("Neha",()=>{
//      console.log("Success: your data2 was saved");
//   },()=>{
//     console.log("Failuer: Network error! data2 is not saved");
//   })
//   },()=>{
//     console.log("Failuer: Network error! data2 is not saved");
//   })
// }, () => {
//   console.log("Failuer: Network error! data is not saved");
// });

function saveToserver(data) {
  let internetSpeed = Math.floor(Math.random() * 11);
  return new Promise((resolve, reject) => {
    if (internetSpeed > 4) {
      resolve("Data is saved");
    } else {
      reject("Failuer: Weak connectionb");
    }
  })
}
console.log(saveToserver("Subhransu"));