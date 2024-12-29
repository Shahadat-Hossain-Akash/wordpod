import React, { forwardRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { cn } from "@/lib/utils";
import Modal from "@/common/components/Modal";
import PillBadge from "@/common/components/PillBadge";
import ReusableButton from "@/components/ui/ReusableButton";
import { useDataContext } from "@/context/DataContext";
import { Sorting05Icon, ShuffleIcon } from "@/common/icons/Icons";

const sortOptions = [
  { id: "1", label: "Sort by latest", value: "ORDER BY created_at DESC" },
  { id: "2", label: "Sort by oldest", value: "ORDER BY created_at ASC" },
  { id: "3", label: "Sort by name (A - Z)", value: "ORDER BY word ASC" },
  { id: "4", label: "Sort by name (Z - A)", value: "ORDER BY word DESC" },
];

const FilterBadges = () => {
  const [isSortDropdownVisible, setSortDropdownVisible] = useState(false);
  const {
    selectedSort,
    setSelectedSort,
    isShuffledEnabled,
    setIsShuffleEnabled,
  } = useDataContext();

  const toggleSortDropdown = () => {
    setSortDropdownVisible(!isSortDropdownVisible);
  };

  const handleSortOptionSelect = (option: string) => {
    console.log(`Selected Sort Option: ${option}`);
    if (isShuffledEnabled) {
      setIsShuffleEnabled(false);
    }
    if (selectedSort === option) {
      setSelectedSort("");
    } else {
      setSelectedSort(option);
    }

    setSortDropdownVisible(false);
  };

  const handleShuffle = () => {
    if (selectedSort?.length > 0) {
      setSelectedSort("");
    }

    setIsShuffleEnabled(!isShuffledEnabled);
  };

  return (
    <View className="flex flex-row flex-wrap gap-2 justify-end">
      {/* Sort Badge */}
      <TouchableOpacity
        onPress={toggleSortDropdown}
        className={cn(
          "flex flex-row items-center bg-[#272828] border border-[#313131] rounded-full px-4 py-2 gap-2",
          selectedSort?.length > 0 && "bg-green-500",
        )}
      >
        <Text className="text-white ">Sort</Text>

        <Sorting05Icon size={24} color="white" />
      </TouchableOpacity>

      {/* Shuffle Badge */}
      <TouchableOpacity
        onPress={handleShuffle}
        className={cn(
          "flex flex-row items-center bg-[#272828] border border-[#313131] rounded-full px-4 py-2 gap-2",
          isShuffledEnabled && "bg-green-500",
        )}
      >
        <Text className="text-white ">Shuffle</Text>
        <ShuffleIcon size={24} color="white" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        isVisible={isSortDropdownVisible}
        title={"Sort Options"}
        onClose={toggleSortDropdown}
      >
        <FlatList
          data={sortOptions}
          className={"mb-2"}
          renderItem={({ item }) => (
            <PillBadge
              onPress={() => handleSortOptionSelect(item.value)}
              className="bg-[#272828] border border-[#313131] py-3 w-fit rounded-lg"
            >
              {item.value === selectedSort ? (
                <View className={"size-2 rounded-full bg-green-500"}></View>
              ) : (
                <View className={"size-2 rounded-full bg-gray-500"}></View>
              )}
              <Text className="text-white">{item.label}</Text>
            </PillBadge>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="h-1" />}
        />
        <ReusableButton
          onPress={() => {
            setSelectedSort("");
            setSortDropdownVisible(false);
          }}
          className="bg-red-500 text-white flex flex-row items-center gap-2 rounded-xl h-10 w-full py-1 "
        >
          <Text className="text-lg text-white">Reset</Text>
        </ReusableButton>
      </Modal>
    </View>
  );
};

export default FilterBadges;
