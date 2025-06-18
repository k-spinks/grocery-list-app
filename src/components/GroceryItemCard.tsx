import { Button } from "./ui/button";

type Props = {
  name: string;
  amount: number;
  unit: string | undefined;
  completed: boolean;
  handleDelete: () => void;
  handleConfirmation: () => void;
};

export default function GroceryItemCard(props: Props) {
  const { name, amount, unit, completed, handleDelete, handleConfirmation } =
    props;

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={handleConfirmation}
        className={`flex items-start justify-center gap-2 ${completed ? "text-gray-300" : ""}`}
      >
        <h1>{name}</h1>
        <div className="flex">
          <p>{amount}</p>
          {unit && <p>{unit}</p>}
        </div>
      </div>
      <Button
        onClick={handleDelete}
        className="bg-red-600 hover:cursor-pointer"
        variant={"destructive"}
      >
        remove
      </Button>
    </div>
  );
}
