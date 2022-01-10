import React,{useMemo} from 'react'



export default function Short(date, sort, nameFilter) {
    const shortList = useMemo(()=>{
        if(sort === false)
            return date
        return date.filter((f) => {
            let d = String(f[nameFilter])
            return d.toLowerCase().includes(sort);
        });
      }, [sort, date])


    return (shortList)
}