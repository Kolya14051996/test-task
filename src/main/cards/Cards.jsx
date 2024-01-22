import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Button from "../../components/UI/button/Button";

import { commonText } from "../../utils/constants/text";
import { textButtons } from "../../utils/constants/text";
import { getTotalUsers, getAllUsers } from "../../utils/api/get";
import { displayedUsers } from "../../utils/helpers/helpers";

const Cards = ({ refreshUsersData }) => {
	const [users, setUsers] = useState([]);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const fetchUsers = async () => {
			getTotalUsers()
				.then((totalUsers) => {
					return getAllUsers(totalUsers);
				})
				.then((allUsers) => {
					setUsers(allUsers);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		setShowAll(false);
		fetchUsers();
	}, [refreshUsersData]);

	return (
		<section className="cards">
			<div className="container">
				<div className="cards__wrapper">
					<h1 className="cards__title">{commonText.h1Get}</h1>
					<ul className="cards__list">
						{displayedUsers(users, showAll).map((user) => {
							return (
								<li>
									<Card
										key={user.id}
										photo={user.photo}
										name={user.name}
										position={user.position}
										email={user.email}
										phone={user.phone}
									/>
								</li>
							);
						})}
					</ul>
					{!showAll && (
						<Button onClick={() => setShowAll(true)}>
							{" "}
							{textButtons.showMore}
						</Button>
					)}
				</div>
			</div>
		</section>
	);
};

export default Cards;
