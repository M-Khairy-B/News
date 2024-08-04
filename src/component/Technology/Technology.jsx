import React from "react";
import TechnologySlider from "../TechnologySlider/TechnologySlider";
import TechnologyArticles from "../TechnologyArticles/TechnologyArticles";
import { Helmet } from 'react-helmet';

export default function Technology() {
    return (
        <React.Fragment>
            <Helmet>
                <title> Technology</title>
                <meta name="description" content="Technology " />
            </Helmet>
            <TechnologySlider />
            <TechnologyArticles />
        </React.Fragment>
    );
}
