import React from "react";
import GeneralSlider from "../GeneralSlider/GeneralSlider";
import GeneralArtical from "../GeneralArtical/GeneralArtical";
import { Helmet } from "react-helmet";
import logo from "../../assets/images/logo.svg";

export default function General() {
    return (
        <React.Fragment>
            <Helmet>
                <title>General</title>
                <meta name="description" content="General" />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href={logo}
                    sizes="16x16"
                />
            </Helmet>
            <GeneralSlider />
            <GeneralArtical />
        </React.Fragment>
    );
}
