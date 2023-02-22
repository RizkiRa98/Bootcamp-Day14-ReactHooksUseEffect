import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 6,
    key: "AIzaSyCpONK7vFKecT7CjQxZYN7QI6o_jiXwOo8",
  },
});
