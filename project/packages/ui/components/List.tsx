
import React, { FC } from 'react';
import { IPokimonData,  } from './List.type';
import VirtualizedList from './VirtualizedList';




export const List:FC<IPokimonData> = (props) => {
  const { data } = props;
  const screenHeight :number = window ? window.innerHeight : 50;
  const itemWidth :string = "100%";
  const itemHeight: number =35
  
  return (
    <div>
        <VirtualizedList list={data.results} height={screenHeight} width={itemWidth} itemHeight={itemHeight} />
    </div>
  )
}
