import { useState } from 'react';
import NavLink from './NavLink';
import LogoFF from '../../public/img/logo.svg';
import IconFacebook from '../../public/img/icon-facebook.svg';
import IconInstagram from '../../public/img/icon-instagram.svg';
import IconTwitter from '../../public/img/icon-twitter.svg';
import IconYoutube from '../../public/img/icon-youtube.svg';

import {
  Container,
  NavBar,
  NavMenu,
  Logo,
  NavList,
  NavSocial,
  MenuOne,
  MenuThree,
  MenuToggle,
  MenuTwo,
} from '@/styles/components/Header';
export default function Header(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    // <Container on={showMenu ? 1 : 0}>

    <Container>
      <NavBar>
        <NavMenu>
          <Logo>
            <LogoFF></LogoFF>
          </Logo>
          <NavList
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <li>
              <NavLink href="/">HOME</NavLink>
            </li>
            <li>
              <NavLink href="/tournaments">TORNEIOS</NavLink>
            </li>
            <li>
              <NavLink href="/squads">SQUADS</NavLink>
            </li>
            <li>
              <NavLink href="/about">Sobre</NavLink>
            </li>
            <li>
              <NavLink href="/winners">#WINNERS</NavLink>
            </li>
          </NavList>
        </NavMenu>

        <NavSocial>
          <IconFacebook />
          <IconInstagram />
          <IconTwitter />
          <IconYoutube />
        </NavSocial>

        <MenuToggle onClick={handleShowMenu}>
          <MenuOne />
          <MenuTwo />
          <MenuThree />
        </MenuToggle>
      </NavBar>
    </Container>
  );
}
