import { Switch, BrowserRouter, Route } from "react-router-dom";
import LandingView from "./views/LandingView";
import TestView from "./views/TestView";

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={LandingView} />
               <Route exact path="/test" component={TestView} />
            </Switch>
         </BrowserRouter>
      </div>
   );
};

export default App;
