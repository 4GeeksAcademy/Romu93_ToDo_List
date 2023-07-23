import React from "react";
import { TheToDoList } from "./ToDolist";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className= "container ">		
			<TheToDoList/>				
		</div>
	);
};

export default Home;
