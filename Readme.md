## Learning backend development with Node.js
- Model Link - https://app.eraser.io/workspace/WHGAWj9XuKZI1lS2jCZy?origin=share

## Pagination
- Breaking large results into smaller pages.
Imagine you have 10,000 videos in your database.

If you send all at once → too slow, heavy for the client.

Instead, you send results in pages (like YouTube or Google search).

Example:

Page 1 → 10 videos (limit = 10, skip = 0)
Page 2 → next 10 videos (limit = 10, skip = 10)
Page 3 → next 10 videos (limit = 10, skip = 20)

## Aggregation
- Advanced querying in MongoDB using stages (like a pipeline).
Instead of just finding documents, aggregation lets you process and transform data step by step.
Think of it like a data pipeline: each stage modifies the results and passes them to the next.

Common stages:

- $match → filter (like WHERE in SQL)
- $group → group by field (like GROUP BY in SQL)
- $sort → sort results
- $lookup → join with another collection
- $project → select specific fields or create new ones

## Pre hook in Mongoose
A pre hook is a middleware function that runs before a certain action happens on a document or query.

## Bcrypt
- Hashes passwords securely so they are not stored in plain text.
- bcrypt.hash(password, 10);  where 10 = number of rounds.


## JWT (JSON Web Token)
- User logs in → server sends access token + refresh token.
- Frontend uses access token for API calls.
- When access token expires → frontend silently calls /refresh with the refresh token.
- Backend verifies refresh token → issues a new access token.

## Cloudinary && Multer for image upload
#### Step 1: Handling the file upload from the user (Multer)
- Multer is a middleware that lets your Express backend receive files from the frontend.
- It temporarily stores the uploaded file on your server and makes it available as req.file.
- Example:
``` javascript
import multer from "multer";
const upload = multer({ dest: "uploads/" }); // temporary storage
```
- After this step, you have the file locally on your server, ready to send to Cloudinary.

#### Step 2: Storing the file in the cloud (Cloudinary)
- Cloudinary stores your image permanently in the cloud and gives you a URL to access it.
- You pass the file path from Multer (req.file.path) to Cloudinary:
``` javascript
const result = await cloudinary.uploader.upload(req.file.path, { folder: "coverImages" });
```
- result.secure_url → URL to store in your database for linking to the user.
- Optionally, delete the temporary local file after upload.