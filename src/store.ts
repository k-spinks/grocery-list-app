import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GroceryItem {
  id: string; // UUID
  name: string;
  quantity: number;
  measurement?: string;
  completed: boolean;
}

export interface GroceryListStore {
  groceryList: GroceryItem[];
  setList: (groceryList: GroceryItem[]) => void;
  addItem: (item: GroceryItem) => void;
  removeItem: (itemId: string) => void;
  editItem: (itemId: string, update: Partial<GroceryItem>) => void;
  completeItem: (itemId: string) => void;
  clearList: () => void;
}

export const useGroceryListStore = create(
  devtools(
    persist<GroceryListStore>(
      (set) => ({
        groceryList: [],
        setList: (groceryList: GroceryItem[]) => set(() => ({ groceryList })),
        addItem: (item: GroceryItem) =>
          set((state) => ({ groceryList: [...state.groceryList, item] })),
        removeItem: (itemId: string) =>
          set((state) => ({
            groceryList: state.groceryList.filter(
              (listItem) => listItem.id !== itemId,
            ),
          })),
        editItem: (itemId: string, update: Partial<GroceryItem>) =>
          set((state) => {
            const foundItem = state.groceryList.find(
              (item) => item.id === itemId,
            );
            if (!foundItem) {
              console.warn(`${itemId} does not exist`);
              return state;
            }
            return {
              groceryList: state.groceryList.map((item) =>
                item.id === itemId ? { ...item, ...update } : item,
              ),
            };
          }),
        completeItem: (itemId: string) =>
          set((state) => {
            const foundItem = state.groceryList.find(
              (item) => item.id === itemId,
            );
            if (!foundItem) {
              console.warn(`${itemId} does not exist`);
              return state;
            }
            return {
              groceryList: state.groceryList.map((item) =>
                item.id === itemId
                  ? { ...item, completed: !item.completed }
                  : item,
              ),
            };
          }),

        clearList: () => set({ groceryList: [] }),
      }),
      {
        name: "grocery-list-storage",
      },
    ),
  ),
);
