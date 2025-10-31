import { useState } from "react"
import Form from "./Form"
import './Comment.css'
export default function () {

  let [comments, setComments] = useState([])

  let addNewComment = (comment) => {
    setComments((c) => [...c, comment])
  }

  return (
    <>
      <div>
        {comments.length > 0 ? <h3>All Comments</h3> : <h3>No Comments Yet</h3>}
        {comments.map((comment, idx) => {
          return <div className="comment" key={idx}>
            <span>{comment.username}</span> <br />
            <span>{comment.remarks}</span><br />
            <span>{comment.rating}</span>
          </div>
        })}
        <hr />
        <Form addNewComment={addNewComment}></Form>
      </div></>
  )
}