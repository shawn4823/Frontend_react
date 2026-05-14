import './App.css'
import { useState } from 'react'
import ScoresTable from './components/ScoresTable'

const intialscores =[
  { 이름: "john",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "Peter",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "Susan",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "sue",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  
]

const style = {
  width:"500px",
  height:"300px",
  display: "flex",
  flexDirection : "column",
  justifyContent: "center",
  alignItems:"center",
}



const initialInfo ={
  이름: "",
  국어: null,
  영어: null,
  수학: null,
  과학: null,
}

function App() {
  const [info, setInfo] = useState(initialInfo);
  const [scores, setScores] = useState(intialscores);
  const handleChange = (event) => {
    const {name, value} = event.target;
    setInfo((prev) => (
      {...prev, [name]: value}
    ))
    console.log(event.target.name)
    //타이핑 치는 값이 밸류로 들어감
  }
const handleSubmit = (event) =>{
  event.preventDefault();
 setScores((prev) => [...prev, info])


}

  return (
<>

    <ScoresTable scores={scores}/>

    <form onSubmit={handleSubmit}>
      <div>이름: 
      <input 
      type="text" 
      name="이름" 
      value={info.이름}
      onChange={handleChange}
      />
      </div>
      <div>국어: 
        <input 
        type="number" 
        name="국어" 
        value={info.국어}
         onChange={handleChange}
         />
         </div>
      <div>영어: 
        <input 
        type="number" 
        name="영어" 
        value={info.영어} 
        onChange={handleChange}
        />
        </div>
      <div>수학: 
        <input 
        type="number" 
        name="수학" 
        value={info.수학} 
        onChange={handleChange}
        />
        </div>
      <div>과학: 
        <input 
        type="number" 
        name="과학" 
        value={info.과학} 
        onChange={handleChange}
        />
      </div>
     <button>제출</button>
    </form>


</>
  )
}

export default App
