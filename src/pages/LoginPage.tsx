import { useForm } from "react-hook-form";

import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit, formState } = useForm<LoginFormValues>();
  const { errors } = formState;

  const { logIn } = useUserContext();

  const navigate = useNavigate();

  function onSubmit(data: LoginFormValues) {
    // Supuestamente hacemos una petición a un endpoint para validar el login y nos devuelve un usuario
    // Si el usuario existe, se establece el usuario en el contexto y se redirecciona a la página de perfil
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.json();
        console.error("❌ Error al iniciar sesion:", errorData);
        alert("Error: " + errorData.error || "No se pudo iniciar sesion.");
        return;
      }
      const responseData = await res.json();
      console.log("✅ Usuario iniciado:", responseData);
      alert("Usuario iniciado correctamente");
      logIn(responseData);
      navigate("/");
    });
  }
  return (
    <div className="flex flex-col items-center">
      <Logo className="text-6xl" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-8 mb-2 w-sm"
      >
        <Input
          type="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />

        <Input
          type="password"
          placeholder="Password"
          errorMessage={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^[a-zA-Z0-9]{8,16}$/,
              message: "Password must be 8-16 characters long",
            },
          })}
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
