import axios from "axios";

const GetBlogs = async () => {
  return await axios.get("http://localhost:8080/blog");
};

export default GetBlogs;
