import Button from '../Button/Button';
import './JournalForm.css';
import { useState } from 'react';

function JournalForm( {data, setData} ) {

	const [inputData, setInputData] = useState('');
	// const [state, setState] = useState({
	// 	age: 31
	// });

	const inputChange = (event) =>{
		setInputData(event.target.value);
	};

	const addJournalItem = (e) =>{
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		const newData = {
			title: formProps.title,
			text: formProps.post,
			date: formProps.date
		};
		setData([newData, ...data]);
		e.preventDefault();
		console.log(formProps);
	};
	return (
		<form className='journal-form' action="" onSubmit={addJournalItem}>
			<input type="title" name='title' />
			<input type="date" name='date'/>
			<input type="text" name='tag' value={inputData} onChange={inputChange}/>
			<textarea name="post" id="" cols={30} rows={10}></textarea>
			<Button text="Сохранить" onClick={()=>{console.log('212');}}/>
		</form>

	);
}



export default JournalForm;
 