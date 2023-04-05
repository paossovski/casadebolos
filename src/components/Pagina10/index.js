import '../../global_styles.css';
import './styles.css';

import Bolos05 from '../../images/bolos_05.jpg';
import { Numeracao } from '../Numeracao';

export const Pagina10 = () => {
  return(
    <div className='Pagina Mobile Pagina-Container Margens'>
      <div>
        <p className='Texto10'>
          <i className='Texto'>- Tabela organograma para melhor visualização e entendimento.</i>
        </p><br/><br/><br/>
        <img className='Img-Pagina10' src={Bolos05} alt="" />
      </div><br/><br/><br/><br/><br/>
      <div className='Container-Pagina10'>
        <h1 className='Texto Texto10'>CENTRAL DE ATENDIMENTO</h1><br/><br/>
        <div className='Texto Line10'>
          <p className='Line10'>
            Central de Atendimento é atualmente uma das portas de entradas para a Casa de Bolos, é a apresentação das lojas num contexto geral, simples e objetiva, que tem o contato com os clientes via telefone, e-mail e redes sociais (Instagram, Facebook, Google e WhatsApp e em todas as plataformas que surgirem).
          </p>
          <p className='Line10'>
            Todas as situações são tratadas pela equipe e repassada a respectiva loja em questão (quando necessário), que têm a disposição Manual de regras e conduta, FAQ com as principais perguntas e respostas apontadas pelos clientes e plataformas de acompanhamento de casos como sistema de gestão, emissão de cupom fiscal entre outros.
            São informações de rotina e de relação com o cliente que justificam sua manutenção, como o funcionamento das lojas no que se trata de horários e produções, encomendas, equipes, sanar dúvidas e tratar elogios, críticas construtivas reclamações e revertendo a situações problemáticas.
          </p>
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={10} />
      </div>
    </div>
  );
}