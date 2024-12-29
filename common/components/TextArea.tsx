import React from "react";
import { View, Text, TextInput } from "react-native";

interface TextareaProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  rows?: number;
  defaultValue?: any;
}

export const TextArea: React.FC<TextareaProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  rows = 4,
  defaultValue,
}) => {
  return (
    <View className="mb-4">
      {/* Label */}
      {label && (
        <Text className="text-base font-bold mb-2 text-[#676767]">{label}</Text>
      )}

      {/* Textarea */}
      <TextInput
        className={`border rounded-lg p-2 py-3 text-base text-white ${
          error ? "border-red-500" : "border-[#313131]"
        }`}
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        multiline={true}
        numberOfLines={rows}
        textAlignVertical="top"
      />

      {/* Error Message */}
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};
