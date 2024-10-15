const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const app = require('./app');
const dbConfig = require('./config/dbConfig');

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => {
	console.log(`App listening to request on PORT ${PORT}.`);
});
