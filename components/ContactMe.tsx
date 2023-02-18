import React from "react";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const notifySuccess = () =>
    toast.success("Message sent successfully!", {
      icon: <EnvelopeOpenIcon className="text-[#F7AB0A]" />,
      theme: "dark",
      className: "text-[#F7AB0A]",
      bodyClassName: "text-[#F7AB0A] ",
      progressClassName: "bg-[#F7AB0A]",
    });

  const notifyError = () =>
    toast.error("Something went wrong... :(", {
      theme: "dark",
      className: "text-red-700",
      bodyClassName: "text-red-700",
      progressClassName: "bg-red-700",
    });

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    try {
      emailjs
        .send(
          "service_gmail",
          "template_gmail",
          formData,
          `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent!");
            reset();
            notifySuccess();
          },
          (error) => {
            console.log(error.text);
            notifyError();
          }
        );
    } catch (error: any) {
      console.log(error.message);
      notifyError();
    }
  };

  let year = new Date().getFullYear();

  return (
    <div className="relative">
      <div className="h-screen relative flex flex-col justify-evenly items-center text-center mx-auto md:text-left md:flex-row max-w-7xl px-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              Let&apos;s Talk.
            </span>
          </h4>
          <div className="space-y-10">
            <div className="flex justify-center items-center space-x-5">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+40747520970</p>
            </div>

            <div className="flex justify-center items-center space-x-5">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">chiriac_razvan@ymail.com</p>
            </div>

            <div className="flex justify-center items-center space-x-5">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Iasi, Romania / Remote</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <div>
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="contactInput"
                  type="text"
                />
                <p className="text-red-700">
                  {errors.name && "Please enter your name"}
                </p>
              </div>
              <div>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="contactInput"
                  type="email"
                />
                <p className="text-red-700">
                  {errors.email && "Please enter your email"}
                </p>
              </div>
            </div>
            <input
              {...register("subject", { required: true })}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <p className="text-red-700">
              {errors.subject && "Please type a subject"}
            </p>

            <textarea
              {...register("message", { required: true })}
              placeholder="Message"
              className="contactInput"
            />
            <p className="text-red-700">
              {errors.message && "Please enter a message"}
            </p>
            <motion.button
              whileTap={{
                opacity: 0,
              }}
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </motion.button>
            <ToastContainer hideProgressBar />
          </form>
        </div>
      </div>
      <motion.p
        className="sticky bottom-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {" "}
        &copy; {year} Razvan Chiriac
      </motion.p>
    </div>
  );
};

export default ContactMe;
