import {useState} from "react";

function Practice02(){

//useState -> state변수 : 재렌더링 , 데이터값유지
    const [index, setIndex]= useState(0);
    let [textArr, setTextArr]= useState (['하나', '둘','셋']);

    return(
        <div className='App'>
                <p>{textArr[index]}</p>
                <button onClick={()=>{
                    //index++;
                    //setIndex((index+1) % textArr.length);
                
                let temp = index;
                temp++;
                if(temp == textArr.length)
                    temp = 0;
                index = temp;
                setIndex(temp); // index = temp; setIndex(매개변수) -> index = 매개변수 
                
                }}>변경버튼</button>
        </div>
)

/*
    let [num, setNum] = useState(1); //num1 :하나 num 2 : 둘

    if (num == 1){
        return (
            <div className='App'>
                <p>하나</p>
                <button onClick={()=>{
                    setNum(2);
                }}>변경버튼</button>
            </div>
        )
    }else if (num == 2){
        return (
            <div className='App'>
                <p>둘</p>
                <button onClick={()=>{
                    setNum(3);
                }}>변경버튼</button>
            </div>
        );
    } else {
        return (
            <div className='App'>
                <p>셋</p>
                <button onClick={()=>{
                    setNum(1);
                }}>변경버튼</button>
            </div>
            );
    }


/* 1번 let [txt, setTxt] = useState('하나');


return(

    <div className='App'>
        <p>{text}</p>
        <button onClick = {()=>{
            //setTxt('셋'); //setTxt(매개변수) text = 매개변수
        if(text == '하나')
            setTxt('둘');
        else if(text =='둘')
            setTxt('셋')
        else
        setTxt('하나');
    }}>변경버튼 </button>
    </div>
)*/


}

export default Practice02;