import { PlusCircle, Volume3, Edit, Trash2, Menu } from "@deemlol/next-icons";
import { useState } from "react";

export default function App() {
  const date = new Date();
  const createdDate = date.toLocaleDateString();

  const [isInputOpen, setIsInputOpen] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-[600px]">
        <div className="my-2 text-center">
          <h1 className="text-3xl font-bold">Grocery List</h1>
          <span className="text-sm">(created on {createdDate})</span>
        </div>
        <div className="flex h-40 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-black">
          hello from Grocery List
          <div className="flex items-center justify-end gap-3">
            <p className="text-blue-400 hover:cursor-pointer">reorder</p>
            <Volume3 size={24} color="black" className="hover:cursor-pointer" />
            <PlusCircle
              size={24}
              color="green"
              className={`hover:cursor-pointer`}
              onClick={() => {
                setIsInputOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
