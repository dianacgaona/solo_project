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
  name VARCHAR NOT NULL
);

CREATE TABLE pins(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  board_id INT REFERENCES boards(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  title VARCHAR,
  description VARCHAR,
  category VARCHAR
);

INSERT INTO users(username, password_digest, email, name, about, profile_picture) VALUES ('cat', '$2a$10$IjiT3cWsaPo7Q1fTdsd8GO.W6twmwcthzN7TLrB9/oVhmjHiKmN5C', 'cat@cat.com', 'first cat', 'my first cat haha', 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg'), ('dog', '$2a$10$IjiT3cWsaPo7Q1fTdsd8GO.W6twmwcthzN7TLrB9/oVhmjHiKmN5C', 'dog@dog.com', 'second dog', 'my second dog haha', 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg'), ('turtle', '$2a$10$IjiT3cWsaPo7Q1fTdsd8GO.W6twmwcthzN7TLrB9/oVhmjHiKmN5C', 'turtle@turtle.com', 'third turtle', 'my third turtle haha', 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg'), ('whale', '$2a$10$IjiT3cWsaPo7Q1fTdsd8GO.W6twmwcthzN7TLrB9/oVhmjHiKmN5C', 'whale@whale.com', 'fourth whale', 'my fourth whale haha', 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg'), ('owl', '$2a$10$IjiT3cWsaPo7Q1fTdsd8GO.W6twmwcthzN7TLrB9/oVhmjHiKmN5C', 'owls@owl.com', 'fifth owl', 'my fifth owl haha', 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg'), ('fox', '$2a$10$IjiT3cWsaPo7Q1fTdsd8GO.W6twmwcthzN7TLrB9/oVhmjHiKmN5C', 'fox@fox.com', 'sixth fox', 'my sixth fox haha', 'https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg');

INSERT INTO boards(user_id, name) VALUES (1, 'cats'), (2, 'dogs'), (3, 'turtles'), (4, 'whale'), (5, 'owl'), (6, 'foxes');

INSERT INTO pins(user_id, board_id, url, title, description, category) VALUES (1, 1, 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg', 'cat', 'just a cat', 'animals'), (1, 1, 'https://images.pexels.com/photos/290204/pexels-photo-290204.jpeg', 'kitty', 'catcat', 'animals'), (2, 2, 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg', 'dog', 'just a dog', 'animals'), (2, 2, 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg', 'puppy', 'le dogge', 'animals'), (3, 3, 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg', 'turtle', 'just a turle', 'animals'), (3, 3, 'https://images.pexels.com/photos/10467/pexels-photo-10467.jpeg', 'sea turtle', 'you sea that?', 'animals'), (4, 4, 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg', 'whale', 'oh whale', 'animals'), (4, 4, 'https://images.pexels.com/photos/892548/pexels-photo-892548.jpeg', 'whale tale', 'well, a tale', 'animals'), (5, 5, 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg', 'owl', 'owl let you know', 'animals'), (5, 5, 'https://images.pexels.com/photos/3890/bird-animal-owl.jpg', 'owl', 'owl see you', 'animals'), (6, 6, 'https://images.pexels.com/photos/1821688/pexels-photo-1821688.jpeg', 'fox', 'no fox given', 'animals'), (6, 6, 'https://images.pexels.com/photos/459377/pexels-photo-459377.jpeg', 'fox', 'fox box', 'animals');
