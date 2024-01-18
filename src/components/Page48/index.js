import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page48 = () => {
  return(
    <div 
      id='Page48' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page48__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>SACOLAS PLÁSTICAS -</b> Temos, é a nossa principal sacola, mas parabenize quem evitar, não queremos utilizá-las mesmo.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CLIENTE PERGUNTA:</b> Por que não tem sacola de papel? Até o momento é devido ao custo dessas sacolas. Temos a opção de colocar os Bolos no   Pote em Sacos de Papel, mas não adianta colocar em sacolas plásticas em seguida ou ofereça a BoloBag que tem custo. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CARTÃO FIDELIDADE COM PRAZO DE VALIDADE:</b> Evitar ao máximo reclamações sobre o fidelidade, dar sempre solução. Prazo de 90 dias, mencionar que é menos de um bolo por semana para completar o cartão. É possível SIM efetuar a trocar.
        Acrescentar que o benefício da troca começa a partir do QUINTO CARIMBO:
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          ⮚ &nbsp; 5 = 1 caixa presente;<br/>
          ⮚	&nbsp; 6 = 1 mini bolo;<br/>
          ⮚	&nbsp; 7 = 1 bolo no pote;<br/>
          ⮚	&nbsp; 8 = 1 bolobag;<br/>
          ⮚	&nbsp; 10 = 1 bolo (referência é SEMPRE o preço do bolo de fubá)
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Assim, explicando o benefício do cartão (caixa presente, mini bolo, bolo no pote, Bolobag e por fim, bolo no valor referente ao bolo de fubá – sempre priorizar e incentivar na troca bolos como fubá, iogurte, fubá com laranja). Ou seja, o cliente não precisa ter 10 carimbos para ter benefício em 90 dias.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Oferecer o cartão fidelidade para TODOS OS CLIENTES, ATÉ OS MAIS CONHECIDOS!!!</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Caso receba <b><i>cartão vencido</i></b>, entregue o que for possível de acordo com os carimbos. Ex: cliente tem 7 carimbos com no cartão vencido, troque pela BoloBag. <b>VÁLIDO PARA FLORIANÓPOLIS E REGIÃO -</b> A franquia tem em uso outro modelo de cartão, como não temos outros franqueados por aqui utilizamos o nosso próprio modelo.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={48} />
        </div>
      </div>
    </div>
  );
}