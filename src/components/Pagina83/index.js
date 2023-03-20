import '../../global_styles.css';
import './styles.css';

import Bolo83 from '../../images/bolos_83.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina83 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-83'>
        <p className='Texto T-83'>
          Obs: Não perca seu cadeado - é lei, todos têm e devem cuidar deles. Perdeu vai pagar um novo. R$10,00.
        </p><br/><br/><br/><br/>
        <img className='Img-83' src={Bolo83} alt="" /><br/><br/><br/><br/><br/>
        <p className='Texto T-83'>
          <b>CELULAR PESSOAL:</b> Não é permitido mexer no celular pessoal. Há exceções como doenças, ligações importantes e afins, informar a supervisão, está averiguará se há necessidade, fora isso, conforme documento de uso assinado por todos
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={83} />
      </div>
    </div>
  );
}