import React, {useEffect} from 'react';
import Header from "./Views/Header/Header";
import LandingPage from "./Views/LandingPage/LandingPage";

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);

  return (
    <div >
      <header>
        <Header />
      </header>

      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
