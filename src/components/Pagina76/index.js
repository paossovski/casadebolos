import '../../global_styles.css';
import './styles.css';

import Bolo74 from '../../images/bolos_74.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina76 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-76'>
        <p className='Texto'>
          Coloque o papel no para-brisa do carro quando:
        </p><br/>
        <p className='Texto T-76'>
          ●	Passar mais de 2 horas do carro estacionado ali e a pessoa não solicitou gentilmente que estacionária ali;<br/>
          ●	Não seja nosso cliente, apenas estacionou e foi para outro local;<br/>
          ●	Estacionou, e de forma arrogante deixou ali sem pedir, sem ser cliente e desdenhando de nossa postura de pedir gentilmente que seja breve ao estacionar ali.
        </p><br/><br/>
        <p className='Texto T-76'>
          Quando o cliente retorna ao carro e vê o papel geralmente ele reclama, e a atendente deve gentilmente avisar o quanto um carro estacionado ali na frente atrapalha o emprego dela, as vendas das lojas e se quiserem chorar e se emocionar é um excelente momento, podem chorar!
        </p><br/><br/>
        <img className='Img-76' src={Bolo74} alt="" /><br/><br/><br/>
        <p className='Texto P-76B'>
          <b className='P-76'>REDES SOCIAIS</b>
        </p><br/><br/>
        <p className='Texto T-76'>
          <b>●	COLABORADORES DEVE CURTIR E COMENTAR NAS REDES SOCIAIS DAS LOJAS:</b> Recomendamos que todo funcionário que vem para uma entrevista de emprego já deve estudar a empresa, curtir as redes sociais para se inteirar do assunto e depois que é contratado deve seguir, comentar, e até indicar a empresa que trabalha nas redes sociais. Acompanhamos todos os funcionários em suas redes sociais e observamos seu comportamento.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={76} />
      </div>
    </div>
  );
}