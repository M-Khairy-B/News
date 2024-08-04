import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tab from "../../assets/images/tabs.svg";
import MainCard from "../MainCard/MainCard";
import CardSports from "../CardSports/CardSports";
import CardLive from "../CardLive/CardLive";
import CardHealth from "../CardHealth/CardHealth";

export default function NavsTabs() {
    return (
        <React.Fragment>
            <section>
            <div className="navs-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="wrapper-navs-tabs">
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="navs-tabs-main"
                                >
                                    <Tab
                                        eventKey="profile"
                                        title="Latest Stories"
                                        className="btn-tabs"
                                    >
                                        <MainCard />
                                    </Tab>
                                    <Tab
                                        eventKey="home"
                                        title="Sports"
                                        className="btn-tabs"
                                    >
                                        <CardSports />
                                    </Tab>

                                    <Tab
                                        eventKey="contact"
                                        title="Health"
                                        className="btn-tabs"
                                    >
                                        <CardHealth/> 
                                    </Tab>
                                    <Tab
                                        eventKey="icon"
                                        title={
                                            <img
                                                className="icon-tab "
                                                src={tab}
                                                alt=""
                                            />
                                        }
                                        className="btn-tabs"
                                        disabled 
                                    ></Tab>
                                </Tabs>
                            </div>
                        </div>
                        <CardLive/>
                    </div>
                </div>
            </div>
            </section>
   
        </React.Fragment>
    );
}
