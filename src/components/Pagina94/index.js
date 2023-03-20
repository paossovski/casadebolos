import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina94 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-94'>
        <p className='Texto T-94'>
          E a cobertura Cacau Funcional é 70% cacau, possui lactose devido ao derivado do leite utilizado, a manteiga.
        </p><br/><br/>
        <p className='Texto T-94'>
          <span className='P-94'>Qual a diferença entre a cobertura especial e a cobertura funcional?</span><br/><br/>
          <b>Cobertura especial</b> é sem lactose e derivados, produzida à base de leite de coco e cacau 50% (sem glúten). E a <b>cobertura funcional</b>, é com cacau 70% (tem lactose e sem glúten).
        </p><br/><br/>
        <p className='Texto T-94'>
          <span className='P-94'>Como é o Bolo de Pote?</span><br/><br/>
          Porção individual, prontinho para consumo. É uma boa pedida, geladinho, contendo quatro camadas, entre bolo, recheio e cobertura. São bem saborosos, excelente opção para sobremesa.
        </p><br/><br/>
        <p className='Texto T-94'>
          <span className='P-94'>Quais sabores de bolo no Pote tem?</span><br/><br/>
          Temos Abacaxi com Coco (a famosa Torta Mineira), Banana, Brigadeiro, Cenoura com Chocolate, Laranja, Limão, Tapioca, Maracujá com Chocolate, Prestígio, Beijinho, Churros, Abacaxi com Ameixa, Leite Ninho, Nozes com Doce de Leite, Leitinho com Chocolate, Romeu e Julieta, Morango com Creme e Cenoura Funcional.
        </p><br/><br/>
        <p className='Texto T-94'>
          <span className='P-94'>Temos Bolo de Aniversário?</span><br/><br/>
          As opções de Aniversário no Delivery devido às experiências obtidas, sugerimos a compra da caixa presente (tamanho ideal, apropriada e mais segura)   para o transporte. A cobertura e o recheio são mais sensíveis e mais propícios em chegar fora do padrão,  correndo o risco de rachar ou quebrar. Como não queremos que ocorra este tipo de situação com você, indicamos para retirá-los na loja de sua preferência, mas caso deseje assim mesmo receber através do delivery, esteja ciente que o bolo de aniversário pode chegar um pouco danificado, mesmo sendo embalado com uma cinta de segurança e colocado na caixa.  O bolo de Chocolate, é com massa de chocolate, recheio e cobertura de chocolate estilo ganache finalizado com granulado; 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={94} />
      </div>
    </div>
  );
}