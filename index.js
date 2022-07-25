import express from 'express';
const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
