"use client";

export default function () {
    function image() {
        let images = document.getElementById('images');
        images.innerHTML = "Welcome <br> To <br> Nature";
        images.style.color = "#fff";
        images.style.fontFamily = "serif";
        images.style.display = "flex";
        images.style.justifyContent = "center";
        images.style.alignItems = "center";
        images.style.textAlign = "center";
        images.style.fontSize = "40px";
    }
    function image1() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image1.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    function image2() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image2.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    function image3() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image3.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    function image4() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image4.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
     function image5() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image5.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    function image6() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image6.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    function image7() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image7.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    function image8() {
        let images = document.getElementById('images');
        images.innerHTML = '<img src="/image8.png">';
        images.firstChild.style.width = "350px";
        images.firstChild.style.height = "350px";
        images.firstChild.style.borderRadius = "200px";
    }
    return (
        <div>
            <button id="basic" onClick={image}>Main</button>
            <div id="images"> <h2>Welcome<br></br> To <br></br> Nature</h2></div>
            <div id="button"> 
                <button id="one" onClick={image1}>Image1</button>
                <button id="two1" onClick={image2}>Image2</button>
                <button id="three1" onClick={image3}>Image3</button>
                <button id="four1" onClick={image4}>Image4</button>
                <button id="five" onClick={image5}>Image5</button>
                <button id="six" onClick={image6}>Image6</button>
                <button id="seven" onClick={image7}>Image7</button>
                <button id="eight" onClick={image8}>Image8</button>
            </div>
        </div>
    );
}