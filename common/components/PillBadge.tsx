import React, { ReactNode } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { cn } from "@/lib/utils";

interface PillBadgeProps {
  className?: string; // Optional TailwindCSS classes
  onPress?: (event: GestureResponderEvent) => void; // Optional onPress event handler
  children: ReactNode; // Content inside the pill badge
}

const PillBadge: React.FC<PillBadgeProps> = ({
  className,
  onPress,
  children,
}) => {
  // Default styles for the pill badge
  const defaultStyles =
    "px-4 py-2 rounded-full bg-white text-black flex flex-row gap-2 items-center";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(defaultStyles, className)}
    >
      {children}
    </TouchableOpacity>
  );
};
export default PillBadge;
