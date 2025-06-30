import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

export default function LoginPage() {
  // const usernameRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const username = usernameRef.current?.value;

    console.log(username);
  }

  return (
    <div className="flex flex-col items-center">
      <Logo className="text-6xl" />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-8 mb-2 w-sm"
      >
        <Input
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">Login</Button>
      </form>
      <p className="text-center text-sm">
        You don't have an account? ,{" "}
        <a className="font-bold" href="/register">
          SignUp
        </a>
      </p>
    </div>
  );
}
