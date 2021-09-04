import { loadPartialConfig } from "@babel/core";
import React from "react";
import { useEffect, useState } from "react";
import SkeletonProfile from "../skeleton/SkeletonProfile";

const User =()=>{

    const [profile, setProfile] = useState(null);

   useEffect(()=>{
       setTimeout(async() => {
           const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
           const data = await res.json();
           setProfile(data);
        }, 5000);
   });

    return(
        <div className='user'>
          <h2>User Details</h2>

          {profile && (
            <div className='profile'>
              
              <p className='profile'>{profile.username}</p>
              <p className='profile'>{profile.email}</p>
              <a href={profile.website}>{profile.website}</a>

            </div>
            
        )}

        {!profile && <SkeletonProfile />}
        </div>

        
    )
}

export default User;