import { Link } from "react-router";
function Card({ title, year, imageUrl, to = "#", tag }) {
  return (
    <Link
      to={to}
      className="flex h-auto w-full shrink-0 flex-col rounded-lg border border-border bg-surface p-4 shadow-md transition-all duration-300 hover:scale-105 hover:bg-surface-raised lg:h-109.25 lg:w-153.5"
    >
      <img
        src={imageUrl}
        alt={title}
        className="mt-2 h-48 w-full rounded-lg object-cover lg:h-auto lg:min-h-0 lg:flex-1"
      />
      <div className="mt-2 flex items-center justify-between gap-2">
        <h1 className="text-text-primary">{title}</h1>
        <span className="text-text-secondary text-xs">{year}</span>
      </div>

      <div>
        <span className="text-accent text-xs p-1 bg-accent/10 rounded-lg mt-2 inline-block">
          {tag}
        </span>
      </div>
    </Link>
  );
}

export default Card;
