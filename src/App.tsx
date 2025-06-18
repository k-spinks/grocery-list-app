// import { PlusCircle, Volume3, Edit, Trash2, Menu } from "@deemlol/next-icons";
import GroceryItemCard from "./components/GroceryItemCard";
import { useGroceryListStore } from "./store/store";
import InputForm from "./components/InputForm";
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
} from "./components/ui/alert-dialog";
import { Button } from "./components/ui/button";

export default function App() {
  // const date = new Date();
  // const createdDate = date.toLocaleDateString();
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
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-[600px] flex-col">
        <h1 className="text-center">Grocery List</h1>
        <div className="border-2 border-amber-500">
          <div className="flex flex-col">
            {groceryList.length > 0 ? (
              groceryList.map((item) => (
                <GroceryItemCard
                  key={item.id}
                  name={item.name}
                  amount={item.amount}
                  unit={item?.unit}
                  completed={item.completed}
                  handleConfirmation={() => handleConfirmation(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                />
              ))
            ) : (
              <div>Enter an item</div>
            )}
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Clear</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your grocery list.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleClear}>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <InputForm />
      </div>
    </main>
  );
}
