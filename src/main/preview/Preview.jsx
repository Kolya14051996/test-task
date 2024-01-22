import React from "react";

import Button from "../../components/UI/button/Button";

import { commonText } from "../../utils/constants/text";
import { textButtons } from "../../utils/constants/text";

const Preview = () => {
	return (
		<section className="preview">
			<div className="preview___content">
				<div className="container">
					<div className="preview__wrapper">
						<div className="preview__box">
							<div className="preview__text">
								<h1 className="preview__title">{commonText.assignment}</h1>
								<p className="preview__anons">{commonText.about}</p>
							</div>
							<Button>{textButtons.signUp}</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Preview;
