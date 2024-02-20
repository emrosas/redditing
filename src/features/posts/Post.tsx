import MessageIcon from "../../icons/MessageIcon";

interface PostProps {
  main: string;
  extra: string;
  subreddit: string;
  time: string;
  thumbnail?: string;
  numComments?: number;
  isLoader?: boolean;
}

function Post({
  main,
  extra,
  subreddit,
  time,
  thumbnail,
  numComments,
  isLoader,
}: PostProps) {
  return (
    <li
      className={`flex gap-8 py-8 border-b border-orange-900 border-opacity-25 ${
        isLoader && "opacity-25"
      }`}>
      <div className="flex flex-col flex-grow gap-4">
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-base bg-orange-400 bg-opacity-25 rounded-lg px-4 py-1">
            {subreddit}
          </h3>
          <div className="flex gap-2 items-center opacity-35 text-sm">
            <svg
              className="size-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M19 3H5v2H3v14h2v2h14v-2h2V5h-2zm0 2v14H5V5zm-8 2h2v6h4v2h-6z"
              />
            </svg>
            <span>{time}</span>
          </div>
          <div className="flex gap-2 items-center opacity-35 text-sm">
            <MessageIcon addClass="size-4" />
            <span>{numComments}</span>
          </div>
        </div>
        <div className="flex gap-4 justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className=" text-xl font-medium">{main}</h2>
            <p className="font-light leading-loose line-clamp-3">{extra}</p>
          </div>
          {thumbnail &&
            !thumbnail.startsWith("https://external-preview.redd.it/") &&
            thumbnail !== "default" &&
            thumbnail !== "self" &&
            thumbnail !== "image" && (
              <img
                src={thumbnail}
                alt=""
                className="rounded-lg w-24 h-24 bg-cover object-cover"
              />
            )}
        </div>
      </div>
    </li>
  );
}

export default Post;
