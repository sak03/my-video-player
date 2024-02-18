import React from 'react'
import { useNavigate } from 'react-router-dom';

const AppHeader = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='d-flex justify-content-between px-3'>
                <h2 className='pointer' onClick={()=> navigate('/')}>My Video Player</h2>
                <div className='mt-2'>
                    <span>
                        <input 
                        type='text' 
                        className='rounded'
                        placeholder='Search'
                        />
                    </span>
                </div>
            </div>
            <div className='divider-without-space'></div>
        </div>
    )
}

export default AppHeader