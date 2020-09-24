import React from "react";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header";
import { GlobalProvider } from "./contexts/GlobalState";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <GlobalProvider>
            <Header />
            <MovieContainer />
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
