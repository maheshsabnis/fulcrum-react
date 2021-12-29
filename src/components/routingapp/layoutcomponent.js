// import objects from react-router-dom for the navigation
import {Link,Outlet} from 'react-router-dom';
const LayoutComponent=()=>{

    return(
        <div className='container'>
            <table className='table table-bordered table-striped'>
                <tbody>
                    <tr>
                        <td>
                            {/* Define Route Links */}
                            <Link to="/">Home</Link>
                        </td>
                        <td>
                            {/* Define Route Links */}
                            <Link to="/about">About</Link>
                        </td>
                        <td>
                            {/* Define Route Links */}
                            <Link to="/contact">Contact</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            {/* Set the Container for rendering Route component using the <Outlet> */}
            <Outlet/>
        </div>
    );
};

export default LayoutComponent;