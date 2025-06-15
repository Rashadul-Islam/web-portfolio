"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputClass =
    "w-full bg-[#191b1e] shadow-[inset_1px_4px_2px_-3px_rgba(0,0,0,0.7),inset_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)] text-white p-3 rounded-md border border-[#2a2a2a] focus:outline-none focus:ring-1 focus:ring-[#FF014F] font-[montserrat] tracking-[1px] text-[14px]";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_cqqcpsu",
        "template_1s1plw5",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
        },
        "user_UV3Oy1bGFZm87md4gijjF"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="xl:w-[728.75px] w-full xl:h-[753.91px] h-auto bg-[rgb(33,36,40)] rounded-[10px] drop-shadow-xl/50 p-[30px]">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#A0A8B3] text-[12px] uppercase tracking-[1px] opacity-90 font-normal mb-[15px]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`${inputClass} h-[55px]`}
            />
          </div>
          <div>
            <label className="block text-[#A0A8B3] text-[12px] uppercase tracking-[1px] opacity-90 font-normal mb-[15px]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputClass} h-[55px]`}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#A0A8B3] text-[12px] uppercase tracking-[1px] opacity-90 font-normal mb-[15px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${inputClass} h-[55px]`}
          />
        </div>

        <div>
          <label className="block text-[#A0A8B3] text-[12px] uppercase tracking-[1px] opacity-90 font-normal mb-[15px]">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`${inputClass} h-[55px]`}
          />
        </div>

        <div>
          <label className="block text-[#A0A8B3] text-[12px] uppercase tracking-[1px] opacity-90 font-normal">
            Your Message
          </label>
          <textarea
            rows="10"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={inputClass}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#191b1e] drop-shadow-xl/50 text-[#FF014F] font-[poppins] py-3 rounded-md cursor-pointer mt-[15px] transition-all duration-300 hover:mt-[5px]"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
