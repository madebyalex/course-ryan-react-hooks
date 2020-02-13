import React from 'react';
import './App.css';

// Adding icons – Method 1
// import Icon from './components/IconRaw';

// Adding icons – Method 2
// import Icon from './components/IconPrepared';
// import { ICONS } from './utilities/constants';

// Adding icons – Method 3
import CarInspection from './assets/icons/car-inspection';
import DashboardClearData from './assets/icons/dashboard-clear-data';
import DashboardRegisterSv from './assets/icons/dashboard-register-sv';
import DashboardRegister from './assets/icons/dashboard-register';
import DashboardUserPlus from './assets/icons/dashboard-user-plus';
import DashboardUsers from './assets/icons/dashboard-users';
import DashboardWallet from './assets/icons/dashboard-wallet';

function App() {
  return (
    <div className='App'>
      {/* <div className='icons-method1'>
        <Icon name='dashboard-wallet' />
      </div> */}

      {/* <div class='icons-method2'>
        <Icon icon={ICONS.TWITTER} color='#717476' size={32} />
        <Icon icon={ICONS.FACEBOOK} color='#717476' size={32} />
      </div> */}

      <div className='icon-method3'>
        <span className='icon'>
          <CarInspection />
        </span>
        <span className='icon'>
          <DashboardClearData />
        </span>
        <span className='icon'>
          <DashboardRegisterSv />
        </span>
        <span className='icon'>
          <DashboardRegister />
        </span>
        <span className='icon'>
          <DashboardUserPlus />
        </span>
        <span className='icon'>
          <DashboardUsers />
        </span>
        <span className='icon'>
          <DashboardWallet />
        </span>
      </div>
    </div>
  );
}

export default App;
