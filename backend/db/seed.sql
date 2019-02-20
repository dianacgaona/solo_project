DROP DATABASE IF EXISTS poshpin;
CREATE DATABASE poshpin;

\c poshpin;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  about TEXT,
  profile_picture VARCHAR
);

CREATE TABLE boards(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR NOT NULL,
  description TEXT
);

CREATE TABLE pins(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  board_id INT REFERENCES boards(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  title VARCHAR,
  body VARCHAR
);

INSERT INTO users(username, password_digest, email, first_name, last_name, about, profile_picture) VALUES ('firstuser', 'cats123', 'firstuser@user.com', 'first', 'user', 'my first user haha', 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg'), ('seconduser', 'cats123', 'seconduser@user.com', 'second', 'user', 'my second user haha', 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg'), ('thirduser', 'cats123', 'thirduser@user.com', 'third', 'user', 'my third user haha', 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg'), ('fourthuser', 'cats123', 'fourthuser@user.com', 'fourth', 'user', 'my fourth user haha', 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg'), ('fifthuser', 'cats123', 'fifthuser@user.com', 'fifth', 'user', 'my fifth user haha', 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg');

INSERT INTO boards(user_id, name, description) VALUES (1, 'cats', 'you catta be kitten me'), (2, 'dogs', 'whats puppen'), (2, 'foxes', 'what the fox'), (3, 'turtles', 'turtling peeps'), (4, 'whale', 'oh whale...'), (5, 'owl', 'Owl see you later');

INSERT INTO pins(user_id, board_id, url, title, body) VALUES (1, 1, 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg', 'cat', 'just a cat'), (2, 2, 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg', 'dog', 'just a dog'), (3, 3, 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg', 'turtle', 'just a turle'), (4, 4, 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg', 'whale', 'oh whale'), (5, 5, 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg', 'owl', 'owl let you know');
