import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina63 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-63'>
        <p className='Texto T-63'>
          Obs: <b className='P-63'>nunca mande bolos empilhados</b>, eles vão amaçar no máximo uma pilha de dois andares, se possível não coloque bolos em cima um do outro, caso chegue amassado em outra loja, sem condiçoes para a venda, a loja que estará mandando, que se reponsabilizará pela perda, devido a falta de cuidado.
        </p><br/><br/>
        <p className='Texto T-63'>
          <b className='C-63'>
            Estreito: Recebeu bolo para fazer pote, anote IMEDIATAMENTE, na planilha, inclua na produção e uso para pote, depois sempre tem esquecimento e há muito erro no caixa.
          </b>
        </p><br/><br/>
        <p className='Texto T-63'>
          <b>FRUTAS:</b> Devem ser retiradas das caixas de madeira, higienizadas (YPE + água) e guardadas imediatamente (consulte  na pia de higienização com o cartaz de como proceder para higienizar as frutas). Caixas de madeira devem   ser devolvidas.
        </p><br/><br/>
        <p className='Texto T-63'>
          <b>DICA IMPORTANTE -</b> A maçã e a banana não devem ser guardadas juntas, elas amadurecem mais rapidamente quando estão juntas.
        </p><br/><br/>
        <p className='Texto T-63'>
          <b>OVOS:</b> As caixas de papelão não podem ficar na área de produção, deixe no depósito, ou se estiver na área de produção, deixe os ovos num recipiente (bacia). Ovos devem ser solicitados apenas aos sábados, junto com a lista de pedidos.
        </p><br/><br/>
        <p className='Texto T-63'>
          <b>ENXUGAR SEMPRE BOLO DE MILHO E QUANDO NECESSÁRIO O DE FUBÁ COM GOIABADA -</b> O padrão do bolo de milho é ter aparência 'seca' estilo fubá. Precisamos criar o hábito de enxugar os excessos de gordura que solta do bolo de milho de um dia para o outro com papel toalha.
        </p><br/><br/>
        <p className='Texto T-63'>
          <b>CAIXA TROCA-TROCA:</b> A cada 2 meses a caixa passa pelas lojas, iniciando sempre pelo Estreito e seguindo o fluxo. Nesta caixa o funcionário verifica se tem algum utensílio ou objeto que interessa ter naquela loja e entrega as sobras, aquilo que não está mais usando ou que está apenas ocupando espaço. Vale colocar o que quiser e pegar o que é o quanto precisar.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={63} alt="" />
      </div>
    </div>
  );
}