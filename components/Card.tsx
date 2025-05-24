import { Gamepad2 } from "lucide-react";

interface CardProps {
    title?: string;
    icon?: React.ElementType;
    description?: string;
}



const Card = ({ title, icon: Icon = Gamepad2, description} : CardProps) => {
  return (
    <div className="flex-1 bg-accent aspect-[1.5/1] rounded w-full sm:w-[50%]">
      <div className="flex flex-col p-4 h-full">
        <div className="rounded bg-background w-1/6 flex items-center justify-center text-center aspect-square">
          <Icon className="w-full h-full p-3" />
        </div>
        <div className="text-2xl font-semibold mt-4">
          {title}
        </div>
        <div className="mt-2">
            {description}
        </div>
      </div>
    </div>
  )
}
export default Card