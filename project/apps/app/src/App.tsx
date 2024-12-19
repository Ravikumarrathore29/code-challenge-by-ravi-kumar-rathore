import { List } from 'ui'

import { useFetchPokimonDataQuery } from './app/service/pokimonData';

const App = () => {

  //Access the query result
  //const {data, isLoading, error} = useGetPokimonLimitQuery();
  const res = useFetchPokimonDataQuery();
  console.log("Task 1 ", res);

  return (
    <>
      <h1>Pokemon list:</h1>
      <List />
    </>
  )
}

export default App
