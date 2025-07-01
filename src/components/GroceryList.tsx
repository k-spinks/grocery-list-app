import GroceryListHeader from "./GroceryListHeader";
import GroceryListItems from "./GroceryListItems";

export default function GroceryList() {
  return (
    <div className="m-auto flex max-w-[350px] flex-col items-center border-2 border-gray-300/10 md:max-w-[400px] lg:max-w-[600px]">
      <GroceryListHeader />
      <GroceryListItems />
    </div>
  );
}
