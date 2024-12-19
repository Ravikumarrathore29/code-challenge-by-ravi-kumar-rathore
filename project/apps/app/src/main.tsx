import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './app/store.tsx';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')!).render(
      //This makes the store accessible to the App that is passing it as a prop
    <Provider store={store}>
        <App />
    </Provider>


)
