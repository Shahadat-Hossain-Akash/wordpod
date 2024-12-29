import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { cn } from "@/lib/utils";

import Modal from "@/common/components/Modal";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/common/components/Input";
import { TextArea } from "@/common/components/TextArea";
import ReusableButton from "@/components/ui/ReusableButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDataContext } from "@/context/DataContext";
import { ArrowDown, ArrowUp, Delete, Edit } from "@/common/icons/Icons";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Item {
  id: string;
  word: string;
  description: string;
  created_at: string;
}

interface CardProps {
  item: Item;
  className?: string;
}

const wordFormSchema = z.object({
  title: z.string({ message: "Title is required" }).min(1),
  description: z.string().optional(),
});

type WordFormInputs = z.infer<typeof wordFormSchema>;

const Card: React.FC<CardProps> = ({ item, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [animationHeight] = useState(new Animated.Value(0));
  const [height, setHeight] = useState(0);

  const { updateWord, deleteWord } = useDataContext();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WordFormInputs>({
    defaultValues: {
      title: item?.word,
      description: item?.description,
    },
    resolver: zodResolver(wordFormSchema),
  });

  const handleHeight = (e: any) => {
    setHeight(e.nativeEvent.layout.height);
  };

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleAccordion = () => {
    // Smooth animation for accordion open/close
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    setIsExpanded(!isExpanded);
    Animated.timing(animationHeight, {
      toValue: isExpanded ? 0 : 1,
      duration: 100,
      useNativeDriver: false, // Height cannot use native driver
    }).start();
  };

  const onUpdateSubmit = (data: any) => {
    if (data.title === item.word && data.description === item.description) {
      setIsUpdateModalVisible(false);
    } else {
      updateWord(item.id, data.title, data.description || "");
      setIsUpdateModalVisible(false);
    }
  };

  const handleDelete = (id: any) => {
    deleteWord(id);
    closeModal();
  };

  const handleEditPress = () => {
    reset({
      title: item.word,
      description: item.description,
    });
    setIsUpdateModalVisible(true);
  };
  // @ts-ignore
  return (
    <>
      <View className={cn("rounded-lg bg-[#272828] font-primary", className)}>
        {/* Accordion Header */}
        <TouchableOpacity
          onPress={toggleAccordion}
          className="p-4 bg-[#272828] rounded-lg flex-row justify-between items-center"
        >
          <Text className="text-white text-xl font-primary">{item.word}</Text>
          <View className="text-gray-500">
            {isExpanded ? (
              <ArrowUp size={20} color="white" />
            ) : (
              <ArrowDown size={20} color="white" />
            )}
          </View>
        </TouchableOpacity>

        {/* Accordion Body with Smooth Transition */}
        <Animated.View
          style={{
            overflow: "hidden",
            height: animationHeight.interpolate({
              inputRange: [0, 1],
              outputRange: [0, height],
            }),
            opacity: animationHeight,
          }}
        >
          <View onLayout={handleHeight} className="p-4 rounded-lg w-full">
            <Text
              style={{ marginBottom: "12" }}
              className="text-white text-base"
            >
              {item.description}
            </Text>

            {/* Footer with Buttons */}
            <View className="flex flex-row gap-2 w-full justify-between">
              <TouchableOpacity
                className="bg-[#151618] text-white rounded-lg flex-1 py-3 text-center flex items-center justify-center"
                onPress={handleEditPress}
              >
                {/* Wrap the Icon in a View */}
                <View className={"flex flex-row gap-4 items-center"}>
                  <Text className={"text-white text-md"}>Edit</Text>
                  <Edit size={16} color="white" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-[#e74400] text-white rounded-lg flex-1 py-3 text-center flex items-center justify-center "
                onPress={openModal}
              >
                <View className={"flex flex-row gap-4 items-center"}>
                  <Text className={"text-white text-md"}>Delete</Text>
                  <Delete size={16} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
      <Modal
        isVisible={modalVisible}
        onClose={closeModal}
        title="Delete confirmation"
      >
        <View className="p-1 rounded-lg w-full">
          <Text style={{ marginBottom: "12" }} className="text-white text-sm">
            Are you sure you want to delete this item? This cannot be undone.
          </Text>

          {/* Footer with Buttons */}
          <View className="flex flex-row gap-2 w-full justify-between">
            <TouchableOpacity
              className="bg-[#151618] text-white rounded-xl flex-1 py-3 text-center flex items-center justify-center h-12"
              onPress={closeModal}
            >
              {/* Wrap the Icon in a View */}
              <View className={"flex flex-row gap-4 items-center"}>
                <Text className={"text-white text-lg"}>Don't delete</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-red-500 text-white rounded-xl flex-1 py-3 text-center flex items-center justify-center h-12"
              onPress={() => handleDelete(item.id)}
            >
              <View className={"flex flex-row gap-4 items-center"}>
                <Text className={"text-white text-xl"}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={isUpdateModalVisible}
        onClose={() => setIsUpdateModalVisible(false)}
        title="Update word"
      >
        <UpdateWordForm
          control={control}
          errors={errors}
          onSubmit={handleSubmit(onUpdateSubmit)}
          item={item}
        />
      </Modal>
    </>
  );
};
const UpdateWordForm = ({
  control,
  errors,
  onSubmit,
  item,
}: {
  control: any;
  errors: any;
  onSubmit: () => void;
  item: any;
}) => (
  <View className="mb-4 text-white">
    {/* Title Input */}
    <Controller
      control={control}
      render={({ field }) => (
        <Input
          label="Title"
          className="text-white"
          defaultValue={item.word}
          value={field.value}
          onChangeText={field.onChange}
          placeholder="Enter your title"
          error={errors?.title?.message}
        />
      )}
      name="title"
    />

    {/* Description Input */}
    <Controller
      control={control}
      render={({ field }) => (
        <TextArea
          label="Description"
          defaultValue={item.description}
          value={field.value}
          onChangeText={field.onChange}
          placeholder="Enter your description"
          rows={5}
        />
      )}
      name="description"
    />

    {/* Submit Button */}
    <ReusableButton
      className="bg-[#e74400] text-white flex flex-row items-center gap-2 rounded-xl h-10 w-full py-1"
      onPress={onSubmit}
    >
      <Text className="text-xl text-white">Update</Text>
    </ReusableButton>
  </View>
);

export default Card;
