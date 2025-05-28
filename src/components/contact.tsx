import Resume from "/src/assets/NadaMohsenResume.pdf";
import React from "react";

const Contact = () => {
  return (
    <div className="contact pb-20 text-center" id="contact">
      <h2 className="my-20 text-center text-4xl font-semibold">Contact Me</h2>
      <div className="font-semibold mb-10 lg:text-2xl">
        You Can Contact Me Directly on{" "}
        <a
          href="mailto:mohsennada139@gmail.com"
          className="font-bold text-pink-400"
        >
          My Gmail Acc
        </a>
      </div>
      <div className="font-semibold mb-6 lg:text-2xl">
        You Can Download My Resume from{" "}
        <a href={Resume} download={Resume} className="font-bold text-pink-400">
          Here
        </a>
      </div>
    </div>
  );
};
export default Contact;
