import { useState } from 'react'
import './App.css'
import big_questionnaire from './big_questionnaire.js'
import { Choice } from './Choice'

function App() {
	const arrayQuestion = big_questionnaire[0].questionAndChoicesAndAnswers

	const query = arrayQuestion[0]

	const prompt = query.question.questionInstructions
	const choices = query.choices
	const bold = query.question.questionInstructionTitle

	console.log(bold)

  return (
    <div className="App">
			<p>{bold}</p>
			<h3>{prompt}</h3>
			{choices.map(choice => {
				return <Choice data={choice}/>
			})}

    </div>
  )
}



export default App
