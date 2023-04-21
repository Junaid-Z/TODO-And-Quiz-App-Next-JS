import { createContext } from "react"

const useQuizHooks = () => {
	const quizAppContext = createContext(-1)
	return (
		quizAppContext
	)
}

export default useQuizHooks