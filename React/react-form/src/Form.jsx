import { useState } from "react"
import { useFormik } from 'formik'

export default function Form({ addNewComment }) {

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty!';
    }

    if (!values.remarks) {
      errors.remarks = 'Remarks cannot be empty!';
    }

    if (!values.rating) {
      errors.rating = 'Rating cannot be empty!';
    } else if (values.rating < 1 || values.rating > 5) {
      errors.rating = 'Rating must be between 1 and 5';
    }

    return errors;
  };

  // let [formData, setFormData] = useState({ username: "", remarks: "", rating: 5 });
  const formik = useFormik({
    initialValues: {
      username: '',
      remarks: '',
      rating: 5
    },
    validate,
    onSubmit: values => {
      addNewComment(values)
    },
  });
  let [isValid, setIsvalid] = useState(true)

  // let handleInputChange = (event) => {
  //   setFormData((f) => {
  //     return { ...f, [event.target.name]: event.target.value }
  //   })
  // }

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!formData.username || !formData.remarks) {
  //     setIsvalid(false)
  //     return
  //   }
  //   addNewComment(formData)
  //   setFormData(
  //     { username: "", remarks: "", rating: 5 }
  //   )
  // }

  return (

    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="textInp">Username:</label> &nbsp;
      <input type="text" id="textInp" name="username" placeholder="Enter Username" value={formik.values.username} onChange={formik.handleChange} />
      <br />
      {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      <br />
      <label htmlFor="remarks">Add remarks:</label> &nbsp;
      <textarea name="remarks" id="remarks" value={formik.values.remarks} onChange={formik.handleChange}></textarea>
      <br />
       {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
      <br />
      <label htmlFor="rating">Add rating:</label> &nbsp;
      <input type="number" name="rating" id="rating" min={1} max={5} value={formik.values.rating} onChange={formik.handleChange} />
      <br />
      {!isValid && <h4 style={{ color: "red" }}>Fillup the empty fields</h4>}
      <br />
      <button type="submit">Add Comment</button>
    </form>
  )
}