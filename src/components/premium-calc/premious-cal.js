import React from "react";

class PremiumCalculator extends React.Component {
    constructor() {
        super();
        this.premiumYrs = [10, 15, 25, 30, 35, 40];
        this.state = {
            premiumYr: 10,
            TotalAmt: 0,
            premiumAmount: 0
        }
    }

    // yearList = () => this.premiumYrs.map(el => <option>{el}</option>);

    calculatePremium = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        if (this.state.TotalAmt > 0) {
            this.setState({ premiumAmount: (this.state.TotalAmt / this.state.premiumYr) + 5000 });
        }
    }

    render() {
        return (
            <div>
                <select onChange={this.calculatePremium} name="premiumYr" value={this.state.premiumYr}>
                    {this.premiumYrs.map(el => <option>{el}</option>)}
                </select>
                <input type="number" name="TotalAmt" onChange={this.calculatePremium}
                    value={this.state.TotalAmt} />
                <label>Premium Amount: </label>
                <input type="number" value={this.state.premiumAmount}></input>
            </div>
        )
    }
}

export default PremiumCalculator;