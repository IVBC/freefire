import { ReactNode } from 'react';
import { Container, Wrapper } from '@/styles/pages/_layouts/Default';
import Header from '@/components/Header';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}
