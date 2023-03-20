import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina67 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-67'>
        <p className='Texto T-67'>
          <b>Uso Uber:</b> Em casos de logística de bolos de uma loja para outra, NUNCA deixar de registrar a despesa no sistema. Lembrando que a loja que está recebendo os bolos é que paga a conta Ex: C1 mandou bolos para o C3 – a loja do C3 que arca com essa despesa e lança no sistema Obs: sempre pedir uber pelo celular da loja, onde já temos um conta registrada.
        </p><br/><br/>
        <p className='Texto T-67'>
          <b>Uso Uber para funcionários:</b> Em caso de extrema necessidade e somente com a autorização da supervisão. Apenas as Centrais de atendimento podem registrar essa despesa no sistema.
        </p><br/><br/>
        <p className='Texto'>
          Caronas com o carro da loja:  apenas com a autorização da supervisão.
        </p><br/><br/>
        <p className='Texto'>
          <b>•	NUNCA DEIXE QUE FALTEM PRODUTOS PARA O DIA A DIA DA LOJA</b>
        </p><br/><br/><br/>
        <p className='Texto P-67'>
          <b className='P-67B'>ATENDIMENTO AO CLIENTE</b>
        </p><br/><br/><br/>
        <p className='Texto'>
          <b className=' P-67C'>CA* Central de atendimento e AT* Atendimento lojas (balcão)</b>
        </p><br/><br/>
        <p className='Texto T-67'>
          <b>CADASTROS –</b> Farão cadastros das comandas de delivery, pedido de balcão, trocas de fidelidade. Alimentarão sistema com todas as informações de nossos clientes, e manterão atualizados também, referente a reclamações, elogios e feedbacks;
        </p><br/><br/>
        <p className='Texto T-67'>
          <b>ATENDIMENTO AO CLIENTE –</b> Farão atendimento ao cliente por todos os nossos canais de comunicação, anotaram e repassarão pedidos as lojas quando necessário; (CA)
        </p><br/><br/>
        <p className='Texto T-67'>
          <b>ATENDIMENTO AO CLIENTE POR TELEFONE (Forma de atender) –</b> “Central de Atendimento Casa de Bolos + bom dia ou boa tarde”.<br/> <b>Lojas:</b> “Casa de Bolos (unidade) + bom dia ou boa tarde”.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={67} />
      </div>
    </div>
  );
}