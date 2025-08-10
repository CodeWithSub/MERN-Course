let url2 = "https://official-joke-api.appspot.com/random_joke"

// async function get_joke() {
//   fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.setup);
//       console.log(data.punchline);
//       return getJoke();
//     })
//     .catch((err) => {
//       console.log("ERROR: ", err);
//     })
// }

//With await
async function getJoke() {
  try {
    let res = await fetch(url2)
    let data = await res.json()
    console.log(data.setup);
    console.log(data.punchline);

    let res2 = await fetch(url2)
    let data2 = await res2.json()
    console.log(data2.setup);
    console.log(data2.punchline);
    console.log("------------------------------------------");
  }
  catch (e) {
    console.log("ERROR: ", e);
    console.log("------------------------------------------");
  }
}

getJoke()