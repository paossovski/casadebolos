import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page107 = () => {
  return(
    <div 
      id='Page107' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page107__Container'>
        <p className='Page__Text Page__Line--Height'>
          Problema comprovado – Nos perdoe pelo ocorrido, de maneira alguma desejávamos lhe frustrar, ou chatear. Esperamos que possa nos perdoar! Pode ter certeza que não ocorrerá novamente esta situação, redobraremos cuidados e atenção! 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Gostariamos de nos retratar lhe oeferecendo um novo produtos com a qualidade padrão que a Casa de Bolos lhe oferece. <i>ANOTAR NOME E TELEFONE DA CLIENTE.</i> Passar para loja de onde ela deseja retirar.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Parcerias – Olá! Obrigada pelo contato. Por favor, formalize a proposta, encaminhando um ofício para florianopolis@casadebolos.com.br, centrocuritiba@casadebolos.com.br A/C de Tânia. Aguardamos o e-mail. Até mais!
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Compras - Olá! Obrigada pelo contato. Formalize sua proposta para florianopolis@casadebolos.com.br  ou centrocuritiba@casadebolos.com.br  A/C de Tânia. Aguardamos o e-mail. Até mais!
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Doações – Olá, tudo bem? Parabéns pela iniciativa, incentivamos doações de cunho social! Fazemos parte de uma franquia, precisamos da aprovação para contribuirmos com a sua ação. Precisamos que seja encaminhado um ofício carimbado, com todas  as informações da instituição e a causa em visibilidade para por e-mail  A/C Tânia. Repassaremos aos responsáveis e retornaremos a você!
        </p><br/><br/>
        <p className='Page__Text'>
          Quero doar bolos, tem desconto?
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Tem sim, quando são situações assim, disponibilizamos 5% de desconto nos nossos bolos. Ou a cada 4 potes comprados R$4,00 de desconto. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          O clinte fala que o desconto é muito pouco. Trabalhamos com preço justo o ano todo e nossas margens são baixas. Avalie a nossa qualidade e saberá que temos o melhor produto com preço justo. Para doações maiores, podemos analisar seu pedido, faça a sua proposta. Obs: Para ações interessantes, entrar em contato com a supervisão para aprovação.  Meu bolo não chegou até agora, atrasou muito!
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={107} />
        </div>
      </div>
    </div>
  );
}