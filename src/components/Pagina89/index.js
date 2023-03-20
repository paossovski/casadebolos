import '../../global_styles.css';
import './styles.css';

import Bolo91 from '../../images/bolos_91.png';

import { Numeracao } from '../Numeracao';

export const Pagina89 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-89'>
        <h1 className='Texto P-89B'><b className='P-89'>DELIVERY</b></h1>
        <br/><br/>
        <p className='Texto'>
          O sistema de entregas acontece com saída das seguintes lojas: Centro 03, abrangendo toda a Ilha e do Estreito – abrangendo a área do Continente em Florianópolis, São José e Biguaçu. Contamos também com o serviço do Ifood, nas seguintes lojas, Mauro Ramos, Estreito, Kobrasol, Centro Curtiba e Novo Mundo, todas essas unidades alcançam até 10 km de distância. E todas as nossas entregas são realizadas de acordo com a tabela de preços.Nossos entregadores são todos terceirizados pelo Ifood, nesse caso pagamento apenas via pix, cartão, entre outras formas de pagamento on-line, pois o entregador não retorna para a loja, por esse motivo não aceitamos dinheiro em espécie. Todas as lojas estão autorizadas a receber encomendas para entregarmos, desde que entrem em contato com a Central de Atendimento, confiram os bolos e horários disponíveis para atendermos os clientes. Necessário anotar o máximo possível de informações para que ocorra tudo nos conformes e sem falhas.
        </p><br/><br/>
        <img className='Img-89' src={Bolo91} alt="" /><br/><br/>
        <p className='Texto'>
          <b>ESTAMOS NO IFOOD E AS LOJAS SÃO AS SEGUINTES:</b>
        </p><br/>
        <p className='Texto'>
          <b>•</b> Florianópolis Centro<br/>
          <b>•</b> Florianópolis Estreito<br/>
          <b>•</b> São José – Kobrasol<br/>
          <b>•</b> Curitiba Centro<br/>
          <b>•</b> Curitiba Novo Mundo 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={89} />
      </div>
    </div>
  );
}