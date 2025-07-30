function runDomDemo() {
  // 1. Selecting Elements

  // By ID
  const heading = document.getElementById("main-title"); // selects element by ID

  // By Tag Name
  const spans = document.getElementsByTagName("span"); // returns HTMLCollection
  console.log("Tag selector (span):", spans[0].textContent);

  // querySelector - first match
  const firstParagraph = document.querySelector(".info"); // first element with .info
  console.log("First paragraph:", firstParagraph.textContent);

  // querySelectorAll - all matches
  const allParagraphs = document.querySelectorAll(".info"); // NodeList of all .info
  allParagraphs.forEach((p, i) => {
    console.log(`Paragraph ${i + 1}:`, p.textContent);
  });

  const container = document.querySelector("#container");
  const children = container.querySelectorAll(".child");
  const link = document.querySelector("#myLink");

  // 2. Selecting/Changing Content
  heading.innerHTML = "<em>Updated Heading</em>"; // update HTML inside h1
  firstParagraph.textContent = "Paragraph updated via querySelector";

  // 3. Manipulating Attributes
  link.setAttribute("href", "https://openai.com"); // change href
  console.log("Updated link:", link.getAttribute("href"));

  // 4. Manipulating Styles

  container.style.backgroundColor = "#eef"; // change background
  container.style.padding = "20px"; // change padding

  heading.classList.add("highlight"); // add class
  heading.classList.toggle("highlight"); // toggle class

  // 5. DOM Navigation
  const parent = container.parentElement;
  const firstChild = container.firstElementChild;
  const lastChild = container.lastElementChild;
  const prev = container.previousElementSibling;
  const next = container.nextElementSibling;

  console.log("Parent:", parent);
  console.log("First child:", firstChild);
  console.log("Last child:", lastChild);
  console.log("Previous sibling:", prev);
  console.log("Next sibling:", next);
  console.log("Child count:", container.childElementCount);

  // 6. Adding Elements

  // appendChild (element only)
  const newP = document.createElement("p");
  newP.textContent = "Appended with appendChild";
  container.appendChild(newP); // adds to end

  // append (text or elements)
  container.append(" - Appended using append()");

  // prepend (adds to beginning)
  const prep = document.createElement("p");
  prep.textContent = "Prepended";
  container.prepend(prep);

  // insertAdjacentHTML (inserts HTML string)
  container.insertAdjacentHTML("beforebegin", "<p>Before container</p>");
  container.insertAdjacentHTML("afterbegin", "<p>Inside top</p>");
  container.insertAdjacentHTML("beforeend", "<p>Inside bottom</p>");
  container.insertAdjacentHTML("afterend", "<p>After container</p>");

  // 7. Removing Elements
  setTimeout(() => {
    newP.remove(); // remove the new element
    console.log("Element removed.");
  }, 2000);
}
