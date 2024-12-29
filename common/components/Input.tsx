import React from "react";
import { View, Text, TextInput } from "react-native";
import { cn } from "@/lib/utils";

interface InputProps {
  label: string;
  value: string;
  className?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  defaultValue?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  className,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  defaultValue,
  ...props
}) => {
  console.log(error);
  return (
    <View className="mb-4">
      {/* Label */}
      <Text className="text-base font-bold mb-2 text-[#676767]">{label}</Text>

      {/* Input Field */}
      <TextInput
        className={cn(
          `border rounded-lg p-2 py-3 text-base text-white ${
            error ? "border-red-500" : "border-[#313131]"
          }`,
          className,
        )}
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="gray"
        {...props}
      />

      {/* Error Message */}
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};
