import '../../global_styles.css';
import './styles.css';

import Bolo72 from '../../images/bolos_72.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina74 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-74'>
        <img className='Img-72' src={Bolo72} alt="" /><br/><br/>
        <p className='Texto T-74'>
          <b>A atendente se deparou com o cliente exaltado querendo falar com o proprietário.</b> <i>É comum o cliente querer saber quem é o dono ou falar com ele e a resposta que temos que dar a estas perguntas são as seguintes:</i> Pode falar o nome do dono, mas nunca dar o celular ou endereço Caso a pessoa insista em querer falar com o dono, passar o telefone da Central de Atendimento Caso a pessoa diga que é da franquia, é amigo, parente ou conhece o dono, o funcionário deverá avisar a supervisão. Não gostei do produto, exijo falar com o dono. Ligue para a Central de atendimento, elas saberão resolver a situação
        </p><br/><br/>
        <p className='Texto T-74'>
          ●	Fornecedor, vendedor, ou qualquer pessoa que queira falar com o dono, passe para a central de atendimento ou passe os contatos da central de atendimento para quem está pedindo.
        </p><br/><br/>
        <p className='Texto P-74B'>
          <b className='P-74'>ESTACIONAMENTO</b>
        </p><br/><br/>
          <p className='Texto T-74'>
            <b>ESTACIONAMENTO KOBRASOL:</b> As vagas disponíveis na frente da Unidade Kobrasol são de uso coletivo. A lei federal permite que qualquer pessoa estacione em vagas com guia rebaixada em frente a estabelecimentos comerciais e permaneçam por tempo indeterminado, sabemos que isso é muito ruim.  No Kobrasol as bandeirolas devem ser colocadas antes da abertura da loja, dando um "ar" delimitação de espaço ao estacionamento, por favor coloque as bandeirolas corretamente, preferencialmente as 2 unidades e a placa de exclusividade para uso do clientes da loja.    
          </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={74} />
      </div>
    </div>
  );
}