import axios from "axios";

const AuthToken = process.env?.REACT_APP_GITHUB_TOKEN || "";

const clientAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AuthToken}`,
  },
});

export default clientAPI;
