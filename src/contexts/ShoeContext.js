import React,{createContext,useState} from 'react'


const shoesData = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:"assets/images/VALOUR BLUE.png",
      price:"$2499"
    
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:"assets/images/jordan-mars-270-london.jpg",
      price:"$2199"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:"assets/images/air-jordan-1-zoom-racer-blue.jpg",
      price:"$1999"
    },
    "nike-blazer":{
        name:"Nike Blazer Mid",
        img:"assets/images/nike-blazer.jpg",
        price:"$999"
    },
    "nike-air-force1":{
        name:"Nike Air Force 1 '07'",
        img:"assets/images/nike-air-force1.jpg",
        price:"$900"
    },
    "kyrie-low-3":{
        name:'Kyrie Low 3 "Eclipse"',
        img:"assets/images/kyrie-low-3.jpg",
        price:"$1100"
    }
  };

export const ShoeContext=createContext();

const ShoeContextProvider = (props) => {

    
    const [shoes]=useState(shoesData);
    
    return ( 
        <ShoeContext.Provider value={{shoes}}>
            {props.children}
        </ShoeContext.Provider>
     );
}
 
export default ShoeContextProvider;