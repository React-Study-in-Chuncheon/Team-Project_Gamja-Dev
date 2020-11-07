import { Switch, BrowserRouter, Route } from "react-router-dom";
import LandingView from "./views/LandingView";

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Switch>
               <Route path="/" component={LandingView} />
            </Switch>
         </BrowserRouter>
      </div>
   );
};

export default App;
