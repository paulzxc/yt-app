import axios from 'axios';

const KEY = 'AIzaSyDhDlWcGMPPLTm5Pq6DCm9oNe-l-DA8QKM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});