import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "77315e8c239d4f3f87bd2ace5f8a894b",
  },
});

export { CanceledError };
