import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb73 from '../../images/cdb_73.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page75 = () => {
  return(
    <div 
      id='Page75' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page75__Container'>
        <p className='Page__Text Page__Line--Height'>
          Se as bandeirolas estiverem sujas, favor lavar, deixando apenas de "molho" (não bater no tanquinho). Precisamos conscientizar clientes que a vaga é para o período em comprar, manter-se educado, mas fiscalizar, e quando ver abusos avisar vizinhos que embora a lei permita, ser educado e ajudar o próximo é fundamental.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>ESTREITO:</b> Não disponibilizamos mais vagas para nossos clientes, pois o estacionamento mais próximo da loja não aceitou parceria. Fale isso ao cliente, diga que tentamos diversas formas, mas o respeito de estacionar rapidamente e retirar ainda é o melhor.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>MAURO RAMOS:</b> disponibilizamos de três vagas exclusivas para os clientes, manter a calçada sempre limpa e as placas de estacionamento exclusivo.
        </p><br/><br/>
        <img className='Page75__Img' src={cdb73} alt="" /><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>QUANDO COLOCAR A PLAQUINHA AMIGÁVEL NOS CARROS ESTACIONADOS EM NOSSAS VAGAS?</b><br/>
          Nas lojas onde temos estacionamento desenvolvemos um cartãozinho de papel simples e pequeno, informando de forma amigável aos nossos clientes o quanto aquela vaga é importante para as vendas de nossas lojas. Percebemos após análises que em meio período que alguém deixa o carro estacionado nas vagas em frente a loja, deixamos de vender 10 bolos, ou seja mais de 250 bolos no mês em média. É uma perda imensa, ou seja, seja guardião das vagas de estacionamento, seja responsável.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={75} />
        </div>
      </div>
    </div>
  );
}