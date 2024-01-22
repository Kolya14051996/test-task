import React, { useState } from "react";

import photoCover from "../../img/photo-cover.svg";
import PhotoCover from "../photoCover/PhotoCover";
import Tooltip from "../tooltip/Tooltip";

import { formatPhone } from "../../utils/helpers/helpers";

const Card = ({ photo, name, position, email, phone }) => {
	const [img, setImg] = useState(photo);

	return (
		<div className="card">
			<PhotoCover
				className="card__photo"
				src={img}
				alt="Avatar"
				onError={() => {
					setImg(photoCover);
				}}
			/>

			<Tooltip text={name}>
				<p className="card__name">{name}</p>{" "}
			</Tooltip>
			<div className="card__info">
				<p className="card__position">{position}</p>
				<Tooltip text={email}>
					<a href={`mailto:${email}`} className="card__email">
						{email}
					</a>
				</Tooltip>
				<p className="card__phone">{formatPhone(phone)}</p>
			</div>
		</div>
	);
};

export default Card;
