import React from 'react'
import CanditateIMage from "../assets/download.jpg"
import Qrcode from "../assets/qr-code.png"

const CandidateInfo = () => {
    return (
        <table style={{ borderCollapse: 'collapse', marginLeft: '3pt' }} cellSpacing="0">
            <tbody>
                <tr style={{ height: '17pt' }}>
                    <td style={{ width: '92pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Roll number</p>
                    </td>
                    <td style={{ width: '89pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s2" style={{ paddingTop: '2pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>3903414416</p>
                    </td>
                    <td style={{ width: '96pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>Application number</p>
                    </td>
                    <td style={{ width: '90pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s2" style={{ paddingTop: '2pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>250411841760</p>
                    </td>
                    <td style={{ width: '90pt', border: '1pt solid #CCCCCC' }} rowSpan="5">
                        <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0' }}>
                            <tr>
                                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img width="137" height="137" src={Qrcode} alt="QR Code" className='qr-img' />
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td style={{ width: '90pt', border: '1pt solid #CCCCCC' }} rowSpan="5">
                        <table border="0" cellSpacing="0" cellPadding="0" style={{ margin: '0' }}>
                            <tr>
                                <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                                    <img width="150" height="130" src={CanditateIMage} alt="Candidate Photo" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr style={{ height: '17pt' }}>
                    <td style={{ width: '92pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Candidate's name</p>
                    </td>
                    <td style={{ width: '275pt', border: '1pt solid #CCCCCC' }} colSpan="3">
                        <p className="s2" style={{ paddingTop: '2pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>PRAVEEN</p>
                    </td>
                </tr>
                <tr style={{ height: '30pt' }}>
                    <td style={{ width: '92pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '8pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Mother's name</p>
                    </td>
                    <td style={{ width: '89pt', border: '1pt solid #CCCCCC' }}>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                        <p className="s2" style={{ paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>GEETA DEVI</p>
                    </td>
                    <td style={{ width: '96pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '2pt', textIndent: '0pt', lineHeight: '122%', textAlign: 'left' }}>Date of birth (DD/MM/YYYY)</p>
                    </td>
                    <td style={{ width: '90pt', border: '1pt solid #CCCCCC' }}>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                        <p className="s2" style={{ paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>23/11/2005</p>
                    </td>
                </tr>
                <tr style={{ height: '17pt' }}>
                    <td style={{ width: '92pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Father's name</p>
                    </td>
                    <td style={{ width: '89pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s2" style={{ paddingTop: '2pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>NANDKISHOR</p>
                    </td>
                    <td style={{ width: '96pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>Gender</p>
                    </td>
                    <td style={{ width: '90pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s2" style={{ paddingTop: '2pt', paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Male</p>
                    </td>
                </tr>
                <tr style={{ height: '30pt' }}>
                    <td style={{ width: '92pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '1pt', paddingLeft: '1pt', textIndent: '0pt', lineHeight: '122%', textAlign: 'left' }}>Person with benchmark disability</p>
                    </td>
                    <td style={{ width: '89pt', border: '1pt solid #CCCCCC' }}>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                        <p className="s2" style={{ paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>NO</p>
                    </td>
                    <td style={{ width: '96pt', border: '1pt solid #CCCCCC' }}>
                        <p className="s1" style={{ paddingTop: '8pt', paddingLeft: '2pt', textIndent: '0pt', textAlign: 'left' }}>Nationality</p>
                    </td>
                    <td style={{ width: '90pt', border: '1pt solid #CCCCCC' }}>
                        <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
                        <p className="s2" style={{ paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left' }}>Indian</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default CandidateInfo
