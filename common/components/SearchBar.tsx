import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import debounce from "lodash/debounce";
import { cn } from "@/lib/utils";
import { Delete } from "@/common/icons/Icons"; // Assuming cn is the Tailwind helper

interface SearchBarProps {
  onSearch: (query: string) => void; // This is the function that will be triggered on search
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  // Debounced search function
  const debouncedSearch = debounce((searchQuery: string) => {
    onSearch(searchQuery); // Trigger the search
  }, 500); // 500ms debounce time

  // Update the query and trigger debounced search
  const handleChange = (text: string) => {
    setQuery(text);
    debouncedSearch(text); // Trigger debounced search
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, []);

  const handleCancel = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <View className="mt-2">
      <TextInput
        className={cn(
          "border border-[#313131] rounded-xl px-3 py-4 text-base text-white bg-[#1E1E1E]", // Border color when focused
          query ? "border-red-500" : "", // Border color when there is a query
        )}
        placeholder="Search..."
        value={query}
        onChangeText={handleChange}
        placeholderTextColor="gray"
      />
      {query ? (
        <View className="relative flex ">
          <View className=" rounded-full px-3 py-2 flex flex-row gap-2 items-center">
            <Text className="text-white text-sm">Searching for:</Text>

            <TouchableOpacity
              onPress={handleCancel} // Call the cancel function when the badge is clicked
              className={
                "bg-[#272828] flex flex-row gap-2 py-1 px-3 rounded-xl items-center"
              }
            >
              <Text className="text-white text-sm">{query}</Text>
              <Delete size={14} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SearchBar;
