import '../../global_styles.css';
import './styles.css';

import Bolo82 from '../../images/bolos_82.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina82 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-82'>
        <img className='Img-82' src={Bolo82} alt="" /><br/><br/><br/><br/>
        <p className='Texto T-82'>
          <b>VOU COLOCAR TODO O UNIFORME, BATER O PONTO E DEPOIS COLOCO MEU CHINELINHO, POSSO?</b> Não, não pode. Um dia você vai esquecer e bater a foto do intervalo de chinelo, e vai invalidar seu ponto de entrada.
        </p><br/><br/>
        <p className='Texto T-82'>
          <i>IMPORTANTE:</i> de maneira alguma usar chinelo, rasteirinhas, mule, sapato com salto, shorts, bermuda e somente tirar a touca quando sair da loja.
        </p><br/><br/><br/>
        <p className='Texto T-82'>
          <b>ARMÁRIOS PESSOAIS DA EQUIPE:</b> Pertences pessoais devem ser guardados nos armários, que devem estar identificados com o nome de cada funcionário e ter cadeados. Cada armário deve conter o nome de cada colaboradora e o cadeado. Cuide disso!
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={82} />
      </div>
    </div>
  );
}