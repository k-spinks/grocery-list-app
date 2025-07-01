import GroceryList from "./components/GroceryList";
import Header from "./components/Header";
import { Toaster } from "sonner";
import SidebarMenu from "./components/SidebarMenu";

export default function App() {
  return (
    <div className="m-auto mt-4 max-w-[1200px] px-4">
      <Header />

      <div className="mt-6 flex">
        <SidebarMenu />
        <div className="flex-1">
          <GroceryList />
        </div>
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}
