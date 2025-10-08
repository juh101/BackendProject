import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: {
        type: String, // cloudinary url
        required: true,
    },
    thumbnail: {
        type: String, // cloudinary url
        required: true,
    },
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    duration: {
        type: String, 
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: true,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate)
// It adds a new static method called .aggregatePaginate() to your model.

export const Video = mongoose.model("Video", videoSchema);
