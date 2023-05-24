import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page105 = () => {
  return(
    <div 
      id='Page105' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page105__Container'>
        <p className='Page__Text Page__Line--Height'>
        <b className='Page105__Text--Border'>
          Posso realizar compras e enviar para outro lugar, que eu não esteja lá para receber?
        </b><br/><br/>
        Sim, desde que o endereço esteja dentro de nosso raio de entrega e que tenha alguém para receber as mercadorias e realizar o pagamento antecipado.
        </p><br/><br/>
        <p>
          Induzir o cliente a fazer o pedido pelo catálogo online: <b>CARDÁPIO ONLINE DO IFOOD</b> 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Olá, você está na Central de Atendimento da Casa de Bolos Floripa, para fazer sua encomenda ou pedido delivery. E para facilitar e otimizar seu pedido, faça por aqui, por favor: (mandar o link do cardápio digital)  Tem todas as opções sabores do cardápio. É prático e rápido, e é válido para todas as nossas lojas.      
          <span className='Page105__Text--Background'>SUPORTE AO CLIENTE.</span>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Cliente informou a motoboy que atendentes esqueceram de encaminhar algum produto, como fazer?</b><br/><br/>Obrigada por nos avisar, e desculpe pelo transtorno, não foi intencional. Perdão! Estamos entrando em contato com o motoboy para enviarmos com a maior brevidade possível ou se preferir poderemos deixar o valor em crédito para um posterior retirada. Observação para o atendente: Caso você não consiga negociar com o cliente, informe a supervisão e esta autorizará a devolução do valor.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Posso cancelar uma compra?</b><br/><br/>
          Sim, até o momento em que a compra não tenha saído para entrega. Caso o entregador já tenha saído para a entrega, não é possivel cancelar.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Posso devolver uma compra?</b><br/><br/>
          Sim, o código de defesa do consumidor garante este direito. Entretanto nenhuma embalagem pode ter sido violada e os produtos devem estar em condições íntegras. Como trabalhamos com produtos de consumo imediato, a devolução não é algo comum, mas pode ser feita.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={105} />
        </div>
      </div>
    </div>
  );
}