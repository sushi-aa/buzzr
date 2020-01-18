const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	const formResponse = {
		'name': 'Test',
		'question1': 'Yes',
		'question2': 'No',
	};

	


	res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))