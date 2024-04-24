import { Route, Switch } from "react-router-dom";
import MonumentsPage from "./MonumentsPage";

const App = () => {
  return (
    <Switch>
      <Route path="/monuments" component={MonumentsPage} />
      {/* Add other routes here */}
    </Switch>
  );
};

export default App;