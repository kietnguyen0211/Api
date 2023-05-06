import { useEffect, useState } from "react"
import axios from "axios"
export default function Api(){
    const [data,setData]=useState(null)
    const getData=async()=>{
        const url = `https://645640b62e41ccf16917c562.mockapi.io/list`
        axios
            .get(url)
            .then((res)=>{
                console.log(res.data)
                setData(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
            {
                data && data.map((value,key)=>{
                    return(
                        <span key={key}>{value.name} {value.old} {value.major}</span>
                    )
                })
            }
        </div>
    )
}