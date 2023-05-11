import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page91 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page91__Container'>
        <p className='Page__Text Page__Line--Height'>
          Informe também os produtos que foram comprados, para que a emissão da nota saia de acordo com a compra do cliente, essa emissão de notas, somente a CDA tem autorização para emitir, nessa caso a loja não deverá emitir o cupom de venda no caixa, para que não seja duplicada a venda e impostos.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
        <b>FECHAMENTO DIÁRIO:</b> Ao final do dia, anotar na planilha de produção quantas entregas e bolos foram feitas e valor do custo das entregas. Anotar as vendas de produtos extras também como água, velas, coberturas. Em caso de entrega por Uber, a taxa é paga pelo cliente, nesse caso não anota como despesa, pois é o cliente que está pagando e não a loja. Caso a loja pague uma entrega onde houve falha interna da equipe, nesse caso é considerado DÉFICIT, pois é a loja que está arcando o prejuízo, por isso evite erros e não esqueça de anotar o déficit.
        </p>
      </div>
      <div className='Pagination__Container'>
        <Numbering num={91} />
      </div>
    </div>
  );
}