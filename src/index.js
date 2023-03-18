const express = require('express');
const { getTalkerRouter } = require('./router/getTalkerRouter');
const { getByIdTalkerRouter } = require('./router/getByIdTalkerRouter');
const { editTalkerRouter } = require('./router/editTalkerRouter');
const { loginTalkerRouter } = require('./router/loginTalkerRouter');
const { newTalkerRouter } = require('./router/newTalkerRouter');
const { deleteTalkerRouter } = require('./router/deleteTalkerRouter');
const { searchTalkerRouter } = require('./router/searchTalkerRouter');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker/search', searchTalkerRouter);
app.use('/talker', getTalkerRouter);
app.use('/talker', getByIdTalkerRouter);
app.use('/login', loginTalkerRouter);
app.use('/talker', newTalkerRouter);
app.use('/talker', editTalkerRouter);
app.use('/talker', deleteTalkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
