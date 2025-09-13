import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className='col-span-2 bg-green-300 h-screen sticky top-0 left-0 overflow-auto p-2 md:p-5'>
           <nav className='flex flex-col gap-2.5'>
            <NavLink to="/admin/dashboard" className={({isActive})=> cn("p-2 md:p-3 bg-gray rounded-md hover:bg-gray-600 hover:text-white transition-all flex items-center ", {
                'bg-gray-600 text-white' : isActive
            })}> <LayoutDashboard className='shrink-0'></LayoutDashboard> <span className='truncate'>Dashboard</span> </NavLink>
            <NavLink to="/admin/service-list" className={({isActive})=> cn("p-2 md:p-3 bg-gray rounded-md hover:bg-gray-600 hover:text-white transition-all flex items-center ", {
                'bg-gray-600 text-white' : isActive
            })}>Service List </NavLink>
            <NavLink to="/admin/add-service" className={({isActive})=> cn("p-2 md:p-3 bg-gray rounded-md hover:bg-gray-600 hover:text-white transition-all flex items-center ", {
                'bg-gray-600 text-white' : isActive
            })}>Add Service </NavLink>
           </nav>
        </aside>
    );
};

export default SideBar;