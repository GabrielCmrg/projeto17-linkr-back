# Linkr API

This is an API to supply for another project. It is developped in `node.js` using `express`. This is a project created to study and learn express and should not be used as a operating finished product, but you are invited to learn everything you can from it.

## Requirements

As previously said, this is developped in **node**, so the requirements to build this project is a installation of it. We're using current LTS version of node (v16.15.1). You will also need `npm` as a package manager installed.

## Build

You can build this API locally in you machine by cloning this repo with the command

```shell
git clone https://github.com/GabrielCmrg/projeto17-linkr-back.git
```

Going to the repo directory and running

```shell
npm install
```

After this, you will need to create a file called `.env` in project's root directory and fill with the variables provided in .env.example. After all this steps are done you can finally run your API with the command.

```shell
npm start
```

## Features

This API counts with the following routes

### Authentication

#### Sign-up

You can sign-up to this API by making a POST request to route `/sign-up` with a object like

```js
{
  name, // string and required
  email, // string with email format and required
  password, // string with at least 1 number, 1 lower case letter, 1 upper case letter, 1 symbol between *!@$%^&(){}[\]:;<>,.?/~_+-=|, at least 8 characters, at most 32 and it is required
  picUrl, // string with URI format and required
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the email is already being used it will return status code 409. If anything breaks internally it will return status code 500.

#### Login

You can login to this API by making a POST request to route `/login` with a object like

```js
{
  email, // string with email format and required
  password, // string and required
}
```

If everything is ok, it will return status code 200 and a object like

```js
{
  token, // jwt string
  image, // url for the user profile photo
}
```

If any key is improperly passed it will return status code 422. If the email or the password is wrong it will return status code 401. If anything breaks internally it will return status code 500.

#### Token

Every authenticated route needs a `Authorization` header. This header need to begin with `Bearer` and then the token to validate separated by space.

### Timeline

#### Get Timeline

**This route is authenticated.**

You can get the Timeline by making a GET request to route `/timeline` with authentication header.

If you send the header incorrectly it will respond with 422 status code. If your token is invalid returns 401. If anything breaks internally returns 500. Otherwise returns 200 with a object like

```js
{
  [
    {
      id, // int, post id
      name, // string, post owner
      pic_url, // url, profile picture
      content, // string, post description
      link_url, // url, link published
      link_title, // string, title of the link
      link_image, // url, link preview
      link_description, // string
      userAuthorship, // boolean
    },
  ];
}
```

#### Make a post

**This route is authenticated.**

You can make a post to the Timeline by making a POST request to route `/timeline` with authentication header and a object like

```js
{
  postLink, // String with url format and required
  content, // String for post description and optional (null or empty string)
}
```

If you send the header or body incorrectly it will respond with 422 status code. If your token is invalid returns 401. If anything breaks internally returns 500. Otherwise returns 201.

#### Get user Timeline

You can get the user Timeline by making a GET request to route `/users/:id` with authentication header, where `id` is the id of the user you want to see the Timeline.

If you send the header incorrectly it will respond with 422 status code. If your token is invalid returns 401. If you send a id that is not a number return 400. If anything breaks internally returns 500. Otherwise returns 200 with a object like

```js
{
  userName,
  userPicUrl,
  userPosts: [
    {
      id, // int, post id
      name, // string, post owner
      pic_url, // url, profile picture
      content, // string, post description
      link_url, // url, link published
      link_title, // string, title of the link
      link_image, // url, link preview
      link_description, // string
    },
  ],
}
```

#### Get user Timeline

You can get the user Timeline by making a GET request to route `/hashtag/:hashtag` with authentication header, where `:hashtag` is the tag you want to see the Timeline.

If your token is invalid returns 401. If anything breaks internally returns 500. Otherwise returns 200 with a object like

```js
{
  hashtag,
  tagPosts: [
    {
      id, // int, post id
      name, // string, post owner
      pic_url, // url, profile picture
      content, // string, post description
      link_url, // url, link published
      link_title, // string, title of the link
      link_image, // url, link preview
      link_description, // string
    },
  ],
}
```

#### Edit a post

You can edit a post by making a PUT request to `/posts/:id` where this id is the post id. It returns the same status codes as in send post, and needs the same object to make de uptade.
