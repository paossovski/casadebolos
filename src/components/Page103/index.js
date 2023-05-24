import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page103 = () => {
  return(
    <div 
      id='Page103' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page103__Container'>
        <p className='Page__Text Page__Line--Height'>
          E na cobertura usamos o mesmo creme e coco ralado.  Esse tipo de bolo é mais frágil, pois tem chance maior de quebrar ou rachar. Aconselhamos retirar na loja de sua preferência. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page103__Text--Border'>
            Como vem a cobertura na entrega?
          </span><br/><br/>
          Vai num recipiente separado, cliente acrescenta na hora. Adotamos essa maneira para garantir a segurança no transporte, evitando risco de rachar ou quebrar.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page103__Text--Border'>
            Quero com a cobertura aplicada, pode ser?
          </span><br/><br/>
          Pode sim, mas não nos responsabilizamos se rachar ou quebrar, indicamos o envio da cobertura no recipiente e o cliente acrescentar na hora.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page103__Text--Border'>
            Quais as formas de pagamento?
          </span><br/><br/>
          Débito, crédito ou transferência bancária, Pix, QRCode, Picpay, link online de pagamento (pagamento com cartão de crédito) ou boleto (emissão com código de barra) direcionado e exclusivo para  compras maiores.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b className='Page103__Text--Border'>
            Quais contas para depósito
          </b><br/><br/>
          <b>Estreito – conta para depósito e CNPJ:</b><br/>
          Banco <b>STONE</b> (197):<br/>
          AGÊNCIA 001<br/>
          CONTA CORRENTE 1621850-5 <br/>
          CNPJ: 24.584.735/0002-59<br/> 
          BOLOS FLORIPA EIRELLI
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Mauro Ramos – conta para depósito e CNPJ:</b><br/>
          Banco <b>STONE</b> (197):<br/>
          AGÊNCIA: 0001<br/>
          CONTA CORRENTE: 330873-1 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={103} />
        </div>
      </div>
    </div>
  );
}