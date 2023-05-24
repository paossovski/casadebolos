import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb55 from '../../images/cdb_55.jpg';
import cdb56 from '../../images/cdb_56.jpg';
import cdb57 from '../../images/cdb_57.jpg';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page54 = () => {
  return(
    <div 
      id='Page54' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page54__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>INMETRO:</b> É o órgão do governo que fiscaliza balanças e estes fiscais aparecem de surpresa nas lojas, e sempre estão identificados com crachá. Retirar <b>IMEDIATAMENTE</b> das balanças pequenas (brancas) e esconder. Elas são proibidas. Colocar em uso a balança maior com o selo do INMETRO. A multa é caríssima caso estas balanças brancas sejam pegas na área de produção. Se puder evitar de usar, agradecemos.
        </p><br/>
        <div className='Page54__Img__Container'>
          <img className='Page54__Img--A' src={cdb55} alt="" />
          <img className='Page54__Img--B' src={cdb56} alt="" />
        </div><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>MANUTENÇÃO –</b> Na folha de produção há um espaço ao final da primeira folha onde tem o campo direcionado para essa questão, e é nesse local que devem anotar os pedidos, como ajustes, reforma e situações importantes, colocando ali a necessidade urgente ou não. <i>Não passar via whatsApp, não ligar, não anotar num papelzinho, é apenas por este local. Se possivel, coloque bem especificicado.</i> 
        </p><br/><br/>
        <img className='Page54__Img--C' src={cdb57} alt="" /><br/><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>CHOVEU?</b> Não esqueça de colocar a placa de "Cuidado piso molhado" - É lei, é obrigatório. Mantenha um pano e rodo por perto e coloque o porta-guarda chuva junto.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={54} />
        </div>
      </div>
    </div>
  );
}