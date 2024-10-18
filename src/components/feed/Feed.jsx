import "./feed.css";
import ShareComponent from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Posts/Post";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  // console.log(username);
  useEffect(() => {
    const fetchPost = async () => {
      const response = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/6702651217cf5583b4f2efb7"
          );
      setPosts(await response.data);
    };
    fetchPost();
  }, [username]);
  // console.log(posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <ShareComponent />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
