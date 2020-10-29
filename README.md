# Login

Node.js Login System with Express, JWT & MySQL (Rest API)

## Step 1: 
Create basic node.js project
```
npm init
```

## Step 2: 
Install neccessary npm packages into **dependencies**
| Item | Description |
| ---- | ----------- |
| bcryptjs | Encrypt password |
| body-parser | parse JSON or any other format from POST request |
| express | API basic |
| jsonwebtoken | hashing and check user authentication |
| mysql | database connection |
| uuid | create unique id for register |
| cors | accept cross origin |
```
npm install bcryptjs body-parser express jsonwebtoken mysql uuid cors --save
```
**devDependencies**
| Item | Description |
| ---- | ----------- |
| morgan | logging for debug |
| nodemon | auto-run project |
```
npm install morgan nodemon --save-dev
```

## Step 3: 
Create `db.js, users.js, router.js` and `index.js`
- Sign up
- Login (get the JWT Token)
- Browse any route with the JWT Token (Logined)

## next();

## Flow
index -> router -> users -> db

Credit: (webdeasy)[https://webdeasy.de/en/complete-login-system-with-node-js-vue-js-restapi-jwt-part-1-2/#conclusion]