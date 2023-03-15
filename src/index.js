const express = require('express');
const { allTalkersRouter } = require('./router/allTalkersRouter');
const { byIdTalkerRouter } = require('./router/byIdTalkerRouter');
const { loginTalkerRouter } = require('./router/loginTalkerRouter');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', allTalkersRouter);
app.use('/talker', byIdTalkerRouter);
app.use('/login', loginTalkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
