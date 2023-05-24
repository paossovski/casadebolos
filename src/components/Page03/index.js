import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb02 from '../../images/cdb_02.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page03 = () => {
  return(
    <div 
      id='Page03' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div className='Page03__Logo__Container'>
        <img className='Page03__Logo' src={cdb02} alt="" />
      </div>
      <div className='Page03__Text__Container'>
        <p className='Page__Text Page__Line--Height'>
          A Casa de Bolos nasceu no início de 2010 no interior de São Paulo criado pela Vó Sônia. Somos pioneiros e referência na produção e vendas dos nossos queridos bolos caseiros. Santa Catarina recebeu sua primeira loja em Florianópolis, no Centro em 2016 e, em 2017 no bairro do Estreito, seguido pela loja da Anita Garibaldi em 2018, em seguida em 2019, chegou a vez da Cidade de São José, no bairro Kobrasol, 2020 na cidade de Palhoça (e mudamos esta loja para a Mauro Ramos em 2021), e também no centro de Curitiba/PR, seguido por uma loja express no Bairro Novo Mundo em 2022. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Em pleno desenvolvimento organizacional, nós da Casa de Bolos trabalhamos investindo em novos processos gerenciais, estrutura administrativa, ampliação de nossas lojas modelos, pesquisas de mercado, além de atender um maior número de clientes. Portanto, a Casa de Bolos, privilegiando as atividades éticas fundamentais, se alicerça em três fundamentos básicos: 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ●	&nbsp; Qualidade de seus produtos e atendimento; <br/>
          ●	&nbsp; Crescimento ordenado e sustentável; <br/>
          ●	&nbsp; Compromisso com os resultados. 
        </p><br/><br/><br/>  
        <p className='Page__Text Page03__Text--Line'>
          Com base nestes preceitos a Casa de Bolos tem como Missão: <br/>
          “Oferecer as pessoas produtos de qualidade, que garantam sua satisfação, agregando <br/> sabor e valor às suas vidas, trazendo à lembrança as coisas que são realmente <br/> importantes.”
        </p><br/><br/><br/>
        <p className='Page__Text Page03__Text--Align'>
          Família Casa de Bolos.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={3} />
        </div>
      </div>
    </div>
  );
}