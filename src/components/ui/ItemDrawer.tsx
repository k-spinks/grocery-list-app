import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { Button } from "./button";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import type { GroceryItem } from "@/store/store";

interface ItemDrawerProps {
  item: GroceryItem;
  isOpen: boolean;
  categories: { id: string; name: string; emoji: string }[];
  stores: { id: string; name: string }[];
  onClose: () => void;
  onSave: (updatedItem: GroceryItem) => void;
}

export default function ItemDrawer({
  item,
  isOpen,
  categories,
  stores,
  onClose,
  onSave,
}: ItemDrawerProps) {
  const [editedItem, setEditedItem] = useState<GroceryItem>(item);

  // Sync prop item into local state when drawer opens
  useEffect(() => {
    if (isOpen) {
      setEditedItem(item);
    }
  }, [isOpen, item]);

  function handleChange(
    field: keyof GroceryItem,
    value: string | number | boolean | undefined,
  ) {
    setEditedItem((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    onSave(editedItem);
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="border-border bg-background mx-auto mt-4 flex w-full max-w-md flex-col rounded-t-2xl border p-6 shadow-xl">
        <DrawerHeader className="space-y-1">
          <DrawerTitle className="text-foreground text-lg font-semibold">
            Edit Item
          </DrawerTitle>
          <DrawerDescription className="text-muted-foreground text-sm">
            Edit details for your grocery item.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-4">
          <Input
            value={editedItem.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Item name"
          />

          <div className="flex gap-2">
            <Input
              type="number"
              min="0"
              step="any"
              value={editedItem.amount ?? ""}
              onChange={(e) =>
                handleChange(
                  "amount",
                  e.target.value ? Number(e.target.value) : 0,
                )
              }
              placeholder="Amount"
            />
            <Input
              value={editedItem.unit ?? ""}
              onChange={(e) => handleChange("unit", e.target.value)}
              placeholder="Unit"
            />
          </div>

          <div className="flex gap-2">
            <Select
              value={editedItem.categoryId ?? ""}
              onValueChange={(val) => handleChange("categoryId", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.emoji} {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={editedItem.storeId ?? ""}
              onValueChange={(val) => handleChange("storeId", val)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select store (optional)" />
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
        </div>

        <DrawerFooter className="mt-4 flex justify-end gap-3">
          <Button
            className="hover:border-primary border-2 border-green-500 bg-transparent text-white hover:bg-green-500"
            onClick={handleSave}
          >
            Save
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
