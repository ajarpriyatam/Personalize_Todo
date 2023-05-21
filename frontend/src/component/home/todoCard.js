import React, { Fragment, useEffect} from "react";
import DoneIcon from '@mui/icons-material/Done';
import "./home.css";
import { deleteData, workDone, updateTodo } from '../../actions/todoAction';
import { useSelector, useDispatch } from "react-redux";

const Todocard = ({ todo }) => {
	const dispatch = useDispatch();
	const { isDeleted } = useSelector((state) => state.deleteTodo);
	const deleteDataHandler = (id) => {
		dispatch(deleteData(id));
		window.location.reload(false);
	};
	const updateDataHandler = (id) => {

		var desc = prompt("Enter a updated plan")
		const myForm = {
			"desc": desc,
		};
		console.log(id, myForm);
		dispatch(updateTodo(id,myForm));
		window.location.reload(false);
	};
	const WorkdoneHandler = (id) => {
		dispatch(workDone(id));
		window.location.reload(false);
	}
	useEffect(() => {
		if (isDeleted) {
			alert.success("Delete Successfully");
		}
	}, [isDeleted]);
	return (
		<>
			<div class="task">
				<div class="content">
					<input
						type="text"
						class="text"
						value={todo.desc}
						readonly />
				</div>

				<div class="actions">

					{todo.done ? (<span className="donespan"><DoneIcon /></span>) : (
						<button class="done" onClick={() => WorkdoneHandler(todo._id)}>Done</button>)}
					{todo.done ? ("") : (<button class="edit" onClick={() => updateDataHandler(todo._id)}>Edit</button>)}
					<button class="delete" onClick={() => deleteDataHandler(todo._id)}>Delete</button>
				</div>
			</div>
		</>
	)
}

export default Todocard;