import React from 'react'

const CustomInput = (props) => {
    const { type, name, placeholder, classname } = props;
    return (
        <div>
            <input className={`form-control ${classname}`} placeholder={placeholder} type={type} name={name} />
        </div>
    )
}

export default CustomInput