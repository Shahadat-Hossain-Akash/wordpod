import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";
import "react-native-reanimated";
import "../global.css";
import { useFonts } from "expo-font";
import GlobalProvider from "@/GlobalProvider";
import { View, Text } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    primary: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.warn("Splash Screen Error:", error);
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Optional: Render a fallback loading screen
    return <LoadingScreen />;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalProvider>
  );
}

// Optional: Define a simple fallback loading screen component
function LoadingScreen() {
  try {
    return (
      <GlobalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GlobalProvider>
    );
  } catch (error) {
    console.error("GlobalProvider Error:", error);
    return <Text style={{ color: "red" }}>Something went wrong!</Text>;
  }
}
