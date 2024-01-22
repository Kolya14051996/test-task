import React, { useState } from "react";


const Input = ({ name, value, helper, pattern, inputsHandler, ...other }) => {
	const [error, setError] = useState(false);

	const errorText = `Error text      ${helper ? ` - example: ${helper}` : ""}`;
	const errorColor = error && "red";

	const inputHandler = ({ target: { value } }) => {
		inputsHandler([name], value);
		setError(!pattern.test(value) && value.length !== 0);
	};

	return (
		<div>
			<input
				value={value}
				name={name}
				style={{ borderColor: errorColor }}
				className="input"
				onChange={inputHandler}
				{...other}
			/>
			<div className="input__helper" style={{ color: errorColor }}>
				{error ? errorText : helper}
			</div>
		</div>
	);
};

export default Input;
