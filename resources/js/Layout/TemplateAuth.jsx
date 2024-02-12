import React from "react";
import { Link } from "@inertiajs/react";

const TemplateAuth = ({ children }) => {
    return (
        <div class="container" style={{}}>
            <div class="row justify-content-center mt-5">{children}</div>
        </div>
    );
};

export default TemplateAuth;
