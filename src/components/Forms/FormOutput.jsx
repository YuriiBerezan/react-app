import React from 'react'

export default function Form(props) {
    return (
        <div>
            {props.date.map(item => (
                <ul>
                    <li>
                    Имя: {item.name} Фамилия: {item.lastname} 
                    </li>
                    <li>  
                    Возраст: {item.age}
                    </li>
                    <li>
                    Пол: {item.sex}
                    </li>
                </ul>
            ))}
        </div>
    )
}
