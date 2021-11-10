// import React from 'react';
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';
 
// const Sidebar = () => {
//   return (
//     <div
//       style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
//     >
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a
//             href="/"
//             className="text-decoration-none"
//             style={{ color: 'inherit' }}
//           >
//             Sidebar
//           </a>
//         </CDBSidebarHeader>
 
//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">
//                 Analytics
//               </CDBSidebarMenuItem>
//             </NavLink>
 
//             <NavLink
//               exact
//               to="/hero404"
//               target="_blank"
//               activeClassName="activeClicked"
//             >
//               <CDBSidebarMenuItem icon="exclamation-circle">
//                 404 page
//               </CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>
 
//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };
 
// export default Sidebar;




import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sideBarData';
import './sideBar.css';
import { IconContext} from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // return (
  //   <>
  //     <IconContext.Provider value={{ color: '#FBF3E4' }}>
  //       <div className='navbar'>
  //         <Link to='#' className='menu-bars'>
  //           <AiIcons.AiOutlineArrowRight onClick={showSidebar} />
  //         </Link>
  //       </div>
  //       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
  //         <ul className='nav-menu-items' onClick={showSidebar}>
  //           <li className='navbar-toggle'>
  //             <Link to='#' className='menu-bars'>
  //               <AiIcons.AiOutlineClose />
  //             </Link>
  //           </li>
  //           {SidebarData.map((item, index) => {
  //             return (
  //               <li key={index} className={item.cName}>
  //                 <Link to={item.path}>
  //                   {item.icon}
  //                   <span>{item.title}</span>
  //                 </Link>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </nav>
  //     </IconContext.Provider>
  //   </>
  // );

  return (
    <>
      <IconContext.Provider value={{ color: '#FBF3E4' }}>
          {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}

          <div class="panel panel-primary" id="result_panel">
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                    <li class="list-group-item"><strong>Signature
                        Accommodations</strong>(1480m)
                    </li>
                </ul>
            </div>
          </div>
        {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
