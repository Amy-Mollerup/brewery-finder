import Main from "./Components/Main/Main";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigureStore } from "./Redux/configureStore";
import Hero from "./Components/LandingPage/Hero";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Hero />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
