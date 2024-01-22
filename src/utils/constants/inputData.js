export const inputsData = [
	{
		name: 'name',
		type: 'text',
		pattern: /^[a-zA-Z -]{2,60}$/,
		placeholder: 'Enter your name',
		helper: 'Joe Black',
		maxLength: 60
	},
	{
		name: 'email',
		type: 'email',
		pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
		placeholder: 'Enter your email',
		helper: 'example@gmail.com'
	},
	{
		name: 'phone',
		type: 'tel',
		pattern: /^\+380\d{9}$/ ,
		placeholder: 'Enter your phone number',
		helper:'+38 (XXX) XXX - XX - XX',
		maxLength: 13
	},
];



