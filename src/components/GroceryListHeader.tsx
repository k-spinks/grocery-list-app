import { useState, useRef } from "react";
import { UserPlus, Edit3, MoreVertical } from "@deemlol/next-icons";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function GroceryListHeader() {
  const [title, setTitle] = useState("Groceries");
  const titleDivRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  function updateTitle() {
    const newTitle = titleDivRef.current?.innerText?.trim() || "";

    if (newTitle === "") {
      // Restore previous title visually
      titleDivRef.current!.innerText = title;
      return;
    }

    if (newTitle !== title) {
      setTitle(newTitle);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      updateTitle();
      titleDivRef.current?.blur();
    }
  }

  return (
    <div className="flex w-full items-center justify-between border-b-2 p-4">
      <div
        contentEditable
        ref={titleDivRef}
        onBlur={updateTitle}
        suppressContentEditableWarning
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="flex min-h-8 w-full max-w-3xs items-center justify-between rounded-2xl p-2 text-2xl text-nowrap outline-0 transition-colors duration-200 hover:bg-gray-200/10 focus:bg-gray-200/10"
      >
        {title}
        {isActive && <Edit3 color="#DADADA" />}
      </div>
      <div className="flex gap-5">
        <UserPlus
          className="hover:cursor-pointer"
          onClick={() =>
            toast.success("User Invited", {
              description: "You have invited a new user",
            })
          }
        />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className="hover:cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:cursor-pointer">
              Sort
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Save Template
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Print
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
