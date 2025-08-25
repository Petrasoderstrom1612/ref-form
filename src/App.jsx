import React from 'react'

function App() {
  const [text, setText] = React.useState("")
  const [list, setList] = React.useState([])
  const focusHere = React.useRef(null)

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
    if (!text) {
      return;
    }
    focusHere.current.focus()
    console.log("submitted")
    setList(prevList => [...prevList, text])
    setText("")
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <h1>List</h1>
        <input
          type="text"
          value={text}
          onChange={handleText}
          ref={focusHere}
        ></input>
        <button>Add</button>
      </form>
      <ul>
        {list.map((item,i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
