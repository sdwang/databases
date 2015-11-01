var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = "select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc";
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = "insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)";
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function (callback) {
      // fetch all users
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      // create a user
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
  };

// var db = require('../db');
// var messageID = 0;
// var userID = 0;
// var roomID = 0;
// module.exports = {
//   messages: {
//     get: function () {
//       var queryString = 'select messages.text, users.username, rooms.roomname from messages, users, rooms where messages.userID = users.id and messages.roomID = rooms.id;';
//       var messages;
//       var self = this;
//       db.connection.query(queryString,function(err,data){
//             if(!err) {
//                 //console.log(data);
//                 self.messages = data;
//                 //console.log("inside DB connection .....", data)
//             } 
//             console.log(err);       
//         });
//       //console.log(self.messages);
//       return self.messages;
//     }, // a function which produces all the messages
//     post: function (data) {
//       //console.log(data)
//       var text = data.text;
//       var userName = data.username;
//       var roomname = data.roomname;
//       messageID++;
//       userID++;
//       roomID++;
      
//       var queryStringUsers = 'insert into users (id, username) values("' + userID + '", "' + userName + '");'
//       var queryStringRooms = 'insert into rooms (id, roomname) values("' + roomID + '", "' + roomname + '");'
//       var queryStringMessages = 'insert into messages (id, text, roomID, userID) values("' + messageID + '", "' + text + '", (SELECT id from rooms WHERE id="' + roomID + '"), (SELECT id from users WHERE id="' + userID + '"));'
//                   // db.connection.escape()
//       db.connection.query(queryStringUsers, function(err,data){
//         if(!err) {
//           console.log("connected to DB");
//         } 
//         console.log(err)          
//       });
//       db.connection.query(queryStringRooms, function(err,data){
//         if(!err) {
//           console.log("connected to DB");
//         } 
//         console.log(err)          
//       });
//       db.connection.query(queryStringMessages, function(err,data){
//         if(!err) {
//           console.log("connected to DB");
//         } 
//         console.log(err)          
//       });
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function () {},
//     post: function () {}
//   }
// };

