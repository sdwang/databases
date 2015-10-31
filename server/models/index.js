var db = require('../db');
var messageID = 0;
var userID = 0;
var roomID = 0;
module.exports = {
  messages: {
    get: function () {
      var queryString = 'select messages.text, users.username, rooms.roomname from messages, users, rooms where messages.userID = users.id and messages.roomID = rooms.id;';
      this.messages;
      var self = this;
      db.connection.query(queryString,function(err,data){
            if(!err) {
                //console.log(data);
                self.messages = data;
            } 
            console.log(err);       
        });
      console.log('self.messages in get function: ' , self.messages);
      return self.messages;
    }, // a function which produces all the messages
    post: function (data) {
      //console.log(data)
      var text = data.text;
      var userName = data.username;
      var roomname = data.roomname;
      messageID++;
      userID++;
      roomID++;
      
      var queryStringUsers = 'insert into users (id, username) values("' + userID + '", "' + userName + '");'
      var queryStringRooms = 'insert into rooms (id, roomname) values("' + roomID + '", "' + roomname + '");'
      var queryStringMessages = 'insert into messages (id, text, roomID, userID) values("' + messageID + '", "' + text + '", (SELECT id from rooms WHERE id="' + roomID + '"), (SELECT id from users WHERE id="' + userID + '"));'
                  // db.connection.escape()
      db.connection.query(queryStringUsers, function(err,data){
        if(!err) {
          console.log("connected to DB");
        } 
        console.log(err)          
      });
      db.connection.query(queryStringRooms, function(err,data){
        if(!err) {
          console.log("connected to DB");
        } 
        console.log(err)          
      });
      db.connection.query(queryStringMessages, function(err,data){
        if(!err) {
          console.log("connected to DB");
        } 
        console.log(err)          
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

