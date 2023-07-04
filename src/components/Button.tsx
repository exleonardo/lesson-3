import React from "react";


type ButtonType = {
  name:string
  callBack:()=>void
}
const Button = (props:ButtonType) => {
  const onClickButton = ()=>{
    props.callBack()
  }
  return (
    <button onClick={onClickButton} >{props.name}</button>
  );
};

export default Button;