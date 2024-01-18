import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page14B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-27.59515355927653}
        longitude = {-48.55607252186248}
        text={'Casa de Bolos Floripa'}
      />
    </div>
  );
} 