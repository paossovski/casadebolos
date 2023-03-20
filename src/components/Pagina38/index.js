import '../../global_styles.css';
import './styles.css';

import Bolos32 from '../../images/bolos_32.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina38 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-38'>
        <img src={Bolos32} alt="" /><br/>
        <h1 className='Texto T38'>
          ORIENTAÇÕES PARA ÁREA DE <br/> ATENDIMENTO
        </h1><br/>
        <h3 className='Texto T38B'>
          Horários importantes 8h/9h / 10h /16h /17h45/ 18h30/19h
        </h3><br/>
        <p className='Texto P38'>
          <b>COMO ABRIR A LOJA:</b> É necessário verificar a limpeza da parte externa (fora da loja), se não tem lixo e afins. Certificar também se a área de atendimento está limpa (chão, balcão, geladeira, potes, mesa, banco e paredes), máquinas de cartão e internet funcionando. Contar abertura de caixa e anotar na planilha; Acender sempre as luzes; Confirmar se tem sacolas, papel acoplado e colheres; Ligar o som; E ter pelo menos uma fileira (prateleira) de bolos no balcão (15 bolos no balcão).
        </p><br/><br/>
        <p className='Texto P38'>
          <b>COMO LIMPAR O BALCÃO:</b> Se tiver bolos, retirar todos e primeiro passar   um pano seco para retirar os farelos, após, com uma esponja umida (limpa, destinada apenas para isso) colocar um pouco de detergente e limpar toda a área interna e externa, retirando o excesso de espuma e agua, secando com um pano (perfex). Após secar, limpar com pano seco ou papel toalha, dando brilho ao vidro. Na parte superior (branca) usar saponáceo para tirar manchas.
        </p><br/><br/>
        <p className='Texto P38'>
          <b>QUEM LIMPA O CHÃO DO ATENDIMENTO DURANTE O FUNCIONAMENTO DA LOJA:
          </b> Antes de abrir a loja, o responsavel pelo atendimento faz toda a a limpeza da área, chão, balcão, prateleiras, geladeira de potes, repoe materiais, coloca bolo dentro do
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={38} />
      </div>
    </div>
  );
}