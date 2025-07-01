import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function NotFoundPage() {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (time === 0) {
      navigate("/");
    }
  }, [time, navigate]);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <p className="text-lg mt-2">
        Return to the{" "}
        <Link className="text-blue" to="/">
          home page in {time} seconds
        </Link>
        .
      </p>
    </div>
  );
}
