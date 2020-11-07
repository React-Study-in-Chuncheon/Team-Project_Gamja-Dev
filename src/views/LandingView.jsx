import React from "react";
import { Link } from "react-router-dom";

const LandingView = () => {
   return (
      <div>
         <h3>This is Landing Page View</h3>
         <Link to="/test">
            <p>View Redux/Firebase Database Test</p>
         </Link>
      </div>
   );
};

export default LandingView;
