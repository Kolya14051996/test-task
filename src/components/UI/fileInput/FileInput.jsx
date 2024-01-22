import React, { useState } from "react";
import "./fileInput.scss";
import { validateFile } from "../../../utils/helpers/helpers";

const FileInput = ({ value, onFileSelect, patternImgFormat, ...others }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [nameFile, setNameFile] = useState("Upload your photo");
	const [error, setError] = useState(false);

	const opacityStyle = isChecked ? { opacity: 1 } : {};
	const maxSize = 5 * 1024 * 1024;

	const fileHandler = (e) => {
		const selectedFile = e?.target.files[0] || {};
		const valid = validateFile(selectedFile, patternImgFormat, maxSize);

		setIsChecked(valid);
		setError(!valid);

		const fileToSelect = valid ? selectedFile : "";

		onFileSelect(fileToSelect);
		setNameFile(selectedFile.name || "Upload your photo");
	};
	return (
		<div>
			<div className="form__photo">
				<input onChange={fileHandler} className="none" type="file" id="upload" {...others} />
				<label htmlFor="upload" className="upload__label">
					Upload
				</label>
				<p style={{ ...opacityStyle }}>{nameFile}</p>
				<input
					className="form__arrow"
					type="checkbox"
					readOnly
					checked={isChecked}
				/>
			</div>
			<div
				className="input__helper-file input__helper"
				style={{ color: error && "red" }}
			>
				{error ? "Invalid file: " : ""}
				.jpg, .jpeg, max size 5MB, min resolution 70x70px
			</div>
		</div>
	);
};

export default FileInput;
