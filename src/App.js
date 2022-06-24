import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ApplyNow from './components/ApplyNow/ApplyNow';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Job from './components/Job/Job';
import Login from './components/Login/Login';
import PrivadeRoute from './components/PrivadeRoute/PrivadeRoute';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Job />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/job">
            <Job />
          </Route>
          <PrivadeRoute path="/applyNow">
            <ApplyNow />
          </PrivadeRoute>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
