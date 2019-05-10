import React from "react";
import LocBar from "./locBar";

const LocBarReport  = ({current, forecast}) => {
    return (
        <div>
            <LocBar city={current}/>
        </div>
    )
};

export default LocBarReport;