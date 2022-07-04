
import React from 'react';
import style from "../style/welcome.module.css";
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>  
      <div className = {style.WelcomeInfo}>
        <p>
          1 : a house occupied by a club or used for club activities. 2 : locker rooms used by an athletic team. 3 : a building at a golf course typically housing a locker room, pro shop, and restaurant.
        </p>
        <p>
          So I decided to check what heavy users of Clubhouse say about what the rules for rooms should be and it wasn’t easy because there aren’t yet golden rules that Clubhouse speakers should follow. So for this article, I combined those few findings with my own experience.
        </p>
        <p>
          Paul, Roan & the Clubhouse team
        </p>
      </div> 
      <div className={style.actionBtn}>
        <Link 
          exact 
          to="/invite" 
          className="primaryBtn d-flex align-items-center mb-3" 
        >
            Get your username{" "}
            {/*<img src='' alt=''/>*/}
        </Link>
        <Link 
          exact 
          to="/sign-in" 
          className="primaryBtn d-flex align-items-center mb-3" 
        >
            Have an account? Sign in {" "}
        </Link>
      </div>
    </div>
    
  );
}

export default Welcome