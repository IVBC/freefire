import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
  href: string;
}
function NavLink({ children, href }: NavLinkProps): JSX.Element {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black',
  };

  const handleClick = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    router.push(href);
    console.log('click');
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default NavLink;
