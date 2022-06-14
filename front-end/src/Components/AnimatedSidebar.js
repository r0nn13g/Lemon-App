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
      return (
        <div className="animated-sidebar-container">

        </div>
      )
}

export default AnimatedSidebar;