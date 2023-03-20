import '../../global_styles.css';
import './styles.css';

import Bolo71 from '../../images/bolos_71.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina73 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-73'>
        <p className='Texto T-73'>
          Nunca falar nenhum ingrediente (marca e gramatura) de receitas e nem que a mesma massa faz mais de um tipo de bolo (Maçã com Castanha e Natal, Fubá com Laranja e Crocante...).
        </p><br/><br/>
        <p className='Texto T-73'>
          Aipim Mandioca Macaxeira/ Bolo de Aipim sempre sairá na quinta-feira (Lojas receberão o bolo de aipim montado ou apenas ralado do Estreito), independente de encomendas. Se surgir encomendas em outras datas, antes de pegar, ligue para o Estreito e confirme se é possível assumir. Obs: Sempre pegar a encomenda de aipim para após às 13h, por conta da logística.
        </p><br/><br/>
        <p className='Texto T-73'>
          <b>RENDIMENTO:</b> Sempre falar o rendimento de fatias equivalente ao peso nutriconal, estabelecido pela descrição do cardápio da Franquia.
        </p><br/><br/>
        <p className='Texto T-73'>
          No atendimento, nos deparamos com perguntas como: <b>QUEM É A MARICOTINHA?</b> A Dona Maricotinha é uma figura pública, da região de Florianópolis que tem um programa de rádio todos os dias na Regional FM 106,5 e no programa A Tarde é Nossa, no SBT para todo Estado de Santa Catarina. É a personagem propaganda da Casa de Bolos em Florianópolis e região desde o início da primeira loja. Não é a dona, é nossa amiga e é apaixonada pelos bolos da Casa de Bolos. 
        </p><br/><br/>
        <img className='Img-73' src={Bolo71} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={73} />
      </div>
    </div>
  );
}