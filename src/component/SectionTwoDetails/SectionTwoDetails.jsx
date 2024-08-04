import React, { useState } from "react";
import { useArticleContext } from "../../Context/ArticleContext";
import { Link } from "react-router-dom";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";
import { faComment as faCommentSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import SectionThreeDetails from "../SectionThreeDetails/SectionThreeDetails";
import RecommendedArticle from "../RecommendedArticle/RecommendedArticle";

export default function SectionTwoDetails() {
    const { selectedArticle } = useArticleContext();
    const [iconStyle, setIconStyle] = useState({
        heart: "regular",
        bookmark: "regular",
        comment: "regular",
    });

    const handleClick = (type) => {
        setIconStyle((prevStyles) => ({
            ...prevStyles,
            [type]: prevStyles[type] === "regular" ? "solid" : "regular",
        }));
    };

    return (
        <React.Fragment>
            <section className="all-details">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-lg-1">
                            <div className="wrapper-see-more">
                                <span className="see-more">See more like this?</span>
                                <div className="color">
                                    <div className="green"> </div>
                                    <div className="orange"></div>
                                </div>
                            </div>
                            <div className="all-reaction d-flex flex-column justify-content-center">
                                <div className="heart d-flex align-items-center">
                                    <Link onClick={() => handleClick("heart")}>
                                        <FontAwesomeIcon
                                            icon={iconStyle.heart === "regular" ? faHeartRegular : faHeartSolid}
                                            className={`icon-comment icon-main ${iconStyle.heart === "solid" ? "clicked" : ""}`}
                                        />
                                    </Link>
                                    <span>28</span>

                                </div>
                                <div className="comment d-flex align-items-center">
                                    <Link onClick={() => handleClick("comment")}>
                                        <FontAwesomeIcon
                                            icon={iconStyle.comment === "regular" ? faCommentRegular : faCommentSolid}
                                            className={`icon-comment icon-main ${iconStyle.comment === "solid" ? "clicked" : ""}`}
                                        />
                                    </Link>
                                    <span>21</span>

                                </div>
                                <div className="share">
                                    <Link>
                                        <svg className="icon-share icon-main"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 17 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15 20H1.25C0.55875 20 0 19.4412 0 18.7512V6.25C0 5.56 0.55875 5 1.25 5H3.125V6.25H1.875C1.53 6.25 1.25 6.53125 1.25 6.875V18.125C1.25 18.4713 1.53 18.7512 1.875 18.7512H14.375C14.7188 18.7512 15 18.4713 15 18.125V6.875C15 6.53125 14.7188 6.25 14.375 6.25H13.125V5H15C15.69 5 16.25 5.56 16.25 6.25V18.7512C16.25 19.4412 15.69 20 15 20ZM10.8325 4.19617L8.75 2.11365V14.375C8.75 14.72 8.46875 15 8.125 15C7.78 15 7.5 14.72 7.5 14.375V2.11365L5.41626 4.19617C5.17876 4.43492 4.79118 4.43492 4.55368 4.19617C4.31618 3.95992 4.31618 3.57121 4.55368 3.33496L7.6413 0.246124C7.64505 0.241124 7.6525 0.238765 7.65625 0.233765C7.67 0.217515 7.66505 0.19371 7.68005 0.17746C7.7038 0.15496 7.73745 0.162458 7.76245 0.144958C7.85495 0.0699585 7.96243 0.0186682 8.08868 0.00991821C8.09868 0.00991821 8.10755 0.00366211 8.1163 0.00366211C8.12005 0.00366211 8.12247 0 8.12622 0C8.12997 0 8.13254 0.00241211 8.13629 0.00366211C8.14379 0.00241211 8.14878 0.00747681 8.15628 0.00747681C8.30503 0.0149768 8.43995 0.0736682 8.5437 0.166168C8.55245 0.174918 8.56626 0.17118 8.57376 0.17868C8.58126 0.18868 8.57752 0.202461 8.58627 0.209961C8.59127 0.214961 8.58997 0.224921 8.59497 0.231171L11.6975 3.33496C11.9363 3.57121 11.9363 3.95992 11.6975 4.19617C11.4575 4.43617 11.0713 4.43617 10.8325 4.19617Z"
                                                fill="#2A2A2A"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="bookmark">
                                    <Link onClick={() => handleClick("bookmark")}>
                                        <FontAwesomeIcon
                                            icon={iconStyle.bookmark === "regular" ? faBookmarkRegular : faBookmarkSolid}
                                            className={`icon-bookmark icon-main ${iconStyle.bookmark === "solid" ? "clicked" : ""}`}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ArticleDetails/>
                        <RecommendedArticle/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
