import { Link } from 'react-router-dom';

export default function ProjectNavbar() {
  return (
    <section>
      <Link
        to={{
          pathname: '/dashboard',
        }}
      >
        Dashboard
      </Link>
      <Link
        to={{
          pathname: '/dashboard/analytics',
        }}
      >
        Analytics
      </Link>
      <Link
        to={{
          pathname: '/dashboard/logs',
        }}
      >
        Logs
      </Link>
      <Link
        to={{
          pathname: '/dashboard/types',
        }}
      >
        Types
      </Link>
    </section>
  );
}
