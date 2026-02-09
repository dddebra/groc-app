import {View, Text, Pressable, StyleSheet, FlatList} from "react-native";
import {useRouter} from "expo-router";
import {useState} from "react";

type PantryItem = {
    id: string;
    name: string;
    qty: number;
};

export default function PantryScreen(){
    const router = useRouter();
    const [items] = useState<PantryItem[]>([
        { id: "1", name: "Eggs", qty: 12},
        { id: "2", name: "Green Yogurt", qty: 1}
    ]);

    return (
        <View style = {styles.container}>
            <Pressable style = {styles.addBtn} onPress = {() => router.push("/add-item")}>
                <Text style = {styles.addBtnText}> + Add Item </Text>
            </Pressable>
            <FlatList
                data={items}
                keyExtractor={(i) => i.id}
                contentContainerStyle={{gap: 10, paddingTop: 10}}
                renderItem = {({ item }) => (
                    <View style = {styles.card}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemMeta}>Qty: {item.qty} </Text>
                        </View>
                )}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20},
    addBtn: {
        backgroundColor: "black",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    addBtnText: {color: "white", fontSize: 16, fontWeight: "600"},
    card: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 14,
        padding: 14,
    },
    itemName: {fontSize: 18, fontWeight: "700"},
    itemMeta: {marginTop: 6, opacity: 0.7},
});