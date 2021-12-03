require("./bootstrap");

import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const app = document.getElementById("app");

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={(name) =>
            import(`./Pages/${name}`).then((module) => module.default)
        }
    />,
    app
);
