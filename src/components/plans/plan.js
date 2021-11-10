import React, { useState } from "react";

const Plan = () => {
    const planArr = ['Plan-01', 'Plan-02', 'Plan-03'];
    const [planList, setPlanList] = useState('');

    const eventHandler = (event) => {
        setPlanList(prevState => prevState + ',' + event.target.value);
    }
    return (
        <div>
            <label>Choose Plan: </label>
            <hr></hr>
            <React.Fragment>
                {
                    planArr.map((plan) =>
                        <React.Fragment>
                            <label>
                                <input type="checkbox" onChange={eventHandler} value={plan}></input>
                                {plan}
                            </label>
                        </React.Fragment>
                    )
                }
            </React.Fragment>
            <br></br>
            <span>Selected Plan: {planList}</span>
        </div >
    )
}

export default Plan;