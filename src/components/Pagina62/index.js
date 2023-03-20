import '../../global_styles.css';
import './styles.css';

import Bolo64 from '../../images/bolos_64.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina62 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-62'>
        <p className='Texto T-61'>
          <b>PROBLEMAS COM BOLO</b><br/>
          Percebeu problema na produção, não colocar o bolo à venda, não leve para área de atendimento. Nosso      balcão precisa ser bonito e ter qualidade no produto para venda.
        </p><br/><br/>
        <img className='Img-62' src={Bolo64} alt="" /><br/><br/>
        <p className='Texto T-61'>
          <b>CHEGOU BOLO DE OUTRA UNIDADE EM FORMAS?</b> Não esqueça de separar nas caixas e devolvê-las (separe IMEDIATAMENTE, NÃO ESQUEÇA). 
        </p><br/>
        <p className='Texto T-61'>
          <b>IMPORTANTE:</b><br/>
          - tudo que chegar de outra loja anotar na planilha de produção no campo “recebidos” ou “produção do dia”
        </p><br/>
        <p className='Texto T-61'>
          <b>PLANILHA DE PRODUÇÃO – QUEM ANOTA?</b><br/>
          Cada boleira é responsável por anotar sua <b>PRODUÇÃO</b> na planilha. Atendimento anota sobras do dia, embalagens, velas, potes e coberturas e demais informações como troco, perdas, motoboy/delivery e etc.
        </p><br/>
        <p className='Texto T-61'>
          Vai <b>ENVIAR BOLOS</b> para fazer potes para o Estreito?
          Antes de enviar o bolo, identifique em um papel as seguintes informações: Qual bolo é,  Data de produção, Enviar para pote, e Colocar o nome de quem separou (e não misturar bolos diferentes na mesma embalagem, contamina) Se foi bolo de geladeira, manter gelado até o recolhimento. Obs: Enviar apenas bolo que podem ser usados para pote. Bolos: milho, fubá, amendoim, cucas, tortas não viram potes é PERDA, anote corretamente. (consultar planilha de produção)
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={62} />
      </div>
    </div>
  );
}