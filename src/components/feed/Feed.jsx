import "./feed.css";
import ShareComponent from "../share/Share";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../Posts/Post";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        "http://localhost:8800/api/posts/timeline/6702669df1f33c08a44518ca"
      );
      setPosts(await response.data)
    };
    fetchPost();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <ShareComponent />
        {posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;
