import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ButtonVariants = cva(
  "flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white shadow hover:bg-blue-400",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-400",
        outline: "border border-gray-300 bg-white text-black shadow-sm",
        secondary: "bg-gray-200 text-black shadow-sm hover:bg-gray-300",
        ghost: "bg-transparent hover:bg-gray-100",
        link: "text-blue-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean;
  children: React.ReactNode;
}

// @ts-ignore
const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : TouchableOpacity;

    // Ensure `shadow` styles are nested properly
    // const shadowStyle = StyleSheet.create({
    //   shadow: {
    //     shadowColor: "#000",
    //     // shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //     elevation: 5, // For Android shadow
    //   },
    // });

    return (
      <Comp
        // style={[shadowStyle.shadow]}
        className={cn(ButtonVariants({ variant, size, className }))}
        ref={ref}
        activeOpacity={0.7}
        {...props}
      >
        <View className="flex-row items-center justify-center gap-2">
          {typeof children === "string" ? (
            <Text className="text-center">{children}</Text>
          ) : (
            children
          )}
        </View>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, ButtonVariants };
