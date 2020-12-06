/*
 * @Name:     Sidebar
 * @Descr:    It's a search result's sidebar component
 *
 */

import React from 'react';
import { propertyTypeData } from '../../helpers/data/propertyTypeData';


const SidebarComp = () => {
    return <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start">
        <h3 className="font-semibold text-lg">Property type</h3>
        {
            propertyTypeData.map(d => {
                return (
                    <div className="flex items-center mt-0">
                        <input type="checkbox" key={d.id} id={d.id} className="mr-2" />
                        <label htmlFor={d.id}>{d.value}</label>
                    </div>
                );
            })
        }
    </div>;
}

export default SidebarComp;