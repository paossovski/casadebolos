import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page21B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-25.494880951663053}
        longitude = {-49.27956785320867}
        text={'Casa de Bolos Curitiba'}
      />
    </div>
  );  
}     