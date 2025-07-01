import { useGroceryListStore, type GroceryItem } from "@/store/store";
import { useState } from "react";
import GroceryItemCard from "./GroceryItemCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import ItemDrawer from "./ui/ItemDrawer";

export default function GroceryListItems() {
  const {
    groceryList,
    removeItem,
    completeItem,
    clearList,
    getItemInfo,
    updateItem,
    isMenuOpen,
    toggleMenu,
    categories,
    stores,
  } = useGroceryListStore();

  const [selectedItem, setSelectedItem] = useState<GroceryItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleConfirmation(id: string) {
    completeItem(id);
  }

  function handleDelete(id: string) {
    removeItem(id);
  }

  function handleClear() {
    clearList();
  }

  function handleEdit(id: string) {
    const item = getItemInfo(id);
    if (item) {
      setSelectedItem(item);
      setDrawerOpen(true);
    }
  }

  function handleSave(updatedItem: GroceryItem) {
    updateItem(updatedItem);
    setDrawerOpen(false);
  }

  return (
    <div className="w-full px-6">
      <div className="flex flex-col gap-4">
        {groceryList.length > 0 ? (
          groceryList.map((item) => (
            <GroceryItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              amount={item.amount ?? 0}
              unit={item?.unit}
              completed={item.completed}
              categoryId={item.categoryId}
              handleEdit={() => handleEdit(item.id)}
              handleConfirmation={() => handleConfirmation(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          ))
        ) : (
          <span>Add a new item to your list!</span>
        )}

        <Button
          className={
            isMenuOpen
              ? "hidden"
              : `bg-blue-500/80 text-white hover:cursor-pointer hover:bg-green-500/80`
          }
          onClick={toggleMenu}
        >
          + Add Item
        </Button>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          {groceryList.length > 0 && (
            <span className="text-center text-gray-500/50 hover:cursor-pointer hover:text-red-500">
              Clear
            </span>
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all items in your list. This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleClear}
              className="border-2 border-red-500 bg-transparent text-white hover:cursor-pointer hover:bg-red-500"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {selectedItem && (
        <ItemDrawer
          item={selectedItem}
          isOpen={drawerOpen}
          categories={categories}
          stores={stores}
          onClose={() => setDrawerOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
