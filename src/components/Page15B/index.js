import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page15B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-27.59670305983947}
        longitude = {-48.54771757848827}
        text={'Casa de Bolos Floripa'}
      />
    </div>
  ); 
} 