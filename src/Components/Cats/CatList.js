import React from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map((breed, index) => {
       console.log(breed)
       return(
       <li key={index}>{breed}</li>
       )
     })}
   </div>
 )
}
 
export default CatList;
