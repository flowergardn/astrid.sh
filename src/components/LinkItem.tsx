export default function LinkItem(props: {
    name: string;
    href: string;
    label?: string;
}) {
    return (
        <li className="flex items-center space-x-2">
            <div className="space-x-12 w-full group hover:bg-surface2 hover:transition-colors duration-200 ease-in-out cursor-pointer hover:text-pink p-2">
               <a href={props.href} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
                    <p className="w-24 truncate">{props.name}</p>
                    <p className="group-hover:text-pink/60 w-fit truncate">{props.label ? props.label : props.href}</p>
                </a>
            </div>
        </li>
    )
}
