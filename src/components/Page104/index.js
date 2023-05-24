import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page104 = () => {
  return(
    <div 
      id='Page104' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page104__Container'>
        <p className='Page__Text Page__Line--Height'>
          CNPJ: 24.584.735/0005-00<br/>
          BOLOS FLORIPA EIRELLI
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Curitiba – conta para depósito e CNPJ:</b><br/>
          Banco <b>STONE</b> (197):<br/>
          AGÊNCIA: 0001<br/>
          CONTA CORRENTE: 7842385-2 <br/>
          CNPJ: 24.584.735/0006-82 <br/>
          BOLOS FLORIPA EIRELLI
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Novo Mundo – conta para depósito e CNPJ:</b><br/>
          Banco <b>STONE</b> (197):<br/>
          AGÊNCIA: 0001<br/>
          CONTA CORRENTE: 2581575-4 <br/>
          CNPJ: 24.584.735/0007-63<br/> 
          BOLOS FLORIPA EIRELLI
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page104__Text--Border'>
            Posso pagar por boleto online?
          </span><br/><br/>
          Sim. Podemos gerar um link de pagamento. Após o envio, o cliente faz o pagamento, nos encaminha m o comprovante e a retirada ou entrega é liberada.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page104__Text--Border'>
            Aceita auxílio emergencial?
          </span><br/><br/>
          Sim, aceitamos. Podemos gerar o QR Code e você faz a leitura pelo aplicativo (cartão online) do seu celular, assim, finalizando a compra.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page104__Text--Border'>
            Como pagar com Picpay?
          </span><br/><br/>
          Cliente precisa ter o aplicativo e cadastro do/no Picpay, Realizou a compra, atendente passa o valor final, cliente direciona através do app a câmera do celular para o QRCode disponibilizado na loja em questão. Na sequência digita o valor e confirma, gerando uma notificação de pagamento ok. ou, pode digitar o endereço da loja, incluir o valor e realizar o pagamento, também.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={104} />
        </div>
      </div>
    </div>
  );
}