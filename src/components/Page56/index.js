import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page56 = () => {
  return(
    <div 
      id='Page56' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page56__Container'>
        <p className='Page__Text Text56__Text--Margin'>
          <b>BANDEIRAS DE CARTÕES,</b> confira sua loja:
        </p>
        <p className='Page__Text'>
          <b className='Page__Text--Color--A'>CONSELHEIRO MAFRA*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Cabal, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo, Sodexo, Ticket Refeição e Ticket Alimentação.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text'>
          <b className='Page__Text--Color--B'>ANITA GARIBALDI*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text'>
          <b className='Page__Text--Color--C'>ESTREITO*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Cabal, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text'>
          <b className='Page__Text--Color--D'>KOBRASOL*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Cabal, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text'>
          <b className='Page__Text--Color--E'>MAURO RAMOS*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text'>
          <b className='Page__Text--Color--F'>CENTRO DE CURITIBA*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text'>
          <b className='Page__Text--Color--G'>NOVO MUNDO - CURITIBA*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Page__Text Page56__Text--Align'>
          <b>SITUAÇÃO EMERGENCIAL LOCKDOWN</b>
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>SE A FISCALIZAÇÃO CHEGAR NA LOJA, VAMOS FECHAR? E LOJAS AMANHÃ (SÁBADO) ESTARÃO FECHADAS? NÃO!</b> Nosso CNPJ/alvará de funcionamento é código de <b>PADARIA</b>, ou seja, serviço essencial. Manteremos lojas abertas diariamente e funcionamento em horário padrão, enquanto o decreto liberar estes serviços essenciais.
        </p><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>PERGUNTAS CLIENTES:</b> POR QUE NÃO FECHAM E FICAM APENAS COM DELIVERY? Temos CNPJ/alvará de funcionamento é código de <b>PADARIA
          </b>, caracterizado como serviço essencial mas caso queira evitar transitar na rua e vir à loja, entregamos seu pedido no local desejado tomando todos os cuidados e seguindo todas as normas da vigilância sanitária. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={56} />
        </div>
      </div>
    </div>
  );
}