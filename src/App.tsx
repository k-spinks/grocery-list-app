import Header from "./components/Header";
import { Toaster } from "sonner";

export default function App() {
  // const date = new Date();
  // const createdDate = date.toLocaleDateString();
  return (
    <div>
      <Header />
      <Toaster position="top-center" richColors />
    </div>
  );
}

{
  /* <div className="border-2 border-amber-500">
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
        </div> */
}
