import { useEffect, useState } from "react"
import axios from "axios"
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb';
export default function ApiWeather() {
    //https://github.com/kietnguyen0211/Api.git
    const [data, setData] = useState(null)
    const getData = async () => {
        const apiKey = "e0ddc538b3415427caeb7901218a30dd"
        const cityName = text
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

        axios
            .get(url)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    useEffect(() => {
        getData();
    }, [])



    const cal = function (temp) {
        return Math.round(temp - 273.15)
    }


    const calF = function (temp) {
        return Math.round(1.8*(temp-273)+32)
    }



    const [text, setText] = useState("Ha Noi")



    return (
        <>
            <input
                type="text"
                placeholder="Enter City"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key == "Enter" && text) {
                        getData()
                        setText("")
                    }
                }}
            ></input>
            { 
                data && (
                    <div className="content">
                        <h1>Country: {data.name}</h1>
                        <h1>Weather: {data.weather[0].description}</h1>
                        <h1>{cal(data.main.temp)} <TbTemperatureCelsius /> | {calF(data.main.temp)} <TbTemperatureFahrenheit/></h1>
                        <img
                            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                        />
                    </div>
                )
            }
        </>
    )
}