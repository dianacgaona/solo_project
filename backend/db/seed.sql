DROP DATABASE IF EXISTS poshpin;
CREATE DATABASE poshpin;

\c poshpin;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password_digest VARCHAR NOT NULL,
  username VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  age INT
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

INSERT INTO users(email, password_digest, username, name, age) VALUES ('myfriend@fake.com', 'cats123', 'notafriend', 'close friend', 34), ('fakeaccount@ok.com', 'dogs123', 'crazyguy', 'new guy', 25), ('thedoge@welp.com', 'foxes123', 'thedoge', 'real doge', 19), ('lecat@hello.com', 'racoon123', 'lecat', 'le cat', 30), ('lastguy@bye.com', 'bird123', 'lastguy', 'last guy', 28);

INSERT INTO boards(user_id, name, description) VALUES (1, 'cats', 'pictures of cats'), (2, 'dogs', 'pictures of dogs'), (2, 'foxes', 'what the fox'), (3, 'turtles', 'turtling'), (4, 'whale', 'oh whale...'), (5, 'owl', 'Owls');

INSERT INTO pins(user_id, board_id, url, title, body) VALUES (1, 1, 'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg', 'cat', 'just a cat'), (2, 2, 'https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg', 'dog', 'just a dog'), (3, 3, 'https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg', 'turtle', 'just a turle'), (4, 4, 'https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg', 'whale', 'oh whale'), (5, 5, 'https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg', 'owl', 'owl let you know');
