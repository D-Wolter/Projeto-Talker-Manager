const express = require('express');
const router = require('./router/index');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker/db', router.getAllTalkerDbRouter);
app.use('/talker/search', router.searchTalkerRouter);
app.use('/talker', router.getTalkerRouter);
app.use('/talker', router.getByIdTalkerRouter);
app.use('/login', router.loginTalkerRouter);
app.use('/talker', router.newTalkerRouter);
app.use('/talker', router.editTalkerRouter);
app.use('/talker', router.deleteTalkerRouter);
app.use('/talker/rate', router.editRateByIdRouter);

app.listen(PORT, () => {
  console.log('Online');
});
