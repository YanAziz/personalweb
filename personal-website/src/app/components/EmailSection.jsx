"use client";
import React, {useState} from "react";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent successfully");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-1">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">I'm currently looking for new opportunities. If you have any questions or would like to work together, feel free to reach out.</p>
        <div className="socials flex flex-row gap-2">
          <Link href="Github.com">
            <Image src={GithubIcon} className="cursor-pointer bg-slate-50 rounded" alt="github icon" width={30} height={30} />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} className="cursor-pointer bg-slate-50 rounded" alt="linkedin icon" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
              Your email
            </label>
            <input type="email" name="email" id="email" required placeholder="jacob@gmail.com" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input type="text" id="subject" name="subject" required placeholder="Just saying hello" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Your message
            </label>
            <textarea id="message" name="message" required placeholder="Hi, I'm interested in your work" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" />
          </div>
          <button type="submit" className="text-white bg-primary-500 hover:bg-primary-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Send Message
          </button>
          {
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-4">Email sent Succesfully!</p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
