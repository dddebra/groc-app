import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SetupScreen(){
    const router = useRouter();
    const [householdSize, setHouseholdSize] = useState("1");

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Welcome!</Text>
            <Text style = {styles.subtitle}>Let's set up your household.</Text>
            <Text style = {styles.label}>Household size</Text>
            <TextInput
                value={householdSize}
                onChangeText={setHouseholdSize}
                keyboardType="number-pad"
                placeholder="e.g. 2"
                style={styles.input}
            />
            <Pressable
                style={styles.button}
                onPress={() => router.push("/pantry")}
            >
                <Text style = {styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, gap: 12, justifyContent: "center" },
    title: {fontSize: 28, fontWeight: "700"},
    subtitle: {fontSize: 16, opacity: 0.7, marginBottom: 16},
    label: {fontSize: 14, fontWeight: 600},
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
    buttonText: {color: "white", fontSize: 16, fontWeight: "600"},
    });