import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page17B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-27.593623375468717}
        longitude = {-48.61250995369084}
        text={'Casa de Bolos Floripa'}
      />
    </div>
  );  
}  