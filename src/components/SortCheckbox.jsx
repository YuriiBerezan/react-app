import React,{useMemo} from 'react'



export default function Short(date, filter,nameFilter,sex) {
    console.log(filter)

    const shortList = useMemo(()=>{
        if(filter === false)
            return date
        return date.filter((f) => {
            let d = String(f[nameFilter])
            console.log(d)
            return d.includes(sex);
        });
        
      }, [filter, date])


    return (shortList)
}