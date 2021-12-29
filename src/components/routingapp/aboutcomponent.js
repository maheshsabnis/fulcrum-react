import {useNavigate} from 'react-router-dom';
const AboutComponent=()=>{

    // create a function object from the useNavigate() so that
    // this function will accept the 'URL PATH' to navigate to

    let navigate = useNavigate(); 


    const routeToContact=()=>{
        // navigate to the contact component
        navigate('/contact', 10);
    };

    return (
        <div className="container">
            <h2>The About Component</h2>
            <input type="button" value="Navigate to Contact" 
            className="btn btn-primary"
             onClick={routeToContact}
            />
        </div>
    );
};

export default AboutComponent;