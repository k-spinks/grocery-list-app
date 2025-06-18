import { useState } from "react";
import { useGroceryListStore, type GroceryItem } from "../store/store";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./ui/button";

type GroceryItemInput = {
  itemName: string;
  itemAmount: number;
  itemUnit: string;
};

export default function InputForm() {
  const { addItem } = useGroceryListStore();
  const [input, setInput] = useState<GroceryItemInput>({
    itemName: "",
    itemAmount: 0,
    itemUnit: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newItem: GroceryItem = {
      id: uuidv4(),
      name: input.itemName,
      amount: input.itemAmount,
      unit: input.itemUnit,
      completed: false,
    };
    addItem(newItem);

    setInput({
      itemName: "",
      itemAmount: 0,
      itemUnit: "",
    });
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    console.log(name, value);
    setInput((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="apples..."
        name="itemName"
        value={input.itemName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="2"
        name="itemAmount"
        value={input.itemAmount}
        onChange={handleChange}
        required
      />

      <label>
        Unit:
        <select name="itemUnit" onChange={handleChange}>
          <option value="" disabled selected>
            Select unit
          </option>
          <option value="lbs">lbs</option>
          <option value="oz">oz</option>
          <option value="grams">grams</option>
          <option value="kg">kg</option>
          <option value="cups">cups</option>
          <option value="tbsp">tbsp</option>
          <option value="tsp">tsp</option>
          <option value="pieces">pieces</option>
        </select>
      </label>
      <Button
        type="submit"
        className="hover:cursor-pointer"
        variant={"secondary"}
      >
        Add
      </Button>
    </form>
  );
}
