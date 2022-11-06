import React from 'react'
import './MovieGen.css'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import ReactDOM from 'react-dom';

function MovieGen() {
  return (
   <form>
     <div >
       <label>
         <a>
             Name: </a>
          <input type="text"  />
      </label>
     </div>
       <div>
            <label >
        Saloni:
          <input type="text" name ="name"/>
      </label>
       </div>
       <div>
                   <button type = "submit"> Submit</button>
       </div>
  {/*<input type="submit" value="enter" />*/}
</form>
  );
}






export default MovieGen