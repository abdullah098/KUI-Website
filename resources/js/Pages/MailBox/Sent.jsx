import { Input } from "antd";
import SearchIcon from "@material-ui/icons/Search";
import SentConversation from "../../Components/Mailbox/Sent/SentConversation";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
// import { getQueryString } from "./../../../../../utilities/getQueryStrings";
import Layout from "../../Layout/Index";
import MailSideBar from "./../../Components/Mailbox/MailSideBar";

const Sent = ({ emails }) => {
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 5,
        total: 5,
    });

    return (
        <Layout title="MailBox" currentPage={4}>
            <MailSideBar currentPage={1}>
                <div className="sent-wrapper">
                    <div
                        className="d-flex justify-content-between align-items-center px-4"
                        style={{ height: 92 }}
                    >
                        {
                            /// =========================================================
                            //                          heading
                            // ==========================================================
                        }

                        <div className="f-16 fw-600">
                            Sent
                            <span className="f-12 fw-400  d-block text-black-50">
                                Showing 25 out of 50 messages
                            </span>
                        </div>
                        <div className="primary-search-input w-25">
                            <Input
                                placeholder="Search email"
                                prefix={<SearchIcon className="search-icon" />}
                            />
                        </div>
                    </div>
                    {
                        /// =========================================================
                        //                          Sent
                        // ==========================================================
                    }
                    <div className="conversations-wrapper ">
                        <SentConversation detailsURL="/mail/sent" />
                    </div>
                </div>
            </MailSideBar>
        </Layout>
    );
};

export default Sent;
