import Profileimg from '../img/profile_image.jpeg'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='menu'>
                <div className='profile'>
                    <img className='profile-image' alt='user' src={Profileimg}></img>
                    <p className='welcome'>Welcome, Dr. Smith</p>
                    <div className='date-today'>March 21, 2022</div>
                </div>
                <hr className='border' />
                <ul id='navigation'>
                    <li className='menu-items'>
                        <div className='nav' data-route='Appointments'>
                            Appointments
                        </div>
                    </li>
                    <li className='menu-items'>
                        <div className='nav' data-route='Patients'>
                            Patients
                        </div>
                    </li>
                    <li className='menu-items'>
                        <div className='nav' data-route='PatientRecords'>
                            Patient Records
                        </div>
                    </li>
                    <li className='menu-items'>
                        <div className='nav' data-route='Settings'>
                            Settings
                        </div>
                    </li>
                    <li className='menu-items'>
                        <div className='nav' data-route='Admin'>
                            Admin
                        </div>
                    </li>
                    <li className='menu-items'>
                        <div className='nav' data-route='Logout'>
                            Logout
                        </div>
                    </li>
                </ul>
                <hr className='border' />
            </div>
        </div>
    )
}

export default Sidebar