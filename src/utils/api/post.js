export const POST_URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users`;

export const requestFormData = async (url, formData, token) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			body: formData,
			headers: {
				Token: token,
			},
		});

		if(!response.ok){
      throw new Error(`Request failed with status ${response.status}`)
    }
    return response.json()
	} catch (error) {
		console.error(error);
    throw error
	}
};

