import React,{useState} from 'react'
import Sort from '../Sort'
import FormOutput from './FormOutput'
import SortCheckbox from '../SortCheckbox'

export default function FormFilter(props) {
    const [sortName1, setShortName1] = useState('')
    const [sortName2, setShortName2] = useState('')
    const [sortName3, setShortName3] = useState('')
    const [sortName4, setShortName4] = useState(false)
    const [sortName5, setShortName5] = useState(false)
    let filterName1 = Sort(props.date,sortName1,'name')
    let filterName2 = Sort(filterName1,sortName2,'lastname')
    let filterName3 = Sort(filterName2,sortName3,'age')
    let filterName4 = SortCheckbox(filterName3,sortName4,'sex','m')
    let filterName5 = SortCheckbox(filterName4,sortName5,'sex','f')

    return (
        <>
            <input
                placeholder="Имя"
                value={sortName1}
                onChange={e=>setShortName1(e.target.value)} 
            />    
            <input
                placeholder="Фамилия"
                value={sortName2}
                onChange={e=>setShortName2(e.target.value)} 
            />
            <input
                placeholder="Возраст"
                value={sortName3}
                onChange={e=>setShortName3(e.target.value)} 
            />
            <input
                id="m"
                type="checkbox"
                checked={sortName4}
                onChange={e=>setShortName4(!sortName4)} 
            />
            <label for="m">М</label>
            <input
                id="f"
                type="checkbox"
                checked={sortName5}
                onChange={e=>setShortName5(!sortName5)} 
            />
            <label for="f">Ж</label>
            <FormOutput date={filterName5}/>
        </>
    )
}