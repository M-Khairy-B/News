import React from "react";
import { useArticleContext } from "../../Context/ArticleContext";
import SectionThreeDetails from "../SectionThreeDetails/SectionThreeDetails";

export default function ArticleDetails() {
    const { selectedArticle } = useArticleContext();
    console.log(selectedArticle);
    return (<React.Fragment>
        <div className="col-10 col-lg-7">
            <div className="date-details">
                <span className="time-publish">{selectedArticle?.publishedAt.slice(11, 16)} PM</span>
                <span className="by-name">By {selectedArticle?.source?.name}  |  4min read</span>
            </div>
            <div className="description">
                <p className="mb-3">{selectedArticle?.description}</p>
                <p className="mb-3">{selectedArticle?.content}</p>
                <p className="mb-3">{selectedArticle?.description}</p>
                <p className="">{selectedArticle?.content}</p>


            </div>
            <div className="content">
                <p>{selectedArticle?.description}</p>
            </div>
            <SectionThreeDetails/>

        </div>
        </React.Fragment>
    );
}
