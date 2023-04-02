const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

let users = [
  { name: 'John Doe', email: 'johndoe@example.com', age: 25, city: 'New York', profession: 'Developer' },
  { name: 'Jane Doe', email: 'janedoe@example.com', age: 30, city: 'San Francisco', profession: 'Designer' },
  { name: 'Bob Smith', email: 'bobsmith@example.com', age: 35, city: 'Los Angeles', profession: 'Manager' }
];

app.get('/', (req, res) => {
  res.render('index', { users: users });
});

app.get('/user/add', (req, res) => {
  res.render('add');
});

app.post('/user/add', (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    city: req.body.city,
    profession: req.body.profession
  };
  users.push(newUser);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
