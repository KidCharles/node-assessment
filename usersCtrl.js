const userData = require("./userData.json");

module.exports = {
  getUsers: (req, res) => {
    if (req.query.favorites) {
      let arr = [];
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].favorites.includes(req.query.favorites)) {
          arr.push(userData[i]);
        }
      }
      res.status(200).send(arr);
    } else if (req.query.age) {
      let arr = [];
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].age < +req.query.age) {
          arr.push(userData[i]);
        }
      }
      res.status(200).send(arr);
    } else if (req.query.lastname) {
      let arr = [];
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].last_name === req.query.lastname) {
          arr.push(userData[i]);
        }
      }
      res.status(200).send(arr);
    } else if (req.query.email) {
      let arr = [];
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === req.query.email) {
          arr.push(userData[i]);
        }
      }
      res.status(200).send(arr);
    } else {
      res.status(200).send(userData);
    }
  },

  getUserbyID: (req, res) => {
    if (req.params.id <= 100) {
      var found = userData.find(element => {
        return element.id == req.params.id;
      });
      res.status(200).send(found);
    } else {
      res.status(404).json(null);
    }
  },

  isAdmins: (req, res) => {
    let admins = userData.filter(user => user.type === "admin");
    res.status(200).send(admins);
  },

  nonAdmin: (req, res) => {
    var nonAdmins = userData.filter(user => user.type !== "admin");
    res.status(200).send(nonAdmins);
  },

  user_type: (req, res) => {
    if (req.params.type === "user") {
      var userFind = userData.filter(user => {
        return user.type === "user";
      });
      res.status(200).send(userFind);
    } else if (req.params.type === "moderator") {
      var moderatorFind = userData.filter(moderator => {
        return moderator.type === "moderator";
      });
      res.status(200).send(moderatorFind);
    } else if (req.params.type === "admin") {
      var adminFind = userData.filter(admin => {
        return admin.type === "admin";
      });
      res.status(200).send(adminFind);
    }
  },

  putUser: (req, res) => {
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].id === +req.params.userId) {
        userData[i] = req.body;
        res.status(200).send(userData);
      }
    }
  },

  postUser: (req, res) => {
    let newId = userData.length + 1;
    let newUser = req.body;
    newUser.id = newId;
    userData.push(newUser);
    res.status(200).send(userData);
  },

  deleteUser: (req, res) => {
    // console.log("HIT");
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].id === +req.params.userId) {
        let userIndex = userData.indexOf(userData[i]);
        userData.splice(userIndex, 1);
        res.status(200).send(userData);
      }
    }
  }
};
