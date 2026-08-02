import Link from 'next/link';

export const NavLink = ({ href, active, children }) => (
  <li>
    <Link href={href} className={active ? 'active' : ''}>
      {children}
    </Link>
  </li>
);