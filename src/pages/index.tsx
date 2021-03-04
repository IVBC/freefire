import SEO from '@/components/SEO';
import { ContainerRigth, ContainerLeft, Banner } from '@/styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="FREE-FIRE CAMP" shouldExcludeTitleSuffix image="freefire.jpg"></SEO>
      <ContainerRigth>
        <Banner>
          <span>CAMPEONATOS DIÁRIOS DE</span>
          <img src="img/banner.png" alt="FreeFire" />
        </Banner>
        <div></div>
        <div></div>
        <div></div>
      </ContainerRigth>
      <ContainerLeft></ContainerLeft>
    </>
  );
}
