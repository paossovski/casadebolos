import '../../global_styles.css';
import './styles.css';

import Bolos58 from '../../images/bolos_58.jpg';
import Bolos59 from '../../images/bolos_59.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina55 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-55'>
        <div className='Img-Container-55'>
          <img className='Img-55 P-55' src={Bolos58} alt="" />
          <img className='Img-55' src={Bolos59} alt="" />
        </div><br/><br/>
        <p className='Texto T-55'>
          <b>DICAS IMPORTANTES:</b><br/>
          <b>•</b>	Em caso de abelhas na loja (dentro ou fora do balcão): sabemos que podemos ter a presença de abelhas na loja:<br/>
          <b>•</b>	Não faça: espantar com a mão, com toalhas, com inseticida.<br/>
          <b>•</b>	Faça: Limpe bem a area de atendimento, após limpa passe um pano em toda a área com vinagre. Quando elas estiverem no balcão, colocar um limão fatiado ao meio com alguns cravos espetados, de forma escondida para espantar. Limpar o balcão internamente com vinagre.<br/> 
          <b>•</b>	No caso do aparecimento de baratas e formigas utilizamos como veneno a aplicação em forma de gel deste produto. Não adianta jogar agua quente e nem jogar inseticida, é preciso descobrir o caminho (esconderijo) e aplicar neste caminho uma pequena gotinha deste veneno em gel, que vem em forma de seringa. 
        </p><br/>
        <p className='Texto T-55'>
          <b>VALES TRANSPORTES:</b> Pagos semanalmente, sempre às terças-feiras. Valores retirados do caixa, no final do dia, comprovando através de vales assinados pelos colaboradores. (Observe se o colaborador teve compensações de horas ou feriados/atestados/faltas) e pague descontando estes dias. Não esqueça de lançar em despesas no sistema.
        </p><br/>
        <p className='Texto T-55'>
          <b>ANIVERSARIANTE DO DIA:</b> Tem direito em escolher um bolo de até $40,00. Podendo consumi-lo para confraternizar com a sua equipe do dia. Deve ser lançado como degustação do dia.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={55} />
      </div>
    </div>
  );
}