import React, { useState } from "react";
import { FlatList, View, RefreshControl } from "react-native";
import { cn } from "@/lib/utils";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

interface ListProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => JSX.Element;
  keyExtractor: (item: T, index: number) => string;
  className?: string;
  ListHeaderComponent?: JSX.Element;
  ListFooterComponent?: JSX.Element;
  ListEmptyComponent?: JSX.Element;
  onRefresh: () => void;
  refreshing: boolean;
}

const List = <T,>({
  data,
  renderItem,
  keyExtractor,
  className,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  onRefresh,
  refreshing,
}: ListProps<T>) => {
  const ItemSeparator = () => <View className="h-2" />; // Gap between items

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className={cn(
          "p-2 rounded-xl flex gap-4 bg-[#1C1C1C]",
          "h-full",
          className,
        )}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={ItemSeparator}
          contentContainerStyle={{
            flexGrow: 1,
            ...(data?.length === 0 && {
              justifyContent: "center",
              alignItems: "center",
            }),
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing} // Controls the refresh spinner
              onRefresh={onRefresh} // Trigger the refresh when pull down occurs
              colors={["#e74400"]} // Optional: color of the loading spinner
              progressBackgroundColor="#1e1e1e"
            />
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default List;
