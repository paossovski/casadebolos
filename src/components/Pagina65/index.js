import '../../global_styles.css';
import './styles.css';

import Bolo67 from '../../images/bolos_67.png';

import { Numeracao } from '../Numeracao';

export const Pagina65 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-65'>
        <p className='Texto'>
          <i>Obs: não molhe, deixe as caixas desmontadas.</i>
        </p><br/>
        <p className='Texto T-65'>
          Descarte o lixo após as 18h30 nos dias corretos de recolhimento do lixo reciclado, segundo informado pela COMCAP e prefeitura de São José ou pela manhã no caso da loja do Kobrasol. Em Curitiba a coleta seletiva é diária armazenar na calçada, e no Novo Mundo na lixeira do condominio.
        </p><br/>
        <p className='Texto T-65'>
          <b>●	Centro 1 –</b> Noturno – de domingo a sexta (todos os dias, exceto sábado) – No sábado não deixe o lixo  reciclado na rua, armazene e jogue-o segunda.<br/>
          <b>●	Centro 2 -</b> Noturno – de domingo a sexta (todos os dias, exceto sábado) – No sábado não deixe o lixo reciclado na rua, armazene e jogue-o segunda.<br/>
          <b>●	Estreito –</b> às 19 horas – Segunda, quarta e sexta Depósito – Noturno – Segunda e sexta-feira.<br/>
          <b>●	Kobrasol -</b> das 6h às 14h20 – Segunda a sábado – quem chega pela manhã, coloca apenas o reciclado na rua.<br/>
          <b>●	Curitiba –</b> Colocado na calçada, próximo ao poste na frente da loja no final do expediente.<br/>
          <b>●	Novo Mundo –</b> colocado na lixeira do condomínio.
        </p><br/>
        <p className='Texto T-65'>
          <b>FORMAS:</b> Quando uma loja recebe um bolo na forma, a mesma deve ser separada e enviada para a loja de origem. Cada loja tem uma quantidade específica de formas que será contada a cada 2 meses.
        </p><br/>
        <p>
          <i className='Paragrafo-65'>Quantidade de formas por cada loja:</i>
        </p><br/><br/>
        <img className='Img-65' src={Bolo67} alt="" />
        <p className='Texto T-65B'>
          <span className='P-65'>Manter formas conservadas, limpas e ariadas diariamente</span>
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={65} />
      </div>
    </div>
  );
}