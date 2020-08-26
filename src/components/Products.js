import React,{useContext} from 'react'
import {Outlet,useNavigate} from 'react-router-dom';
import {Card,CardContent} from '@material-ui/core';
import {ShoeContext} from '../contexts/ShoeContext';

// const shoes = {
//     "air-jordan-3-valor-blue": {
//       name: "VALOUR BLUE",
//       img:"https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
//       price:"$2499"
    
//     },
//     "jordan-mars-270-london": {
//       name: "JORDAN MARS 270 LONDON",
//       img:"https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
//       price:"$2199"
//     },
//     "air-jordan-1-zoom-racer-blue": {
//       name: "RACER BLUE",
//       img:"https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
//       price:"$1999"
//     },
//     "nike-blazer":{
//         name:"Nike Blazer Mid",
//         img:"https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-flCCX4.jpg",
//         price:"$999"
//     },
//     "nike-air-force1":{
//         name:"Nike Air Force 1 '07'",
//         img:"https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-mens-shoe-TjqcX1.jpg",
//         price:"$900"
//     },
//     "kyrie-low-3":{
//         name:'Kyrie Low 3 "Eclipse"',
//         img:"https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/87b514a5-1ca4-4d36-8e37-31835f440124/kyrie-low-3-eclipse-basketball-shoe-4VT0rq.jpg",
//         price:"$1100"
//     }
//   };


const Products = () => {
    const {shoes}=useContext(ShoeContext)
    // const [isSelected,setSelected]=useState(true)
    const navigate=useNavigate();
    return ( 
        <div className='row'>
            <div className='col-12 col-md-8'>
            <h3>Shoes</h3>
                <div className='row'>

                    {Object.entries(shoes).map(([k,{name,img}])=>{
                        return(
                            <Card className='col-12 col-lg-6' variant='outlined' key={k} onClick={()=>{navigate(k)}}>
                                <CardContent>
                                    <h4>{name}</h4>
                                    <img src={`../${img}`} alt={name} style={{width:'24rem'}} />
                                </CardContent>
                            </Card>
                        )
                    })}
                   
               
                </div>
            </div>
            <div className='col-4'>
                <Outlet>

                </Outlet>
            </div>
        </div>
     );
}
 
export default Products;