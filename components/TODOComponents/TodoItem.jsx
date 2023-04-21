import React from 'react'
import { updateData } from '@/Functions/firebaseFunctions';
import { deleteData } from '@/Functions/firebaseFunctions';
import todoStyles from '@/styles/Todo.module.css'

function TodoItem({ todo, setTodos, index }) {
	return (
		<div className={todoStyles.todoItem}>
			{
				todo.confirmed ?
					(<div className={todoStyles.todoText}>{todo.text}</div>) :
					(<input className={`${todoStyles.todoText} ${todoStyles.inp} ${todoStyles.rounded}`} value={todo.newValue} onChange={(e) => {
						setTodos((todos) => {
							todos[index].newValue = e.target.value;
							return [...todos]
						});
					}
					}></input>)
			}
			<div className={todoStyles.todoOptions}>
				{
					todo.confirmed ?
						(<button
							className={`${todoStyles.rounded} ${todoStyles.btn}`}
							onClick={(e) => {
								setTodos((todos) => {
									todos[index].confirmed = false;
									todos[index].newValue = todo.text;
									return [...todos];
								});
							}
							}>Edit
						</button>) :
						(
							<button
								className={`${todoStyles.rounded} ${todoStyles.btn}`}
								onClick={() => {
									setTodos((todos) => {
										todos[index].text = todos[index].newValue;
										todos[index].confirmed = true;
										updateData(`/TODOS/${todo.key}`, { value: todos[index].text })
										return [...todos]
									});
								}
								}>Update</button>
						)
				}
				{
					todo.confirmed
						?
						(<button
							className={`${todoStyles.rounded} ${todoStyles.btn}`}
							onClick={() => {
								deleteData(`/TODOS/${todo.key}`)
							}
							}>Delete</button>) :
						(<button
							className={`${todoStyles.rounded} ${todoStyles.btn}`}
							onClick={() => {
								setTodos((todos) => {
									todos[index].confirmed = true;
									todos[index].newValue = "";
									return [...todos]
								});
							}
							}>Cancel</button>)
				}
			</div>
		</div >
	)
}

export default TodoItem