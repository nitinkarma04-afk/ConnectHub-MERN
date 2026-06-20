import Post from "../models/Post.js";

 export const likePost =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res.status(404).json({
          message:
            "Post Not Found",
        });

      }

      const alreadyLiked =
        post.likes.includes(
          req.user.id
        );

      if (alreadyLiked) {

        post.likes =
          post.likes.filter(
            (id) =>
              id.toString() !==
              req.user.id
          );

        await post.save();

        return res.json({
          message:
            "Post Unliked",
        });

      }

      post.likes.push(
        req.user.id
      );

      await post.save();

      res.json({
        message:
          "Post Liked",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

};
export const addComment =
  async (req, res) => {

    try {

      const post =
        await Post.findById(
          req.params.id
        );

      if (!post) {

        return res.status(404).json({
          message: "Post Not Found",
        });

      }

      const comment = {
        user: req.user.id,
        text: req.body.text,
      };

      post.comments.push(
        comment
      );

      await post.save();

      res.json({
        message:
          "Comment Added",
        comments:
          post.comments,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};
export const createPost =
  async (req, res) => {
        
    try {
     console.log("Creating Post...");
      const post =
        await Post.create({

          user:
            req.user.id,

          content:
            req.body.content,
        });

      res.status(201).json({
        message:
          "Post Created Successfully",

        post,
      });

  } catch (error) {

  console.log(error);

  res.status(500).json({
    message: error.message,
  });

}

};

export const getPosts =
  async (req, res) => {

    try {

      const posts =
        await Post.find()

          .populate(
            "user",
            "name email"
          )

          .sort({
            createdAt: -1,
          });

      res.json(posts);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};