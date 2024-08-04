import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBookmark, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import share from "../../assets/images/share.svg";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import TestmonialMain from "../TestmonailMain/TestmonialMain";

export default function Testmonial() {
    return (
        <React.Fragment>
            <div className="testmonial">
                <div className="main-testmonial">
                    <div className="testmonial-head">
                        <h4 className="newsletter">
                            Sign up for The NBC News Newsletter
                        </h4>
                        <span className="by">By Caroline Casey</span>
                    </div>
                    <div className="ad-free">
                        <p>
                            A weekly, ad-free newsletter that helps 786,000+
                            readers stay in the know, be productive, and think
                            more critically about the world.{" "}
                            <span className="text-text-decoration-underline">
                                Take a look
                            </span>
                        </p>
                    </div>
                    <div className="get-this-newsletter">
                        <button className="btn-newsletter">
                            <FontAwesomeIcon
                                className="faenvelope"
                                icon={faEnvelope}
                            />
                            GET THIS NEWSLETTER
                        </button>
                    </div>
                </div>
            </div>
            <div className="opnion">
                <span className="design-opnion">NBCBLK</span>
                <span className="design-opnion">Trending</span>
                <span className="design-opnion">Lewis</span>
                <span className="design-opnion">Freebie</span>
            </div>
            <div className="all-react d-flex justify-content-between ">
                <div className="heart-comment d-flex align-items-center">
                    <div className="heart-mains d-flex align-items-center">
                        <Link>
                            <FontAwesomeIcon
                                className="faheart"
                                icon={faHeart}
                            />
                        </Link>
                        <span className="number-main">28</span>
                    </div>
                    <div className="comment-mains d-flex align-items-center">
                        <Link>
                            <FontAwesomeIcon
                                className="facomment"
                                icon={faComment}
                            />
                        </Link>
                        <span className="number-main">21 responses</span>
                    </div>
                </div>
                <div className="share-bookmark d-flex align-items-center">
                    <div className="share">
                        <svg
                            width="13"
                            height="16"
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
                        <span className="number-share">72</span>
                    </div>
                    <div className="bookmark-main">
                        <FontAwesomeIcon
                            className="fabookmark"
                            icon={faBookmark}
                        />{" "}
                    </div>
                    <div className="ellipsis">
                        <svg
                            width="16"
                            height="4"
                            viewBox="0 0 16 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14 4.00098C12.896 4.00098 12 3.105 12 2C12 0.896 12.896 0 14 0C15.104 0 16 0.896 16 2C16 3.106 15.104 4.00098 14 4.00098ZM14 1C13.447 1 13 1.448 13 2C13 2.553 13.447 3.00098 14 3.00098C14.552 3.00098 15 2.553 15 2C15 1.448 14.552 1 14 1ZM8 4.00098C6.895 4.00098 6 3.105 6 2C6 0.896 6.895 0 8 0C9.104 0 10 0.896 10 2C10 3.106 9.104 4.00098 8 4.00098ZM8 1C7.447 1 7 1.448 7 2C7 2.553 7.447 3.00098 8 3.00098C8.552 3.00098 9 2.553 9 2C9 1.448 8.552 1 8 1ZM2 4.00098C0.896 4.00098 0 3.105 0 2C0 0.896 0.896 0 2 0C3.104 0 4 0.896 4 2C4 3.106 3.104 4.00098 2 4.00098ZM2 1C1.447 1 1 1.448 1 2C1 2.553 1.447 3.00098 2 3.00098C2.552 3.00098 3 2.553 3 2C3 1.448 2.552 1 2 1Z"
                                fill="#2A2A2A"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <TestmonialMain/>
        </React.Fragment>
    );
}
