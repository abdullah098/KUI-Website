import React, { createContext, useState } from "react";

export const ComposeContext = createContext();

// export const composeContext = useContext(ComposeContext);

const StudentComposeProvider = (props) => {
    const [editorHtml, setEditorHtml] = useState("");
    const [showCompose, setShowComposeState] = useState(false);
    const [minimize, setMinimizeState] = useState(false);

    const setShowCompose = (value) => {
        if (!value) setMinimize(false);
        setShowComposeState(value);
        sessionStorage.setItem(
            "studentMail",
            JSON.stringify({ showCompose: value, minimize: false })
        );
    };

    const setMinimize = (value) => {
        sessionStorage.setItem(
            "studentMail",
            JSON.stringify({
                showCompose: !value & showCompose ? false : true,
                minimize: value,
            })
        );
        setMinimizeState(value);
    };

    return (
        <ComposeContext.Provider
            value={{
                setShowCompose,
                editorHtml,
                setEditorHtml,
                showCompose,
                setShowComposeState,
                minimize,
                setMinimizeState,
                setMinimize,
            }}
        >
            {props?.children}
        </ComposeContext.Provider>
    );
};

export default StudentComposeProvider;
