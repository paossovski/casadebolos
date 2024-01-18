import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb32 from '../../images/cdb_32.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page38 = () => {
  return(
    <div 
      id='Page38' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page38__Container'>
        <img className='Page38__Img' src={cdb32} alt="" /><br/><br/>
        <h1 className='Page__Text Page38__Text--Align'>
          ORIENTAÇÕES PARA ÁREA DE <br/> ATENDIMENTO
        </h1><br/>
        <h3 className='Page__Text Page38__Text--Background'>
          Horários importantes 8h/9h / 10h /16h /17h45/ 18h30/19h
        </h3><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>COMO ABRIR A LOJA:</b> É necessário verificar a limpeza da parte externa (fora da loja), se não tem lixo e afins. Certificar também se a área de atendimento está limpa (chão, balcão, geladeira, potes, mesa, banco e paredes), máquinas de cartão e internet funcionando. Contar abertura de caixa e anotar na planilha; Acender sempre as luzes; Confirmar se tem sacolas, papel acoplado e colheres; Ligar o som; E ter pelo menos uma fileira (prateleira) de bolos no balcão (15 bolos no balcão).
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>COMO LIMPAR O BALCÃO:</b> Se tiver bolos, retirar todos e primeiro passar   um pano seco para retirar os farelos, após, com uma esponja umida (limpa, destinada apenas para isso) colocar um pouco de detergente e limpar toda a área interna e externa, retirando o excesso de espuma e agua, secando com um pano (perfex). Após secar, limpar com pano seco ou papel toalha, dando brilho ao vidro. Na parte superior (branca) usar saponáceo para tirar manchas.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>QUEM LIMPA O CHÃO DO ATENDIMENTO DURANTE O FUNCIONAMENTO DA LOJA:
          </b> Antes de abrir a loja, o responsavel pelo atendimento faz toda a limpeza da área, chão, balcão, prateleiras, geladeira de potes, repoe materiais, coloca bolo dentro do balcão, abre 
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={38} />
        </div>
      </div>
    </div>
  );
}