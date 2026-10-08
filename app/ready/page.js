"use client";
import { useEffect } from "react";

export default function() {

    useEffect(() => {
        const form = document.querySelector("form");
        const checks = document.querySelectorAll('input[name="eng"]');

        form.addEventListener("submit", function (e) {
            let selected = false;

            checks.forEach(function (check) {
                if (check.checked) {
                    selected = true;
                }
            });

            if (!selected) {
                e.preventDefault();
                alert("Please select at least one with checkbox");
            }
        });
    }, []);

    function submit(e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            name1: document.getElementById("name1").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value,
            gender: document.querySelector('input[name="read"]:checked')?.value,
            subjects: Array.from(document.querySelectorAll('input[name="eng"]:checked'))
                .map(check => check.value).join(' , '),
            url: document.getElementById("url").value,
            choice: document.querySelector("select").value,
            about: document.querySelector("textarea").value
        };

        localStorage.setItem("formData", JSON.stringify(data));

        window.location.href = "/ready/result";
    }

    return(
        <div className="one">
            <h1>Form in Next.js</h1>

            <form onSubmit={submit}>

                <label>First Name*</label>
                <input type="text" placeholder="Enter First Name" required id="name"></input>

                <label>Last Name*</label>
                <input type="text" placeholder="Enter Last Name" required id="name1"></input>

                <label>Enter Email*</label>
                <input type="email" placeholder="Enter Email" required id="email"></input>

                <label>Contact*</label>
                <input type="number" placeholder="Enter Mobile Number" required id="number"></input>

                <label>Gender*</label>
                <label id="male">Male</label>
                <input type="radio" name="read" value="Male" id="read" required></input>

                <label id="female">Female</label>
                <input type="radio" name="read" value="Female" id="write"></input>

                <label id="other">Other</label>
                <input type="radio" name="read" value="Other" id="book"></input>

                <br></br><br></br>

                <label id="sub">Your subject (choice all)</label>

                <label id="box">English</label>
                <input type="checkbox" id="check" name="eng" value="English"></input>

                <label id="box1">Maths</label>
                <input type="checkbox" id="check1" name="eng" value="Maths"></input>

                <label id="box2">Physics</label>
                <input type="checkbox" id="check2" name="eng" value="Physics"></input>

                <br></br><br></br>

                <label>Enter URL*</label>
                <input type="text" placeholder="Enter URL" required id="url"></input>

                <label id="select">Select Your Choice</label>
                <br></br>

                <select required>
                    <option value="" disabled selected>Select Your Ans</option>
                    <option value="School">School</option>
                    <option value="University">University</option>
                    <option value="Master">Master</option>
                    <option value="Doctor">Doctor</option>
                </select>

                <label id="about">About</label>
                <textarea placeholder="About Your Self" required></textarea>

                <br></br><br></br><br></br><br></br><br></br>

                <input type="submit" value="submit" id="submit"></input>
                <input type="reset" value="reset" id="reset"></input>

            </form>
        </div>
    )
}