 import axios from "axios";

const API =
  "http://localhost:5000/api/users";

export const getProfile =
  async (userId) => {

    const res =
      await axios.get(
        `${API}/profile/${userId}`
      );

    return res.data;
};

export const updateProfile =
  async (profileData, token) => {

    const res =
      await axios.put(
        `${API}/update`,
        profileData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    return res.data;
};