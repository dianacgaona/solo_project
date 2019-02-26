DROP DATABASE IF EXISTS poshpin;
CREATE DATABASE poshpin;

\c poshpin;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  name VARCHAR,
  username VARCHAR,
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

INSERT INTO users(username, password_digest, email, name, about, profile_picture) VALUES ('cat', 'cats', 'cat@cat.com', 'first cat', 'my first cat haha', 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg'), ('dog', 'dogs', 'dog@dog.com', 'second dog', 'my second dog haha', 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg'), ('turtle', 'turtles', 'turtle@turtle.com', 'third turtle', 'my third turtle haha', 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg'), ('whale', 'whales', 'whale@whale.com', 'fourth whale', 'my fourth whale haha', 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg'), ('owl', 'owls', 'owls@owl.com', 'fifth owl', 'my fifth owl haha', 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg'), ('fox', 'foxes', 'fox@fox.com', 'sixth fox', 'my sixth fox haha', 'https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg');

INSERT INTO boards(user_id, name, description) VALUES (1, 'cats', 'you catta be kitten me'), (2, 'dogs', 'whats puppen'), (3, 'turtles', 'turtling peeps'), (4, 'whale', 'oh whale...'), (5, 'owl', 'Owl see you later'), (6, 'foxes', 'what the fox');

INSERT INTO pins(user_id, board_id, url, title, body) VALUES (1, 1, 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg', 'cat', 'just a cat'), (1, 1, 'https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg', 'kitty', 'catcat'), (2, 2, 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg', 'dog', 'just a dog'), (2, 2, 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg', 'puppy', 'le dogge'), (3, 3, 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg', 'turtle', 'just a turle'), (3, 3, 'https://images.pexels.com/photos/10467/pexels-photo-10467.jpeg', 'sea turtle', 'you sea that?'), (4, 4, 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg', 'whale', 'oh whale'), (4, 4, 'https://images.pexels.com/photos/892548/pexels-photo-892548.jpeg', 'whale tale', 'well, a tale'), (5, 5, 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg', 'owl', 'owl let you know'), (5, 5, 'https://images.pexels.com/photos/3890/bird-animal-owl.jpg', 'owl', 'owl see you'), (6, 6, 'https://images.pexels.com/photos/1821688/pexels-photo-1821688.jpeg', 'fox', 'no fox given'), (6, 6, 'https://images.pexels.com/photos/459377/pexels-photo-459377.jpeg', 'fox', 'fox box');
