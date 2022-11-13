import React from 'react';
import BarChart from '../../Components/Dashboard/BarChart';
import LineChart from '../../Components/Dashboard/LineChat';
import PieChart from '../../Components/Dashboard/PieChart';
import './dashboard.css'

function Dashbord() {
    return (
        <div className='dashboard-container'>
            <div style={{ width : 700 }}>
                <BarChart />
            </div>
            <div style={{ width : 500 }}>
                <PieChart />
            </div>
        </div>
    )
}

export default Dashbord