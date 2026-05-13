import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'




const scores =[
  { 이름: "john",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "Peter",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "Susan",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "sue",국어: 90, 영어:90, 수학: 80, 과학: 90 },

]
// let numbers = [ 0, 1, 2, 3, 4]


// let newScores = numbers.map(item=>{return item*2})
// console.log(newScores)









// let newScores = []
// for(let i = 0; i < numbers.length; i++){
//   newScores.push(numbers[i]*2)
// }


// console.log(newScores)


function App() {
  

  return (
    
    <table>
      
      {console.log(newScores)}
    <tr>  
      <th>이름</th>
      <th>국어</th>
      <th>영어</th>
      <th>수학</th>
      <th>과학</th>
    </tr>
    {[0,1,2,3].map(idx => 
    (
    <tr>
    <td>{scores[idx].이름}</td>
    <td>{scores[idx].국어}</td>
    <td>{scores[idx].영어}</td> 
    <td>{scores[idx].수학}</td>
    <td>{scores[idx].과학}</td>
    </tr>
    )
  )}
  
    </table>
  )
}

export default App
