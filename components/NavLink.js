import Link from 'next/link';

export const NavLink = ({ href, active, children }) => (
  <li>
    <Link href={href}>
      <a className={active ? 'active' : ''}>{children}</a>
    </Link>
  </li>
);