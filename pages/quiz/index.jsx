import QuizCard from '@/components/QuizComponents/QuizCard'
import useQuizHooks from '@/hooks/useQuizHooks'
import Head from 'next/head'
import React from 'react'
import { useState } from 'react'
import styles from '@/styles/QuizCard.module.css'
import ResultCard from '@/components/QuizComponents/ResultCard'
import { getData, setData } from '@/Functions/firebaseFunctions';
import { useEffect } from 'react'
// import { questions as myQuestions } from './data'
import loaderStyles from '@/styles/Loader.module.css'

export const QuizAppContext = useQuizHooks()

const QuizApp = () => {
	let [selectedOption, setSelectedOption] = useState(-1);
	let [currentQuestion, setCurrentQuestion] = useState(0);
	let [marks, setMarks] = useState(0);
	let [questions, setQuestions] = useState([]);
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		getData('QUIZ').then((snapshot) => {
			if (snapshot.exists()) {
				console.log(Object.values(snapshot.val()))
				setQuestions(Object.values(snapshot.val()))
				setLoading(false)
			}
			else {
				setQuestions([])
				setLoading(false)
			}
		})
	}, [])
	return (
		<QuizAppContext.Provider value={{ selectedOption, setSelectedOption, currentQuestion, setCurrentQuestion, marks, setMarks }}>
			<div className={styles.quizApp}>
				<Head>
					<title>Quiz App</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
				</Head>
				{!loading ?
					currentQuestion < questions.length ?
						<QuizCard card={questions[currentQuestion]} /> :
						<ResultCard questions={questions} />
					:
					<span className={loaderStyles.loader}></span>
				}
			</div>
		</QuizAppContext.Provider>
	)
}

export default QuizApp