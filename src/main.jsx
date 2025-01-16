import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs.jsx'
import AboutUs from './Components/AboutUs.jsx'
import BodyConatiner from './Components/Ecommerce/BodyConatiner.jsx'
import Cart from './Components/Ecommerce/Cart.jsx'
import Cartpage from './Components/Ecommerce/Cartpage.jsx'
import Login from "./Components/Ecommerce/admin/Login.jsx"
import Addmember from './Components/Ecommerce/admin/addmember.jsx'
import Dashboard from './Components/Ecommerce/admin/AdminDashboard/Dashboard.jsx'
import Userdashboard from './Components/Ecommerce/user/Userdashboard.jsx'
import PrivateRoute from './Components/Ecommerce/PrivateRoute.jsx'
import App from './App.jsx'
import MemberDashboard from './Components/Ecommerce/Member/MemberDashboard.jsx'
import Unverifiedmemeber from './Components/Ecommerce/admin/Unverifiedmemeber.jsx'
import UserProfile from './Components/Ecommerce/user/UserProfile.jsx'
import MemberProfile from './Components/Ecommerce/Member/MemberProfile.jsx'
import Orderlisting from './Components/Ecommerce/Member/Orderlisting.jsx'
import Productinglisting from './Components/Ecommerce/Member/Productinglisting.jsx'
import Productinfo from './Components/Ecommerce/user/Productinfo.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <BrowserRouter>
//        <Routes>
//           <Route path='/' element={<App/>}> 
//             <Route path='/admindashboard' element={<Dashboard/>} />
//             <Route path='userdashboard' element={<Userdashboard/>}/>
//             <Route path='/addmember' element={<Addmember/>}/>
//             <Route path='/' element={ <Login/>}/> 
//             <Route path='/dashboard' element={ <BodyConatiner/>}/> 
//             <Route path='/cartpage' element={<Cartpage/>}/>
//             <Route path='/contactus' element={<ContactUs/>}/>
//             <Route path='/aboutus' element={<AboutUs/>}/>
//           </Route>
//        </Routes>
//     </BrowserRouter>
//   </StrictMode>
// )


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                    <Route index element={<Login/>}/>
                    <Route path='/admin' element={<Dashboard/>}/>
                    <Route path='/user' element={<Userdashboard/>}/>
                    <Route path='/member' element={<MemberDashboard/>}/>

                    <Route path='/cartpage' element={<Cartpage/>}/>

                     <Route path='/contactus' element={<ContactUs/>}/>
                     <Route path='/addmember' element={<Addmember/>}/>
                     <Route path='/unverifiedmemnber' element={<Unverifiedmemeber/>}/>

                     <Route path='userprofile' element={<UserProfile/>}/>
                     <Route path='memberprofile' element={<MemberProfile/>}/>
                     <Route path='productinfo/:id' element={<Productinfo/>}/>

                     <Route path='memberorderlist' element={<Orderlisting/>}/>
                     <Route path='memberproductlist' element={<Productinglisting/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

);


