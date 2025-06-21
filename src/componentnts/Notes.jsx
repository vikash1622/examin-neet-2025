import React from 'react'

const Notes = () => {
    return (
        <div style={{
            marginTop:"30px"
        }}>
             <p className="s5" style={{ paddingTop: '1pt', paddingLeft: '6pt', textIndent: '0pt', textAlign: 'left' }}>Note :</p>
            <ol className="note-list">
                <li data-number="1">
                    <p style={{ paddingTop: '2pt', textIndent: '-7pt', textAlign: 'left' }}>
                        Percentile are based on the relative performance of all those who appeared for the examination.
                    </p>
                </li>
                <li data-number="2">
                    <p style={{ paddingTop: '3pt', textIndent: '-7pt', textAlign: 'left' }}>
                        The percentile of a candidate has been calculated as follows:
                    </p>
                    <p className="s5" style={{ paddingTop: '1pt', paddingLeft: '202pt', textIndent: '-54pt', lineHeight: '120%', textAlign: 'left' }}>
                        <u>100 X Number of candidates appeared in the examination with raw score LESS than the candidate</u><br />
                        Total number of candidates who appeared in the examination
                    </p>
                </li>
                <li data-number="4">
                    <p style={{ paddingTop: '1pt', textIndent: '-7pt', textAlign: 'left' }}>
                        Total percentile is NOT an aggregate or average of the percentile of individual subjects.
                    </p>
                </li>
            </ol>
        </div>
    );
}

export default Notes
