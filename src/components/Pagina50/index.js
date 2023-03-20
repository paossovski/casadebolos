import '../../global_styles.css';
import './styles.css';

import Bolos49 from '../../images/bolos_49.jpg';
import Bolos50 from '../../images/bolos_50.jpg';
import Bolos51 from '../../images/bolos_51.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina50 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-50'>
        <img className='Img-50' src={Bolos49} alt="" /><br/><br/>
        <p className='Texto T-50'>
          <b>Exceção:</b> Cartão vencido no mês, pode ser trocado até o último dia do mês, mas explique isso ao cliente.
        </p><br/><br/>
        <p className='Texto T-50'>
          <b>CARTÃO PRESENTE:</b> Sabe aquele cliente que chega na loja pra comprar um bolo de presente para alguém especial e não sabe o que levar? Ofereça   nosso cartão presente, ele paga o valor R$ e a pessoa vai até nossa loja e faz a troca desse cartão: Lembrando que esta opção é válida somente para as lojas de Florianópolis e São José.
        </p><br/><br/>
        <div className='Img-Container-50'>
          <img className='Img-50B' src={Bolos50} alt="" />
          <img className='Img-50B' src={Bolos51} alt="" />
        </div><br/><br/>
        <p className='Texto T-50'>
          <b>BOLOS RENTÁVEIS: <i>Precisam ser os primeiros a serem oferecidos à venda para o cliente.</i></b> Boleiras devem prestar atenção para que estes bolos sejam sempre produzidos; No caso de trocas por fidelidades oferecer   os bolos rentáveis. Como saber quais são? Estão em nossa planilha de produção nomeados com RENTÁVEIS ao lado.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={50} />
      </div>
    </div>
  );
}