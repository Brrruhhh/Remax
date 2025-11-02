## Frontend
```bash
npm install
npm run dev
http://localhost:3000
```

## Backend
```bash
npm install
node server.js
http://localhost:5000   # won't be accessible (as we don't have auth token, just check the health [/api/health])
```

# Steps to test the admin functionalities
Since every user we we will create will be given the default role of user.
So to test the admin functionality, you have to run the script placed in the backend directory
It is a standalone script but the .env parameters are in backend so you have to run from there.


```bash
node createAdmin.js
```

This will push an admin document in to the db so that one can test the admin functionalities.
admin name and pass can be read from that file.

