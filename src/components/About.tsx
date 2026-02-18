import React from "react";

const About = () => {
  return (
    <div className="about border-b border-gray-600 lg:pb-20 pb-10" id="about">
      <h2 className="lg:my-20 my-10 text-center text-4xl font-semibold">
        About me
      </h2>
      <div className="flex items-center justify-center text-center flex-wrap">
        Although my degree is in Architecture, I transitioned into mobile
        development driven by a genuine passion for building products that
        people use every day. My architectural background has actually sharpened
        how I approach development: I think in systems, care deeply about user
        experience, and pay close attention to the details that make an
        interface feel right.
        <span className="text-pink-400">
          At PikaDo, I worked as a Junior React Native Developer where I
          contributed across the full development lifecycle. I integrated
          GraphQL queries and mutations for third-party services, implemented a
          secure authentication flow using AWS Amplify (Cognito), and developed
          the UI for the app’s interactive questions module. I also architected
          reusable components following Atomic Design principles for the
          company’s Design System, built a Storybook mobile app for component
          documentation, added a voice playback accessibility feature, and
          helped establish UI test automation using Appium.
        </span>
        I am comfortable working with React Native (Both React native cli and
        Expo), TypeScript, Redux Toolkit, GraphQL, Firebase, and AWS Amplify,
        and I thrive in Agile environments.
      </div>
    </div>
  );
};

export default About;
