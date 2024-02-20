interface PostProps {
  main: string;
  extra: string;
  subreddit: string;
  time: string;
}

function Post({ main, extra, subreddit, time }: PostProps) {
  return (
    <li className="flex gap-8 py-8 border-b border-orange-900 border-opacity-25">
      <div className="flex flex-col gap-4 mt-4">
        <div className="h-4 w-4 bg-orange-400 bg-opacity-25" />
        <div className="h-4 w-4 bg-orange-400 bg-opacity-25" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="h-8 w-8 bg-orange-200 rounded-full border border-orange-900 border-opacity-50" />
          <h3 className="font-semibold text-base">{subreddit}</h3>
          <span className="opacity-35 text-sm">{time}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className=" text-xl font-medium">{main}</h2>
          <p className="font-light leading-loose">{extra}</p>
        </div>
      </div>
    </li>
  );
}

export default Post;
