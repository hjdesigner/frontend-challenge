const GetFields = () =>
	fetch('http://localhost:3000/fields')
		.then(data => data.json());

export default GetFields;
