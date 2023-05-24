import React from 'react';

import '../../global_styles.css';
import './styles.css';

import cdb01 from '../../images/cdb_01.png';

export const Page01 = () => {
  return(
    <div className='Page'>
      <div className='Page__Container'>
        <div className='Cover__Container'>
          <h1 className='Cover__Title'>
            Manual de Condutas <br/> e Práticas
          </h1>
        </div>
        <div className='Cover__Logo__Container'>
          <img className='Cover__Logo' src={cdb01} alt='' />
        </div>
      </div>
    </div>
  );
}