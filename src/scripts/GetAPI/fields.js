const GetFields = () =>
	fetch('http://localhost:8080/fields')
		.then(data => data.json());

export default GetFields;
