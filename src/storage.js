import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "TRAIL_COMPASS_PINS_V1";

// TODO: Load the saved pins
export async function loadPins() {
  try {
    const result = await AsyncStorage.getItem(KEY);
    return result ? JSON.parse(result) : [];
  } catch (err) {
    console.log("Error loading pins", err);
    return [];
  }
}

// TODO: Save the pins locally
export async function savePins(pins) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(pins));
  } catch (err) {
    console.log("Error saving pins", err);
  }
}