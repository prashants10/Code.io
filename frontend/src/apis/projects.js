import axios from "../config/axiosConfig";

export const createProjectApi = async () => {
  try {
    const response = await axios.post("/api/v1/projects");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
