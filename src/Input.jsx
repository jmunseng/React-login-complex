import React from 'react';

const Input = (props)=> {
    return <div>
        <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
    </div>
}

export default Input