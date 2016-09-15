let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.post('/make-payment', (req, res) => {
	res.json(req.body);
});

app.listen(PORT, () => {
	console.log('listen on port ' + PORT);
});