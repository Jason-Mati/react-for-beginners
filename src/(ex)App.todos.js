// todo 만들기 앱 코드 기록 목적으로 남겨둠.
/* 
import { useState, useEffect } from "react";
// useEffect 는 특정한 코드를 딱 한 번만 실핼될 수 있도록 보호해줌

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write you to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {
          // map 함수는 기존 array를 가져와서 일괄 변형하는 역할을 함.
          toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;



*/
