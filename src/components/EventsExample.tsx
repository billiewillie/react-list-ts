import { FC, useState, ChangeEvent, MouseEvent } from "react";

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>("");

	const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		setValue(event.target.value);
	};

	const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
		console.log(value);
	};

	return (
		<div>
			<input value={value} onChange={changeHandler} type='text' />
			<button onClick={clickHandler}>button</button>
		</div>
	);
};

export default EventsExample;
