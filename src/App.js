import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from './Pages/Loading'

const App = () => {
  const Home = React.lazy(() => import('./Pages/Home'))
  const Page404 = React.lazy(() => import('./Pages/Page404'))
  const Contact = React.lazy(() => import('./Pages/Contact'))
  const Admin = React.lazy(() => import('./Pages/Admin'))
const AdminDashbord = React.lazy(() => import('./components/AdminDashbord/AdminDashbord'))
const NouvCardDetails = React.lazy(() => import('./Pages/NouvCardDetails'))
const SearchPage = React.lazy(() => import('./Pages/SearchPage'))
const Location = React.lazy(() => import('./components/navbar/NavbarPosts/Location'))
const Vendre = React.lazy(() => import('./components/navbar/NavbarPosts/Vendre'))
const VendreVilla = React.lazy(() => import('./components/navbar/NavbarPosts/VendreVilla'))
const VendreAppartement = React.lazy(() => import('./components/navbar/NavbarPosts/VendreAppartement'))
const LocationAppartement = React.lazy(() => import('./components/navbar/NavbarPosts/LocationAppartement'))
const LocationVilla = React.lazy(() => import('./components/navbar/NavbarPosts/LocationVilla'))
  return (
    <>
    <Router>
    <React.Suspense fallback={<Loading/>}>
      <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path='/Details/:id' component={NouvCardDetails}/>
      <Route exact path='/Vente/Details/:id' component={NouvCardDetails}/>
      <Route exact path='/location/Details/:id' component={NouvCardDetails}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact path='/admin' component={Admin}/>
      <Route exact path="/Admin-dashbord" component={AdminDashbord} />
      <Route exact path='/location' component={Location}/>
      <Route exact path='/location/Appartement' component={LocationAppartement}/>
      <Route exact path='/location/Villa' component={LocationVilla}/>
      <Route exact path='/Vente/Appartement' component={VendreAppartement}/>
      <Route exact path='/Vente/Villa' component={VendreVilla}/>
      <Route exact path='/Vente' component={Vendre}/>
      
      <Route exact path='/Search' component={SearchPage} />
      <Route exact component={Page404}/>
      </Switch>
      </React.Suspense>
    </Router>
    </>
  )}

export default App
