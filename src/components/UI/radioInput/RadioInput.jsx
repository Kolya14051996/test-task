import React from "react";


const RadioInput = ({ value, text, ...other }) => {
	return (
		<div className="form__radio">
			<input id={value} type="radio" value={value} {...other} />
			<label htmlFor={value}>{text}</label>
		</div>
	);
};

export default RadioInput;
