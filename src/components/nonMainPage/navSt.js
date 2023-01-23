import              '../../App.css';
import              { NavLink } from 'react-router-dom';
import              React,{useEffect, useState,   } from 'react';
import              Menu, { Item as MenuItem, Divider } from 'rc-menu';
import              Dropdown from 'rc-dropdown';
import              cube from '../../imgs/cube.ico'




function onSelect({ key }) {
    console.log(`${key} selected`);
  }
  function onVisibleChange(visible) {
    console.log(visible);
  }
function NavSt(){
    const menuCallback = () => (
        <Menu onSelect={onSelect}>
          <MenuItem key="1"><NavLink className='nav_link' to='/main'>   <h2 className='nav_tags2'>о городе</h2></NavLink></MenuItem>
          <Divider />
          <MenuItem key="2"><NavLink className='nav_link' to='/stats'>   <h2 className='nav_tags2'>статистика</h2></NavLink></MenuItem>
          <Divider />
          {/* <MenuItem key="3"><NavLink className='nav_link' to='/map'>   <h2 className='nav_tags2'>карты</h2></NavLink></MenuItem> */}
        </Menu>
      );
    
      const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      }
      useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimenion])
    return(
        <header>
    
        <nav className='burg_nav'>
          <NavLink className='nav_link' to='/main'> <h1 className='Logo'>kострома</h1>  </NavLink>
          <div className='navbar'>
            {windowDimenion.winWidth < 800 ?
              <Dropdown
                trigger={['click']}
                overlay={menuCallback}
                animation="slide-up"
                onVisibleChange={onVisibleChange}>
                <button className='bald'>
                  <img src={cube} alt="хуяка"></img> 
                </button>
              </Dropdown>
              : <>  <NavLink className='nav_link' to='/main'>   <h2 className='nav_tags'>о городе</h2>     </NavLink>
                    <NavLink className='nav_link' to='/stats'>   <h2 className='nav_tags'>статистика</h2>   </NavLink>
                    {/* <NavLink className='nav_link' to='/map'>   <h2 className='nav_tags'>карты</h2>        </NavLink> */}
                     </>}
          </div>
        </nav>
      </header>
    );
}
export default NavSt;