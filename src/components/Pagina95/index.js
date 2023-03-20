import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina95 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-95'>
        <p className='Texto T-95'>
          O bolo de Morango é feito com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado. No recheio é usado o mesmo creme com morangos cozidos – consistência de geleia. E a cobertura tem  cinco morangos inteiros para decorar; O bolo de Nozes é com massa de pão de ló molhadinha, recheio e cobertura com o Creme Vó Sônia – base de creme de leite e leite condensado e nozes picadas; O bolo de Leite Ninho é com massa de pão de ló molhadinha, recheio e cobertura com o creme (consistência de mousse) de Leite Ninho, por fim aplicado o Leite Ninho em pó polvilhado em cima; O bolo de Churros é com massa de churros assado, com recheio e cobertura de doce de leite decorando. O bolo ganache de chocolate com morangos, é com massa de chocolate, molhadinho, com ganache de chocolate ao meio junto com morangos in natura picado, confeitado com ganache de chocolate e raspas de chocolate e morangos inteiros para decorar. O bolo ganache de chocolate com beijinho, é com massa de chocolate, molhadinho, com recheio de beijinho ao meio, confeitado com ganache de chocolate, coco ralado e beijinhos para decorar. 
        </p><br/><br/>
        <p className='Texto T-95'>
          E por fim, temos o bolo de Abacaxi com Coco, a famosa Torta Mineira! É com massa de pão de ló molhadinha, recheio com o Creme Vó Sônia base de creme de leite e leite condensado, abacaxi e coco. E na cobertura usamos o mesmo creme e coco em flocos.
        </p><br/><br/>
        <p className='Texto T-95'>
          <b className='P-95'>Caixa Presente:</b> É indicada para o Bolo de Aniversário, tamanho exato e uma ótima opção de transporte e para presentear.
        </p><br/><br/>
        <p className='Texto T-95'>
          <span className='P-95'>Tem Cuca?</span><br/><br/>
          Sim, temos sim, produzimos de Banana, Goiabada, Chocolate, Doce de Leite com Abacaxi, coco e Maçã com Nozes.  Baby (rende em média 10 fatias): Banana, Goiabada e Maça com Nozes Grande (rende em torno de 18 a 20 fatias): Banana, Goiabada, coco, chocolate e doce de leite com abacaxi E podemos produzi-las no tamanho retangular, rendendo em torno de 25 fatias.
        </p><br/><br/>
        <p className='Texto T-95'>
          <span className='P-95'>Como é a Torta?</span><br/><br/>
          A Torta é com a massa de bolo, vai à fruta em cima e o caramelo, é bem tradicional, gostinho de infância e de Vó. Rende em torno de 18 a 20 fatias.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={95} />
      </div>
    </div>
  );
}