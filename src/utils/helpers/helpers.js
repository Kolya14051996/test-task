export const formatPhone = (phone) => {
	const formatted = phone.replace(
		/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
		"$1 ($2) $3 $4 $5"
	);
	return formatted;
};

export const createFormData = (data) => {
	const formData = new FormData();
	for (const key in data) {
		if (data.hasOwnProperty(key)) {
			formData.append(key, data[key]);
		}
	}
	return formData;
};

export const validationFormData = (data) => {
	return !(
		/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email) &&
		/^[a-zA-Z -]{2,60}$/.test(data.name) &&
		/^\+380\d{9}$/.test(data.phone) &&
		data.position_id &&
		data.photo.name
	);
};

export const displayedUsers = (arr, bool) => {
	return bool ? arr : arr.slice(0, 6);
};

export const validateFile = (selectedFile, imageFormatPatter, maxSize) => {
	const isImagePatternValid = imageFormatPatter.test(selectedFile.name);
	const isFileSizeValid = selectedFile.size <= maxSize;

	return isImagePatternValid && isFileSizeValid;
};
