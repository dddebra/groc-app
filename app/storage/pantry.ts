import AsyncStorage from "@react-native-async-storage/async-storage";

export type PantryItem = {
    id: string;
    name: string;
    qty: number;
    createdAt: number;
};

const KEY = "PANTRY_ITEMS_V1";

export async function getPantryItems(): Promise<PantryItem[]> {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return[];
    try{
        return JSON.parse(raw) as PantryItem[];
    } catch {
        return [];
    }
}

export async function savePantryItems(items:PantryItem[]): Promise<void> {
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
}

export async function addPantryItem(input: {
    name: string;
    qty: number;
}): Promise<PantryItem> {
    const items = await getPantryItems();

    const newItem: PantryItem = {
        id: String(Date.now()),
        name: input.name.trim(),
        qty: input.qty,
        createdAt: Date.now()
    };
    const next = {newItem, ...items};
    await savePantryItems(next);
    return newItem;
}