let addBtn = document.querySelector(".addBtn");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let p = document.querySelector("p");

function updateTaskHeading() {
  if (ul.children.length > 0) {
    p.innerText = "Your tasks:";
  } else {
    p.innerText = "No tasks yet.";
  }
}
updateTaskHeading()
addBtn.addEventListener("click", () => {
  if (input.value != "") {
    let item = document.createElement("li");
    let value = input.value;
    item.innerText = value
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.marginLeft = "4px"
    delBtn.classList.add("delete")
    item.appendChild(delBtn);
    ul.appendChild(item)
    input.value = "";
  } else {
    alert("Enter a valid task")
  }
  updateTaskHeading()
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//   delBtn.addEventListener("click", ()=>{
//     let par = delBtn.parentElement;
//     console.log(par);
//     par.remove();
//   })
// }

// Event Delegation

ul.addEventListener("click", (event) => {
  let target = event.target.nodeName;
  if (target == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
  updateTaskHeading()

});