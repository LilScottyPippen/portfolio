"use client"
import {useEffect, useState} from "react"
import Banner from "../Banner"


const getTimeLeft = (startDate) => {
    let days = "00"
    let hours = "00"
    let minutes = "00"
    let seconds = "00"

    const now = Date.now();
    const start = new Date(startDate).getTime()

    if (now < start) {
        return { days, hours, minutes, seconds }
    }

    const expiryDate = new Date(start);
    expiryDate.setMonth(expiryDate.getMonth() + 18)

    const difference = expiryDate.getTime() - now

    if (difference <= 0) {
        return { days, hours, minutes, seconds }
    }

    const dys = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const mnt = Math.floor((difference / (1000 * 60)) % 60)
    const snd = Math.floor((difference / 1000) % 60)

    days = dys < 10 ? `0${dys}` : dys.toString()
    hours = hrs < 10 ? `0${hrs}` : hrs.toString()
    minutes = mnt < 10 ? `0${mnt}` : mnt.toString()
    seconds = snd < 10 ? `0${snd}` : snd.toString()

    return { days, hours, minutes, seconds }
}

const Timer = ({ launchDate, locale }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    })

    useEffect(() => {
        const interval = setInterval(() => {
            const newTimeLeft = getTimeLeft(launchDate)
            setTimeLeft(newTimeLeft)
        }, 1000)

        return () => clearInterval(interval)
    }, [launchDate])

    const now = new Date();
    if (new Date(launchDate) > now) {
        return null
    }

    return <Banner timeLeft={timeLeft} locale={locale} />
}


export default Timer