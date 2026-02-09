import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AddItemScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [qty, setQty] = useState("1");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add an item</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="e.g. Oats"
        style={styles.input}
      />

      <Text style={styles.label}>Quantity</Text>
      <TextInput
        value={qty}
        onChangeText={setQty}
        keyboardType="number-pad"
        style={styles.input}
      />

      <Pressable
        style={styles.button}
        onPress={() => {
          // next step: save into storage
          router.back();
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 6 },
  label: { fontSize: 14, fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: "black",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "600" },
});
