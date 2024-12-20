
import React, { FC } from 'react';
import { IPokimonData,IList } from './List.type';
import VirtualizedList from './VirtualizedList';
import ListAsGrid from './ListAsGrid';




export const List = (props:IList) => {
  const { data , handleRemovePokemon } = props;
  
  const screenHeight: number = window ? window.innerHeight : 50;
  const itemWidth: string = "100%";
  const itemHeight: number = 50

  return (
    <div>
      {/* Task 2  */}
      {/* <VirtualizedList list={data.results || []} height={screenHeight} width={itemWidth} itemHeight={itemHeight} /> */}

      {/* Task 3  */}
      <ListAsGrid  results={data.results || []} handleRemovePokemon={handleRemovePokemon}  />
    </div>
  )
}
