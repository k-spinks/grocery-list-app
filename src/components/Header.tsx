import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <header>
      <h1
        onClick={() => {
          toast.success("Test", {
            description: "This is a test toast",
          });
        }}
      >
        Hello from header
      </h1>
      {loggedIn ? (
        <Button
          className="hover:cursor-pointer"
          onClick={() => {
            setLoggedIn(true);
            toast.success("Logged In", {
              description: "You have been logged in",
            });
          }}
        >
          {" "}
          Login
        </Button>
      ) : (
        <Button
          variant={"secondary"}
          className="hover:cursor-pointer"
          onClick={() => {
            setLoggedIn(false);
            toast.success("Logged In", {
              description: "You have been logged in",
            });
          }}
        >
          Log Out
        </Button>
      )}
      <ModeToggle />
    </header>
  );
}
