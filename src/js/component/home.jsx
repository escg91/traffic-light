import React, {useState} from "react"; //1. importar el hook useState

const Home = () => {

   const [color1,setColor1]= useState("");
   const [color2,setColor2]= useState("");
   const [color3,setColor3]= useState("");


	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}else{
		setColor1("btn-danger")
		setColor2("btn-light")
		setColor3("btn-light")
	}
}

function encenderAmarillo() {

	if(color2 === "btn-warning"){
		setColor2("btn-light")
	}else{
	setColor2("btn-warning")
	setColor1("btn-light")
	setColor3("btn-light")
}
}

function encenderVerde() {

	if(color3 === "btn-success"){
		setColor3("btn-light")
	}else{
	setColor3("btn-success")
	setColor2("btn-light")
	setColor1("btn-light")
}
}

	return (
		<>
		<div class="container d-flex justify-content-center">
		<div className="bg-dark" style={{width:"7px", height:"200px"}}>
		</div>
		</div>
		<div class="container d-flex justify-content-center">		
		<div className="card text-center d-flex flex-column justify-content-center bg-dark">
			<button style={{height:"70px", width:"70px", borderRadius:"50%"}} className={"m-2 mt-3 border-danger btn "+color1} onClick={encenderRojo}></button>
			<button style={{height:"70px", width:"70px", borderRadius:"50%"}} className={"m-2 border-warning btn "+color2} onClick={encenderAmarillo}></button>
			<button style={{height:"70px", width:"70px", borderRadius:"50%"}} className={"m-2 mb-3 btn border-success "+color3} onClick={encenderVerde}></button>
		</div>
		</div>
		</>
	);

};

export default Home;


