import { QuizAppContext } from '@/pages/quiz'
import styles from '@/styles/QuizResultCard.module.css'
import { useContext } from 'react'

const ResultCard = ({ questions }) => {
	let { marks } = useContext(QuizAppContext)
	let percent = marks / (questions.length ? questions.length : 1) * 100
	return (
		<div className={styles.result}>
			<h1>{percent > 50 ? "Pass" : "Fail"}</h1>
			<h3>
				You obtained {marks}/{questions.length} marks
			</h3>
			<h4>
				Which is equal to {percent}%
			</h4>
		</div >
	)
}

export default ResultCard