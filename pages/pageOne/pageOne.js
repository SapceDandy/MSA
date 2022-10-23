import {useState, useEffect} from "react";
import styles from "./pageOne.module.css";
import Link from "next/link";
import uniqid from 'uniqid';
import Image from 'next/image'

export default function PageOne() {
    const uniqueValue = uniqid();
    const currentDate = new Date();
    const currentDateString = `${currentDate.getFullYear()}-${((currentDate.getMonth() + 1) < 10) ? "0" + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1)}-${currentDate.getDate()}`
    const [wasClicked, setWasClicked] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [schedule, setSchedule] = useState(currentDateString);
    const emailMatch = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const noNumbers = String(firstName).match(/[0-9]/);

    const click = () => {
        setWasClicked(!wasClicked);
    }

    useEffect(() => {
        (wasClicked) ? document.body.classList.add('active') : document.body.classList.remove('active');
    })

    return (
        <>
            {(wasClicked) && (<div className = {styles.popUpWrapper}>
                <div className = {styles.popUp}>
                    <div style = {{display: "inline-flex", width: "100%", justifyContent: "center", alignItems: "center", margin: ".75rem .25rem"}}>
                        <div className = {styles.percentOuter}>
                            <div className = {styles.percentInner}>
                                <div style = {{display: "inline-flex", width: "100%", justifyContent: "center", alignItems: "center", textAlign: "center", fontWeight: "bold", color: "white"}}>70% Complete</div>
                            </div>
                        </div>
                        <div style = {{display: "flex", width: "10%", justifyContent: "right", alignItems: "center"}}>
                            <button className = {styles.popUpButton} type = "button" onClick = {() => click()}>X</button>
                        </div> 
                    </div>
                    <div style = {{display: "inline-flex", width: "100%", background: "lightgrey", height: "4px"}} />
                    <form>
                        <h3>Enter your Name and Email Address below to register for the webinar and secure your seat</h3>
                        <input value = {schedule} type = "date" onChange = {(e) => setSchedule(e.target.value)} />
                        {(currentDateString >= schedule) && (<span>Date must be in the future</span>)}
                        <input placeholder = "First Name" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} />
                        {((!firstName) || (noNumbers)) && (<span>Please enter your name</span>)}
                        <input placeHolder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                        {((!emailMatch) || (!email)) && (<span>Please enter a valid email</span>)}
                        <div>
                            <Link href = {`/success/${uniqueValue}`}>
                                <button className = "button" type = "button" onClick = {() => click()} disabled = {(!firstName) || (noNumbers) || (!email) || (!emailMatch) || (currentDateString >= schedule)}>YES! RESERVE MY SEAT!</button>
                            </Link>
                            🔒<small style = {{fontStyle: "italic"}}>Your Information is 100% Secure</small>
                        </div>
                    </form>
                </div>
                <div className = {styles.popUpBackground} />
            </div>)}
            <div className = {styles.topBar}>
                <div className = {styles.topBarLogo}>
                    <Image src = "/msaLogo.png" alt = "image" title = "image" width = "110" height = "50" />
                </div>
                <div />
            </div>
            <div className = {styles.mainText}>
                <h1>"How to Double your Income as a Driver in 30 days or less. Stop giving away HALF of the Money you’ve EARNED to Uber and Lyft. Get ALL of your Money Immediately!!!“</h1>
            </div>
            <div className = {styles.middleTop}>
                <div style = {{display: "inline-flex", width: "100%", justifyContent: "center", alignContent: "center"}}>
                    <Image src = "/DMN.JPG" alt = "image" title = "image" width = "600" height = "400" style = {{zIndex: "2"}} />
                </div>
                <div style = {{display: "inline-flex", width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: "2rem"}}>
                    <div style = {{display: "inline-flex", flexDirection: "column", width: "60%", justifyContent: "center", alignItems: "center"}}>
                        <h4 style = {{display: "flex", width: "100%", color: "rgb(250, 58, 58)", textAlign: "center", justifyContent: "center", alignItems: "center"}}>EXCLUSIVE TRAINING WITH TYRIE JAMERSON:</h4>
                        <div style = {{display: "inline-flex", flexDirection: "column", rowGap: "1rem"}}>
                            <div style = {{display: "flex", width: "100%", flexDirection: "row", columnGap: "1rem"}}>
                                <span style = {{display: "inline-flex", fontSize: "1.25rem", color: "blue",}}>☑</span>
                                <span>
                                    How to collect and keep 100% of the money from customers who book rides with you and enter your vehicle.  You do “ALL” the Work. You keep “ALL” the Money™!!!
                                </span>
                            </div>
                            <div style = {{display: "flex", width: "100%", flexDirection: "row", columnGap: "1rem"}}>
                                <span style = {{display: "inline-flex", fontSize: "1.25rem", color: "blue",}}>☑</span>
                                <span>
                                    How to bring in a flood of customers who are MORE than willing to pay you rather than pay Uber or Lyft. Without you having to say one Word! And even if you have ZERO experience as a rideshare driver.
                                </span>
                            </div>
                            <div style = {{display: "flex", width: "100%", flexDirection: "row", columnGap: "1rem"}}>
                                <span style = {{display: "inline-flex", fontSize: "1.25rem", color: "blue",}}>☑</span>
                                <span>
                                    How to totally protect yourself and your assets from accident liability at “ALL” times. Do it easily and inexpensively while driving to earn a consistent income that more than replaces your 9-5 in less time with less hassle.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style = {{display: "inline-flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: ".5rem"}}>
                        <button type = "button" className = "button" onClick = {() => click()}><h2>YES! Reserve My Seat Now!</h2></button>
                        <small style = {{display: "inline-flex", fontStyle: "italic"}}>100% No Cost - Seating is limited to 100 attendees!</small>
                    </div>
                </div>
            </div>
        </>
    )
}
