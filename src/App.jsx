import React from 'react'

function App() {
  const [text, setText] = React.useState("")
  const [list, setList] = React.useState(["1", "2"])

  const handleForm = (e) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <h1>List</h1>
        <input
          value={text}
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
