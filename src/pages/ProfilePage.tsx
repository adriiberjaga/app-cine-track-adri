import { useUserContext } from "../hooks/useUserContext";

export default function ProfilePage() {
  const { user, logOut } = useUserContext();
  console.log(user);
  return (
    <div>
      {user ? (
        <>
          <p>Bienvenido, {user.username}</p>
          <button onClick={logOut}>Cerrar sesión</button>
        </>
      ) : (
        <p>No estás logueado.</p>
      )}
    </div>
  );
}
