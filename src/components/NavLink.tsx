import { Link } from '@/styles/components/NavLink';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
  href: string;
}
function NavLink({ children, href }: NavLinkProps): JSX.Element {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    router.push(href);
    console.log('click');
  };

  return (
    <Link href={href} onClick={handleClick} active={router.pathname === href}>
      {children}
    </Link>
  );
}

export default NavLink;
