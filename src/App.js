import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.scss"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <div >
          <Head />
        </div>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Maincontainer />} />
            <Route path="/watch:videoId" element={<WatchPage />} />
          </Route>
        </Routes>
      </Provider>

    </>
  );
}

export default App;
