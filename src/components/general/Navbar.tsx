import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section>
      <Link
        to={{
          pathname: '/',
        }}
      >
        Dashboard
      </Link>
      <Link
        to={{
          pathname: '/analytics',
        }}
      >
        Analytics
      </Link>
      <Link
        to={{
          pathname: '/logs',
        }}
      >
        Logs
      </Link>
    </section>
  );
}
