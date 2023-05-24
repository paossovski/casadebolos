import React from 'react';

import '../../global_styles.css';
import '../../../src/components/Top/styles.css';

import cdb141 from '../../images/cdb_141.png';

export const Top = () => {
  return(
    <div className='Page__Top__Container'>
      <a href='#Page02'>
        <img className='Page__Img__Top' src={cdb141} alt='' />
      </a>
    </div>
  );
}