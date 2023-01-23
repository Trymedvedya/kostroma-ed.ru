import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './sideBar.css'

const SideBar = () => {
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
    return (
        <div className='side_bar_main'>
            <nav className='side_bar_nav'>
                <ul className='side_bar_ul'>
                    {windowDimenion.winWidth > 800?
                    <>
                    <NavLink to='/stats/med' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏥</h2><h2 className='xtx'>Медицина</h2></li></NavLink>
                    <NavLink to='/stats/economics' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏦</h2><h2 className='xtx'>Экономика</h2></li></NavLink>
                    <NavLink to='/stats/nasel' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🧑‍🤝‍🧑</h2><h2 className='xtx'>Население</h2></li></NavLink>
                    <NavLink to='/stats/edu' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏫</h2><h2 className='xtx'>Образование</h2></li></NavLink>
                    <NavLink to='/stats/liv' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏠</h2><h2 className='xtx'>Жилищный фонд</h2></li></NavLink>
                    <NavLink to='/stats/usl' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>⛽</h2><h2 className='xtx'>Бытовые услуги</h2></li></NavLink>
                    <NavLink to='/stats/cult' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏯</h2><h2 className='xtx'>Культура и спорт</h2></li></NavLink>
                    <NavLink to='/stats/places' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>⛪</h2><h2 className='xtx'>Что посетить?</h2></li></NavLink>
                    <NavLink to='/stats/gov' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>⚖️</h2><h2 className='xtx'>Правовая сфера</h2></li></NavLink>
                    <NavLink to='/stats/eco' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🌿</h2><h2 className='xtx'>Экология</h2></li></NavLink>
                    <NavLink to='/stats/issl' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>📊</h2><h2 className='xtx'>Исследование</h2></li></NavLink>
                    </>
                    
                    :
                    <>
                   <NavLink to='/stats/med' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏥</h2></li></NavLink>
                    <NavLink to='/stats/economics' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏦</h2></li></NavLink>
                    <NavLink to='/stats/nasel' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🧑‍🤝‍🧑</h2></li></NavLink>
                    <NavLink to='/stats/edu' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏫</h2></li></NavLink>
                    <NavLink to='/stats/liv' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏠</h2></li></NavLink>
                    <NavLink to='/stats/usl' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>⛽</h2></li></NavLink>
                    <NavLink to='/stats/cult' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🏯</h2></li></NavLink>
                    <NavLink to='/stats/places' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>⛪</h2></li></NavLink>
                    <NavLink to='/stats/gov' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>⚖️</h2></li></NavLink>
                    <NavLink to='/stats/eco' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>🌿</h2></li></NavLink>
                    <NavLink to='/stats/issl' className='nav_link_bar'><li className='libonok'><h2 className='emoj'>📊</h2></li></NavLink>
                    </>
}
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;