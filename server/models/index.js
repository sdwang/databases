var db = require('../db');

module.exports = {
  messages: {
    get: function () {

      db.connection.query('SELECT * from messages',function(err,data){
            // if(!err) {
            //     console.log(data, "connected to DB");
            // } 
            // console.log(err);
            // db.connection.end()       
        });
    }, // a function which produces all the messages
    post: function (data) {
      console.log(data)
      db.connection.query("*",function(err,data){
            if(!err) {
                console.log("connected to DB");
            } 
            console.log("errors")          
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

