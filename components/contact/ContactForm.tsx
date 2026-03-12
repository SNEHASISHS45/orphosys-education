"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", mobile: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h2 className="text-xl font-black text-slate-900 mb-2">Contact For Any Query</h2>
      <p className="text-slate-500 mb-6 font-bold text-sm">Fill out the form below and our team will get back to you shortly.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Full Name</label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Mobile Number</label>
            <input
              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="+91 00000 00000"
              type="tel"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address</label>
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              placeholder="email@example.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Subject</label>
            <select
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="franchise">Franchise Enquiry</option>
              <option value="offline">Offline Course Enquiry</option>
              <option value="online">Online Course Enquiry</option>
              <option value="live">Live Course Enquiry</option>
              <option value="study">Study Centre Enquiry</option>
              <option value="jobs">Jobs Enquiry</option>
              <option value="complain">Complain</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Your Message</label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
            placeholder="How can we help you?"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-blue-700 text-white font-black py-3 rounded-xl transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 active:scale-95 text-lg mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
