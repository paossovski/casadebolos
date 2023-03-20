import '../../global_styles.css';
import './styles.css';

import Bolo76 from '../../images/bolos_76.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina78 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-78'>
        <img className='Img-78' src={Bolo76} alt="" /><br/><br/><br/>
        <p className='Texto P-78B'>
          <b className='P-78'>RELAÇÃO COM CLIENTES</b>
        </p><br/><br/>
        <p className='Texto T-78'>
          <b>NUNCA FORNEÇA SEU WHATSAPP PESSOAL PARA CLIENTES - </b>Use sempre da loja que trabalha para falar com a Central de Atendimento é esssa que fará o contato com o cliente. Obs: WhatsApp interno é apenas para se comunicar com as outras lojas e nunca com o cliente, independentemente se for um cliente muito conhecido ou parentes.
        </p><br/><br/>
        <p className='Texto T-78'>
          <b>O CLIENTE RECLAMOU DO PRODUTO</b> (<span className='T-78C'>pegue os dados dele na hora, como o nome, telefone,  referências</span>): se ele trouxer o produto e perceber o problema troque na hora. Se ligou e ainda tem o produto peça para guardar e trazer ou mandar foto para o WhatsApp da Central de Atendimento (48) 99180-5070. Reclamação na rede social. Evitem que o cliente vá até a rede social ou e-mail da franquia. <b>CUIDE DO  CASO COM ATENÇÃO NA HORA!</b>
        </p><br/><br/>
        <p className='Texto'>
          <b>
            SEGUE EXEMPLO DE COMO NUNCA SE REFERIR AO CLIENTE, TENHA RESPEITO!
          </b>
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={78} />
      </div>
    </div>
  );
}