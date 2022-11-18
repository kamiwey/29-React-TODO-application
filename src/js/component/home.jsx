import React, { useState } from "react";

//create your first component
export function Home() {
	
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const [mouseHover, setMouseHover] = useState(false);

	
	const keyPress = e => {
		
		if (e.key === "Enter" && inputValue !== "") {
			e.preventDefault();
			
			const newTask = {
				id: new Date().getTime(),
				description: inputValue
			};
			
			setTodos([...todos].concat(newTask));
			
			setInputValue("");
		} else if (e.key === "Enter" && inputValue == "") {
			alert("The input cannot be empty");
		}
	};

	const GetTaskList = () => {
		
		return todos.map(inputValue => (
			<li
				key={inputValue.id}
				className="list-group-item"
				onMouseEnter={() => setMouseHover(inputValue.id)}>
				<p className="d-inline-block text-secondary ml-4 fs-3 align-middle ">
					-{inputValue.description}
				</p>
				{inputValue.id == mouseHover ? (
					<button
						type="button"
						className="delete btn text-muted"
						onClick={() => DeleteTodo(inputValue.id)}>
						<i className="fa-regular fa-trash-can"></i>
					</button>
				) : null}
			</li>
		));
	};

	
	const DeleteTodo = id => {
		const updateTaskList = [...todos].filter(inputValue => inputValue.id !== id);
		setTodos(updateTaskList);
	};

	
	return (
		<div className="container">
			<h1 className="title text-muted text-center">Todos</h1>
			<div className="tasker">
			<input
				type="text"
				placeholder="Type a new inputValue"
				className="tasker2 text-muted"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyPress={e => keyPress(e)}
			>

			</input>
			</div>
			<ul className="list-group">
				{GetTaskList()}
				<div>
					<label htmlFor="list-group-item">
						<p className="text-muted ml-5 mt-2">
							{todos.length == 0
								? " No tasks, add a inputValue"
								: todos.length + " item left"}
						</p>
					</label>
				</div>
			</ul>
		</div>
	);
}
