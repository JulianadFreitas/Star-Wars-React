import React, {useState} from "react";

export default function Home({data}) {
    return (
     
        <div className="movieContainer">
        {data.title}
        </div>
      
 
    );
}

