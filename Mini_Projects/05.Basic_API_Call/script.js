let url = "https://openlibrary.org/search.json?q="
let btn = document.querySelector("button")
let ul = document.querySelector("ul")

async function getBooks(book) {
  try {
    let res = await axios.get(url + encodeURIComponent(book));
    return res.data.docs
  }
  catch (err) {
    console.log("ERROR: ", err);
    return [];
  }
}

btn.addEventListener("click", async () => {
  let inpVal = document.querySelector("input").value;
  if (inpVal.length < 1) {
    alert("enter a book name")
    return
  }

  let books = await getBooks(inpVal);

  if (!books || books.length === 0) {
    alert("No results found");
    return;
  }
  show(books)
})

function show(books) {
  for (let book of books) {
    let li = document.createElement("li")
    li.innerText = li.innerText = `${book.title} - ${book.author_name?.[0] || "Author not available"}`;

    ul.appendChild(li)

  }
}
