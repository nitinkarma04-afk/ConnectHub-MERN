import User from "../models/User.js";

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