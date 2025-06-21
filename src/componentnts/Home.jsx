import React from 'react'
import Header from './Header'
import ActionButtons from './ActionButtons'
import CandidateInfo from './CandidateInfo'
import PercentileTable from './PercentileTable'
import CutoffTable from './CutoffTable'
import ImportantInfo from './ImportantInfo'
import Notes from './Notes'
import { Helmet } from 'react-helmet'
import Sign from "../assets/Director_NEET.jpg"
const Home = () => {
    return (
        <div>
              <Helmet>
                <title>NEET Result 2025 - Score Card</title>
            </Helmet>
            <Header />
            <ActionButtons />
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <CandidateInfo />
            <p style={{ textIndent: '0pt', textAlign: 'left' }} />
            <p className="s4" style={{ paddingRight: '30px', textIndent: '0pt', textAlign: 'right' }}>4F8B0F54A844A743EED107B1660E886 B</p>
            <PercentileTable />
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <p className="s4" style={{ textIndent: '0pt', textAlign: 'right', paddingRight: '30px' }}>NTA414442976136</p>
            <p style={{ textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <CutoffTable />
            <p style={{ paddingTop: '6pt', textIndent: '0pt', textAlign: 'left' }}><br /></p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <h3 style={{ paddingTop: '3pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left' }}>DATE OF DECLARATION OF RESULT: 14.06.2025</h3>
                <div style={{ marginRight: '30px' }}>




























                    <img width="149" height="54" src={Sign} alt="Director Signature" />
                    <h3 style={{ textIndent: '0pt', textAlign: 'start' }}>Director (Exams), NTA</h3>
                </div>
            </div>
            <ImportantInfo />
            <Notes />
            <p style={{ paddingBottom: '200px' }}></p>
        </div>
    )
}

export default Home
