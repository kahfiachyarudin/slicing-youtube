export default function Card({
  thumbnail,
  avatar,
  title,
  channel,
  views,
  uploaded,
  duration,
}) {
  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full aspect-video object-cover rounded-xl"/>

        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
          {duration}
        </span>
      </div>

      <div className="flex gap-3 mt-3">
        <img
          src={avatar}
          alt={channel}
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />

        <div>
          <h3 className="text-white text-sm font-medium line-clamp-2">
            {title}
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            {channel}
          </p>

          <p className="text-zinc-400 text-xs">
            {views} • {uploaded}
          </p>
        </div>
      </div>
    </div>
  );
}