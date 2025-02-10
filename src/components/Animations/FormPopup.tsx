"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup = ({ isOpen, onClose }: PopupProps) => {
  return (
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        onClick={onClose} // Close on background click
      >
        <motion.div
          className="w-full max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl p-6 overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-[40px] h-[40px] bg-[#282828] rounded-xl absolute top-6 right-6 flex items-center justify-center text-white "
          >
✖
</button>

          {/* Header */}
          <div className="text-center text-[#575757] text-3xl  bukra-bolder font-bold mb-6">
            نموذج تسجيل التوظيف
          </div>

          {/* Form Container */}
          <div className="main-container w-full bg-[#191919] rounded-t-3xl p-8">
            <div className="flex flex-wrap justify-between gap-8">
              {/* First Name */}
              <div className="w-full md:w-[48%] flex flex-col">
                <label className="text-[#575757] text-sm font-medium mb-2">
                  الاسم الأول *
                </label>
                <input
                  type="text"
                  className="h-[56px] outline-none p-4 rounded-lg bg-[#282828] text-white placeholder:text-[#575757]"
                  placeholder="الاسم الأول"
                />
              </div>

              {/* Last Name */}
              <div className="w-full md:w-[48%] flex flex-col">
                <label className="text-[#575757] text-sm font-medium mb-2">
                  الاسم الأخير *
                </label>
                <input
                  type="text"
                  className="h-[56px] outline-none  p-4 rounded-lg bg-[#282828] text-white placeholder:text-[#575757]"
                  placeholder="الاسم الأخير"
                />
              </div>

              {/* Email */}
              <div className="w-full flex flex-col">
                <label className="text-[#575757] text-sm font-medium mb-2">
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  className="h-[56px] outline-none  p-4 rounded-lg bg-[#282828] text-white placeholder:text-[#575757]"
                  placeholder="you@company.com"
                />
              </div>

              {/* Phone Number */}
              <div className="w-full flex flex-col">
                <label className="text-[#575757] text-sm font-medium mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  className="h-[56px] outline-none text-start  p-4 rounded-lg bg-[#282828] text-white placeholder:text-[#575757]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div className="w-full flex flex-col">
                <label className="text-[#575757] text-sm font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  className="h-[163px] outline-none p-4 rounded-lg bg-[#282828] text-white placeholder:text-[#575757]"
                  placeholder="اترك لنا رسالة..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="w-full  flex justify-start mt-4">
                <button className="bg-[#15B86C] text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition w-[100%] md:w-[48%]">
                  إرسال
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  );
};

export default FormPopup;
