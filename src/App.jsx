import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useRouteElements from "./useRouter";

function App() {
  const [count, setCount] = useState(0);
  const routeElements = useRouteElements();

  return <>{routeElements}</>;
}

export default App;
