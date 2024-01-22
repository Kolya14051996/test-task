import React, { useState } from "react";
import "../scss/main.scss";

import Preview from "./preview/Preview.jsx";
import Cards from "./cards/Cards.jsx";

import FormContainer from "./form/FormContainer.jsx";

const Main = () => {
	const [refreshUsersData, setRefreshUsersData] = useState(false);
	const handleRefreshData = (bool) => {
		setRefreshUsersData(bool);
	};
	return (
		<main>
			<Preview />
			<Cards refreshUsersData={refreshUsersData} />
			<FormContainer handleRefreshData={handleRefreshData} />
		</main>
	);
};

export default Main;
