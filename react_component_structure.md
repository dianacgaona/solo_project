# Component Hierarchy

**Homepage**

- NavBar

**UserProfile**

- BoardsList
- NavBar

**UserBoardsList**

- BoardsList
- NavBar

**UserPinsList**

- PinsList
- NavBar

**BoardsPinsList**

- BoardsPinsList
- NavBar

**SinglePin**

- SinglePin

# Routes

| **Path**         | **Component**    |
| ---------------- | ---------------- |
| '/'              | 'Homepage'       |
| '/users/:userId' | 'UserProfile'    |
| '/users/boards'  | 'UserBoardsList' |
| '/users/pins'    | 'UserPinsList'   |
| '/:boardId/pins' | 'BoardsPinsList' |
| '/pins/:pinId'   | 'SinglePin'      |
