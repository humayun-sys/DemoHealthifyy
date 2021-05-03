import { BrowserRouter, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import "./assets/sass/main.scss";

import HomeLayout from "./Layout/HomeLayout";
// import GeneralLayout from "./Layout/GeneralLayout";
import Header from "./components/Header";
import Team from "./pages/Team";
import OurStory from "./pages/OurStory";
import OurCoaches from "./pages/OurCoaches";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Snap from "./pages/Snap";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
// import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import OurApplication from "./pages/OurApplication";
import Settings from "./pages/Settings";
import WorkoutPlan from './pages/WorkoutPlan';

import Home from "./pages/Home";
//import BookYourSession from "./pages/BookYourSession";
import SessionDetails from "./pages/SessionDetails";
import Plans from "./pages/Plans";
import HealthifyCare from "./pages/HealthifyCare";
import MentalWellness from "./pages/MentalWellness";
//import WorkoutPlan from "./pages/WorkOutPlan";
//import { Header } from "antd/lib/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route
            exact={true}
            path="/forgot-password"
            component={ForgotPassword}
          />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/login" component={Login} />

          <HomeLayout>
            <Route exact={true} path="/my-plans" component={Plans} />
            <Route
              exact={true}
              path="/book-your-sessions/session-details/:sessionId"
              component={SessionDetails}
            />
            {/* <Route
              exact={true}
              path="/book-your-sessions"
              component={BookYourSession}
            /> */}
            <Route exact={true} path="/" component={Home} />
            <Route exact ={true} path="/healthify-care" component={HealthifyCare}/>
            <Route exact={true} path="/blog" component={Blog} />
            <Route exact={true} path="/our-story" component={OurStory} />
            <Route exact={true} path="/careers" component={Careers} />
            <Route exact={true} path="/team" component={Team} />
            <Route exact={true} path="/Our-coaches" component={OurCoaches} />
            <Route exact={true} path="/Our-Application" component={OurApplication} />
            <Route exact={true} path="/settings" component={Settings} />
            <Route exact={true} path="/workout-plan" component={WorkoutPlan} />
            <Route exact={true} path="/mental-wellness" component={MentalWellness} />
            <Route exact={true} path="/snap" component={Snap}/>
            
          </HomeLayout>
         <Header/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
