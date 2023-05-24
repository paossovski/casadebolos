import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page95 = () => {
  return(
    <div 
      id='Page95' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page95__Container'>
        <p className='Page__Text Page__Line--Height'>
          O bolo de Morango é feito com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado. No recheio é usado o mesmo creme com morangos cozidos – consistência de geleia. E a cobertura tem  cinco morangos inteiros para decorar; O bolo de Nozes é com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado e nozes picadas; O bolo de Leite Ninho é com massa de pão de ló molhadinha, recheio e cobertura com o creme (consistência de mousse) de Leite Ninho, por fim aplicado o Leite Ninho em pó polvilhado em cima; O bolo de Churros é com massa de churros assado, com recheio e cobertura de doce de leite decorando. O bolo ganache de chocolate com morangos, é com massa de chocolate, molhadinho, com ganache de chocolate ao meio junto com morangos in natura picado, confeitado com ganache de chocolate e raspas de chocolate e morangos inteiros para decorar. O bolo ganache de chocolate com beijinho, é com massa de chocolate, molhadinho, com recheio de beijinho ao meio, confeitado com ganache de chocolate, coco ralado e beijinhos para decorar. 
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          E por fim, temos o bolo de Abacaxi com Coco, a famosa Torta Mineira! É com massa de pão de ló molhadinha, recheio com o Creme Vó Sônia base de creme de leite e leite condensado, abacaxi e coco. E na cobertura usamos o mesmo creme e coco em flocos.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b className='Page95__Text--Border'>Caixa Presente:</b> É indicada para o Bolo de Aniversário, tamanho exato e uma ótima opção de transporte e para presentear.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page95__Text--Border'>Tem Cuca?</span><br/><br/>
          Sim, temos sim, produzimos de Banana, Goiabada, Chocolate, Doce de Leite com Abacaxi, coco e Maçã com Nozes.  Baby (rende em média 10 fatias): Banana, Goiabada e Maça com Nozes Grande (rende em torno de 18 a 20 fatias): Banana, Goiabada, coco, chocolate e doce de leite com abacaxi E podemos produzi-las no tamanho retangular, rendendo em torno de 25 fatias.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page95__Text--Border'>
            Como é a Torta?
          </span><br/><br/>
          A Torta é com a massa de bolo, vai à fruta em cima e o caramelo, é bem tradicional, gostinho de infância e de Vó. Rende em torno de 18 a 20 fatias.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={95} />
        </div>
      </div>
    </div>
  );
}