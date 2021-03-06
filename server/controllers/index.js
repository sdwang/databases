var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    },
    options: function(req, res) {
      //console.log("responding to options request in index.js-controller")
      sendResponse(res, null, 204);
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    },
    options: function(req, res) {
      //console.log("responding to options request in index.js-controller")
      sendResponse(res, null, 204);
    } // a function which handles posting a message to the database
  }
  };

// var models = require('../models');

// var headers = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept",
//   "access-control-max-age": 10, // Seconds.
//   'Content-Type': "application/json"
// };

// var sendResponse = function(response, data, statusCode) {
//   console.log("We are inside of send response, this is the data: ", data);
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// var dummyMessage =
//   {
//     username: 'dummy',
//     text: 'this is a dummy message',
//     roomname: 'lobby'
//   };

// module.exports = {
//   messages: {
//     get: function (req, res) {
//       //console.log("Now we are in GET")
//       //message = models.messages.get()
//       var messages = models.messages.get();
//       //messages.push(dummyMessage);
//       //console.log("in get....",messages);
//       sendResponse(res, {results: messages}, 200);
//     }, // a function which handles a get request for all messages
    
//     post: function (req, res) {
//       models.messages.post(req.body)
//       // var data = "";
//       // req.on('data', function(data) {
//       //   console.log("this is data....",data)
//       // });
//       // req.on('end', function() {
//       //   console.log(JSON.parse(data));
//       // });
//       sendResponse(res, {objectId: 1}, 201)
//       // collectData(req, function(data) {
//       //   console.log(data);
//       //   messages.push(data);
//       //   //sendResponse(res, {objectId: 1}, 201)
//       // });
//     },

//     options: function(req, res) {
//       //console.log("responding to options request in index.js-controller")
//       sendResponse(res, null, 204);
//     } // a function which handles posting a message to the database
//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       //console.log("Now we are in GET")
//       sendResponse(res, {results: messages}, 200);
//     },

//     post: function (req, res) {
//         sendResponse(res, {objectId: 1}, 201)
//     },

//     options: function(req, res) {
//       //console.log("responding to options request in index.js-controller")
//       sendResponse(res, null, 204);
//     }
//   } //
// };