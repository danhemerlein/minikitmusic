import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import get from "../utils/get";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Oops, soemthing went wrong!</h1>;
  console.log(model);
  
  return <div>
      This will be minikitmusic.com
      <img src={get(model, "fields.backgroundImage.fields.file.url", {})} alt={get(model, "fields.backgroundImage.fields.file.title", {})} />
    </div>;
}

export default MainView;
