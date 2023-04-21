import { Fragment, useEffect, useState } from 'react';
import { setData, subscribe, getData, deleteData } from '@/Functions/firebaseFunctions';
import todo from '../../styles/Todo.module.css'
import getTodos from '@/Functions/getTodos';
import TodoItem from '@/components/TODOComponents/TodoItem';
import Head from 'next/head';
import Loader from '@/components/Loader';
function TodoApp() {
	let [todos, setTodos] = useState([]);
	let [loading, setLoading] = useState(true);
	let [text, setText] = useState("");
	useEffect(() => {
		subscribe('/TODOS', getTodos(setTodos, setLoading))
	}, [])
	return (
		<Fragment>
			<div className={todo.page}>
				<Head>
					<title>TODO</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
				</Head>
				<div className={todo.container}>
					<h1 className={todo.title}>TODOS</h1>
					<div className={todo.todoList}>
						{
							loading ? <div className={todo.loader}><Loader /></div> :
								todos.map((todo, i) => {
									return (
										<TodoItem key={i} todo={todo} setTodos={setTodos} index={i} />
									);
								})
						}
					</div>
					<form className={todo.buttonHolder} onSubmit={
						(e) => {
							if (text) {
								setData('/TODOS', { value: text })
								setText("");
							}
							e.preventDefault();
						}
					}>
						<input className={`${todo.inp} ${todo.rounded}`} type="text" onChange={(e) => { setText(e.target.value) }} value={text} />
						<div>
							<button className={`${todo.btn} ${todo.rounded}`}>Add !</button>
							<button className={`${todo.btn} ${todo.rounded}`} onClick={(e) => {
								deleteData('/TODOS')
								e.preventDefault();
							}}>Delete All !</button>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
}

export default TodoApp;
