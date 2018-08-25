// require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  usersCtrl = require("./usersCtrl");

const app = express();
app.use(bodyParser.json());

// 1. 'GET' /api/users
app.get('/api/users', usersCtrl.getUsers);

// 2. 'GET' /api/users/ + userId
app.get('/api/users/:id', usersCtrl.getUserbyID);

// 3. 'GET' /api/admins
app.get('/api/admins', usersCtrl.isAdmins);

// 4. 'GET' /api/nonadmins
app.get('/api/nonadmins', usersCtrl.nonAdmin);

// 5. 'GET' /api/user_type/ + userType
app.get('/api/user_type/:type', usersCtrl.user_type);

// 6. 'PUT' /api/users/ + userId
app.put('/api/users/:userId', usersCtrl.putUser);

// 7. 'POST' /api/users
app.post('/api/users', usersCtrl.postUser);

// 8.'DELETE' /api/users/ + userId
app.delete('/api/users/:userId', usersCtrl.deleteUser)











const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Glistening on port: ${PORT}`);
});
