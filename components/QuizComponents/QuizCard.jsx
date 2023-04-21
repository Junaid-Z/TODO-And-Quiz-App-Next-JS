import React, { Fragment, useState } from 'react'
import styles from '@/styles/QuizCard.module.css'
import QuizOption from './QuizOption'


const QuizCard = ({ card }) => {
	let { question, answers } = card;
	return (
		<div className={styles.quizCard}>
			<div className={styles.question}>{question}</div>
			{
				answers.map((answer, index) => {
					return <QuizOption key={index} index={index} answer={answer.text} isCorrect={answer.isCorrect} />
				})
			}
		</div >
	)
}

export default QuizCard