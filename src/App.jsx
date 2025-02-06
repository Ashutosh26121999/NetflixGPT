import {Provider} from "react-redux";
import Body from "./componenets/Body";
import store from "./utils/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;
