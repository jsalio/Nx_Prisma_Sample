import { hello, UseCaseCreateUser, UseCaseGetAllUsers } from '@app/core';
import { User } from '@app/models';
import express from 'express';
import expressOasGenerator from 'express-oas-generator'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
expressOasGenerator.init(app, {});


app.get('/', (req, res) => {
  res.send({ message: hello() });
});
app.get('/user/create', async (req, res) => {
  const user: User = {
    name: 'jorel12',
    email: 'jorel1239@mail.com',
    password: '123456',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  const p = UseCaseCreateUser(user);
  p.validate();
  try {
    await p.commit;
    res.send({ message: 'user created' });
  }
  catch (err) {
    res.send({ message: err });
  }
});

/**
 *  get all users
 * 
 */
app.get('/users', async (req, res) => {
  const { validate, commit } = UseCaseGetAllUsers();
  validate();
  try {
    const users = await commit;
    res.send({ users });
  }
  catch (err) {
    res.send({ message: err });
  }
});


app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

