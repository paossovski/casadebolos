import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina92 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-92'>
        <p className='Texto T-92'>
          A <b className='N-92'>FAQ</b> sigla em inglês Frequently Asked Questions, conhecida também como <b>PERGUNTAS RESPONDIDAS FREQUENTEMENTE</b>, ou seja, o documento foi elaborado e construído em cima dos questionamentos de nossos clientes. E para conseguirmos melhorar e alinhar as lojas, segue a nossa abaixo. Facilitará a linguagem das lojas com os clientes, falarão sempre a mesma linguagem.
        </p><br/><br/>
        <p className='Texto'>
          <span className='S-92'>Atendimento inicial:</span><br/>
          Bom dia ou boa tarde, tudo bem? Como podemos lhe ajudar?
        </p><br/><br/>
        <p className='Texto T-92'>
          <span className='S-92'>Central de Atendimento</span><br/>
          Falamos da Central de Atendimento de todas as lojas de Florianópolis e São José. E por uma  questão de logísticas, estamos centralizadas na loja do Estreito e no Centro de Florianópolis na Mauro Ramos.
        </p><br/><br/>
        <p className='Texto T-92'>
          <span className='S-92'>Tem bolos a pronta entrega ou só por encomenda?</span><br/>
          Trabalhamos com as duas opções. Diariamente produzimos diversos sabores para o balcão, pode optar em encomendar o bolo de sua escolha para retirar no dia e horário de sua preferência.
        </p><br/><br/>
        <p className='Texto T-92'>
          <span className='S-92'>Posso retirar em qualquer loja e horário?
          </span><br/>
          Sim, deixaremos seu pedido feito e produziremos para você. Estamos localizados nos seguintes endereços:
        </p><br/><br/>
        <p className='Texto T-92'>
          CENTRO 01 – Rua Conselheiro Mafra, 624 CENTRO 02 – Rua Anita Garibaldi, 128 <br/> CENTRO 03 - Avenida Mauro Ramos, 1225 <br/>
          ESTREITO – Rua General Liberato Bittencourt, 1777 KOBRASOL – Rua Adhemar da Silva, 711 – loja 1
        </p><br/><br/>
        <p className='Texto'><b className='C-92'>E para Curitiba:</b></p><br/>
        <p className='Texto T-92'>
          CENTRO CURITIBA – Rua Cândido Lopes, 223 ou <br/> 
          NOVO MUNDO – Rua São JudasTadeus, 22 esquina com Av Brasilia
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={92} />
      </div>
    </div>
  );
}