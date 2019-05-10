import React from "react";
import { store} from "./store";
import { Provider } from "react-redux";
import App from "./App";
import spinner from "./assets/spinner.gif";


const AppContainer = () => (
    (store)
        ? (
        <Provider store={store}>
                <div className="container">
                    <App />
                </div>
        </Provider>
    ) : (
        <img src={spinner} />
    )
)
export default AppContainer;
