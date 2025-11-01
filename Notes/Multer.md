### 1️ Configuring Multer (middleware)
```javascript
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
```
Here you are telling Multer:
- Where to save files (destination) → /tmp/my-uploads
- What to name them (filename) → unique name with a timestampupload is now a middleware configured with these rules.
- Think of this as setting up the instructions for how Multer should handle files.

`cb` is a **callback function** in Multer used to tell it the outcome:

* **First argument** → error (`null` if no error)
* **Second argument** → result (folder path for `destination`, filename for `filename`)

Example:

```js
cb(null, '/uploads')        // no error, save here
cb(new Error('Invalid'))     // stop, there’s an error
```

It **combines error checking and returning the result**.

### 2️ Handling the upload route
```javascript
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file); // Multer adds info about the uploaded file here along with the required file path to upload on cloudinary
  res.send("File uploaded!");
});
```

app.post("/upload", ...) → this is the route that listens for POST requests to /upload.

upload.single("image") → the Multer middleware runs before your route handler:

It parses the file from the request

Saves it according to your storage config

Attaches file info to req.file

(req, res) => { ... } → your route handler runs after Multer finishes:

You can now access req.file

Upload the file to Cloudinary or perform other actions

Respond to the client

### Flow

Frontend sends POST /upload with file in image field.

Multer middleware intercepts → saves file and attaches info to req.file.

Route handler runs → processes file and sends response.

#### So in short:
- First part (storage + upload) → sets up Multer how to handle files (middleware).
- Second part (app.post(...)) → handles the upload request, using Multer to process the file before your code runs.
- once you use Multer with diskStorage, Multer automatically saves the file to the folder you specified.
- **The local path is available in the req.file.path property inside your route handler.**

## uploading on multer
- upload.single("photo") → upload one file from field photo
- upload.array("images") → upload many files but from the same field
- upload.fields([...]) → upload multiple files from multiple different fields