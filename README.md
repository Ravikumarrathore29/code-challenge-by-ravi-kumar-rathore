
## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>


We have install redux toolkit inside "apps" of "Project" folder , doing this we are able to use createApi which create an instance of API , by definning  baseUrl and endpoint . It will provide hooks (useFetchPokimonDataQuery) which can be used to fetch data from API.

Since in the TASKS it is mention to "demonstrate your ability to work with React, Redux toolkit, Vite and TurboRepo therefore we have used "Redux Toolkit Query" to fetch api . We have other option as well like  "fetch" is a built-in JavaScript function that allows us to make HTTP requests.  but it has no built-in support for error handling, caching, or aborting requests and "Axios" has built-in support for error handling, caching, and aborting requests but requires an additional dependency whereas Redux Toolkit Query is a part of the Redux Toolkit library,  which provides a set of utilities for managing state in Redux applications.  Query is specifically designed for handling API data fetching and caching.

Question 2: What steps would you take to future improve this?<br>
Answer 2: 
1) At present the provided api is having limit , ideally there should be pagination also , which means we can fetch limited data based on interet speed, so that it will fetch immedialtely .
2) We have to use more feature of Reduct toolikit query like Automatic caching , Query dependency which will help in error handling and other place like loading etc.

## Task 2:
For this task we are pasing list "results"  into the List component when we receied from the api as a response .

Inside this List component we are have created new component i.ie `VirtualizedList`. Once we received all list name then based on screen size we are showing few name ,it works by only rendering part of a large data set (just enough to fill the viewport). This helps address some common performance bottlenecks:

It reduces the amount of work (and time) required to render the initial view and to process updates.
It reduces the memory footprint by avoiding over-allocation of DOM nodes.


## Task 3:
For task 3rd we have Style the `<List />` component to display as a grid . it is responsive grid .

## Task 4:
Assignment: Introduce redux-toolkit and store the list of pokémon in the redux store.
Answer: As we have mention above we had already use redux toolkit for fetching data 
to store in redux store we can use below three method

1) while requesting data at that time we use below code in this we are using dispacth function which will call when we received data
```javascript
getPokimonList: builder.query<Promise<IGetVo[]>, void>({
      query: () => '/limits=151',
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        console.log(id, 'current id');
        // `onStart` side-effect
        // dispatch(messageCreated('Fetching post...'));
        try {
          const { data } = await queryFulfilled;
          console.log(data, '=======');
          dispatch(getSlice.actions.setPokimonData(data));
          // `onSuccess` side-effect
          // dispatch(messageCreated('Data received!'));
        } catch (err) {
          // `onError` side-effect
          // dispatch(messageCreated('Error fetching Data!'));
        }
      },
      transformResponse: (response: { result: Promise<IGetVo[]> }) => {
        return response.result;
      },
```
2) second method is when we recived success data via useFetchPokimonDataQuery then we can use dispatch to savePokimon data in store 
```javascript
  const { data, isLoading, error } = useFetchPokimonDataQuery();

  useEffect(() => {
    if (data?.hasOwnProperty('results')) {
      console.log("data",data);
      dispatch(savePokimonData(data));
    }
  }, [data])

```
3) Third but better approach is creating extraReducer
in this way we there will be no need  of using onQueryStarted for this, we can  just add an extraReducer with 
builder.addMatcher(api.endpoints.getPokimonList.matchFulfilled, (state, action) => {}) to  slice and 
it will directly use the RTKQ-internal action without firing another one (which might save our some computing power).

Question 4: What makes the createSlice in redux-toolkit difference then A Reducer in redux?
Answer : 
In Redux, a `reducer` is a pure function that takes the `current` `state` and an `action`, and returns a `new` `state`.
```javascript
const initialState = {
  counter: 0
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer
});

export default rootReducer;

whereas in Redux Toolkit's `createSlice` is a `highe-order function` that generates a `reducer` and an `action` creator for us, making it easier to `manage` our Redux state.
`createSlice` automatically generates action types for us, so we don't need to define them manually also it ensures that our state is always immutable

const initialState = {
  counter: 0
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    }
  }
});

export const { increment, decrement } = exampleSlice.actions;
export default exampleSlice.reducer;
```
Question 5: Describe the benefits of immutable code.
Answer: 
Immutable code ensures that the state of an application is always `predictable` and `consistent`. 
When the state is immutable, we can be certain that the application will behave as expected, even in complex scenarios.

Immutable code can lead to better performance because it reduces the need for unnecessary re-renders. 
When the state is immutable, React can efficiently determine which components need to be updated.


## Task 5:
For this assignment we created a button (delete icon) for each pokemon on click of that we are calling function (`handleRemovePokemon`) where an Action will be dispatched   `pokemonRemoved` to remove the pokémon from the store.

 Question 6: How can you verify the action has been dispatched?
 Answer :  

 below are the few method to verify the action has been dispatched 
 1) in Redux Toolkit, we can use the `useDispatch` hook from the `@reduxjs/toolkit` package .
 but  it won't give us the dispatched `action` because `useDispatch` returns a `function` that returns the `dispatch function`, 
but it doesn't return the dispatched action itself.

2) another way is `useSelector` hook with a custom selector that checks if the action has been dispatched
but it requires  to know the `type of action` that has been dispatched.

```javascript
import { useSelector } from 'react-redux';
import { counterSlice } from './counterSlice';

function MyComponent() {
  const hasActionBeenDispatched = useSelector((state) =>
    state.counter.actions.some((action) => action.type === counterSlice.actions.increment.type)
  );

  return (
    <div>
      <p>Has action been dispatched: {hasActionBeenDispatched ? 'Yes' : 'No'}</p>
    </div>
  );
}
```
3)  `logger` middleware from Redux Toolkit to log dispatched actions or `redux-logger` with a custom log level to filter out certain types of actions.


