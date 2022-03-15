import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}
