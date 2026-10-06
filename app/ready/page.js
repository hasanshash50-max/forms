export default function()
{
    return(
        <div className="one">
            <h1>Form in Next.js</h1>
           <form>
                 <label>First Name*</label>
                 <input type="text" placeholder="Enter First Name" required></input>
                 <label>Last Name*</label>
                 <input type="text"placeholder="Enter Last Name" required></input>
                 <label>Enter Email*</label>
                 <input type="email" placeholder="Enter Email" required></input>
                 <label>Contact*</label>
                 <input type="number" placeholder="Enter Mobile Number" required></input>
                 <label>Gender*</label>
                 <label id="male">Male</label><input type="radio" name="read" value="start" id="read" required></input> 
                 <label id="female">Female</label><input type="radio" name="read"  value="#start" id="write" ></input>
                 <label id="other">Other</label><input type="radio" name="read"  value="##start" id="book" ></input> <br></br><br></br>
                 <label>Your subject (choice all)</label> 
                 <label id="box">English</label><input type="checkbox" id="check" required></input>
                 <label id="box1">Maths</label><input type="checkbox" id="check1"required ></input>
                 <label id="box2">Physics</label><input type="checkbox" id="check2" required></input> <br></br><br></br>
                 <label >Enter URL*</label>
                 <input type="text" placeholder="Enter URL" required></input>
                 <label id="select">Select Your Choice</label><br></br>
                 <select required>
                     <option disabled selected>Select Your Ans</option>
                     <option>School</option>
                     <option>University</option>
                     <option>Master</option>
                     <option>Doctor</option>
                 </select>
                 <label id="about">About</label>
                 <textarea
                 placeholder="About Your Self" required
                 ></textarea><br></br><br></br><br></br><br></br><br></br>
                 <input type="submit" value="submit" id="submit"></input>
                 <input type="reset" value="reset" id="reset"></input>
           </form>
        </div>
    )
}