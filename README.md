# Back-End

### Heroku

https://dad-jokes-7.herokuapp.com/

## Endpoint Summary

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | /api/auth/register   | Register user         |
| POST   | /api/auth/login      | Login                 |
| GET    | /api/jokes           | Get all public jokes  |
| GET    | /api/jokes/userJokes | Get all private jokes |
| GET    | /api/jokes/:id       | Gets a specific joke  |
| POST   | /api/jokes           | Add a new joke        |
| PUT    | /api/jokes/:id       | Edit a joke           |
| DELETE | /api/jokes/:id       | Delete a joke         |

## Registration

POST to /api/auth/register

```
{
    "username": "string", //required, unique
    "password": "string" //required
}
```

returns an object containing the created user data and a token

## Login

POST to /api/auth/login

```
{
    "username": "string", //required
    "password": "string" //required
}
```

\*returns an object containing the username and a token

## View Public Jokes

GET from /api/jokes

\*returns an array containing the details of each joke as an object

## View Private Jokes

GET from /api/jokes/userJokes

\*returns an array containing the details of each joke as an object

## View a Specific Joke

GET from /api/jokes/:id

\*returns an object containing the details of the specified joke

## Adding a Joke

POST to /api/jokes

```
{
    "question": "string", //required
    "punchline": "string", //required
    "private": "true or false", //optional, defaults to "false"
    "user_id": "number" //optional
}
```

\*returns an object showing the details of the newly created joke

## Editing a Joke

PUT on /api/jokes/:id

\*returns the message "Joke updated" if successful

## Deleting a Joke

DELETE from /api/jokes/:id

\*returns the message "Joke deleted" if successful
