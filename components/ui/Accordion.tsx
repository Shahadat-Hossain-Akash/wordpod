import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react-native";

function AccordionItem({ isExpanded, children, viewKey, duration = 500 }) {
  const height = useSharedValue(0);

  const bodyStyle = useAnimatedStyle(() => ({
    height: withTiming(isExpanded.value ? height.value : 0, { duration }),
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[bodyStyle, { overflow: "hidden" }]}
    >
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        className="w-full"
      >
        {children}
      </View>
    </Animated.View>
  );
}

export default function Accordion({ title, children }) {
  const open = useSharedValue(false);

  const toggleAccordion = () => {
    open.value = !open.value;
  };

  return (
    <View className="bg-[#272828] rounded-lg p-4">
      {/* Accordion Header */}
      <TouchableOpacity
        onPress={toggleAccordion}
        className="p-4 bg-[#272828] rounded-lg flex-row justify-between items-center"
      >
        <Text className="text-white text-lg font-primary">{title}</Text>
        <View className="text-gray-500">
          {open.value ? (
            <ArrowUp01Icon size={20} color="white" />
          ) : (
            <ArrowDown01Icon size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>

      {/* Accordion Content */}
      <AccordionItem isExpanded={open} viewKey="accordion">
        {children}
      </AccordionItem>
    </View>
  );
}
