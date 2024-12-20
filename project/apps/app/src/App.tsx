import React, { useState, useEffect } from 'react';
import { List } from 'ui'
import { useFetchPokimonDataQuery } from './app/service/pokimonData';
import { pokemonRemoved , savePokimonData  ,pokemonAdded} from '../src/app/service/pokimonSlice';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {

  //Access the query result

  const dispatch = useDispatch();
  const pokemon = useSelector((state: any) => state.pokimonData);
  
  const { data, isLoading, error } = useFetchPokimonDataQuery();


  useEffect(() => {
    if (data?.hasOwnProperty('results')) {
      console.log("data",data);
      dispatch(savePokimonData(data));
    }
  }, [data])
  const removePokemonAction = useSelector((state :any) => state.pokimonData);
  console.log("pokemon", pokemon , " removePokemonAction" ,removePokemonAction);
  


  const handleRemovePokemon = (val: string) => {
    console.log("val", val)
    if (val != "") {
      dispatch(pokemonRemoved(val));
      
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <h1>Pokemon list:</h1>
      {/* <p>Remove Pokemon Action: {removePokemonAction}</p> */}
      {
        data?.hasOwnProperty("results") && <List data={data} handleRemovePokemon={handleRemovePokemon} />
      }

    </>
  )
}

export default App
