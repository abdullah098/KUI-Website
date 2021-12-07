import React from "react";
import Layout from "../../Layout/Index";
import ResultCardContent from "../../Components/Students/ResultCardContent";
import ArrowBack from "../../Assets/icons/button-arrow-back.svg";
import { InertiaLink } from "@inertiajs/inertia-react";
import DetailsHeader from "../../Components/Students/DetailsHeader";

const Details = ({ data }) => {
    return (
        <Layout currentPage={1}>
            <InertiaLink href="" className="button-back">
                <img src={ArrowBack} />
                <span className="f-18 fw-600 color-secondary">Back</span>
            </InertiaLink>

            <div className="academic-details-wrapper">
                <DetailsHeader />
                {
                    // Result card
                }
                <ResultCardContent />
            </div>
        </Layout>
    );
};

export default Details;
