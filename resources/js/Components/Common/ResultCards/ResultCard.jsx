import React from "react";
import Sidebar from "../../../pages/Student/Layout/Sidebar";
import ResultCardContent from "./ResultCardContent";

function ResultCard() {
    return (
        <div className="ml-26">
            <Sidebar title="Result" currentPage={3}>
                <ResultCardContent />
            </Sidebar>
        </div>
    );
}

export default ResultCard;
