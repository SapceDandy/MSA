import {useState, useRef, useEffect, useCallback } from "react";
import styles from "./success.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import Head from 'next/head';
import axios from 'axios';

export  const getServerSideProps = (context) => {
    return {
        props: { 
            name: context?.query?.name,
            email: context?.query?.email,
            linkIP:  context?.query?.ipAddress,
        }
    }
}

export default function ID(props) {
    const form = useRef();
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const [phoneButton, setPhoneButton] = useState(false);
    const [numberSent, setNumberSent] = useState(false);
    const [IP, setIP] = useState("");
    const isMatch = String(phone).match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
    const justNumbers = phone.match(/^\d{10}$/);

    const getData = async () => {
            await axios?.get('https://geolocation-db.com/json/').then((res) =>
                setIP(res?.data?.IPv4)
            ).catch((error) => console.log(error))       
    }

    const pressed = () => {
        setPhoneButton(!phoneButton);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vr1v8ck', 'template_41y7www', form.current, 'TwOG1fPg9_FkuE3S3')
            .then((result) => {
                setNumberSent(!numberSent);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const homescreen = () => {
        router.push({
            pathname: `/`,
        })
    }

    useEffect(() => {
        {!IP && getData()}
    })

    return(
        <>
            {(props?.linkIP != IP) && !(!IP) && homescreen()}
            
            <Head>
                <title>You Are Registered</title>
                <meta name="description" content="You Are Registered" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            
            {(props?.linkIP === IP) && 
                <>
                    <div className = {styles.head}>
                        <h1>Congratulations... You've been registered!</h1>
                    </div>
                    <div className = {styles.mainSection}>
                        <div className = {styles.left}>
                            <video style = {{width: "80%", height: "auto", background: "black", axWidth: "800px"}} controls preload = "auto" playsinline>
                                <source src="/thankYouVideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className = {styles.textSection}>
                                <div style = {{display: "inline-flex", columnGap: "1rem", alignItems: "center"}}><span>➜</span><h3>HERE'S WHAT YOU SHOULD DO NOW:</h3></div>
                                <div style = {{display: "inline-flex", columnGap: "1rem", alignItems: "flex-start"}}><span>➜</span><span><h3 style = {{display: "inline-flex", margin: "0rem"}}>1. YOU MUST DISABLE AD BLOCKERS:</h3> Our Webinar Software does not play nice with Ad Blockers and your webinar will show up as blank if you do not disable them when trying to view the webinar. <span style = {{fontWeight: "bold"}}>If the webinar still does not work and you are on Chrome, try Firefox or Safari and it will work.</span></span></div>
                                <div style = {{display: "inline-flex", columnGap: "1rem", alignItems: "flex-start"}}><span>➜</span><span><h3 style = {{display: "inline-flex", margin: "0rem"}}>2. BLOCK OUT 45 MINUTES:</h3> Make sure that you block out a full 1.5 hours for the webinar inyou calendar. It's a good idea to put sticky notes on your computer or enter your phone number to get a SMS reminder.</span></div>
                                <div style = {{display: "inline-flex", columnGap: "1rem", alignItems: "flex-start"}}><span>➜</span><span><h3 style = {{display: "inline-flex", margin: "0rem"}}>3. SHOW UP EARLY:</h3> There will be no recordings so make sure that you attend live and show up at least 5-minutes early. The software we use has an attendee limit and with thousands of people, we'll fill up fast.</span></div>
                                <div style = {{display: "inline-flex", columnGap: "1rem", alignItems: "flex-start"}}><span>➜</span><span><h3 style = {{display: "inline-flex", margin: "0rem"}}>4. USE A DESKTOP COMPUTER:</h3> Make sure that you attend the webinar using your LAPTOP or DESKTOP computer. The webinar system we use doesn't behave well with mobile so using a computer will dramatically improve your experience and allow you to learn more.</span></div>
                                <div style = {{display: "inline-flex", columnGap: "1rem", alignItems: "flex-start"}}><span>➜</span><span><h3 style = {{display: "inline-flex", margin: "0rem"}}>5. GET THE FREE  “DOUBLE YOUR MONEY CALCULATOR” ON THE WEBINAR:</h3> The free client funnel will be handed out to all attendees of the webinar. Make sure you show up on time to get your free copy.</span></div>
                                <span style = {{display: "inline-flex", marginLeft: "2rem", alignItems: "flex-start"}}>See you on the webinar!</span>
                            </div>
                        </div>
                        <div className = {styles.right}>
                            <div className = {styles.group}>
                                <div className = {styles.line} />
                                <h2>The Double Your Rideshare Income Webinar</h2>
                                <div className = {styles.smallLine} />
                                <div className = {styles.topGroup} >
                                    <div className = {styles.topGroupMain} >
                                        <div className = {styles.topGroupLeft} ><i style = {{color: "white", fontSize: "3rem"}}><FaCalendarAlt /></i></div>
                                        <div className = {styles.topGroupRight} >
                                            <span style = {{color: "turquoise"}}>SCHEDULE</span>
                                            <span>Thursday, 22 November 2022, 12:00 NOON</span>
                                            <span style = {{color: "grey"}}>Central Time (US and Canada), GMT</span>
                                        </div>
                                    </div>
                                    <div className = {styles.topGroupMain} >
                                        <div className = {styles.topGroupLeft} ><i style = {{color: "white", fontSize: "3rem"}}><BsFillPeopleFill /></i></div>
                                        <div className = {styles.topGroupRight} >
                                            <span style = {{color: "turquoise"}}>PRESENTERS</span>
                                            <span>Tyrie Jamerson MBA University of Chicago (Americas Top Rated Business School)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className = {styles.bottomGroup} >
                                    <div className = {styles.topText}>
                                        <h4>YOUR WEBINAR LINK (YOU MUST DISABLE AD BLOCKERS)</h4>
                                    </div>
                                    <div className = {styles.bubble}>
                                    <a href = "https://events.genndi.com/live/notsurewhatthislinkwillbe" target = "_blank" rel="noreferrer" style = {{textDecoration: "underline", color: "white", fontWeight: "bold"}}>Webinar Link</a>
                                    </div>
                                    <div className = {styles.smallLine} style = {{margin: "2rem 0rem"}}/>
                                    <div className = {styles.sms} >
                                        <button type = "button" onClick={() => pressed()}>CLICK HERE TO GET SMS REMINDER</button>
                                    </div>
                                    {(phoneButton && !numberSent) && (<form ref = {form} onSubmit = {sendEmail}>
                                        <input type = "text" name = "from_name" value = {props?.name} style = {{display: "none"}}/>
                                        <input type = "email" name = "user_email" value = {props?.email} style = {{display: "none"}}/>
                                        <input type = "tel" name = "user_number" placeholder = "Ex: (512) 556-4323" value = {phone} onChange = {(e) => setPhone(e.target.value)} />
                                        <button type = "submit" disabled = {((!isMatch) && (!justNumbers))}>Send</button>
                                    </form>)}
                                    {(numberSent) && (<small>We will message you the day of the webinar!</small>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}