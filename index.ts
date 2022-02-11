import express from "express";
import cors from "cors";
import db from "./models";
import route from "./routes";
import seeders from "./seeder";


db.sequelize.authenticate().then(async () => await db.sequelize.sync({ force: false })).catch((err) => console.log("Connection Error", err));

const app = express();

// seeders().then((status) => console.log(status)).catch((error) => console.log(error));

const { PORT } = require('./config');

app.use(cors());

app.use(route);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));