import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';

export default function RegisterPage() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="flex flex-col items-center">
      <Logo className="text-6xl" />

      <form className="flex flex-col gap-4 mt-8 mb-2 w-sm">
        <Input
          placeholder="Username"
          name="username"
          value={formValues.username}
          onChange={handleFormChange}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleFormChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleFormChange}
        />
        <Input
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={handleFormChange}
        />
        <Button type="submit">Register</Button>
      </form>
      <p className="text-center text-sm">
        Already have an account? ,{' '}
        <a className="font-bold" href="/login">
          Login
        </a>
      </p>
    </div>
  );
}
