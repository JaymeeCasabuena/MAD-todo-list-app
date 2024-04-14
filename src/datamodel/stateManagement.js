import { loadData, saveData } from "./Data";
import { useState, useEffect } from "react";

export function manageState() {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    const loadTaskItems = async () => {
      const data = await loadData("taskItems");
      if (data) {
        setTaskItems(data);
      }
    };
    loadTaskItems();
  }, []);

  const saveTaskItems = async (updatedTaskItems) => {
    setTaskItems(updatedTaskItems);
    await saveData("taskItems", updatedTaskItems);
  };

  return { taskItems, saveTaskItems };
}
