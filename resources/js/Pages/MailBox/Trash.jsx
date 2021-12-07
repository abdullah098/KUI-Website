import DraftConversation from "../../Components/Mailbox/Draft/DraftConversation";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
// import { getQueryString } from "./../../../../../utilities/getQueryStrings";
import { Input } from "antd";
import Layout from "../../Layout/Index";
import MailSideBar from "./../../Components/Mailbox/MailSideBar";
import TrashConversation from "./../../Components/Mailbox/Trash/TrashConversation";

const Trash = () => {
    const [pagination, setPagination] = useState({
        page: 1,
        pageSize: 5,
        total: 5,
    });

    // methods

    const handlePaginationChange = (page, perPage) => {
        let filters = { page: page, pageSize: perPage };
        Inertia.visit(`/admin/email/drafts${getQueryString(filters)}`, {
            method: "get",
            onSuccess: () => {},
            preserveState: true,
        });
        setPagination({ ...pagination, ...filters });
    };

    const handleSearch = ({ target }) => {
        Inertia.visit(
            `/admin/email/drafts${getQueryString({
                page: pagination.page,
                pageSize: pagination.pageSize,
            })}&search=${target.value}`,
            {
                method: "get",
                onSuccess: () => {},
                preserveState: true,
            }
        );
    };

    return (
        <Layout currentPage={4}>
            <MailSideBar currentPage={3}>
                <div className="draft-wrapper">
                    <div
                        className="d-flex justify-content-between align-items-center  px-4"
                        style={{ height: 92 }}
                    >
                        {
                            /// =========================================================
                            //                          heading
                            // ==========================================================
                        }
                        <div className="f-16 fw-600">
                            Draft
                            <span className="f-12 fw-400 inbox-text d-block">
                                Showing 25 out of 50 messages
                            </span>
                        </div>
                        <div className="primary-search-input w-25">
                            <Input
                                onChange={handleSearch}
                                placeholder="Search email"
                                prefix={<SearchIcon className="search-icon" />}
                            />
                        </div>
                    </div>
                    {
                        /// =========================================================
                        //                          Drafts
                        // ==========================================================
                    }
                    <div className="conversations-wrapper">
                        <TrashConversation />
                    </div>
                </div>
            </MailSideBar>
        </Layout>
    );
};

export default Trash;
