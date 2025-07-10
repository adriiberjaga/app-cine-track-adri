import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterFormValues,
} from "../schemas/userSchemas";

import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { useNavigate } from "react-router";

// interface RegisterFormValues {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

export default function RegisterPage() {
  const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  const { errors } = formState;
  const navigate = useNavigate();

  function onSubmit(data: RegisterFormValues) {
    //aqui mandamos  a expres
    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          console.error("❌ Error al registrar:", errorData);
          alert("Error: " + errorData.error || "No se pudo registrar.");
          return;
        }
        const responseData = await res.json();
        console.log("✅ Usuario registrado:", responseData);
        alert("Usuario registrado correctamente");

        ///////
        navigate("/login");
      })
      .catch((error) => {
        console.error("❌ Error en la petición:", error);
        alert("Error en la red o servidor");
      });

    console.log(data);
  }

  return (
    <div className="flex flex-col items-center">
      <Logo className="text-6xl" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-8 mb-2 w-sm"
      >
        <Input
          placeholder="Username"
          {...register("username")}
          errorMessage={errors.username?.message}
        />
        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
          errorMessage={errors.password?.message}
        />
        <Input
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword")}
          errorMessage={errors.confirmPassword?.message}
        />
        <Button type="submit">Register</Button>
      </form>
      <p className="text-center text-sm">
        Already have an account? ,{" "}
        <a className="font-bold" href="/login">
          Login
        </a>
      </p>
    </div>
  );
}
