import  "../styles/common.scss";
export default (props)=>{
    return(
        <>
         <input type="button" value={props.text} 
         className={props.style} onClick={props.click} />
        </>
    )
}