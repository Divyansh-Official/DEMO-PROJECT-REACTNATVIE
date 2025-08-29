import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: false
  }}>

    <Stack.Screen name="(tabs)" options={{ title: "Index" }} />
    {/* <Stack.Screen name="nav1" options={{ title: "Nav1" }} /> */}

  </Stack>;
}
