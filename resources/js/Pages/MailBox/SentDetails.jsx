import { message } from "antd";
import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import BackButton from "../../Assets/icons/BackButton.svg";
import Layout from "../../Layout/Index";
import MailSideBar from "./../../Components/Mailbox/MailSideBar";

const SentDetails = (props) => {
    const [editorHtml, setEditorHtml] = useState("");
    const [reply, setReplay] = useState(false);
    const { errors } = usePage().props;
    /// =========================================================
    //                          Methods
    // ==========================================================

    const handleEditorChange = (html) => {
        setEditorHtml(html);
    };

    const handleMessageSend = () => {
        if (editorHtml !== "" && editorHtml !== "<p><br></p>") {
            setReplay(false);

            axios
                .post("/admin/email/reply", {
                    email_id: props.email?.id,
                    message: editorHtml,
                })
                .then((res) => {
                    message.success("replied successfully");

                    Inertia.visit(`/admin/email/inbox/${props.email?.id}`, {
                        method: "get",
                    });
                })
                .catch((err) => {
                    message.error("something went wrong");
                });
        } else {
            message.error("empty reply");
        }
    };

    return (
        <Layout title="MailBox" currentPage={3}>
            <MailSideBar currentPage={1}>
                <div className="conversation-details-wrapper">
                    {
                        // heading
                    }
                    <div className="conversation-detail-header d-flex">
                        <InertiaLink
                            href="/mail/sent"
                            preserveState
                            preserveScroll
                        >
                            <img
                                src={BackButton}
                                className="mr-16 color-black f-24"
                            />
                            Demo Subject
                        </InertiaLink>
                    </div>
                    {
                        // content
                    }
                    <div className="conversation-details">
                        <div className="d-flex justify-content-between  align-items-baseline mb-16">
                            <div className="f-14 fw-500 ">
                                Contact Management
                            </div>
                            <div className="f-14 fw-400 color-color-storm-gray">
                                Date: 12/05/2020
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline mb-24">
                            <div className=" f-14">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et
                            </div>
                        </div>
                        {/* ///////////// images */}
                        <div className="d-flex conversation-details__images flex-wrap">
                            {(props.email?.data || []).map((item, index) => {
                                return (
                                    <div key={index} className="image"></div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </MailSideBar>
        </Layout>
    );
};

export default SentDetails;
