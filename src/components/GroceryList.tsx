import GroceryItemCard from "./GroceryItemCard";
import { useGroceryListStore } from "../store/store";
import InputForm from "./InputForm";
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

export default function GroceryList() {
  const { groceryList, removeItem, completeItem, clearList } =
    useGroceryListStore();
  function handleDelete(id: string) {
    removeItem(id);
  }
  function handleConfirmation(id: string) {
    completeItem(id);
  }
  function handleClear() {
    clearList();
  }

  return (
    <main>
      <div></div>
    </main>
  );
}
