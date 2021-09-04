import styled from 'styled-components';
import colors from '../colors';

export const ContainerLeft = styled.div`
  max-width: 576px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerRigth = styled.div``;

export const ImageFreeFire = styled.img`
  /* width: 120%;
  */
  transform: translate3d(-11%, 0px, 0);
  position: absolute;
  bottom: 0;
  width: 115vh;
  z-index: -1;
  /* height: 100vh; */

  @media screen and (max-width: 960px) {
    position: static;

    width: 100%;
    transform: translate3d(0, 0, 0);
  }
`;

export const Banner = styled.div`
  /* margin-bottom: 3.2rem; */

  span {
    font-family: Rajdhani;
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 5.1rem;

    text-transform: uppercase;

    color: ${colors.white};
  }
`;

export const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 3.2rem 0;

  width: 100%;
`;

export const Topic = styled.div`
  position: relative;

  & + div {
    margin-top: 23px;
  }

  span {
    font-family: Mukta;
    font-style: normal;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.4rem;
    /* identical to box height, or 100% */

    letter-spacing: 0.2em;

    /* White/white-light */

    color: ${colors.whiteLight};
  }

  &::after {
    content: '';
    position: absolute;

    top: 110%;
    left: 0;

    border-radius: 2px;

    transform: skewX(-40deg);

    height: 8px;
    width: 140px;

    background-color: ${colors.secondary};
  }

  &:nth-child(1) {
    &::after {
      width: 12rem;
    }
  }

  &:nth-child(2) {
    &::after {
      width: 16rem;
    }
  }
  &:nth-child(3) {
    &::after {
      width: 20rem;
    }
  }
  &:nth-child(4) {
    &::after {
      width: 24rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin: 2.4rem 0;

  > span {
    margin-bottom: 16px;

    font-family: Mukta;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 140.5%;
    /* or 22px */

    letter-spacing: 0.3rem;

    /* White/white-light */

    color: #ffffff;
  }

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ButtonPrimary = styled.a`
  display: inline-block;

  cursor: pointer;
  padding: 10px 32px;
  border-radius: 3px;

  flex: 1;

  margin-right: 16px;

  /* height: 56px; */

  transform: skewX(-10deg);
  transition: 0.7s ease;

  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  line-height: 37px;

  color: ${colors.whiteLight};

  background: linear-gradient(225deg, #ff8d00 0%, #ce811b 100%);

  position: relative;

  &::after {
    content: '';
    display: block;

    position: absolute;

    top: -2px;
    left: -2px;

    width: 30%;
    height: 70%;
    opacity: 0;
    transition: 0.7s ease;

    /* background-color: ${colors.white}; */
    border-radius: 3px;

    border-top: 3px solid ${colors.white};
    border-left: 3px solid ${colors.white};
  }

  &::before {
    content: '';
    display: block;

    position: absolute;

    bottom: -2px;
    right: -2px;

    width: 30%;
    height: 70%;
    opacity: 0;
    transition: 0.7s ease;

    /* background-color: ${colors.white}; */
    border-radius: 3px;

    border-bottom: 3px solid ${colors.white};
    border-right: 3px solid ${colors.white};
  }

  &:hover {
    transform: skewX(-10deg) scale(1.05);

    letter-spacing: 0.02em;

    &::after {
      opacity: 1;
    }

    &::before {
      opacity: 1;
    }
  }
`;

export const ButtonSecondary = styled.a`
  margin-left: 16px;

  display: inline-block;

  cursor: pointer;
  padding: 8px 32px;
  border-radius: 3px;

  flex: 1;

  /* height: 56px; */

  transform: skewX(-10deg);
  transition: 0.7s ease;

  text-transform: uppercase;

  text-align: center;
  font-weight: bold;
  font-size: 22px;
  line-height: 37px;

  color: ${colors.whiteLight};

  background: transparent;

  position: relative;

  border: 2px solid ${colors.secondary};

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;

    z-index: -1;

    width: 0%;
    height: 103%;
    transition: 0.7s ease;

    background: linear-gradient(225deg, #ff8d00 0%, #ce811b 100%);
  }

  &:hover {
    transform: skewX(-10deg) scale(1.05);
    letter-spacing: 0.02em;

    &::after {
      width: 102%;
    }
  }
`;

export const Footer = styled.div`
  margin: 1.6rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
export const ElementContainer = styled.div`
  flex: 1;
  /* display: flex; */
  /* flex-direction: column; */
  /* margin-top: 1.2rem */
  > span {
    font-family: Mukta;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */

    letter-spacing: 0.1em;

    /* White/white-light */

    color: ${colors.white};
  }

  > div {
    display: flex;
    align-items: center;

    margin-top: 0.4rem;

    > img {
      width: 36px;
      margin-right: 1.2rem;

      cursor: pointer;

      transition: 0.2s ease;

      &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 4px ${colors.secondary});
      }
    }

    img + img {
      margin-left: 1.2rem;
    }

    > strong {
      font-family: Mukta;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */

      letter-spacing: 0.04em;

      /* White/white-light */

      color: ${colors.white};
    }
  }
`;
