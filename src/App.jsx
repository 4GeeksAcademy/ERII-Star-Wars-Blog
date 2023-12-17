import Router from "./routes/Router";
import { AppContextProvider } from "./contexts/appContext";

function App() {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App
