const mongoose = require("mongoose");

const post_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is Required"
    },
    content: {
      type: String,
      required: "Content is Required"
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
        required: "Comment is Requiredd"
      }
    ],
    newcomments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"NewComment",
        required: "NewComment is Required"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", post_schema);
module.exports = mongoose.model("NewPost", post_schema);


