import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/toolbar/TopBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
function Home() {
  return (
    <>
      <TopBar />
      <div className="flex w-full">
        <Sidebar />
        <Feed />
        <Rightbar/>
      </div>
    </>
  );
}
export default Home;
