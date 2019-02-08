# API Endpoints

### Session
* `POST /api/session`
* Creates new session on user login
* `DELETE /api/session`
* Deletes session on user logout

### Users
* `GET /api/users`
  * Users index/search
* `POST /api/users`
  * Creates new user
* `GET /api/users/:userId`
  * Fetches single existing user profile
* `PATCH /api/users/:userId`
  * Allows user to update their profile

### Boards
* `GET /api/users/board`
  * Fetches boards on user profile
* `POST /api/users/board:id`
  * Creates new board on user profile
* `DELETE /api/user/board`
  * Deletes board on user profile

### Pins
* `GET /api/pin`
  * Fetches single existing pin
* `POST /api/pin`
  * Creates new pin on user board
* `DELETE /api/session`
  * Deletes pin on user's board
