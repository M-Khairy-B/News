import React from "react";
import SportSlider from "../SportSlider/SportSlider";
import SportArticle from "../SportArticle/SportArticle";
import { Helmet } from "react-helmet";

export default function Sports() {
    return (
        <React.Fragment>
            <Helmet>
                <title> Sports</title>
                <meta name="description" content="Technology " />
            </Helmet>
            <SportSlider />
            <SportArticle />
        </React.Fragment>
    );
}
