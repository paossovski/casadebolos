import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';


export const Page102 = () => {
  return(
    <div 
      id='Page102' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page102__Container'>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page102__Text--Border'>
            Entregam Bolo de Aniversário?
          </span><br/><br/> 
          As opções de Aniversário no Delivery, sugerimos de ir na caixa presente (tamanho ideal, apropriada e mais segura) para o transporte. A cobertura e o recheio são mais sensíveis e mais propícios em chegar fora do padrão, correndo o risco de rachar ou quebrar, como não queremos que ocorra este tipo de situação com você, indicamos para retirá-los na loja de sua preferência. O bolo de Chocolate, é com massa de chocolate, recheio e cobertura de chocolate estilo ganache finalizado com granulado; O bolo de Morango é feito com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado. No recheio é usado o mesmo creme com morangos cozidos – consistência de geleia. E a cobertura cinco morangos para decorar; O bolo de Nozes é com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado e nozes; O bolo de Leite Ninho é com massa de pão de ló molhadinha, recheio e cobertura com o creme (consistência de mousse) de Leite Ninho, por fim, Leite Ninho em pó polvilhado em cima; O bolo de Churros é com massa de churros assado, com recheio e cobertura de doce de leite.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          E por fim, temos o bolo de Abacaxi com Coco, a famosa Torta Mineira! É com massa de pão de ló molhadinha, recheio com o Creme Vó Sônia base de creme de leite e leite condensado, abacaxi e coco. E a cobertura usamos o mesmo creme e coco ralado. Todas as opções são deliciosas, pode acreditar!!
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page102__Text--Border'>
            Como é o Bolo Vó Sônia? E pode entregar?
          </span><br/><br/>
          O bolo Aniversário tamanho menor (média de 10 fatias) de Morango, é feito com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado. No recheio é usado o mesmo creme com morangos cozidos – consistência de geleia. E a cobertura três morangos para decorar. O bolo Aniversário tamanho menor (média de 10 fatias) de Nozes é feito com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado e nozes. O bolo Aniversário tamanho menor (média de 10 fatias) de Abacaxi com Coco, a famosa Torta Mineira. É com massa de pão de ló molhadinha, recheio com o Creme Vó Sônia base de creme de leite e leite condensado, abacaxi e coco.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={102} />
        </div>
      </div>
    </div>
  );
}