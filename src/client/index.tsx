import React from "react";
import ReactDOM from "react-dom/client";
import "./public/App.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const App = () => {
	return (<h1>Hello, World!</h1>);
}

root.render(<App />);