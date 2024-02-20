import Navbar from "./Navbar";
import Post from "./features/posts/Post";
import SideNavBubble from "./components/SideNavBubble";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchPosts } from "./features/posts/postsSlice";

function App() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const status = useAppSelector((state) => state.posts.status);
  const error = useAppSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts("popular"));
    }
  }, [fetchPosts, dispatch]);

  console.log(posts);

  let content;

  if (status === "loading") {
    // content = <div className="text-orange-700">Loading...</div>;
    content = Array.from({ length: 10 }).map((_, index) => (
      <Post
        key={index}
        main="Here we will fetch the primary content of this specific post and display it in a nice little card."
        extra="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi cum incidunt laudantium reprehenderit enim itaque repudiandae consequatur quos modi maxime magni sequi error fuga dignissimos, nesciunt ab quasi nostrum autem nemo similique obcaecati, eveniet aliquam laborum. Voluptas velit tenetur unde quia impedit modi, dolore repudiandae reiciendis. Odio, rem eius ex sed corrupti porro, dolor, ipsa architecto harum voluptates maiores!"
        subreddit="subreddit-name"
        time="2hr ago"
        isLoader={true}
      />
    ));
  } else if (status === "failed") {
    content = <div className=" text-red-700">{error}</div>;
  } else if (status === "idle") {
    content = posts.map((post) => (
      <Post
        key={post.data.id}
        main={post.data.title}
        extra={post.data.selftext}
        subreddit={post.data.subreddit_name_prefixed}
        time={new Date(post.data.created_utc * 1000).toLocaleString()} // convert Unix timestamp to Date
        thumbnail={post.data.thumbnail}
        numComments={post.data.num_comments}
      />
    ));
  }

  return (
    <main className="pt-20 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <aside className="min-w-[25%] border-r border-orange-900 border-opacity-50 px-12 py-12">
          <ul className="flex flex-col gap-4 sticky top-32">
            <SideNavBubble subreddit="Popular" />
            <SideNavBubble subreddit="Art" />
            <SideNavBubble subreddit="Gaming" />
            <SideNavBubble subreddit="Photography" />
            <SideNavBubble subreddit="Programming" />
            <SideNavBubble subreddit="Science" />
          </ul>
          <a
            href="https://github.com/emrosas"
            target="_blank"
            className="fixed bottom-6 left-12 text-xs text-orange-600 opacity-50 hover:opacity-100 transition-all">
            Developed with ❤️ by Erick Mireles
          </a>
        </aside>
        <ul className="flex-grow px-12 py-12 overflow-scroll h-full">
          {content}
        </ul>
      </div>
    </main>
  );
}

export default App;
