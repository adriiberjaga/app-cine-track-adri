import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-lg mt-4">
        The page you are looking for does not exist.
      </p>
      <p className="text-lg mt-2">
        Return to the{' '}
        <Link className="text-blue" to="/">
          home page
        </Link>
        .
      </p>
    </div>
  );
}
