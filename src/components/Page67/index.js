import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page67 = () => {
  return(
    <div 
      id='Page67' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Pag67__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>Uso Uber:</b> Em casos de logística de bolos de uma loja para outra, NUNCA deixar de registrar a despesa no sistema. Lembrando que a loja que está recebendo os bolos é que paga a conta Ex: C1 mandou bolos para o C3 – a loja do C3 que arca com essa despesa e lança no sistema Obs: sempre pedir uber pelo celular da loja, onde já temos um conta registrada.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Uso Uber para funcionários:</b> Em caso de extrema necessidade e somente com a autorização da supervisão. Apenas as Centrais de atendimento podem registrar essa despesa no sistema.
        </p><br/><br/>
        <p className='Page__Text'>
          Caronas com o carro da loja:  apenas com a autorização da supervisão.
        </p><br/><br/>
        <p className='Page__Text'>
          <b>•	NUNCA DEIXE QUE FALTEM PRODUTOS PARA O DIA A DIA DA LOJA</b>
        </p><br/><br/><br/>
        <p className='Page__Text Page67__Text--Align'>
          <b className='Page67__Text--Font'>ATENDIMENTO AO CLIENTE</b>
        </p><br/><br/><br/>
        <p className='Page__Text'>
          <b className=' Page67__Text--Size'>CA* Central de atendimento e AT* Atendimento lojas (balcão)</b>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CADASTROS –</b> Farão cadastros das comandas de delivery, pedido de balcão, trocas de fidelidade. Alimentarão sistema com todas as informações de nossos clientes, e manterão atualizados também, referente a reclamações, elogios e feedbacks;
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ATENDIMENTO AO CLIENTE –</b> Farão atendimento ao cliente por todos os nossos canais de comunicação, anotaram e repassarão pedidos as lojas quando necessário; (CA)
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ATENDIMENTO AO CLIENTE POR TELEFONE (Forma de atender) –</b> “Central de Atendimento Casa de Bolos + bom dia ou boa tarde”.<br/> <b>Lojas:</b> “Casa de Bolos (unidade) + bom dia ou boa tarde”.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={67} />
        </div>
      </div>
    </div>
  );
}