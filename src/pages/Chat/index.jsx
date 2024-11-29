import { HomePageLayout } from "@/layouts";
import { Button } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
motion;

const LetsChat = () => {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.recipient);
    const body = encodeURIComponent(formData.body);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${formData.email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <HomePageLayout className="bg-light-yellow-layout-bg important">
      <motion.div
        className="px-4 md:px-20 mt-20 md:mt-[192px] mb-10 md:mb-[124px]"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          ease: "easeIn",
        }}
      >
        <div className="flex flex-col items-center gap-3 mb-4 md:mb-6">
          <p className="hidden md:flex text-secondary">
            Fill out the form to chat about my services
          </p>
          <h2 className="text-heading text-[24px] md:text-[48px] font-bold">
            Let’s work together!
          </h2>
        </div>

        <div className="max-w-[500px] bg-white rounded-[16px] p-8 m-auto">
          <h4 className="text-center md:text-medium md:text-[24px] text-[18px] mb-6">
            Send a message across to me
          </h4>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div>
              <label>Name</label>
              <input
                className="Enter name"
                id="recipient"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="Enter email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                placeholder="Type your message here"
                className="min-h-[113px]"
                id="body"
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </motion.div>
    </HomePageLayout>
  );
};

export default LetsChat;
