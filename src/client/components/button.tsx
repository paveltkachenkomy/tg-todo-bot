import React from "react";
import "../public/App.css";

type PropsButton = {
	text: string;
}

const ButtonComponent = (props: PropsButton) => {
	return (
		<button>{props.text}</button>
	)
}

export default ButtonComponent;