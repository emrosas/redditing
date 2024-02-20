import { useAppDispatch } from "../hooks";
import { fetchPosts } from "../features/posts/postsSlice";

interface SideNavBubbleProps {
  subreddit: string;
}

function SideNavBubble({ subreddit }: SideNavBubbleProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchPosts(subreddit));
  };

  return (
    <li
      onClick={handleClick}
      className="bg-orange-200 bg-opacity-25 border-orange-900 border border-opacity-50 rounded-lg px-4 py-2 cursor-pointer hover:bg-opacity-50 hover:border-opacity-100 hover:border-orange-600">
      {subreddit}
    </li>
  );
}

export default SideNavBubble;
