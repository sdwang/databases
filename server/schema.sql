
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE DATABASE chat;

-- USE chat;

-- CREATE TABLE messages (
--   id int(4) primary key, 
--   text varchar(300), 
--   userID int(3),
--   roomID int(3)

-- );


-- CREATE TABLE users (

--   id int(3) primary key, username varchar(20)

-- );

-- CREATE TABLE rooms (

--   id int(3) primary key, roomname varchar(20)

-- );

-- ALTER TABLE messages
-- ADD FOREIGN KEY (userID)
-- REFERENCES users(id);

-- ALTER TABLE messages
-- ADD FOREIGN KEY (roomID)
-- REFERENCES rooms(id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

