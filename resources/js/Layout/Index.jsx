import React from "react";
import Logo from "../assets/kiu_logo.png";
import TopNavigation from "./TopNavigation";
import HomeIcon from "../assets/icons/home.png";
import FinancialPayment from "../Assets/icons/financialPayment.svg";
import Expenses from "../Assets/icons/expenses.svg";
import { InertiaLink } from "@inertiajs/inertia-react";
import clsx from "clsx";
import useNavBarScrollAnimate from "./../Hooks/useNavBarScrollAnimate";
import UserIcon from "../Assets/icons/user.svg";
import Wallet from "../Assets/icons/StudentWallet.svg";
import CreditCard from "../Assets/icons/creditCard.svg";

function Index({ children, title, currentPage }) {
    // custom hook for navbar scroll animation
    const { showBG } = useNavBarScrollAnimate();

    const staticSidebarTabsData = [
        {
            name: "Dashboard",
            image: HomeIcon,
            url: "/dashboard",
            key: 0,
        },
        {
            name: "Financial Payments",
            image: FinancialPayment,
            url: "/financial-payments",
            key: 1,
        },
        {
            name: "Expenses",
            image: Expenses,
            url: "/expenses",
            key: 2,
        },
        {
            name: "Student Wallets",
            image: Wallet,
            url: "/student-wallets",
            key: 3,
        },
        {
            name: "Employees",
            image: UserIcon,
            url: "/employees",
            key: 4,
        },
        {
            name: "Payment Account",
            image: CreditCard,
            url: "/payment-account",
            key: 5,
        },
    ];

    return (
        <div>
            {
                // primary sidebar
            }
            <nav className="primary-sidebar">
                <div className="logo-container">
                    <img src={Logo} className="Logo" alt="logo" />
                </div>

                <ul>
                    {staticSidebarTabsData.map((item, index) => (
                        <li
                            key={index}
                            className={clsx(currentPage === index && "active")}
                        >
                            <span>
                                <img src={item.image} />
                            </span>
                            <InertiaLink preserveState={true} href={item.url}>
                                {item.name}
                            </InertiaLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex-1">
                {
                    //Top header of every component
                }
                <div
                    className={clsx(
                        "top-navigation ",
                        showBG > 0 && "scroll-active"
                    )}
                >
                    <TopNavigation
                        currentPage={currentPage}
                        title={title}
                        url="/student/profile"
                    />
                </div>

                {
                    // main content of every component
                }
                <main>{children}</main>
            </div>
        </div>
    );
}

export default Index;
