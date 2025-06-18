import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GroceryItem {
  id: string; // UUID
  name: string;
  amount: number;
  unit?: string;
  completed: boolean;
}

export interface GroceryListStore {
  groceryList: GroceryItem[];
  listId: string | null;
  setListId: (listId: string) => void;
  setList: (groceryList: GroceryItem[]) => void;
  addItem: (item: GroceryItem) => void;
  removeItem: (itemId: string) => void;
  editItem: (itemId: string, update: Partial<GroceryItem>) => void;
  completeItem: (itemId: string) => void;
  reorderItem: (fromIndex: number, toIndex: number) => void;
  clearList: () => void;
}

export const useGroceryListStore = create(
  devtools(
    persist<GroceryListStore>(
      (set) => ({
        groceryList: [
          {
            id: "2",
            name: "Apple",
            amount: 2,
            unit: "lbs",
            completed: true,
          },
          {
            id: "4",
            name: "Chicken Breast",
            amount: 4,
            unit: "lbs",
            completed: false,
          },
        ],
        listId: null,
        setListId: (id) => set(() => ({ listId: id })),
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
        reorderItem: (fromIndex: number, toIndex: number) =>
          set((state) => {
            const list = state.groceryList;
            const item = list[fromIndex];

            if (fromIndex === toIndex) {
              return state;
            }
            if (!item) {
              return state;
            }
            if (toIndex < 0 || toIndex >= list.length) {
              console.warn(`toIndex ${toIndex} is out of bounds.`);
              return state;
            }

            const tempList = list.filter((_, index) => index !== fromIndex);
            tempList.splice(toIndex, 0, item);
            return { groceryList: tempList };
          }),

        clearList: () => set({ groceryList: [] }),
      }),
      {
        name: "grocery-list-storage",
      },
    ),
  ),
);
