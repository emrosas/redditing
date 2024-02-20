import Navbar from "./Navbar";
import Post from "./components/Post";
import SideNavBubble from "./components/SideNavBubble";

function App() {
  return (
    <main className="pt-20">
      <Navbar />
      <div className="flex">
        <aside className="min-w-[25%] border-r border-orange-900 border-opacity-50 px-12 py-12">
          <ul className="flex flex-col gap-4 sticky top-32">
            <SideNavBubble title="Popular" />
            <SideNavBubble title="Art" />
            <SideNavBubble title="Gaming" />
            <SideNavBubble title="Photography" />
            <SideNavBubble title="Programming" />
            <SideNavBubble title="Science" />
          </ul>
          <a
            href="https://github.com/emrosas"
            target="_blank"
            className="fixed bottom-6 left-12 text-xs text-orange-600 opacity-50 hover:opacity-100 transition-all">
            Developed with ❤️ by Erick Mireles
          </a>
        </aside>
        <ul className="flex-grow px-12 py-12 overflow-scroll h-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <Post
              key={index}
              main="Here we will fetch the primary content of this specific post and display it in a nice little card."
              extra="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum nisi cum incidunt laudantium reprehenderit enim itaque repudiandae consequatur quos modi maxime magni sequi error fuga dignissimos, nesciunt ab quasi nostrum autem nemo similique obcaecati, eveniet aliquam laborum. Voluptas velit tenetur unde quia impedit modi, dolore repudiandae reiciendis. Odio, rem eius ex sed corrupti porro, dolor, ipsa architecto harum voluptates maiores!"
              subreddit="subreddit-name"
              time="2hr ago"
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
