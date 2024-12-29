import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Components
import ReusableButton from "@/components/ui/ReusableButton";
import List from "@/common/components/List";
import Card from "@/components/ui/Card";
import Modal from "@/common/components/Modal";
import { Input } from "@/common/components/Input";
import { TextArea } from "@/common/components/TextArea";

// Icons
import { useDataContext } from "@/context/DataContext";
import FilterBadges from "@/common/components/FilterBadges";
import SearchBar from "@/common/components/SearchBar";
import { PathfinderExcludeIcon, PlusSignIcon } from "@/common/icons/Icons";

const wordFormSchema = z.object({
  title: z.string({ message: "Title is required" }).min(1),
  description: z.string().optional(),
});

type WordFormInputs = z.infer<typeof wordFormSchema>;

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, error, createWord, setSearchParam, refetch } =
    useDataContext();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WordFormInputs>({
    resolver: zodResolver(wordFormSchema),
  });

  const openModal = () => setModalVisible(true);
  const closeModal = () => {
    setModalVisible(false);
  };

  const onSubmit = (data: WordFormInputs) => {
    // @ts-ignore
    createWord({ word: data.title, description: data.description });
    reset();
    closeModal();
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="h-screen">
      <View className="flex-1 bg-[#1A1A1B] p-4 font-primary gap-4">
        {/* Floating Button */}
        <FloatingActionButton onPress={openModal} />

        {/* Header */}
        <View className="flex flex-row justify-between items-center">
          <Text className="text-white text-7xl tracking-tighter">Wordpod</Text>
        </View>

        <SearchBar onSearch={setSearchParam} />

        {/* Filters */}
        <FilterBadges />

        {/* List of Cards */}
        <List
          data={data}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          ListEmptyComponent={<EmptyState />}
        />

        {/* Modal for Creating Word */}
        <Modal
          isVisible={modalVisible}
          onClose={closeModal}
          title="Create new word"
        >
          <CreateWordForm
            control={control}
            errors={errors}
            onSubmit={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

// Floating Action Button Component
const FloatingActionButton = ({ onPress }: { onPress: () => void }) => (
  <View className="absolute right-4 bottom-20 z-50">
    <ReusableButton
      className="bg-[#e74400] text-white rounded-xl size-16"
      onPress={onPress}
    >
      <PlusSignIcon size={32} color="white" />
    </ReusableButton>
  </View>
);

// Empty State Component
const EmptyState = () => (
  <View className="flex flex-col items-center justify-center">
    <PathfinderExcludeIcon color="#2c2c2c" size={120} />
    <Text className="text-2xl text-[#2c2c2c]">Nothing to display!</Text>
  </View>
);

// Create Word Form Component
const CreateWordForm = ({
  control,
  errors,
  onSubmit,
  disabled,
}: {
  control: any;
  errors: any;
  onSubmit: () => void;
  disabled: boolean;
}) => (
  <View className="mb-4 text-white">
    {/* Title Input */}
    <Controller
      control={control}
      render={({ field }) => (
        <Input
          label="Title"
          className="text-white"
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
      disabled={disabled}
    >
      <Text className="text-xl text-white">Create</Text>
      <PlusSignIcon size={20} color="white" />
    </ReusableButton>
  </View>
);

export default Home;
