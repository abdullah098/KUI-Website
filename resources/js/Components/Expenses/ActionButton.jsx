import React from "react";
import { Button } from "antd";
import EditPencil from "../../Assets/icons/editPencil.svg";
import CancelIcon from "../../Assets/icons/cancelIcon.svg";
import TickIcon from "../../Assets/icons/TickIcon.svg";

const ActionButton = () => {
    const [actionState, setActionState] = React.useState(false);

    const handleApproveRejectChange = () => {
        setActionState(!actionState);
    };
    const habdleOnCancel = () => {
        setActionState(false);
    };
    const habdleOnApprove = () => {
        setActionState(false);
    };

    return (
        <>
            <Button
                className={`${
                    actionState === false
                        ? "d-block border-0 shadow-none"
                        : "d-none"
                }`}
                onClick={handleApproveRejectChange}
            >
                <img src={EditPencil} alt="" />
            </Button>
            <div className={`${actionState === true ? "d-flex" : "d-none"}`}>
                <Button
                    style={{ height: "40px" }}
                    className="border-0 shadow-none"
                    onClick={habdleOnCancel}
                >
                    <img src={CancelIcon} alt="" />
                </Button>
                <Button
                    style={{ height: "40px" }}
                    className="border-0 shadow-none"
                    onClick={habdleOnApprove}
                >
                    <img src={TickIcon} alt="" />
                </Button>
            </div>
        </>
    );
};

export default ActionButton;
