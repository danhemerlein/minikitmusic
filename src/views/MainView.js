import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "../utils/get";
import HomePage from '../components/HomePage';

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;
  console.log(model);
  
  return <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" 
          render={() => 
            <HomePage 
              image1SRC={get(model, "fields.backgroundImage.fields.file.url", {})}
              image2SRC={get(model, "fields.backgroundImage2.fields.file.url", {})} />
            } 
          />
        </Switch>
      </Router>
    </Fragment>;
}

export default MainView;
