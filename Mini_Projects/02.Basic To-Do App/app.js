let todo = [];
let req = prompt("Please enter your request (add, list, delete, quit)");

while (true) {
  if (req == "quit") {
    console.log("Quiting the app!");
    break;
  } else if (req == "list") {
    console.log("---------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    };
    console.log("---------");

  } else if (req == "add") {
    let task = prompt("Enter the task you want to add :");
    todo.push(task);
    console.log(`Your task(${task}) is added successfully!`);
  } else if (req == "delete") {
    let req = prompt("Enter the index of the task you want to delete :");
    todo.splice(req, 1);
    console.log("Successfully deleted!");
  } else {
    console.log("Wrong request");
  }
  req = prompt("Please enter your request (add, list, delete, quit)");
}