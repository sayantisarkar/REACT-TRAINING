import React from "react";
import Plan from "../plans/plan";
import PremiumCalculator from "../premium-calc/premious-cal";
import './home.css';

class Home extends React.Component {
    constructor() {
        super();
        this.mainContent = `Revised Working Hours of All Offices of LIC Of India from 10.05.2021, 
        pursuant to Notification S.O.1630(E) Dated 15th April 2021 wherein the CENTRAL GOVERNMENT 
        has Declared Every Saturday as a Public Holiday for Life Insurance Corporation of India.`
        this.planDetails = [
            { ProductName: 'ABC', PlanNo: 1, UanNo: '1x01' },
            { ProductName: 'PQR', PlanNo: 2, UanNo: '1x02' }
        ]

        this.state = {
            mainImg: 'https://licindia.in/Slider_Images/Banner-1'
        }
    }

    render() {
        return (
            <div>
                <p>Date: {new Date().toLocaleDateString()}</p>
                <img src={this.state.mainImg} alt="Advertisement of the portal" width="1100" />
                <section className="main-section">
                    {this.mainContent}
                </section>
                <hr />
                <Plan />
                <hr />
                <PremiumCalculator />
                <hr />
                {/* <Plan planDetails={this.planDetails} /> */}
            </div >
        )
    }
}

export default Home;