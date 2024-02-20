import { useAppDispatch } from "./hooks";
import { searchPosts } from "./features/posts/postsSlice";

function Navbar() {
  const dispatch = useAppDispatch();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching...");
    dispatch(searchPosts((e.currentTarget[0] as HTMLInputElement).value));
  };
  return (
    <nav className="border-b border-opacity-50 border-orange-900 px-12 py-4 flex justify-between items-center fixed top-0 left-0 right-0 bg-orange-50 h-20 z-50">
      <div className="flex gap-2 items-center">
        <div className="h-4 w-4 bg-orange-600" />
        <h1 className="text-xl font-bold text-orange-600">Reddit-ing</h1>
      </div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="border border-opacity-50 border-orange-900 rounded-lg focus:outline-orange-600 placeholder:text-orange-900 placeholder:opacity-25 px-2 py-1 text-orange-900 hover:border-orange-600"
          placeholder="Search"
        />
      </form>
    </nav>
  );
}

export default Navbar;
