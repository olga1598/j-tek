import React from 'react';
import "./Privacy.css";

const Privacy = () => {
    return (
        <section className="info">
            <div className="overlayed-text">
                <h1 className="meet">PRIVACY.</h1>
                <h1 className="meet-team">J-TEK LAW PLLC</h1>
            </div>
            <div className="container">

                <hr className="style" />
                <br />
                <div className="privacy-text">
                    <p>
                        When you visit www.jtek-law.com, we do not collect any personally identifiable information about you unless you specifically provide it to us. Except as required by law or expressly authorized by you, we will not provide any personally identifiable information regarding you to any third parties. Any personally identifiable information that you submit to us will be used solely for the purpose of responding to inquiries or requests made by you.
                        </p>

                    <p>
                        By using our website, you consent to our use of your information as described in this Privacy Statement. We reserve the right to change our Privacy Statement at any time without advance notice. Should any new policy go into effect, we will post it on this site, and the revised Statement will apply only to information collected thereafter.
                        </p>
                </div>
            </div>
        </section>
    )
}

export default Privacy
