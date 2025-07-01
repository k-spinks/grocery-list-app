import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface GroceryItem {
  id: string;
  name: string;
  amount?: number;
  unit?: string;
  completed: boolean;
  storeId?: string;
  categoryId?: string | undefined;
}

export interface StoreInfo {
  id: string;
  name: string;
  color: string;
}

export interface ItemCategory {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export interface GroceryListStore {
  // Grocery List State
  groceryList: GroceryItem[];
  stores: StoreInfo[];
  categories: ItemCategory[];
  listId: string | null;

  setListId: (listId: string) => void;
  setList: (groceryList: GroceryItem[]) => void;
  addItem: (item: GroceryItem) => void;
  removeItem: (itemId: string) => void;
  updateItem: (updatedItem: GroceryItem) => void;
  completeItem: (itemId: string) => void;
  reorderItem: (fromIndex: number, toIndex: number) => void;
  clearList: () => void;

  setStores: (stores: StoreInfo[]) => void;
  setCategories: (categories: ItemCategory[]) => void;
  getStoreInfo: (storeId: string) => StoreInfo | undefined;
  getCategoryInfo: (categoryId: string) => ItemCategory | undefined;
  getItemInfo: (itemId: string) => GroceryItem | undefined;

  // Menu State
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useGroceryListStore = create(
  devtools(
    persist<GroceryListStore>(
      (set, get) => ({
        groceryList: [
          {
            id: "101",
            name: "Bananas",
            amount: 12,
            unit: "pcs",
            completed: false,
            storeId: "1", // Walmart
            categoryId: "15", // Fruits & Veggies
          },
          {
            id: "102",
            name: "Cheddar Cheese",
            completed: false,
            storeId: "2", // Target
            categoryId: "10", // Dairy & Eggs
          },
          {
            id: "103",
            name: "Shampoo",
            amount: 1,
            completed: false,
            categoryId: "24", // Personal Care
          },
          {
            id: "104",
            name: "Carrots",
            amount: 3,
            unit: "lbs",
            completed: false,
            categoryId: "15", // Fruits & Veggies
          },
          {
            id: "105",
            name: "Almond Milk",
            completed: false,
            storeId: "6", // Whole Foods
            categoryId: "10", // Dairy & Eggs
          },
        ],
        stores: [
          { id: "1", name: "Walmart", color: "#1E90FF" },
          { id: "2", name: "Target", color: "#E03C31" },
          { id: "3", name: "Kroger", color: "#0057B8" },
          { id: "4", name: "Costco", color: "#E31837" },
          { id: "5", name: "Aldi", color: "#0073CF" },
          { id: "6", name: "Whole Foods", color: "#2F6F4E" },
          { id: "7", name: "Trader Joe's", color: "#E53935" },
          { id: "8", name: "Meijer", color: "#0074D9" },
          { id: "9", name: "Sam's Club", color: "#0096D6" },
          { id: "10", name: "Local Farmers Market", color: "#4CAF50" },
          { id: "11", name: "Other", color: "#6B7280" }, // neutral gray
        ],
        categories: [
          { id: "1", name: "Alcohol", emoji: "🍷", color: "#8B0000" },
          { id: "2", name: "Automotive", emoji: "🚗", color: "#1E90FF" },
          { id: "3", name: "Baby Products", emoji: "🍼", color: "#FFB6C1" },
          { id: "4", name: "Bakery", emoji: "🥖", color: "#F5DEB3" },
          { id: "5", name: "Baking Essentials", emoji: "🧁", color: "#FFA07A" },
          { id: "6", name: "Beverages", emoji: "🥤", color: "#00CED1" },
          { id: "7", name: "Cleaning Supplies", emoji: "🧽", color: "#708090" },
          { id: "8", name: "Clothing", emoji: "👕", color: "#6A5ACD" },
          { id: "9", name: "Coffee & Tea", emoji: "☕", color: "#6F4E37" },
          { id: "10", name: "Dairy & Eggs", emoji: "🧀", color: "#FFFACD" },
          { id: "11", name: "Dry Goods", emoji: "🌾", color: "#D2B48C" },
          { id: "12", name: "Electronics", emoji: "💻", color: "#4682B4" },
          { id: "13", name: "Fish & Seafood", emoji: "🐟", color: "#20B2AA" },
          { id: "14", name: "Frozen Foods", emoji: "🧊", color: "#ADD8E6" },
          { id: "15", name: "Fruits & Veggies", emoji: "🥕", color: "#FF6347" },
          { id: "16", name: "Health", emoji: "💊", color: "#32CD32" },
          { id: "17", name: "Home & Garden", emoji: "🪴", color: "#228B22" },
          { id: "18", name: "Household Items", emoji: "🧻", color: "#A9A9A9" },
          { id: "19", name: "Kitchen Supplies", emoji: "🍽️", color: "#BDB76B" },
          { id: "20", name: "Meat & Poultry", emoji: "🥩", color: "#B22222" },
          { id: "21", name: "Other", emoji: "🏷️", color: "#696969" },
          { id: "22", name: "Party Supplies", emoji: "🎉", color: "#FF1493" },
          { id: "23", name: "Pet Supplies", emoji: "🐾", color: "#FF7F50" },
          { id: "24", name: "Personal Care", emoji: "🧴", color: "#FFC0CB" },
          {
            id: "25",
            name: "Sauces & Seasonings",
            emoji: "🧂",
            color: "#FFA500",
          },
          { id: "26", name: "Snacks & Sweets", emoji: "🍫", color: "#D2691E" },
          { id: "27", name: "Stationery", emoji: "📝", color: "#DAA520" },
          { id: "28", name: "Tools & Hardware", emoji: "🛠️", color: "#FF8C00" },
        ],

        listId: null,

        setListId: (id) => set(() => ({ listId: id })),
        setList: (groceryList: GroceryItem[]) => set(() => ({ groceryList })),
        addItem: (item: GroceryItem) =>
          set((state) => {
            const newItem = {
              ...item,
              categoryId:
                item.categoryId && item.categoryId.trim() !== ""
                  ? item.categoryId
                  : "21",
            };

            return {
              groceryList: [...state.groceryList, newItem],
            };
          }),

        removeItem: (itemId: string) =>
          set((state) => ({
            groceryList: state.groceryList.filter(
              (listItem) => listItem.id !== itemId,
            ),
          })),
        updateItem: (updatedItem) =>
          set((state) => ({
            groceryList: state.groceryList.map((item) =>
              item.id === updatedItem.id ? { ...item, ...updatedItem } : item,
            ),
          })),
        completeItem: (itemId: string) =>
          set((state) => ({
            groceryList: state.groceryList.map((item) =>
              item.id === itemId
                ? { ...item, completed: !item.completed }
                : item,
            ),
          })),
        reorderItem: (fromIndex, toIndex) =>
          set((state) => {
            const list = [...state.groceryList];
            const [movedItem] = list.splice(fromIndex, 1);

            if (
              !movedItem ||
              fromIndex === toIndex ||
              toIndex < 0 ||
              toIndex >= list.length
            ) {
              return state;
            }

            list.splice(toIndex, 0, movedItem);
            return { groceryList: list };
          }),

        clearList: () => set({ groceryList: [] }),

        setStores: (stores) =>
          set(() => ({
            stores,
          })),

        setCategories: (categories) =>
          set(() => ({
            categories,
          })),
        getStoreInfo: (storeId) =>
          get().stores.find((store) => store.id === storeId),
        getCategoryInfo: (categoryId) =>
          get().categories.find((category) => category.id === categoryId),
        getItemInfo: (itemId) =>
          get().groceryList.find((item) => item.id === itemId),

        // Menu State
        isMenuOpen: false,
        toggleMenu: () =>
          set((state) => ({
            isMenuOpen: !state.isMenuOpen,
          })),
      }),

      {
        name: "grocery-list-storage",
      },
    ),
  ),
);
