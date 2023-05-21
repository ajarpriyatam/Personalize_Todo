import React, { Fragment, useEffect, useState } from "react";
import "./home.css";
import { createTodo,myTodos } from "../../actions/todoAction";
import TodoCard from "./todoCard.js";
import MetaData from "../main.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const todos = useSelector((state)=>state.myTodos.todos)
	console.log(todos,"qwertyuio")
	const { user, loading, isAuthenticated } = useSelector((state) => state.user);
	const [desc, setDesc] = useState("");
	useEffect(() => {
		dispatch(myTodos());
	}, [dispatch]);
	const createProductSubmitHandler = (e) => {
		if(isAuthenticated==false){
			navigate("/signup_signin")
		}
		e.preventDefault();
		const myForm = {
			"desc": desc
		};
		dispatch(createTodo(myForm));
		window.location.reload(false);
	  };
	  let x = "Login";
	  console.log(isAuthenticated,"fghj")
	  if(isAuthenticated ==true){
		x=user.name;
	  }
	return (
		<Fragment>
      <MetaData title="Personalize ToDo" />

			<header>
				<div className="logo">
					Todo List
				</div>
				<div className="menu" id="nav">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/signup_signin">{x}</a></li>
					</ul>
				</div>
			</header>
			<div className="header">
				<form id="new-task-form" encType="multipart/form-data"
					onSubmit={createProductSubmitHandler}>
					<input
						type="text"
						name="new-task-input"
						id="new-task-input"
						onChange={(e) => setDesc(e.target.value)}
						placeholder="What do you have planned?" />
					<input
						type="submit"
						id="new-task-submit"
						value="Add task" />
				</form>
			</div>
			<main>
				<section class="task-list">
					<h2>Tasks</h2>

					<div id="tasks">

						{todos &&
							todos.map((todo) => (
								<TodoCard todo={todo} />
							))}
					</div>
				</section>
			</main>
		</Fragment>
	);
};
export default Home;