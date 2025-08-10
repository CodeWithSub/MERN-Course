let url = " https://dog.ceo/api/breeds/image/random"
let btn = document.querySelector("button");
let img = document.querySelector("img")

async function dogImage() {
  let res = await axios.get(url)
  return res.data.message;
}

btn.addEventListener("click", async () => {

  try {
    let imgUrl = await dogImage()
    img.setAttribute("src", imgUrl)
  }
  catch (e) {
    console.log("ERROR: ",e);
    console.log("no image found");
  }
})
