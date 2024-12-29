import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Delete } from "@/common/icons/Icons";

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center bg-black/50">
          <TouchableWithoutFeedback>
            <View className="w-4/5 bg-[#1A1A1B] rounded-2xl p-5 shadow-lg">
              {/* Modal Header */}
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-2xl font-bold text-white">{title}</Text>
                <TouchableOpacity onPress={onClose}>
                  <Delete size={20} color="#676767" />
                </TouchableOpacity>
              </View>

              {/* Modal Body */}
              <View className="w-full mb-2">{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;
