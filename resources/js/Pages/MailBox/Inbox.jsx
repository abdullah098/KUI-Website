import { Input } from "antd";
import SearchIcon from "@material-ui/icons/Search";
import { Tabs } from "antd";
import InboxConversation from "../../Components/Mailbox/Inbox/InboxConversation";
import ReadConversation from "../../Components/Mailbox/Inbox/ReadConversation";
import UnreadConversation from "../../Components/Mailbox/Inbox/UnreadConversation";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import React from "react";
import Layout from "../../Layout/Index";
import MailSideBar from "./../../Components/Mailbox/MailSideBar";

const { TabPane } = Tabs;
const Inbox = ({ emails = [] }) => {
    const [currentTab, setCurrentTab] = useState("all");

    //  METHODS & HOOKS

    const handleSearch = ({ target }) => {
        Inertia.visit(
            `/faculty/mail-box/inbox${getQueryString({
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

    const search = {
        right: (
            <div className="primary-search-input w-95">
                <Input
                    onChange={handleSearch}
                    placeholder="Search email"
                    prefix={<SearchIcon className="search-icon" />}
                />
            </div>
        ),
    };

    const inboxTabsData = [
        {
            key: "all",
            label: "All",
            detailsURL: "/mail/inbox",
            content: <InboxConversation detailsURL={"/mail/inbox"} />,
        },
        {
            key: "read",
            label: "Read",
            detailsURL: "/mail/inbox",
            content: <ReadConversation detailsURL={"/mail/inbox"} />,
        },
        {
            key: "unread",
            label: "Unread",
            detailsURL: "/mail/inbox",
            content: <UnreadConversation detailsURL={"/mail/inbox"} />,
        },
    ];

    return (
        <Layout currentPage={4}>
            <MailSideBar currentPage={0}>
                <div className="inbox-wrapper">
                    <div>
                        <div className="d-flex justify-content-between align-items-center pt-3 px-4">
                            {
                                // header
                            }
                            <div className="f-16 fw-600">
                                Inbox
                                <span className="f-12 fw-400 mx-2">
                                    Showing 25 out of 50 messages
                                </span>
                            </div>
                        </div>
                        {
                            // Inbox Tabs
                        }
                        <div className="container-tabs m-t-4">
                            <Tabs
                                defaultActiveKey="2"
                                className="message-tabs tabs-primary tabs-success"
                                onChange={(e) => setCurrentTab(e)}
                                tabBarExtraContent={search}
                            >
                                {inboxTabsData.map((tab) => (
                                    <TabPane
                                        tab={
                                            <span
                                                className={
                                                    currentTab === tab.key
                                                        ? "f-14"
                                                        : "f-12"
                                                }
                                            >
                                                {tab.label}
                                            </span>
                                        }
                                        key={tab.key}
                                    >
                                        <div className="conversations-wrapper mt-3">
                                            {tab.content}
                                        </div>
                                    </TabPane>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                </div>
            </MailSideBar>
        </Layout>
    );
};

export default Inbox;
