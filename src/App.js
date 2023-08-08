import './App.css'
import { useState } from 'react';


function App() {
  const styleType = { textDecoration: 'line-through' };
  const [todo, setToDo] = useState('')
  const [ToDoS, setToDos] = useState([])
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" onChange={(e) => setToDo(e.target.value)} placeholder="🖊️ Add item..." value={todo} />
        <i onClick={() => {
          setToDos([...ToDoS, { id: Date.now(), text: todo, status: false }])
          setToDo('')
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {ToDoS.map((obj, index) => {
          return (<div key={index} className="todo">
            <div className="left">
              <input onChange={(e) => {
                setToDos(ToDoS.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))

              }} value={obj.status} type="checkbox" name="" id="" />
              <p style={obj.status ? styleType : null}>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={(e) => {
                setToDos(ToDoS.filter(obj3 => {
                  if (obj3.id !== obj.id) {
                    return obj3
                  }
                }))

              }} className="fas fa-times"></i>
            </div>
          </div>
          )

        })}

        {/* {ToDoS.map((obj, index) => {
          if (obj.status) {
            return <h1 key={index} >{obj.text}</h1>
          }
          return null;
        })} */}

      </div>
    </div>
  );
}

export default App;
