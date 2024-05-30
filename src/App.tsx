import React, { useEffect } from "react";
import RootNav from "./navigation/RootNav";
import { Provider } from "react-redux";
import { store } from "./reduxStore/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RootNav />
      </Provider>
    </div>
  );
}

export default App;
// for creating typescript functional component
// tsdrpfc;
// setStateType  = setTodo = React.dispatch<React.SetStateAction<string>>
