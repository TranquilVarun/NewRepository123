import React from "react";
import { Icon } from "../../components/Icon";
import { ImgWrapper } from "../../components/ImgWrapper";
import { Logo } from "../../components/Logo";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PropertyLine } from "../../components/PropertyLine";
import { PropertyLineWrapper } from "../../components/PropertyLineWrapper";
import { PropertyMedicine } from "../../components/PropertyMedicine";
import "./style.css";

export const HellaLandingPage = () => {
  return (
    <div className="hella-landing-page">
      <div className="div">
        <footer className="footer">
          <div className="copyright-section">
            <div className="copyright">
              <img
                className="copyright-icon"
                alt="Copyright icon"
                src="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/copyright-icon.svg"
              />
              <p className="text-wrapper">2022 Rights Reserved, Taqwah Digital</p>
            </div>
            <p className="text-wrapper">
              Privacy&nbsp;&nbsp;|&nbsp;&nbsp;Terms &amp; Conditions&nbsp;&nbsp;|&nbsp;&nbsp;Privacy by
              Design&nbsp;&nbsp;|&nbsp;&nbsp;Secure by Design
            </p>
          </div>
          <div className="about">
            <div className="text-wrapper-2">About</div>
            <div className="frame">
              <div className="text-wrapper-3">Website Property</div>
              <div className="text-wrapper-4">Doctors</div>
              <div className="text-wrapper-4">Payment Company</div>
              <div className="text-wrapper-4">Partners</div>
            </div>
          </div>
          <div className="contact">
            <div className="text-wrapper-2">Contact</div>
            <div className="frame">
              <div className="text-wrapper-3">Newsroom</div>
              <div className="text-wrapper-4">Leaders</div>
              <div className="text-wrapper-4">Case Studies</div>
              <div className="text-wrapper-4">Help Center</div>
              <div className="text-wrapper-4">Blog</div>
            </div>
          </div>
          <div className="services">
            <div className="text-wrapper-2">Services</div>
            <div className="frame">
              <div className="text-wrapper-3">Services Tour</div>
              <div className="text-wrapper-4">Services Growth</div>
              <div className="text-wrapper-4">Services Experience</div>
              <div className="text-wrapper-4">Payments</div>
              <div className="text-wrapper-4">Billings</div>
              <div className="text-wrapper-4">Insights</div>
            </div>
          </div>
          <div className="who-we-re-for">
            <div className="text-wrapper-2">Who We’re For</div>
            <div className="frame">
              <div className="text-wrapper-3">Services Tour</div>
              <div className="text-wrapper-4">Services Timing</div>
              <div className="text-wrapper-4">Experience</div>
              <div className="text-wrapper-4">Payments</div>
              <div className="text-wrapper-4">Expert Doctors</div>
              <div className="text-wrapper-4">Phd Doctors</div>
            </div>
          </div>
          <div className="social-media-icon">
            <Icon className="icon-instance" property1="instgram" />
            <Icon className="design-component-instance-node" property1="twitter" />
            <Icon
              className="icon-2"
              property1="facebook"
              propertyFacebook="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/icon-1.svg"
            />
            <Icon
              className="icon-3"
              property1="youtube"
              propertyYoutube="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/icon.svg"
            />
          </div>
          <Logo
            className="logo-instance"
            property="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/logo-1.svg"
            property1="forty-eight-px"
          />
        </footer>
        <div className="subscribe-section">
          <div className="overlap-group">
            <PropertyMedicine className="elements" />
            <PrimaryButton className="primary-button-instance" property1="green" signUpClassName="primary-button-2" />
            <p className="paragraph">
              The natural healing force within each one of us is the greatest force in getting well.
            </p>
            <div className="overlap">
              <p className="title">In nothing do men more nearly approach</p>
              <PropertyLine
                className="property-1-line-property-2-small"
                propertyLine="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/elements-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="service-section">
          <div className="section">
            <div className="title-pragraph">
              <div className="title-pragraph-2">
                <p className="p">Each patient carries his own doctor inside him</p>
                <p className="paragraph-2">
                  The natural healing force within each one of us is the greatest force in getting well.
                </p>
              </div>
              <PrimaryButton className="primary-button-3" property1="green" />
            </div>
            <img
              className="illustration"
              alt="Illustration"
              src="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/illustration-1.svg"
            />
          </div>
          <div className="section-2">
            <img
              className="img"
              alt="Illustration"
              src="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/illustration.svg"
            />
            <div className="title-pragraph">
              <div className="title-pragraph-2">
                <p className="p">The life so short, the craft so long to learn</p>
                <p className="paragraph-2">
                  The natural healing force within each one of us is the greatest force in getting well.
                </p>
              </div>
              <PrimaryButton className="primary-button-3" property1="green" />
            </div>
          </div>
          <div className="overlap-2">
            <PropertyLineWrapper
              className="property-1-line-property-2-big"
              propertyLine="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/elements-1.svg"
            />
            <p className="title-2">Community health centers do a great deal with limited resources</p>
          </div>
        </div>
        <header className="header">
          <div className="buttons">
            <PrimaryButton className="primary-button-3" property1="green" />
            <div className="button">Why Hella?</div>
          </div>
          <img
            className="head-illustrations"
            alt="Head illustrations"
            src="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/head-illustrations.svg"
          />
          <div className="head-text-shape">
            <div className="overlap-group-2">
              <img
                className="shape"
                alt="Shape"
                src="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/shape.svg"
              />
              <div className="head-text-paragraph">
                <h1 className="head-text">Stop unnecessary blood pressure prescriptions.</h1>
                <p className="parapgraph">
                  The natural healing force within each one of us is the greatest force in getting well.
                </p>
              </div>
              <ImgWrapper
                className="property-1-line-property-2-3-lines"
                propertyLine="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/elements.svg"
              />
            </div>
          </div>
          <div className="overlap-3">
            <div className="top-head">
              <div className="menu">
                <div className="menus">
                  <div className="text-wrapper-5">Home</div>
                  <div className="text-wrapper-6">Why Hella?</div>
                  <div className="text-wrapper-6">Services</div>
                  <div className="text-wrapper-6">Contact</div>
                </div>
                <img
                  className="element-line"
                  alt="Element line"
                  src="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/element-line.svg"
                />
              </div>
              <div className="login-sign-up">
                <div className="text-wrapper-7">Login</div>
                <PrimaryButton className="primary-button-3" property1="yellow" />
              </div>
            </div>
            <div className="brand-name">Foundation Health</div>
          </div>
          <Logo
            className="logo-2"
            property1="thirty-six-px"
            propertyPx="https://generation-sessions.s3.amazonaws.com/a37d40030d2df3439a4157a82115dae7/img/logo.svg"
          />
        </header>
      </div>
    </div>
  );
};
