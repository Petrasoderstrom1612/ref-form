import React from 'react'

function App() {
  const [text, setText] = React.useState("")
  const [list, setList] = React.useState([])
  const focusHere = React.useRef(null) //when accessing DOM, start with null

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleForm = (e) => {
    e.preventDefault()
    if (!text) {
      return;
    }
    focusHere.current.focus() // .focus() method is a method on DOM. I want the focus to be back on input as soon as I submit the form, without ref, the focus will stay on the button 
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
          ref={focusHere} //special prop, always written ref
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
