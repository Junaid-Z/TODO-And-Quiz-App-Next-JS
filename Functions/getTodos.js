/**
 * 
 * @param {Function} setTodos
 * @param {Function} setLoading
 * @returns {Function} Function used to set the todo data from firebase
 */
const getTodos = (setTodos, setLoading) => {
	return (snapshot) => {
		setTodos(() => {
			if (snapshot.exists()) {
				setLoading(false)
				let todos = [];
				let data = snapshot.val()
				Object.values(data).map((todo) => {
					todos.push({
						text: todo.value,
						newValue: "",
						confirmed: true,
						key: todo.key
					});
				})
				console.log(todos)
				return todos;
			}
			else {
				setLoading(false)
				console.log("Network Error Ocurred");
				return [];
			};
		});
	}
}

export default getTodos;