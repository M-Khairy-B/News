import React, { useEffect } from "react";
import img from "../../assets/images/img.png";
import { useArticleContext } from "../../Context/ArticleContext";

export default function SectionDetails() {
    const { selectedArticle } = useArticleContext();

    return (
        <React.Fragment>
            <section className="details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="head-details">
                                <h2>{selectedArticle?.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="imgae-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="img-details">
                                <img
                                    className="w-100"
                                    src={selectedArticle?.urlToImage}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
