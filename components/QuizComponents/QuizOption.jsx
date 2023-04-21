import React from 'react'
import styles from '@/styles/QuizCard.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext } from 'react';
import { QuizAppContext } from '@/pages/quiz';

const QuizOption = ({ answer, index, isCorrect }) => {
    let { selectedOption, setSelectedOption, setCurrentQuestion, setMarks } = useContext(QuizAppContext)
    return (
        <div
            onClick={() => {
                if (selectedOption === -1) {
                    if (isCorrect) {
                        setMarks((prev) => ++prev)
                    }
                    setSelectedOption(index)
                    setTimeout(() => {
                        setCurrentQuestion((prev) => ++prev)
                        setSelectedOption(-1);
                    }, 1500)
                }
            }}
            className={`${styles.option} ${isCorrect ?
                selectedOption !== -1 ? styles.correct : ""
                : selectedOption === index ? styles.wrong : ""}`}>
            <div>
                {index + 1}. {answer}
            </div>
            {
                isCorrect ?
                    selectedOption !== -1 ?
                        <CheckCircleIcon className={styles.icon} />
                        : <></>
                    :
                    selectedOption === index ?
                        <CancelIcon className={styles.icon} />
                        : <></>
            }
        </div>
    )
}

export default QuizOption