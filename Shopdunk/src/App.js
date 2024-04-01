import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Layout from "./pages/Layout";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
