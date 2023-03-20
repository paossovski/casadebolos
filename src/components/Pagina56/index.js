import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina56 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-56'>
        <p className='Texto T-56'>
          <b>BANDEIRAS DE CARTÕES,</b> confira sua loja:
        </p>
        <p className='Texto'>
          <b className='T-56A'>CONSELHEIRO MAFRA*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Cabal, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo, Sodexo, Ticket Refeição e Ticket Alimentação.<br/>
          <b>PicPay</b>
        </p>
        <p className='Texto'>
          <b className='T-56B'>ANITA GARIBALDI*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p>
        <p className='Texto'>
          <b className='T-56C'>ESTREITO*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Cabal, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p>
        <p className='Texto'>
          <b className='T-56D'>KOBRASOL*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Cabal, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p>
        <p className='Texto'>
          <b className='T-56E'>MAURO RAMOS*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p>
        <p className='Texto'>
          <b className='T-56F'>CENTRO DE CURITIBA*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p>
        <p className='Texto'>
          <b className='T-56G'>NOVO MUNDO - CURITIBA*</b><br/>
          <b>Bandeira:</b> Visa, MasterCard, American Express, Hipercard, Elo e Union Pay.<br/>
          <b>Vouchers:</b> Alelo.<br/>
          <b>PicPay</b>
        </p><br/>
        <p className='Texto P-56'>
          <b>SITUAÇÃO EMERGENCIAL LOCKDOWN</b>
        </p><br/>
        <p className='Texto'>
          <b>SE A FISCALIZAÇÃO CHEGAR NA LOJA, VAMOS FECHAR? E LOJAS AMANHÃ (SÁBADO) ESTARÃO FECHADAS? NÃO!</b> Nosso CNPJ/alvará de funcionamento é código de <b>PADARIA</b>, ou seja, serviço essencial. Manteremos lojas abertas diariamente e funcionamento em horário padrão, enquanto o decreto liberar estes serviços essenciais.
        </p><br/>
        <p className='Texto'>
          <b>PERGUNTAS CLIENTES:</b> POR QUE NÃO FECHAM E FICAM APENAS COM DELIVERY? Temos CNPJ/alvará de funcionamento é código de <b>PADARIA
          </b>, caracterizado como serviço essencial mas caso queira evitar transitar na rua e vir à loja, entregamos seu  
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={56} />
      </div>
    </div>
  );
}