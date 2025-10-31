import { useState } from "react";

function init() {
  console.log("Initialized")
  return Math.random()
}

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicked, setClicked] = useState(init);

  let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicked((prev) => {
      return prev + 1
    });
  }
  let btnStyle = { color: "red" }

  return (
    <div>
      <p onClick={toggleLike}>
        {isLiked ? <i className="fa-solid fa-heart" style={btnStyle}></i> : <i className="fa-regular fa-heart"></i>}
      </p>
      <h5>Clicked {clicked} times</h5>
    </div>
  )
}