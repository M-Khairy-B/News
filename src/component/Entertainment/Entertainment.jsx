import React from "react";
import EntertainmentSlider from "../EntertainmentSlider/EntertainmentSlider";
import EntertainmentArticals from "../EntertainmentArticals/EntertainmentArticals";
import { Helmet } from "react-helmet";

export default function Entertainment() {
    return (
        <React.Fragment>
            <Helmet>
                <title> Entertainment</title>
                <meta name="description" content="Technology " />
            </Helmet>
            <EntertainmentSlider />
            <EntertainmentArticals />
        </React.Fragment>
    );
}
