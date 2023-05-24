import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb06 from '../../images/cdb_06.jpg';
import cdb07 from '../../images/cdb_07.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page11 = () => {
  return(
    <div 
      id='Page11' 
      className='Page Page__Mobile Page__Container Page__Margins'
    >
      <div>
        <p className='Page__Text Page11__Text'>
          É a base informativa de clientes (dados cadastrais como nome, telefone, endereço, histórico de pedidos, delivery, negociação de empresas e grandes compras, sugestões e críticas realizadas por clientes) para todas as lojas. Tem equipamentos que monitoram as ligações de clientes, câmeras de monitoramento que ajudam a garantir processos e a qualidade dos produtos, dashboard com acompanhamento de respostas, perguntas e as respostas são atualizadas conforme a necessidade.
        </p>
        <p className='Page__Text Page11__Text'>
          É o canal que ajuda a equipe de atendimento das lojas físicas a ter informações atualizadas, promoções, ações de incentivo de venda, canal para dúvidas, meios de pagamento e todo processo de atendimento e logística de delivery, bem como relação de contratação de entregadores e a manutenção da qualidade de entregas e aparência de produtos entregues. Auxilia nas campanhas de venda, e nas campanhas temáticas, garantindo a entrega de folhetos, material promocional e manutenção do cartão fidelidade, desenvolvimento de textos e descritivo para criar padrões de atendimento no balcão e ao telefone. Auxilia nas decisões em nível de gestão através de feedbacks de clientes, equipe de atendimento, movimentação de mercado, e alimenta a base de dados para criação de conteúdo de atendimento, posicionamentos de marca, produtos e níveis de satisfação de serviço. E tendo como atividade o conjunto das ações citadas, mantendo o banco de dados atualizado, elaboração e efetivação de ações de resgates com antigos clientes, retenção de grandes contas e ativação em outros em potencial. É o principal contato cliente – equipe – gestão – produção e informações gerais da Casa de Bolos.
        </p><br/><br/>
        <div className='Page11__Img__Container'>
          <div>
            <img className='Page11__Img' src={cdb06} alt="" />
          </div>
          <div>
            <img className='Page11__Img' src={cdb07} alt="" />
          </div>
        </div>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={11} />
        </div>
      </div>
    </div>
  );
}