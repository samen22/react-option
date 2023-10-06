import { useState } from "react";
import Link from "../Link/Link";
import { CgMenuLeftAlt, CgClose } from 'react-icons/cg';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about'},
        { path: '/services', name: 'Services', id: 'services'},
        { path: '/contact', name: 'Contact', id: 'contact'},
        { path: '/404', name: 'NotFound', id: 'not-found'},
      ];
      

    return (
        <nav className="text-black md:text-xl md:px-5 bg-violet-300 p-6">
          <div  className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
            {
                open === true ?   
                <CgMenuLeftAlt></CgMenuLeftAlt> :
                <CgClose></CgClose>
            }
        
          </div>
            <ul className={`md:flex duration-1000 absolute md:sticky
            ${open ? 'top-16' : '-top-60'}
            bg-violet-300 px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;