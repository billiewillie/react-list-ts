import axios from "axios";
import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import List from "./components/List";
import { IUser, ITodo } from "./types/types";

function App() {
	const [users, setUsers] = useState<IUser[]>([]);
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchUsers();
		fetchTodos();
	}, []);

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
			setUsers(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
			setTodos(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='App'>
			<EventsExample />
			<Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width='200px' height='200px'>
				<button>button</button>
			</Card>
			<List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} />
			<List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />
		</div>
	);
}

export default App;
