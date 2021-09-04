import SEO from '@/components/SEO';

import {
  ContainerRigth,
  ContainerLeft,
  Banner,
  TopicContainer,
  Topic,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ImageFreeFire,
  Footer,
  ElementContainer,
} from '@/styles/pages/Home';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <SEO title="FREE-FIRE CAMP" shouldExcludeTitleSuffix image="freefire.jpg"></SEO>
      <ContainerLeft>
        <Banner>
          <span>CAMPEONATOS DIÁRIOS DE</span>
          <img src="img/banner.png" alt="FreeFire" />
        </Banner>
        <TopicContainer>
          <Topic>
            <span>Escolha um Diário!</span>
          </Topic>
          <Topic>
            <span>Chame e cadastre sua SQUAD!</span>
          </Topic>
          <Topic>
            <span>Derrote seus inimigos!</span>
          </Topic>
          <Topic>
            <span>Ganhe prêmios em dinheiro!</span>
          </Topic>
        </TopicContainer>
        <ButtonsContainer>
          <span>Aqui todo dia é dia de bala e de premiações!</span>
          <div>
            <ButtonPrimary>ENTRAR</ButtonPrimary>
            <ButtonSecondary>INSCREVA-SE</ButtonSecondary>
          </div>
        </ButtonsContainer>
        <Footer>
          <ElementContainer>
            <span>Contato</span>
            <div>
              <img src="./img/wpp.png" alt="Whatsapp" />
              <strong>(92) 99494-6693</strong>
            </div>
          </ElementContainer>

          <ElementContainer>
            <span>Formas de pagamentos</span>
            <div>
              <img src="./img/nubank.png" alt="Whatsapp" />
              <img src="./img/picpay.png" alt="Whatsapp" />
              <img src="./img/ml.png" alt="Whatsapp" />
              <img src="./img/boleto.png" alt="Whatsapp" />
            </div>
          </ElementContainer>
        </Footer>
      </ContainerLeft>
      <ContainerRigth>
        <ImageFreeFire src="img/freefire.jpg" alt="FreeFire" />
      </ContainerRigth>
    </>
  );
}
