import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadData(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      const todoData = JSON.parse(data);
      return todoData;
    }
    return null;
  } catch (e) {
    console.log(`fail to read data with key ${key}`, e);
    return null;
  }
}

export async function saveData(key, todoData) {
  const str = JSON.stringify(todoData);

  try {
    await AsyncStorage.setItem(key, str);
  } catch (e) {
    console.log("fail to save data", e);
  }
}

export async function clearData() {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage cleared successfully");
  } catch (error) {
    console.error("Failed to clear AsyncStorage", error);
  }
}
