import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to={"/valid-route"}>valid route</Link>
        </li>
        <li>
          <Link to={"/invalid-route"}>invalid route</Link>
        </li>
        <li>
          <Link to={"/not-a-function"}>variable is not a function</Link>
        </li>
        <li>
          <Link to={"/access-non-existing-property"}>
            Access non-existing property
          </Link>
        </li>
      </ul>
    </>
  );
}

export default App;
