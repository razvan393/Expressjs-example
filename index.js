import express from 'express';
import usersRouter from './src/routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use("/users", usersRouter)

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
