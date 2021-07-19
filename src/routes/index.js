// Copyright 2021 Franklin Siqueira
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------
//
//// Gama Academy | Hiring Coders | [HC] Módulo 07 | React
//
// ------------------------------------------------------------------------
//  src/routes/index.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React from 'react';
// import Router from 'react-router-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
/** Imports (App) */
import BfPage from '../../src/views/pages/sale/blackfriday/index';
import Home from './../views/pages/home';
import Error from './../views/pages/error'
/** training */
import FathersDayPage from "./../assets/lab/frontEnd/indexLandPage";
//
const Routes = () => (
  //
  <BrowserRouter>
    <Switch>
      {/* <Route path='/' exact component={BfPage} /> */}
      {/* <Route path='/store' exact component={Home} /> */}
      <Route path='/training' exact component={FathersDayPage} />
      <Route path='*' component={Error} />
      {/* <Route exact path='/gitrepos' component={GitRepos} />
      <Route exact path='/getrepos' component={GetRepos} /> */}
    </Switch>
  </BrowserRouter>
);
//
export default Routes;