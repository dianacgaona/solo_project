# API Endpoints

### Html
* GET `/`
	* loads Cloneterest homepage

### Users

*GET `/api/users`
  * Fetches all the users
* GET `/api/users/:userId`
	* Fetches single existing user profile
* PATCH `/api/users/:userId`
	* User can update profile
* POST `/api/users`
	* Creates new user

### Boards

* GET `/api/boards/users/:userId`
	* Fetches all boards of a specific user
GET `/api/boards/:boardId`
	Fetches selected board for the user
POST `/api/boards`
	Creates a new board for a user
DELETE `/api/boards/:boardId`
	Deletes selected board of a user
PATCH `/api/boards/:boardId`
	User can edit selected board

### Pins

* GET `/api/pins/boards/:boardId`
	* Fetches all pins from a specific board
* GET `/api/pins/:pinId`
	* Fetches selected pin from the board
* POST `/api/pins`
	* Creates a new pin in selected board
* DELETE `/api/pins/:pinId`
	* Deletes selected pin from a board
* PATCH `/api/pins/:pinId`
	* User can edit selected board
