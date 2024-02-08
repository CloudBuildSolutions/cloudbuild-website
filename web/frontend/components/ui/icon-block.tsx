import { 
  Square,
  CalendarHeart, 
  PackageOpen, 
  ListChecks,
  MessagesSquare,
  NotebookPen,
  DraftingCompass,
  DatabaseZap,
  FlaskConical,
  Fingerprint,
  Braces,
  Settings,
  Rocket,
  GitCompareArrows,
  Presentation,
  Gauge,
  ActivitySquare
} from "lucide-react";

interface IconBlockProps {
  icon: string,
  title?: string,
  label?: string,
  size?: number,
  strokeWidth?: number,
}

export const IconBlock = (props: IconBlockProps) => {

  const size = 128;
  const strokeWidth = 1;

  let icon = <Square 
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;

  let title = (props.title != undefined) ? 
                <h4 className="text-3xl font-extrabold">{props.title}</h4> : "";
  let label = (props.label != undefined) ? 
                <p className="text-lg font-bold">{props.label}</p> : "";

  if (props.title == undefined) {
    label = (props.label != undefined) ? 
            <p className="text-2xl font-bold">{props.label}</p> : "";
  }

  switch (props.icon) {
    case "calendar-heart":
      icon = <CalendarHeart 
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "package-open":
      icon = <PackageOpen
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "list-checks":
      icon = <ListChecks
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "messages-square":
      icon = <MessagesSquare
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "notebook-pen":
      icon = <NotebookPen
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "drafting-compass":
      icon = <DraftingCompass
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "database-zap":
      icon = <DatabaseZap
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "flask-conical":
      icon = <FlaskConical
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "fingerprint":
      icon = <Fingerprint
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "braces":
      icon = <Braces
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "settings":
      icon = <Settings
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "rocket":
      icon = <Rocket
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "git-compare-arrows":
      icon = <GitCompareArrows
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "presentation":
      icon = <Presentation
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "gauge":
      icon = <Gauge
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    case "activity-square":
      icon = <ActivitySquare
                size={props.size || size}
                strokeWidth={props.strokeWidth || strokeWidth}
              />;
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col w-[200px] md:w-[200px] lg:w-[260px] min-h-[300px] h-auto space-y-2 mt-16 md:space-y-6 text-white text-center items-center justify-center">
      {icon}
      {title}
      {label}
    </div>
  )};
