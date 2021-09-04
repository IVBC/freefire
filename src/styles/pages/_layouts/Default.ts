import styled from 'styled-components';

import colors from '@/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  /* overflow: auto; */

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  /* width: 100%; */
  margin: 0 auto;
  /* background: ${colors.primary}; */
  padding: 36px 16px 0;

  /* display: flex;
  flex-direction: row;
  align-items: center; */

  /* overflow: hidden; */

  flex: 1;
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;
