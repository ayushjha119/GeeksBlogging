import React, { useState } from 'react';
import { APP_NAME } from '../config';
import Router  from 'next/router';
import { signout,isAuth } from '../actions/auth';
import NProgress from 'nprogress';
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Search from './blog/Search'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError= url => NProgress.done()


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
          <Navbar color="light" light expand="md">
            <Link href="/">
                <NavLink  style={{cursor: 'pointer' }} className="h4 text-success fw-bold">{APP_NAME}</NavLink>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ms-auto" navbar>
              




<React.Fragment>

<NavItem className="text-center">
                 <Link href="/about">
                    <NavLink style={{cursor: 'pointer' }}>
                 About
                     </NavLink>
                   </Link>                  
      </NavItem>

       <NavItem className="text-center">
                 <Link href="/blogs">
                    <NavLink style={{cursor: 'pointer' }}>
                 Blogs
                     </NavLink>
                   </Link>                  
      </NavItem>

         <NavItem className="text-center">
                 <Link href="/contact">
                    <NavLink style={{cursor: 'pointer' }}>
                 Contact
                     </NavLink>
                   </Link>                  
      </NavItem>

</React.Fragment> 

  





              {!isAuth() && (<React.Fragment>

                <NavItem className="text-center">
                    <Link href="/signin">
                        <NavLink style={{cursor: 'pointer' }}>
                            Signin
                        </NavLink>
                    </Link>                  
                </NavItem>


                <NavItem className="text-center">
                  <Link href="/signup">
                    <NavLink style={{cursor: 'pointer' }}>Signup</NavLink>
                  </Link>
                </NavItem>

              </React.Fragment>
              )}
                
                 

                  {isAuth() && isAuth().role===0 && (
                    <NavItem className="text-center">
                    <Link href="/user">
                        <NavLink style={{cursor: 'pointer' }}>
                            {`${isAuth().name}'s Dashboard`}
                        </NavLink>
                    </Link>                  
                </NavItem>
                  )}


                  {isAuth() && isAuth().role===1  && (
                    <NavItem className="text-center">
                    <Link href="/admin">
                        <NavLink style={{cursor: 'pointer' }}>
                            {`${isAuth().name}'s Dashboard`}
                        </NavLink>
                    </Link>                  
                </NavItem>
                  )}


                  {isAuth() && (
                    <NavItem className="text-center">
                    
                    <NavLink style={{cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                            Signout
                        </NavLink>
                                     
                </NavItem>
                  )}
                  
                  {isAuth() && isAuth().role===0 && (
                  <NavItem className="text-center">

                 
                    <a href="/user/crud/blog" className="btn btn-success text-light" style={{cursor: 'pointer' }}>
                 Write a Blog
                     </a>
                                    
                  </NavItem>
                  )} 

              {isAuth() && isAuth().role===1 && (
                  <NavItem className="text-center">

                 
                    <a href="/admin/crud/blog" className="btn btn-success text-light" style={{cursor: 'pointer' }}>
                 Write a Blog
                     </a>
                                    
                  </NavItem>
                  )}

                    {!isAuth() &&(
                  <NavItem className="text-center">

                
                    <a href="/signin" className="btn btn-success text-light" style={{cursor: 'pointer' }}>
                 Write a Blog
                     </a>
                                   
                  </NavItem>
                  )}      
                
                
             </Nav>
            </Collapse>
          </Navbar>
          <Search />
        </React.Fragment>
      );
}



export default Header;