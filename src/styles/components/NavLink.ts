import styled, { css } from 'styled-components';
import colors from '../colors';

interface LinkProps {
  active: boolean;
}
export const Link = styled.a<LinkProps>`
  display: inline-block;

  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 200;

  padding: 8px 16px;
  transition: 0.7s ease;

  color: ${colors.grayLight};

  position: relative;

  &::after {
    content: url('../img/shot.svg');
    display: block;
    position: absolute;
    left: 50%;
    top: -150%;
    transform: translate(-50%, -50%);
    z-index: -1;

    height: 54px;
    width: 54px;

    transition: 0.1s ease;

    opacity: 0;
  }

  &:hover {
    color: ${colors.whiteLight};
    /* font-weight: 600; */
    /* text-shadow: 1px 0px 0px ${colors.whiteLight}; */
    text-shadow: -0.1ex 0 #fff, 0.1ex 0 #fff;

    &::after {
      top: 50%;
      opacity: 0.8;
    }
  }

  ${(props) =>
    props.active &&
    css`
      color: ${colors.whiteLight};
    `}
`;
