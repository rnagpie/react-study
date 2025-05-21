import { useState } from "react";

function Practice01(){


const [a, b] =useState(0);

return (
    <div className='click'>
        <button onClick={()=>{
        //숫자값 2 4 6 +2
        b(a+2);}}>
        짝수버튼</button> 
        <span style={{color: 'red'}}>{a}</span> 
    </div>
);
}

export default Practice01;