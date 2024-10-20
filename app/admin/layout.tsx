import React, { ReactNode } from 'react'

const AdminLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-700'>Admin Layout</aside>
        {children}
    </div>
  )
}

export default AdminLayout