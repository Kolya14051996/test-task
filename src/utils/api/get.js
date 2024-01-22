export const getTotalUsers = async () => {
	try {
		const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users`;
		const result = await fetch(url);
		const { total_users: totalUsers } = await result.json();
		return totalUsers;
	} catch (error) {
		console.error(error);
	}
};

export const getAllUsers = async (totalUsers) => {
	try {
		const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${totalUsers}`;
		const result = await fetch(url);
		const { users } = await result.json();
		return users;
	} catch (error) {
		console.error(error);
	}
};

export const getTokenForForm = async () => {
	try {
		const url = "https://frontend-test-assignment-api.abz.agency/api/v1/token";
		const result = await fetch(url);
		const { token } = await result.json();

		return token;
	} catch (error) {
		console.error(error);
	}
};

export const getPositionForForm = async () => {
	try {
		const url =
			"https://frontend-test-assignment-api.abz.agency/api/v1/positions";

		const result = await fetch(url);
		const { positions: allPositions } = await result.json();
		return allPositions;
	} catch (error) {
		console.error("error:", error);
	}
};
