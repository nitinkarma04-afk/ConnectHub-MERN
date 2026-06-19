import User from "../models/User.js";
import Post from "../models/Post.js";

export const followUser =
  async (req, res) => {

    try {

      const currentUser =
        await User.findById(
          req.user.id
        );

      const targetUser =
        await User.findById(
          req.params.id
        );

      if (!targetUser) {

        return res.status(404).json({
          message:
            "User Not Found",
        });

      }

      if (
        currentUser.following.includes(
          targetUser._id
        )
      ) {

        return res.status(400).json({
          message:
            "Already Following",
        });

      }

      currentUser.following.push(
        targetUser._id
      );

      targetUser.followers.push(
        currentUser._id
      );

      await currentUser.save();
      await targetUser.save();

      res.json({
        message:
          "User Followed",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};


export const getProfile =
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.params.id
        )
        .select("-password")
        .populate(
          "followers",
          "name email"
        )
        .populate(
          "following",
          "name email"
        );

      if (!user) {

        return res.status(404).json({
          message:
            "User Not Found",
        });

      }

      const posts =
  await Post.find({
    user: user._id,
  });

res.json({
  user,
  totalPosts:
    posts.length,
}); 

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};