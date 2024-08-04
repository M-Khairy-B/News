import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmartSolid } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useArticleContext } from "../../Context/ArticleContext";
import { fetchentErtainmentData } from "../../lib/entertainmentSlice";

export default function EntertainmentArticals() {
    const [iconStyle, setIconStyle] = useState([]);
    const [iconStyleChange, setIconStyleChange] = useState([]);

    const [visibleCount, setVisibleCount] = useState(13);
    const [showAll, setShowAll] = useState(false);
    const { setSelectedArticle } = useArticleContext();

    const [category, setCategory] = useState("entertainment");
    const [country, setCountry] = useState("us");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { entertainmentData, status, error } = useSelector(
        (state) => state.entertainmentData
    );
    useEffect(() => {
        dispatch(fetchentErtainmentData({ category, country }));
    }, [dispatch, category, country]);

    // console.log(businessData);

    useEffect(() => {
        if (entertainmentData) {
            setIconStyle(new Array(entertainmentData.length).fill("regular"));
            setIconStyleChange(new Array(entertainmentData.length).fill("regular"));
        }
    }, [entertainmentData]);

    const handleClick = (index) => {
        setIconStyle((prevStyles) => {
            const newStyles = [...prevStyles];
            newStyles[index] =
                newStyles[index] === "regular" ? "solid" : "regular";
            return newStyles;
        });
    };

    const handleChange = (index) => {
        setIconStyleChange((prevStyles) => {
            const newStyles = [...prevStyles];
            newStyles[index] =
                newStyles[index] === "regular" ? "solid" : "regular";
            return newStyles;
        });
    };
    const handleViewMore = () => {
        if (showAll) {
            setVisibleCount(13);
        } else {
            setVisibleCount(entertainmentData.length);
        }
        setShowAll(!showAll);
    };
    const handleNavigate = (article) => {
        setSelectedArticle(article);
        navigate(`/detailsArticle/${article.title}`);
    };
    return (
        <React.Fragment>
            <section className="all-article-main business">
                <div className="container">
                    <div className="text-article-main">
                        <h2 className="text-mains">Entertainment</h2>
                    </div>
                </div>
                <div className="any-article-main">
                    <div className="container">
                        <div className="main-card">
                            <div className="row">
                                {entertainmentData
                                    ?.slice(1, visibleCount)
                                    .map((article, index) => (
                                        <div
                                            className="col-12 col-md-6 col-lg-3"
                                            key={index}
                                        >
                                            <div className="wrapper-card">
                                                <div className="img-card">
                                                    <Link>
                                                        <img
                                                            className="w-100"
                                                            src={
                                                                article?.urlToImage
                                                            }
                                                            alt=""
                                                            onClick={() =>
                                                                handleNavigate(
                                                                    article
                                                                )
                                                            }
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="wrapper-main">
                                                    <div className="content-main">
                                                        <h3>
                                                            {article?.title
                                                                
                                                                
                                                                }
                                                        </h3>
                                                        <p>
                                                            {article?.description
                                                                
                                                                
                                                                }
                                                        </p>
                                                    </div>
                                                    <div className="date-by d-flex  align-items-center">
                                                        <span className="date">
                                                        {article?.publishedAt.slice(11, 16)} PM
                                                        </span>
                                                        <span className="author">
                                                            {article?.author}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="all-icon-main">
                                                    <Link
                                                        className="link-item"
                                                        onClick={() =>
                                                            handleClick(index)
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={
                                                                iconStyle[
                                                                    index
                                                                ] === "regular"
                                                                    ? faHeartRegular
                                                                    : faHeartSolid
                                                            }
                                                            className={`icon ${
                                                                iconStyle[
                                                                    index
                                                                ] === "solid"
                                                                    ? "clicked"
                                                                    : ""
                                                            }`}
                                                        />
                                                        <span>28</span>
                                                    </Link>
                                                    <Link className="link-item">
                                                        <svg
                                                            className="icon"
                                                            width="20"
                                                            height="17"
                                                            viewBox="0 0 13 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M12 16H1C0.447 16 0 15.553 0 15.001V5C0 4.448 0.447 4 1 4H2.5V5H1.5C1.224 5 1 5.225 1 5.5V14.5C1 14.777 1.224 15.001 1.5 15.001H11.5C11.775 15.001 12 14.777 12 14.5V5.5C12 5.225 11.775 5 11.5 5H10.5V4H12C12.552 4 13 4.448 13 5V15.001C13 15.553 12.552 16 12 16ZM8.66602 3.35693L7 1.69092V11.5C7 11.776 6.775 12 6.5 12C6.224 12 6 11.776 6 11.5V1.69092L4.33301 3.35693C4.14301 3.54793 3.83294 3.54793 3.64294 3.35693C3.45294 3.16793 3.45294 2.85697 3.64294 2.66797L6.11304 0.196899C6.11604 0.192899 6.122 0.191012 6.125 0.187012C6.136 0.174012 6.13204 0.154968 6.14404 0.141968C6.16304 0.123968 6.18996 0.129967 6.20996 0.115967C6.28396 0.0559668 6.36995 0.0149346 6.47095 0.00793457C6.47895 0.00793457 6.48604 0.00292969 6.49304 0.00292969C6.49604 0.00292969 6.49798 0 6.50098 0C6.50398 0 6.50603 0.00192969 6.50903 0.00292969C6.51503 0.00192969 6.51902 0.00598145 6.52502 0.00598145C6.64402 0.0119814 6.75196 0.0589346 6.83496 0.132935C6.84196 0.139935 6.85301 0.136944 6.85901 0.142944C6.86501 0.150944 6.86202 0.161969 6.86902 0.167969C6.87302 0.171969 6.87198 0.179937 6.87598 0.184937L9.35803 2.66797C9.54903 2.85697 9.54903 3.16793 9.35803 3.35693C9.16603 3.54893 8.85702 3.54893 8.66602 3.35693Z"
                                                                fill="#2A2A2A"
                                                            />
                                                        </svg>
                                                        <span className="number">
                                                            72
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        className="link-item "
                                                        onClick={() =>
                                                            handleChange(index)
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={
                                                                iconStyleChange[
                                                                    index
                                                                ] === "regular"
                                                                    ? faBookmarkRegular
                                                                    : faBookmartSolid
                                                            }
                                                            className={`icon ${
                                                                iconStyleChange[
                                                                    index
                                                                ] === "solid"
                                                                    ? "main"
                                                                    : ""
                                                            }`}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div
                                className={`text-center main-btn ${
                                    showAll ? "d-none" : ""
                                }`}
                            >
                                <button
                                    className="btn-main-view"
                                    onClick={handleViewMore}
                                >
                                    {showAll ? null : "View More"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
