import axios from "axios";

const API = "http://localhost:5000/api/posts";

export const createPost = async (
  postData,
  token
) => {

  console.log("POST DATA:", postData);

  const res = await axios.post(
    `${API}/create`,
    postData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getAllPosts = async () => {

  const res = await axios.get(
    `${API}/all`
  );

  return res.data;
};

export const likePost = async (
  postId,
  token
) => {

  const res =
    await axios.put(
      `${API}/like/${postId}`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

  return res.data;
};
export const addComment =
  async (
    postId,
    commentData,
    token
  ) => {

    const res =
      await axios.post(
        `${API}/comment/${postId}`,
        commentData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return res.data;
};



