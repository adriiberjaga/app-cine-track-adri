import { createContext } from 'react';
import type { User } from '../config/types';

interface UserContextType {
  user: User | null;
  logIn: (user: User) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
