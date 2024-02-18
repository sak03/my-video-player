import React from 'react'

const AppFooter = () => {
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  return (
    <div className='bg-dark text-white py-2 px-3 mt-3'>
      <div className='d-flex justify-content-between'>
        <div> &copy; {currentYear} All rights reserved</div>
        <div>Maintained by: My Video Player</div>
      </div>
    </div>
  )
}

export default AppFooter