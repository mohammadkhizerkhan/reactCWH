import React from 'react'

export default function Alert(props) {
    const capital=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        props.alerting && <div>
           <div class={`alert alert-${props.alerting.type} alert-dismissible`} role="alert" id="liveAlert">
           <strong>{capital(props.alerting.type)}</strong>:{props.alerting.msg}
           </div> 
        </div>
    )
}
