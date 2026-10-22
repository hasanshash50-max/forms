"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Result() {

    const [data, setData] = useState({});

    useEffect(() => {
        const savedData = localStorage.getItem("formData");

        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    return (
        <div style={{border:"solid 2px #000" , padding:"10px" , margin:"20px", height:"340px" , borderRadius:"5px"}}>
            <h1 style={{color:"red"}}>Form Result</h1>
            <p style={{fontWeight:"bolder"}}>First Name : {data.name}</p>
            <p style={{fontWeight:"bolder"}}>Last Name : {data.name1}</p>
            <p style={{fontWeight:"bolder"}}>Email : {data.email}</p>
            <p style={{fontWeight:"bolder"}}>Contact : {data.number}</p>
            <p style={{fontWeight:"bolder"}}>Gender : {data.gender}</p>
            <p style={{fontWeight:"bolder"}}>Subjects : {data.subjects}</p>
            <p style={{fontWeight:"bolder"}}>URL : {data.url}</p>
            <p style={{fontWeight:"bolder"}}>Choice : {data.choice}</p>
            <p style={{fontWeight:"bolder"}}>About : {data.about}</p>
            <Link href="https://forms-three-alpha.vercel.app/ready"><button id="button">Home</button></Link>
        </div>
    );
}