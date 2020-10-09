import axios from "axios";

const KEY = "AIzaSyA61r-oYzYJ8CQgt1Ybzy_x8crZwsNoVhE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
