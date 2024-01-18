import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page16B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-27.58384530276583}
        longitude = {-48.58393127759145}
        text={'Casa de Bolos Floripa'}
      />
    </div>
  );  
} 