import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { fetchSliderData } from "../../lib/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { useArticleContext } from "../../Context/ArticleContext";

export default function SliderMain() {
    const [iconStyle, setIconStyle] = useState([]);
    const [iconStyleChange, setIconStyleChange] = useState([]);
    const navigate = useNavigate();
    const { setSelectedArticle } = useArticleContext();

    const [category, setCategory] = useState("health");
    const [country, setCountry] = useState("in");
    const dispatch = useDispatch();
    const { sliderData, status, error } = useSelector(
        (state) => state.sliderData
    );
    useEffect(() => {
        dispatch(fetchSliderData({ category, country }));
    }, [dispatch, category, country]);

    // console.log(sliderData);
    const limitedSliderData = sliderData.slice(0, 8);
    
    useEffect(() => {
        if (sliderData) {
            setIconStyle(new Array(sliderData.length).fill("regular"));
            setIconStyleChange(
                new Array(sliderData.length).fill("regular")
            );
        }
    }, [sliderData]);
    const handleClick = (index) => {
        console.log("Heart Clicked:", index);
        setIconStyle((prevStyles) => {
            const newStyles = [...prevStyles];
            newStyles[index] =
                newStyles[index] === "regular" ? "solid" : "regular";
            return newStyles;
        });
    };
    const handleChange = (index) => {
        console.log("Bookmark Clicked:", index);
        setIconStyleChange((prevStyles) => {
            const newStyles = [...prevStyles];
            newStyles[index] =
                newStyles[index] === "regular" ? "solid" : "regular";
            return newStyles;
        });
    };
    const handleNavigate = (sliderData) => {
        setSelectedArticle(sliderData);
        navigate(`/detailsArticle/${sliderData?.title}`); 
    };
    const settings = {
        customPaging: function (i) {
            return <div className="dots-main"></div>;
        },
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };
    return (
        <React.Fragment>
            <div className="editor-picks">
                <div className="container">
                    <div className="head-editor d-flex align-items-center">
                        <h2>Editor’s Picks </h2>
                        <FontAwesomeIcon className="star-icon" icon={faStar} />
                    </div>
                    <div className="main-editor">
                        <div className="container">
                            <Slider {...settings} className="slider-editor">
                                {limitedSliderData.map((data, index) => (
                                    <div
                                        className="slider-editor-main"
                                        key={index}
                                    >
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card-slider">
                                                    <div className="img-slide position-relative">
                                                        <Link>
                                                        <img
                                                            className="position-relative"
                                                            src={
                                                                data?.urlToImage
                                                            }
                                                            alt=""
                                                            onClick={() => handleNavigate(data)}
                                                        />
                                                        </Link>
                                             
                                                        <div className="all-icon-main position-absolute bottom-0 w-100">
                                                            <Link
                                                                className="link-item"
                                                                onClick={() =>
                                                                    handleClick(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        iconStyle[
                                                                            index
                                                                        ] ===
                                                                        "regular"
                                                                            ? faHeartRegular
                                                                            : faHeartSolid
                                                                    }
                                                                    className={`icon ${
                                                                        iconStyle[
                                                                            index
                                                                        ] ===
                                                                        "solid"
                                                                            ? "clicked"
                                                                            : ""
                                                                    }`}
                                                                />
                                                                <span>28</span>
                                                            </Link>
                                                            <Link
                                                                className="link-item"
                                                                to={
                                                                    limitedSliderData.url
                                                                }
                                                            >
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
                                                                        fill="white"
                                                                    />
                                                                </svg>

                                                                <span className="number">
                                                                    72
                                                                </span>
                                                            </Link>
                                                            <Link
                                                                className="link-item"
                                                                onClick={() =>
                                                                    handleChange(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        iconStyleChange[
                                                                            index
                                                                        ] ===
                                                                        "regular"
                                                                            ? faBookmarkRegular
                                                                            : faBookmarkSolid 
                                                                    }
                                                                    className={`icon ${
                                                                        iconStyleChange[
                                                                            index
                                                                        ] ===
                                                                        "solid"
                                                                            ? "main"
                                                                            : ""
                                                                    }`}
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="content-slider">
                                                        <h3>{data?.title}</h3>
                                                        <p>
                                                            {data?.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
