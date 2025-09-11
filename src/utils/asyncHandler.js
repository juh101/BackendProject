const asyncHandler = (requestHandler) => 
    (req, res, next) => {
    Promise
    .resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  };


export default asyncHandler;

/*
Example use:
app.get("/user", asyncHandler(async (req, res) => {
  const user = await User.findById(req.query.id); 
  res.json(user);
}));
If User.findById fails, asyncHandler catches the error and passes it to 
Express’s error middleware, 
Otherwise, every time someone visits that path (sends a request), 
Express calls returned handler function with (req, res, next).
If your function succeeds → res.json(user) runs → response is sent.
If your function fails (throws error / rejected promise) → the wrapper catches it and passes it to next(err).
*/




// const asyncHandler = (fn) => {
//   return async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       //Instead of crashing the server, you return a safe JSON response
//       res.status(error.code || 500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
// };
