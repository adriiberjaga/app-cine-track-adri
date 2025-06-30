import { useState, type ReactNode } from 'react';
import { UserContext } from './UserContext';
import type { User } from '../config/types';
import { getItemFromLocalStorage } from '../helpers/getUserFromLocalStorage';

interface Props {
  children: ReactNode;
}

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(() => {
    const user = getItemFromLocalStorage<User>('movie-tracker-user');
    return user;
  });

  function logIn(user: User) {
    setUser(user);
    localStorage.setItem('movie-tracker-user', JSON.stringify(user));
  }

  function logOut() {
    setUser(null);
    localStorage.removeItem('movie-tracker-user');
  }

  const contextValue = { user, logIn, logOut };

  return <UserContext value={contextValue}>{children}</UserContext>;
}
