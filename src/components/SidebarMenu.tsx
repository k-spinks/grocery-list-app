import { Input } from "./ui/input";
import { X } from "@deemlol/next-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useGroceryListStore } from "@/store/store";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";

export default function SidebarMenu() {
  const { categories, stores, isMenuOpen, toggleMenu, addItem } =
    useGroceryListStore();

  function handleAdd() {
    // Add item logic here
  }

  return (
    <aside
      className={`border-border bg-background fixed top-0 right-0 z-50 flex h-full w-[300px] flex-col border-l shadow-lg transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="border-border flex items-center justify-between border-b p-4">
        <h4 className="text-lg font-semibold">Add Item</h4>
        <button
          onClick={toggleMenu}
          className="hover:bg-muted rounded p-1 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="popular" className="flex flex-1 flex-col p-4">
        <TabsList className="mb-4 grid grid-cols-2 gap-2">
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        {/* Popular Content */}
        <TabsContent value="popular">
          <p className="text-muted-foreground text-sm">Search for items</p>
          {/* Add search or popular items here */}
        </TabsContent>

        {/* Manual Entry Content */}
        <TabsContent value="manual" className="space-y-4">
          <Input type="text" placeholder="Name" />
          <Input type="number" placeholder="Amount" />
          <Input type="text" placeholder="Unit" />

          {/* Category Selection */}
          <div>
            <label className="text-muted-foreground mb-1 block text-sm">
              Category
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.emoji} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Store Selection */}
          <div>
            <label className="text-muted-foreground mb-1 block text-sm">
              Store
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a store" />
              </SelectTrigger>
              <SelectContent>
                {stores.map((store) => (
                  <SelectItem key={store.id} value={store.id}>
                    {store.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full" onClick={handleAdd}>
            Add Item
          </Button>
        </TabsContent>
      </Tabs>
    </aside>
  );
}
