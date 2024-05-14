import { useState, useEffect } from 'react'
import {
  Profile, MarketingPage, InfluencerProfileSetup, Plateform, ProfileDetail,
  Setting, Management, SignIn, ResetPassword, AccountType,
  NewBrandAccount, BrandEmailVerify, Notifications,
  Orders, NewInfluencerAccount, InfluencerEmailVerfiy
} from './Pages/index'
import { Header, Footer } from './Components'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastCard } from './Components/index.js';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './Utils/PrivateRoutes.jsx'
import Cookies from 'js-cookie';
import './App.css'




function App() {
  const [token, setToken] = useState(0)
  const ConditionalFooter = () => {
    const location = useLocation();
    if (
      location.pathname === '/auth/signIn' ||
      location.pathname === '/auth/reset-password' ||
      location.pathname === '/auth/brand/email-verify' ||
      location.pathname === '/auth/account-type' ||
      location.pathname === '/auth/influencers/new-influencers-account' ||
      location.pathname === '/auth/brand/new-brand-account'
    ) {
      return null;
    }
    return <Footer />;
  };

  const useCheckLogin = () => {
    const token = Cookies.get('userToken');
    if (token) {
      setToken(1);
    } else {
      setToken(0);
    }
  }

  useEffect(() => {
    useCheckLogin();
  }, []);

  const logout = () => {
    setToken(0); 
  };



  return (
    <div className="App">
      <Router>
      <Header token={token} onLogout={logout}/>
        <Routes>
          {/* <Route path='/' element={<MarketingPage />} /> */}
          <Route path='/' element={<Profile />} />
          <Route path='/plateform/:id' element={<Plateform />} />
          <Route path='/auth/account-type' element={<AccountType />} />
          {/* login  */}
          <Route path='/auth/signIn' element={<SignIn />} />
          <Route path='/auth/reset-password' element={<ResetPassword />} />
          {/* Influencer  */}
          <Route path="/auth/influencers/new-influencers-account" element={<NewInfluencerAccount />} />
          <Route path="/auth/influencers/influencers-email-verify" element={<InfluencerEmailVerfiy />} />
          {/* brand  */}
          <Route path='/auth/brand/new-brand-account' element={<NewBrandAccount />} />
          <Route path='/auth/brand/email-verify' element={<BrandEmailVerify />} />
          {/* profile setup  */}


          <Route path='/' element={<PrivateRoutes />} >
            <Route path='/user/:id' element={<ProfileDetail />} />
            <Route path='/profile-management' element={<Management />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/notification' element={<Notifications />} />
            <Route path='/profile-setting' element={<Setting />} />
            <Route path='/auth/influemcer-profile-setup' element={<InfluencerProfileSetup />} />
          </Route>
        </Routes>
        <ConditionalFooter />
      </Router>
      <ToastCard />
    </div>
  )
}

export default App
