import '../../global_styles.css';
import './styles.css';

import Bolos46 from '../../images/bolos_46.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina47 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-47'>
        <p>
          <b className='Texto'>VERIFICAÇÃO DOS POTES NA GELADEIRA DE VENDAS:</b>
        </p><br/><br/>
        <img src={Bolos46} alt="" /><br/><br/>
        <p className='Texto T-47'>
          <b>VERIFIQUE WHATSAPP:</b> As lojas possuem um celular para comunicação interna, caso clientes entrem em contato nesses números, orientação é: bater print da tela (assunto), nome e telefone, mandar para Central de Atendimento para que possam entrar em contato. Não responda o cliente por ali.
        </p><br/><br/><br/>
        <p><b>EMBALAGENS:</b></p><br/><br/>
        <p className='Texto T-47'>
          <b>O PAPEL ACOPLADO -</b> embalamos no papel acoplado porque é a melhor forma de manter a qualidade do bolo. E é uma forma de diminuir o plástico na natureza. Estamos ajudando a preservação do meio ambiente – “fale isso sem medo - quer plástico? Pague pelo plástico”
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={47} />
      </div>
    </div>
  );
}