import { List } from 'ui'

import { useFetchPokimonDataQuery } from './app/service/pokimonData';

const App = () => {

  //Access the query result
  const {data, isLoading, error} = useFetchPokimonDataQuery();


  return (
    <>
      <h1>Pokemon list:</h1>
      {
         data?.hasOwnProperty("results") && <List data={data}/>
      }
      
    </>
  )
}

export default App
