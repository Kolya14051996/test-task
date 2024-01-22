import React, { useEffect, useState } from "react";

import Input from "../../components/UI/input/Input.jsx";
import Button from "../../components/UI/button/Button.jsx";
import RadioInput from "../../components/UI/radioInput/RadioInput.jsx";
import FileInput from "../../components/UI/fileInput/FileInput.jsx";

import { inputsData } from "../../utils/constants/inputData.js";
import { initialData } from "../../utils/constants/initialData.js";
import {
	commonText,
	radioTitle,
	textButtons,
} from "../../utils/constants/text.js";
import { getPositionForForm, getTokenForForm } from "../../utils/api/get.js";
import {
	createFormData,
	validationFormData,
} from "../../utils/helpers/helpers.js";
import { POST_URL, requestFormData } from "../../utils/api/post.js";

const Form = ({ handleLoading, handleSuccess }) => {
	const [positions, setPosition] = useState([]);
	const [token, setToken] = useState("");
	const [data, setData] = useState({
		...initialData,
	});

	useEffect(() => {
		const fetchPositionsAndToken = async () => {
			try {
				Promise.all([getPositionForForm(), getTokenForForm()]).then(
					([positions, token]) => {
						setPosition(positions);
						setToken(token);
					}
				);
			} catch (error) {
				console.error(error);
			}
		};
		fetchPositionsAndToken();
	}, []);

	const sendRegistration = async () => {
		try {
			handleLoading(true);
			const formData = createFormData(data);
			const result = await requestFormData(POST_URL, formData, token);

			handleSuccess(result.success);
		} catch (error) {
			console.error("Error:", error);
		} finally {
			handleLoading(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		sendRegistration();
	};

	const inputsHandler = (name, value) => {
		setData({ ...data, [name]: value });
	};

	const handleRadio = (event) => {
		setData({
			...data,
			position_id: +event.target.value,
		});
	};

	const fileHandler = (file) => {
		setData({ ...data, photo: file });
	};

	return (
		<form action="POST" className="form" onSubmit={handleSubmit}>
			<h1 className="form__title">{commonText.h1Post}</h1>
			<div className="form__wrapper">
				<div className="form__info">
					{inputsData.map((input) => {
						return (
							<Input
								key={input.name}
								name={input.name}
								type={input.type}
								helper={input.helper}
								placeholder={input.placeholder}
								pattern={input.pattern}
								inputsHandler={inputsHandler}
								value={data[input.name]}
								required={true}
								maxLength={input.maxLength}
							/>
						);
					})}
				</div>
				<div className="radio__wrapper">
					<p className="radio__title">{radioTitle}</p>
					{positions.map((position, index) => {
						return (
							<RadioInput
								key={index}
								value={position.id}
								name={"position"}
								onChange={handleRadio}
								checked={data.position_id === position.id}
								required={true}
								text={position.name}
							/>
						);
					})}
				</div>
				<FileInput
					value={data.photo}
					onFileSelect={fileHandler}
					patternImgFormat={/\.(jpg|jpeg)$/i}
				/>
			</div>
			<Button isDisabled={validationFormData(data)}>
				{textButtons.signUp}
			</Button>
		</form>
	);
};

export default Form;
