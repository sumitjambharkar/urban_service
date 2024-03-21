import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema({
    name: {
      type: String,
    },
    slug: {
      type:String,
    },
    content: {
      type: String,
    },
    seoTitle : {
      type:String,
    },
    seoDescription: {
      type: String,
    },
    category: {
        type: String,
    },
    image : {
      type: String,
    },
  },{timestamps:true});

const Blog = mongoose.models.Blog || mongoose.model("Blog",blogSchema);

export default Blog