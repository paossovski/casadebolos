import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina90 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-90'>
        <p className='Texto T-90'>
          Informar aos clientes de balcão sobre o entregas (sugestões, dúvidas, críticas ou elogios) passem o número da Central de Atendimento e Delivery: (48) 3091-5070 e (48) 9 9180-5070. Ou oriente em apontar o celular para o QRCode (adesivo colado no balcão de bolos ou crachá dos funcionários), abrirá automaticamente uma conversa com a Central de Atendimento.
        </p><br/><br/>
        <p className='Texto P-90 T-90'>
          <b>
            Comunicar-se com a Central SEMPRE que pegar encomenda para entrega, avisar a central, para que possam organizar a rota com nossos entregadores. Ação de extrema importância!
          </b>
        </p><br/><br/>
        <p className='Texto T-90'>
          Entregas/DELIVERY: Realizamos entregas de segunda a sábado, pedidos podem ser feitos nas lojas, telefone ou WhatsApp.  E trabalhamos com horário marcado via entrega fácil do ifood ou pelo app Ifood. Não temos entregador exclusivo / fixo.
        </p><br/><br/>
        <p className='Texto T-90'>
          <b>Horários de funcionamento</b><br/>
          Segunda à quinta: 09h às 18h<br/>
          Sexta: 09h às 18h30<br/>
          Sábado: 09h às 16h30<br/>
          Feriados 09h15 às 15h45 (conforme escala, pode haver alterções de horários). 
        </p><br/><br/>
        <p className='Texto T-90'>
          <b>FUNCIONAMENTO DELIVERY:</b> Cliente entrou em contato com a loja referente a encomenda de delivery, explique o funcionamento - dias, horários, cobertura separada em um recipiente. Obs: bolo de aniversário, sugira a venda junto com a caixa – presente, para que tenha mais segurança na entrega, explique ao cliente que estes bolos podem chegar danificados por serem mais delicados. (aniversários, toalha felpuda, prestígio, sobremesas, vó sonia) Pegue a encomenda e passe para a Central. Sempre que necessário e tendo qualquer dúvida, entrem em contato com a Central de Atendimento.
        </p><br/><br/>
        <p className='Texto T-90'>
          <b>FLEXIBILIDADE DE BOLOS/ENTREGA:</b> Dependendo por onde a/o responsável pela entrega esteja, pode pegar encomenda na loja mais próxima dele, preenchendo todos os dados solicitados na comanda de delivery- em casos que o cliente exigir a nota fiscal eletrônica, solicite todos os dados necessários...Razão Social, CNPJ, inscrição estadual, endereço, e-mail e telefone. 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={90} />
      </div>
    </div>
  );
}