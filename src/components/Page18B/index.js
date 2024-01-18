import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Map } from '../Maps';

export const Page18B = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <Map 
        latitude = {-27.590281126777462}
        longitude = {-48.543301884430036}
        text={'Casa de Bolos Floripa'}
      />
    </div>
  );  
}   