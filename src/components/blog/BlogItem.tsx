import type { BlogInfo } from "~/types";

export default function BlogItem(props: { info: BlogInfo }) {
  return (
    <li className="flex items-center space-x-2">
      <div className="w-full group hover:bg-surface2 hover:transition-colors duration-200 ease-in-out cursor-pointer hover:text-pink p-2">
        <a
          href={props.info.url}
          className="flex items-center justify-between space-x-2"
        >
          <p className="truncate max-w-96 min-w-36">
            {props.info.title}
            <span className="ml-2 text-xs bg-overlay1 px-2 py-0.5 rounded-full group-hover:bg-pink/30">
              {props.info.minutesRead}
            </span>
          </p>
          <p className="italic min-w-36 flex-grow pl-[2vw]">
            {props.info.description}
          </p>
          <p className="group-hover:text-pink/60 truncate">
            {props.info.createdAt}
          </p>
        </a>
      </div>
    </li>
  );
}
