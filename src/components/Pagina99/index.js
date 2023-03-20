import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina99 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-99'>
        <p className='Texto T-99'>
          <span className='P-99'>Nos dias de muito frio os bolos ficam gelados?</span><br/><br/>Os bolos saem quentinhos do forno, após, mantemos em temperatura ambiente, mantendo saborosos e no nosso padrão de qualidade. Se mantivermos eles aquecidos constantemente, ficarão ressecados e perderemos a nossa alta qualidade.
        </p><br/><br/>
        <p className='Texto T-99'>
          <b className='P-99'>Tem velas?</b><br/><br/>
          Sim, três opções: Estrela de Ouro (chama delicada, 3 unidades), Palitinhos (20 unidades) rosa, azul ou branco e por fim, a Fonte Luminosa (1 unidade, chama bem forte).
        </p><br/><br/>
        <p className='Texto T-99'>
          <span className='P-99'>BoloBag</span><br/><br/>
          Sacola ecológica, tamanho ótimo para usar no dia-a-dia para o que precisar.
        </p><br/><br/>
        <p className='Texto T-99'>
          <span className='C-99'><b className='C-99 D-99'>DELIVERY –</b> Para região de Florianópolis, São José e Biguaçu</span>
          <br/>Em Curitiba acontece de forma independente, somente via Ifood, consultar APP ou dependendo da situação via UBER. 
        </p><br/><br/>
        <p className='Texto T-99'>
          <span className='P-99'>Posso fazer pedido em qualquer momento do dia?</span><br/><br/>Pode sim. Tanto para antecipar encomendas, quanto para ser entregue no mesmo dia, desde que esteja no nosso horário de atendimento e entregas, de acordo com demanda.
        </p><br/><br/>
        <p className='Texto T-99'>
          <span className='P-99'>Comecei a fazer o pedido de manhã, não terminei de responder e quando vou confirmar acabou o bolo, como fazer?</span><br/><br/>
          Como não foi confirmado o sabor desejado, não reservamos. Infelizmente, não disponibilizamos mais desse sabor a pronta entrega, mas temos... (DESCREVER TODOS DISPONÍVEIS). Ou se preferir, podemos transferir sua encomenda para amanhã, o que acha? 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={99} />
      </div>
    </div>
  );
}