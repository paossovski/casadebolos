import '../../global_styles.css';
import './styles.css';

import Bolo69 from '../../images/bolos_69.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina71 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-71'>
        <h1 className='Texto P-71'>SOBRE NOSSOS BOLOS</h1><br/><br/>
        <p className='Texto T-71'>
          <b>SEMPRE</b> falar dos nossos diferenciais - Bolos sem Lactose, sem glúten, integrais, funcionais e diets - <b>COMUNICAR</b> que esses bolos são indicados para alérgicos e não intolerantes. Explicar que o bolo em si não contém glúten ou lactose, mas que são produzidos em uma cozinha que são produzidos todos os outros (com trigo e leite) assim, podendo conter traços desses ingredientes.  Ex: bolo de Maçã com Castanha não é integral, porém, tem a massa mais leve e é sem lactose, lembrando que ele é escuro, por conta do açúcar mascavo - para quem procura algo para não ‘engordar muito’, é uma boa opção na falta dos diets e integrais.
        </p><br/><br/>
        <img className='Img-71' src={Bolo69} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={71} />
      </div>
    </div>
  );
}