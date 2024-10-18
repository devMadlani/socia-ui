import "./feed.css";
import ShareComponent from "../share/Share";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Post from "../Posts/Post";
import { AuthContext } from "../../context/AuthContext";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(username);
  useEffect(() => {
    const fetchPost = async () => {
      const response = username
        ? await axios.get("http://localhost:8800/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:8800/api/posts/timeline/" + user._id.$oid
          );
      setPosts(await response.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
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
