import React from "react";
import { TouchableOpacity, ActivityIndicator, View } from "react-native";
import { cn } from "@/lib/utils";

interface ButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string; // Allow className to be passed for styling
  children?: React.ReactNode; // Allow passing children like Text or Icons
}

const ReusableButton: React.FC<ButtonProps> = ({
  onPress,
  isLoading = false,
  disabled = false,
  className = "",
  children,
}) => {
  const isDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={`${className} ${isDisabled ? "opacity-50" : ""}`}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <View
          className={cn(
            "flex justify-center items-center h-full w-full text-center",
            className,
          )}
        >
          {children}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ReusableButton;
