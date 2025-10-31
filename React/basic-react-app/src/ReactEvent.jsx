function singleClick() {
  console.log("Button clicked");
}
function doubleClick() {
  console.log("Button double clicked");
}
function formSubmit(event) {
  event.preventDefault();
  console.log("Form submitted");
}

let styles = { margin: "10px" }

export default function ReactEvent() {
  return (
    <div style={styles}>
      <button onClick={singleClick} onDoubleClick={doubleClick}>Single/Double click me</button>
      <form style={styles} onSubmit={formSubmit}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}