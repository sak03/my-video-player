import React, { useState ,useEffect} from 'react'
import { FaHome, FaHeart, FaFilm, FaCog } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const AppSidebar = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname.split('/');
    const activePathVal =
        currentPath[1] === '' ? 0 :
            currentPath[1] === 'favourite' ? 1 :
                currentPath[1] === 'recomended' ? 2 :
                    currentPath[1] === 'settings' ? 3 : 4;
    const [activeSection, setActiveSection] = useState(activePathVal);

    useEffect(()=>{
        setActiveSection(activePathVal)
    },[activePathVal])


    return (
        <div>
            <div
                className={`pointer px-3 py-2 ${activeSection === 0 ? 'bg-primary text-white' : ''}`}
                onClick={() => {
                    setActiveSection(0);
                    navigate('/')
                }}
            ><FaHome /> Home</div>
            <div
                className={`pointer px-3 py-2 ${activeSection === 1 ? 'bg-primary text-white' : ''}`}

                onClick={() => {
                    setActiveSection(1)
                    navigate('/favourite')
                }}
            ><FaHeart /> Favourite</div>
            <div
                className={`pointer px-3 py-2 ${activeSection === 2 ? 'bg-primary text-white' : ''}`}

                onClick={() => {
                    setActiveSection(2)
                    navigate('/recomended')
                }}
            ><FaFilm /> Recomended</div>
        </div>
    )
}

export default AppSidebar