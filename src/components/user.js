import React, {useState, useEffect} from "react";

const User = (props)=> {
  const [planet, setPlanet] = useState("earth");

  //componentDidMount
  useEffect(()=> {
    console.log("Component mounting");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("Planet changes");
  },[planet]);
  return (
    <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <button onClick={() => setPlanet("pluto")}>{planet}</button>
    </div>
  );
}

export default User;

//Hooks -> Enable use of state in ur functional component - useState, useEffect

//props -> properties/params, a data that is passed from one cmponent to another
//LIFE CYCLE METHODS ->
//MOUNT- Component is initially rendered in ur dom
//Constructor, Render, componentDidMount - SIDE EFFECTS

//UPDATE- component is being updated
//UNMOUNT- componentis removed from the dom
