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