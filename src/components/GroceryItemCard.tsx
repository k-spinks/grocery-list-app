import { useState } from "react";
import ToggleCircle from "./ui/ToggleCircle";
import { useGroceryListStore } from "@/store/store";

type Props = {
  id: string;
  name: string;
  amount: number;
  unit: string | undefined;
  completed: boolean;
  categoryId?: string;
  handleDelete: () => void;
  handleEdit: () => void;
  handleConfirmation: () => void;
};

export default function GroceryItemCard(props: Props) {
  const {
    name,
    amount,
    unit,
    categoryId,
    completed,
    handleDelete,
    handleEdit,
    handleConfirmation,
  } = props;
  const { getCategoryInfo } = useGroceryListStore();
  const categoryInfo = categoryId ? getCategoryInfo(categoryId) : undefined;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className="flex w-full items-center justify-between p-2 hover:cursor-pointer hover:bg-gray-300/20"
      onClick={handleEdit}
    >
      <div className="flex items-center justify-between gap-6">
        <ToggleCircle checked={isChecked} onChange={setIsChecked} />
        <h3 className="text-lg">{name}</h3>
        {amount !== 0 && (
          <span className="text-gray-400/50">
            {amount} {""}
            {unit}
          </span>
        )}
      </div>
      <span className="text-2xl">{categoryInfo?.emoji}</span>
    </div>
  );
}
