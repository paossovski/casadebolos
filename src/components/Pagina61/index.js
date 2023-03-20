import '../../global_styles.css';
import './styles.css';

import Bolo62 from '../../images/bolos_62.jpg';
import Bolo63 from '../../images/bolos_63.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina61 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-61'>
        <p className='Texto T-61'>
          <b>BOLOS FORA DO PADRÃO, TEM UM ESPAÇO NA PRATELEIRA PARA SEPARAR.</b>
        </p>
        <p className='Texto T-61'>
          Fazemos sempre vistoria nas lojas na produção de bolos com pesagem e cliente oculto para avaliar o padrão de qualidade. Bolos fora do padrão, deixar no espaço reservado na prateleira, registrem em foto no  final do dia e envie ao grupo de WhatsApp correspondente.
        </p><br/><br/>
        <img className='Img-61' src={Bolo62} alt="" /><br/><br/>
        <p className='Texto T-61'>
          <b>PERDAS</b><br/>
          Quando houver perda de produtos que seja superior ao normal (Exemplo: Ovos, iogurte, frutas em geral), ANOTAR NA PLANILHA - É IMPORTANTE RELATAR E NÃO ESCONDER. Esconder causará prejuízos a todos da equipe e desfalque no estoque.
        </p><br/><br/>
        <img className='Img-61B' src={Bolo63} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={61} />
      </div>
    </div>
  );
}
