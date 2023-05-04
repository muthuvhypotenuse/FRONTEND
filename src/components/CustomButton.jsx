import "./ButtonStyle.css";

export default function CustomButton(props) {
    
    return (
      <button className="custom_btn" onClick={props.clickEvent}  style={{backgroundColor:props.bgcolor,width:props.width,height:"100px"}}>{props.lable}</button>
    );
  }