import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className="flex items-center justify-between gap-5">
      <h1 className="text-3xl">
        Grocery
        <span className="text-blue-600"> List</span>
      </h1>
      <div className="flex gap-4">
        {loggedIn ? (
          <Button
            className="hover:cursor-pointer"
            onClick={() => {
              setLoggedIn(false);
              toast.success("Logged Out", {
                description: "You have been logged out",
              });
            }}
          >
            {" "}
            Log Out
          </Button>
        ) : (
          <Button
            className="hover:cursor-pointer"
            onClick={() => {
              setLoggedIn(true);
              toast.success("Logged In", {
                description: "You have been logged in",
              });
            }}
          >
            Login
          </Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
