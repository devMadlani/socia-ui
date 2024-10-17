import "./feed.css";
import ShareComponent from "../share/Share";
import Post from "../Posts/Post";
import { Posts } from "../../dummyData";
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <ShareComponent />
        {Posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}

export default Feed;
