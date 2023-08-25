import { Provider } from "react-redux";
import Store from "./store";
import Layout from "./layout";

const App = () => {
  return (
    <Provider store={Store}>
      <Layout />
    </Provider>
  );
};

export default App;
