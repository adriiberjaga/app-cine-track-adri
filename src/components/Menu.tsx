import { useNavigate } from "react-router";
import { TbLogout } from "react-icons/tb";

import MenuLink from "./MenuLink";
import Button from "./Button";

import { useUserContext } from "../hooks/useUserContext";

interface Props {
  isHidden?: boolean;
  direction?: "horizontal" | "vertical";
}

export default function Menu(props: Props) {
  const { user, logOut } = useUserContext();

  const navigate = useNavigate();

  const { isHidden = false, direction = "horizontal" } = props;

  const directionClasses = direction === "vertical" ? "flex-col" : "";

  const hiddenClasses = isHidden ? "hidden md:flex" : "flex";

  const classes = `items-center gap-4 ${directionClasses} ${hiddenClasses}`;

  function handleLogOut() {
    logOut();
    navigate("/");
  }

  return (
    <nav className={classes}>
      {!user && <MenuLink href="/login">Login</MenuLink>}
      {!user && <MenuLink href="/register">Registro</MenuLink>}
      {user && <MenuLink href="/my-movies">Mis películas</MenuLink>}
      {user && <MenuLink href="/profile">Perfil</MenuLink>}
      {user && (
        <Button
          variant="secondary"
          className="text-xl p-2"
          onClick={handleLogOut}
          aria-label="Logout button"
        >
          <TbLogout />
        </Button>
      )}
    </nav>
  );
}
