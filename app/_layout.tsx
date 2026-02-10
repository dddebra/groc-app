import { Stack } from "expo-router";
// stacks "windows" or screens on top of each other
// defines navigation
export default function Layout(){
  return (
    <Stack
    screenOptions={{
      headerTitleAlign: "center",
    }}
    >
      <Stack.Screen name="index" options={{title: "Setup"}} />
      <Stack.Screen name="pantry" options={{title: "Pantry"}} />
      <Stack.Screen name="add-item" options={{title: "Add Item"}} />
    </Stack>
  );
}