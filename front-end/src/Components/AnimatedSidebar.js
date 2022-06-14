import { useEffect, useRef, useState } from 'react';
import { link, useLocation } from 'react-router-dom';


const sidebarNavItems = [
  {
      display: 'Dashboard',
      icon: <i className='bx bx-home'></i>,
      to: '/',
      section: ''
  },
  {
      display: 'Getting Started',
      icon: <i className='bx bx-star'></i>,
      to: '/started',
      section: 'started'
  },
  {
      display: 'Calendar',
      icon: <i className='bx bx-calendar'></i>,
      to: '/calendar',
      section: 'calendar'
  },
  {
      display: 'User',
      icon: <i className='bx bx-user'></i>,
      to: '/user',
      section: 'user'
  },
  {
      display: 'Orders',
      icon: <i className='bx bx-receipt'></i>,
      to: '/order',
      section: 'order'
  },
]

const AnimatedSidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarReg = useRef();
    const location = useLocation;
    
    useEffect(() => {
      setTimeout(() => {
        const sidebaritem = sidebarRef.current.querySelector('.sidebar_menu_item');
        indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
        setStepHeight(sidebarItem.clientHeight);
      }, 50)
    }, []);

    // change active index
    useEffect(() => {
      const curPath = window.location.pathname.split('/')[1];
      const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
      setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);
    
      return (
        <div className="animated-sidebar-container">

        </div>
      )
}

export default AnimatedSidebar;