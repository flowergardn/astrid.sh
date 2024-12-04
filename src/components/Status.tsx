import {cn} from "~/lib/utils.ts";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "~/components/ui/tooltip"


export default function Status(props: {
    status: string;
}) {
    const statusColors = {
        online: "bg-[#a6e3a1]",
        dnd: "bg-[#f38ba8]",
        offline: "bg-[#7f849c]",
    }

    let status = props.status.toLowerCase();
    if (status === "idle") status = "online";

    const statusColor = statusColors[status as keyof typeof statusColors];

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className={cn(
                        "w-4 h-4 rounded-full",
                        statusColor
                    )}/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>astrid is {status}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}