import db from '../config/db';
import express from 'express';
import routes from './routes';

const app: express.Application = express();

db.connect();
app.use(routes);

app.listen(3000, 'localhost', function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});

require('./test')
export default app;
