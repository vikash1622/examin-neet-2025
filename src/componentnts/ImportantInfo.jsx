import React from 'react'

const ImportantInfo = () => {
    return (
        <div>
            <h4 style={{ paddingTop: '3pt', paddingLeft: '5pt', textIndent: '0pt', textAlign: 'left', color: 'red' }}>IMPORTANT INFORMATION:</h4>
            <ol className="custom-list">
                <li >
                    <span>1</span>
                    <p style={{ paddingTop: '1pt', textAlign: 'left' }}>
                        Candidate particulars have been indicated as mentioned by her/him in the online Application Form, which is subject to verification by the admitting authorities.
                    </p>
                </li>
                <li>
                    <span>2</span>
                    <p style={{ paddingTop: '3pt', paddingLeft: '6pt', textIndent: '0pt', lineHeight: '123%', textAlign: 'left' }}>
                        Candidate, if found submitting wrong information or tampering with this Score Card at any stage, will be considered as using unfair practices. NTA will cancel the candidature and take legal action as per applicable laws.
                    </p>
                </li>
                <li>
                    <span>3</span>
                    <p style={{ paddingTop: '1pt', textIndent: '7pt', textAlign: 'left' }}>
                        Under the UR Category, the candidates from other categories i.e. General-EWS, OBC, SC, ST, and PwBD but meeting UR-cut off percentile are also included.
                    </p>
                </li>
                <li>
                    <span>4</span>
                    <p style={{ paddingTop: '2pt', paddingLeft: '6pt', textIndent: '0pt', lineHeight: '131%', textAlign: 'left' }}>
                        In case of two or more candidates obtaining equal marks in NEET (UG) - 2025, the inter-se-merit of such candidates has been determined as per Chapter 14 {14.2} of Information Bulletin of NEET (UG) -2025 to generate NEET All-India Rank.
                    </p>
                </li>
                <li>
                    <span>5</span>
                    <p style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '131%', textAlign: 'left' }}>
                        NTA has declared only NEET All-India Rank. Counselling authorities will invite applications from the successful candidates and prepare their own merit list as per their rules based on the All-India Rank. Candidates may apply to the designated counselling authorities as per their eligibility. NTA has no role to play in this exercise.
                    </p>
                </li>
                <li>
                    <span>6</span>
                    <p style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '131%', textAlign: 'left' }}>
                        Details of the various counselling authorities are given in Appendix II of the Information Bulletin. The same may also be confirmed from respective websites. Although, due care has been taken to put their correct addresses and contact details, NTA is not responsible for any changes therein.
                    </p>
                </li>
                <li>
                    <span>7</span>
                    <p style={{ paddingLeft: '6pt', textIndent: '0pt', lineHeight: '124%', textAlign: 'left' }}>
                        In the NEET (UG) – 2025 result, the category of the candidates is as per details submitted by them in the online application form. In case, if the category of candidate falls under any other category in the state category list, candidates may apply to designated Counselling Authorities with their category as per State Category List and designated Counselling Authorities will verify the same. The same is the case with domicile. Domicile will be governed by respective admitting authority rules. <span className="s5">NTA will NOT change any details of the candidates after the declaration of the result.</span>
                    </p>
                </li>
                <li>
                    <span>8</span>
                    <p style={{ paddingTop: '1pt', textIndent: '7pt', textAlign: 'left' }}>
                        All candidates are advised to remain in touch with the websites of counselling authorities for updates.
                    </p>
                </li>
                <li>
                    <span>9</span>
                    <p style={{ paddingTop: '2pt', paddingLeft: '6pt', textIndent: '0pt', lineHeight: '130%', textAlign: 'left' }}>
                        Qualified Candidates having Benchmark Disabilities may refer to Information Bulletin specifically Chapter 6 6.3, 6.5. It may be noted that the eligibility in the examination under the category "Persons with Disability" is purely provisional to appear in the examination and does NOT guarantee a seat to the candidate under the respective category. The candidature for admission to MBBS program under PwBD category under various colleges will be governed as per relevant NMC guidelines.
                    </p>
                </li>
                <li>
                    <span>10</span>
                    <p style={{ paddingTop: '1pt', paddingLeft: '6pt', textIndent: '0pt', lineHeight: '123%', textAlign: 'left' }}>
                        Qualifying in NEET (UG) - 2025 does not confer any right for admission to Medical/Dental Colleges. Selection of qualified candidates in NEET (UG) - 2025 for admission to Medical/Dental Colleges is subject to merit position and satisfying the admission criteria as laid down in the rules of the Central Government/State Government /Universities / Institutions concerned.
                    </p>
                </li>
            </ol>
        </div>
    );
}

export default ImportantInfo
