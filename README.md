
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


