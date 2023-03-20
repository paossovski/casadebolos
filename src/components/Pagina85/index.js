import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina85 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-85'>
        <p className='Texto T-85'>
          No entanto tivemos um problema de uso indevido do benefício e ele foi suspenso, sob condições de ser revisto após ato solicitado em reunião por diversas ocasiões. O funcionário pode comprar bolos e o mesmo será descontado na folha de pagamento.
        </p><br/><br/>
        <p className='Texto T-85'>
          Obs: essa compra deverá ser lançada no sistema, como venda a prazo e somente a supervisão poderá dar baixa nessa compra.
        </p><br/><br/>
        <p className='Texto T-85'>
          Mas posso comprar e lançar no sistema, em outro dia eu pago? NÃO, uma vez lançado, somente a supervisão pode dar baixa.
        </p><br/><br/>
        <p className='Texto T-85'>
          <b>PARENTES E CONHECIDOS:</b> Em caso de visitas inesperadas na seu ambiente de trabalho, atenda lá na área de atendimento e seja breve, não está autorizado a entrada dessas visitas nas dependências da loja.
        </p><br/><br/><br/><br/>
        <h3 className='Texto P-85'>TESTE DE NOVOS COLABORADORES</h3><br/><br/>
        <p className='Texto T-85'>
          Quando um novo funcionário é contratado, no momento da entrevista avisamos que a pessoa passará por um dia de teste, para que se tenha uma base de seus conhecimentos e para que essa  possível futura funcionária conheça nossas tarefas e se identifique com nosso produto e trabalho, e queira continuar. Neste dia de testes é pago apenas o valor do vale transporte e horas trabalhados. Quando. O Funcionário receberá uniforme provisório, mas não poderá levar para casa, pois não sabemos ainda se retornará. Deve assinar o TERMO DE TESTE e o TERMO DE COMPROMISSO DE CONFIDENCIALIDADE DE RECEITA.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={85} />
      </div>
    </div>
  );
}