# Schema

## users

| column name     | data type | details                   |
| --------------- | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| username        | string    | not null, indexed, unique |
| name            | string    | not null                  |
| age             | integer   |

## boards

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| name        | string    | not null              |
| description | string    |

## pins

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| board_id    | integer   | not null, foreign key |
| url         | string    | not null              |
| title       | string    |
| body        | string    |
