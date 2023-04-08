import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

export default function Contact({ pageInfo, theme }) {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const inputClass = classNames(
    "outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/60 focus:text-[#F7AB0A]/60 hover:border-[#F7AB0A]/40 ",
    theme === "light-mode" &&
      "text-gray-900 focus:border-[#242424]/60 focus:text-[#242424]/60 hover:border-[#242424]/40"
  );

  const iconClass = classNames(
    "text-[#f7AB0A] h-7 w-7 animate-plus",
    theme === "light-mode" && "text-[#242424]"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE,
        formRef.current,
        process.env.REACT_APP_EMAIL_JS_KEY
      )

      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
        mx-auto items-center"
    >
      <div
        className={classNames(
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:-mt-20 sm:-mt-20",
          theme === "light-mode" && "text-gray-900"
        )}
      >
        Contact
      </div>

      <div className="flex flex-col space-y-10">
        {!isSmallScreen && (
          <h4 className="text-4xl font-semibold text-center">
            I have what you need.{" "}
            <span
              className={classNames(
                "decoration-[#F7AB0A]/50 underline",
                theme === "light-mode" && "decoration-[#242424]/50"
              )}
            >
              Lets Talk
            </span>
          </h4>
        )}

        <div className="space-y-10 mt-20 xl:mt-0">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className={iconClass} />
            <p className="text-2xl">{pageInfo?.phone_no}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className={iconClass} />
            <p className="text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className={iconClass} />
            <p className="text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className={inputClass}
              type="text"
              name="user_name"
              required
            />

            <input
              placeholder="Email"
              className={inputClass}
              type="email"
              name="user_email"
              required
            />
          </div>

          <input
            placeholder="Subject"
            className={inputClass}
            type="text"
            name="user_subject"
            required
          />

          <textarea
            placeholder="Message"
            className={inputClass}
            name="message"
            required
          />

          <button
            type="submit"
            className={classNames(
              "bg-[#F7AB0A] hover:bg-slate-500 py-5 px-10 rounded-md text-block font-bold text-lg",
              theme === "light-mode" && "bg-slate-500 hover:bg-gray-500"
            )}
          >
            Submit
          </button>

          {done && "Thank you for submitting the form!"}
        </form>
      </div>
    </div>
  );
}
