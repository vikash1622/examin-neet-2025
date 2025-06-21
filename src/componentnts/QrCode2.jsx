
import Header from './Header'
import  {useEffect, useState } from "react" 
import { useNavigate } from 'react-router-dom'
const QrCode = () => {
     const navigate = useNavigate()
    const [captchaCode, setCaptchaCode] = useState("")
    const [userInput, setUserInput] = useState("")
    const [errorMassage,seterrorMassage] = useState("")

    const generateNewCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        let result = ""
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setCaptchaCode(result)
    }
useEffect(()=>{
generateNewCaptcha()
},[])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInput.toUpperCase() === captchaCode) { 
            // next route navigation 
            navigate('/resultservices/Neet2025/ResultView-candidate') 
        } else {
            seterrorMassage("CAPTCHA verification failed. Please try again.")
            generateNewCaptcha()
        }
    }
    return (
        <div>
            <Header />
            <div style={{
                height: "30px",
                background: "#002041",
                position: "relative",
                top: "-14px"
            }}></div>

            <div className="captcha-container">
                <div className="captcha-card">
                    <div className="captcha-header">
                        <div className="header-content">
                            <img src='https://examinationservices.nic.in/resultservices/Images/login.png'
                                alt='lock' />
                            <h1 style={{
                                fontSize: "24px"
                            }}>View Result</h1>
                        </div>
                    </div>
                    <div className="captcha-content">
                        <form onSubmit={handleSubmit} className="captcha-form">
                            <div className="form-group">
                                <div style={{
                                    display: "flex",
                                    gridTemplateColumns: "1fr 1fr"
                                }}>
                                    <label>
                                        Enter CAPTCHA<span className="hint">(case sensitive)</span>:
                                    </label>
                                    <input
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => {setUserInput(e.target.value);seterrorMassage("")}}
                                        placeholder="Enter CAPTCHA code"
                                        required
                                        style={{
                                            flexGrow: "1",
                                            maxWidth: "50%",
                                            marginLeft: "30px",
                                            height: "40px",
                                            border: "1px solid #dadada",
                                            outline: "none",
                                            borderRadius: "4px",
                                            paddingLeft: "10px",
                                            alignItems: "center"
                                        }}
                                    />
                                </div>
                                    <small style={{display:"inline-block",textAlign:"center",color:"red",fontWeight:"500"}}> 
                                        {errorMassage}
                                    </small>
                                <div className="captcha-display-row">
                                    <div style={{
                                        display:"flex",
                                        alignItems:"center",
                                        margin:"0 auto",
                                        width:"430px",
                                        gap:"30px"
                                    }}>
                                        <span className="label">CAPTCHA:</span>
                                        <div className="captcha-box-wrapper">
                                            <div className="captcha-box">{captchaCode}</div>
                                            <button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={generateNewCaptcha}
                                                className="refresh-button"
                                            >
                                               <img src='https://examinationservices.nic.in/resultservices/HeaderImg/Refresh.jpg' alt='reupdate'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="submit-wrapper">
                                <button type="submit" className="submit-button">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QrCode
