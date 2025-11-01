import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check is user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary
  // create user object - create entry in db
  // remove pw and refresh token field from response
  // check for user creation
  // return response

  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);
  console.log("fullname: ", fullName);
  console.log("password: ", password);

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  if (
    [fullName, email, username, password].some(
      (field) => !field || field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "all fields are required");
  }
  if (!isValidEmail(email)) {
    throw new ApiError(400, "enter valid email id");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    console.log(existedUser);
    throw new ApiError(409, "user with email or username already exists");
  }
  console.log(req.files);

  const avatarLocalpath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalpath) {
    throw new ApiError(400, "Avatar file is required");
  }

  console.log(
    "avatarlocal path - ",
    avatarLocalpath,
    "cover img local path",
    coverImageLocalPath
  );

  const avatar = await uploadOnCloudinary(avatarLocalpath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  console.log(
    "avatar uploaded - ",
    avatar,
    "cover image uploaded - ",
    coverImage
  );

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  console.log(user);
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  
  if(!createdUser){
    throw new ApiError(500, "user registeration failed")
  }else{
    console.log(createdUser);
  }

  return res.status(201).json(
    new ApiResponse(200 , createdUser, "User registered successfully" )
  )

});

export { registerUser };
