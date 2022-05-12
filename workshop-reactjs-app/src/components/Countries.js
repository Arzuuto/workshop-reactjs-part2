import { useEffect } from "react";
import axios from 'axios';

function Countries() {
    useEffect(() => {
        console.log("Yo");
    });
    return (    
      <div className="countries">
          <h1>COUNTRIES</h1>
      </div>
    );
}

export default Countries;