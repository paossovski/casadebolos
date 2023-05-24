import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb44 from '../../images/cdb_44.jpg';
import cdb45 from '../../images/cdb_45.png';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page46 = () => {
  return(
    <div 
      id='Page46' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page46__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>COMANDAS DE PEDIDOS:</b> Muito importante preencher com as ocorrências Exemplos: não veio buscar; não aceitar encomenda sem pagamento antecipado; (apenas clientes problemáticos, bolos funcionais) ligamos e não atendeu; <b>TEMOS UM BANCO DE DADOS</b> e ''alimentamos'' essas informações. <b>SEMPRE</b> registre as comandas em sua loja, no sistema.
        </p><br/><br/>
        <div className='Page46__Img__Container'>
          <img className='Page46__Img--A' src={cdb44} alt="" />
          <img className='Page46__Img--B' src={cdb45} alt="" />
        </div><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>LIGAR PARA OS CLIENTES ESQUECIDOS:</b> A tolerância é de 1h após a não retirada de encomenda. Primeiro tentem ligar para o cliente pelo telefone fixo da loja, se não der, avise a Central de Atendimento. Enviarão WhatsApp pelo celular da Central. Nunca no seu telefone particular. Se estiver muito movimentado na loja e não conseguir ligar, avise a Central de Atendimento (48) 99180- 5070 imediatamente.<br/>
          Obs: Com a entrada do sistema oficial da Franquia, as comandas de encomendas serão registrada diretamente no sistema, unificando os dados desse cliente, para todas as lojas do Brasil.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={46} />
        </div>
      </div>
    </div>
  );
}