import React from 'react'
const scores =[
  { 이름: "john",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "Peter",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "Susan",국어: 90, 영어:90, 수학: 80, 과학: 90 },
  { 이름: "sue",국어: 90, 영어:90, 수학: 80, 과학: 90 },
]
function ScoresTable({scores}) {
  return (
    
      <table>
      
    <tr>  
      {
        Object.keys(scores[0]).map(key=>(
          <th>{key}</th>
        ))        // scores[0]의 키값들을 배열로 반환
      }
      
    </tr>
    {scores.map(item => 
    (
    <tr>
    {Object.values(item).map(
      (value) => (<td>{value}</td>)
    )
    }
    </tr>
    )
  )}
  
    </table>
    
  )
}

export default ScoresTable
