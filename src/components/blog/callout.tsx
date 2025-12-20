import { AlertCircle, AlertTriangle, CheckCircle, Pencil } from "lucide-react";
import { cn } from "~/lib/utils";

type CalloutType = "note" | "warning" | "success" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  note: {
    icon: Pencil,
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-400",
    titleColor: "text-blue-300",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/50",
    textColor: "text-yellow-400",
    titleColor: "text-yellow-300",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    textColor: "text-green-400",
    titleColor: "text-green-300",
  },
  danger: {
    icon: AlertCircle,
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/50",
    textColor: "text-red-400",
    titleColor: "text-red-300",
  },
};

export default function Callout({
  type = "note",
  title,
  children,
}: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        `border-l-4 rounded-r-lg p-4 my-4`,
        config.borderColor,
        config.bgColor,
      )}
    >
      <div className="flex gap-3">
        <Icon
          className={cn(`flex-shrink-0 mt-0.5`, config.textColor)}
          size={20}
        />
        <div className="flex-1">
          {title && (
            <div
              className={cn(
                `font-semibold mb-1 flex items-center gap-2`,
                config.titleColor,
              )}
            >
              {title}
            </div>
          )}
          <div className=" prose-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
