"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as z from "zod";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}



const FormPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation("homepage");
  const locale = i18n.language;
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, t("form.errors.firstName"))
      .max(50),
    lastName: z
      .string()
      .min(2, t("form.errors.lastName"))
      .max(50),
    email: z
      .string()
      .email(t("form.errors.email")),
    phone: z
      .string()
      .min(8, t("form.errors.phone")),
    message: z.string().optional(),
  });
  // React Hook Form Configuration
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  // Handle Form Submission
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert(t("form.successMessage"));
    onClose(); // Close popup after submission
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl p-6 overflow-y-auto no-scrollbar relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-[40px] h-[40px] bg-[#282828] rounded-xl absolute top-6 right-6 flex items-center justify-center text-white"
            >
              ✖
            </button>

            {/* Header */}
            <div className="text-center text-[#575757] text-3xl font-bold mb-6">
              {t("form.title")}
            </div>

            {/* Form Container */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="main-container w-full bg-[#191919] rounded-t-3xl p-8"
            >
              <div className="flex flex-wrap justify-between gap-8">
                {/* First Name */}
                <div className="w-full md:w-[48%] flex flex-col">
                  <label className="text-[#575757] text-start text-sm font-medium mb-2">
                    {t("form.firstName")} *
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    className="h-[56px] outline-none p-4 rounded-[1rem] bg-[#282828] text-white placeholder:text-[#575757]"
                    placeholder={t("form.firstNamePlaceholder")}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm text-start">
                      {errors.firstName.message as string}
                    </span>
                  )}
                </div>

                {/* Last Name */}
                <div className="w-full md:w-[48%] flex flex-col">
                  <label className="text-[#575757] text-start text-sm font-medium mb-2">
                    {t("form.lastName")} *
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    className="h-[56px] outline-none p-4 rounded-[1rem] bg-[#282828] text-white placeholder:text-[#575757]"
                    placeholder={t("form.lastNamePlaceholder")}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm text-start">
                      {errors.lastName.message as string}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="w-full flex flex-col">
                  <label className="text-[#575757] text-start text-sm font-medium mb-2">
                    {t("form.email")} *
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="h-[56px] outline-none p-4 rounded-[1rem] bg-[#282828] text-white placeholder:text-[#575757]"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm text-start">
                      {errors.email.message as string}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="w-full flex flex-col">
                  <label className="text-[#575757] text-start text-sm font-medium mb-2">
                    {t("form.phone")} *
                  </label>
                  <input
                    type="tel"
                    dir="rtl"
                    {...register("phone")}
                    className="h-[56px] outline-none p-4 rounded-[1rem] bg-[#282828] text-white placeholder:text-[#575757]"
                    placeholder="0000-000 (555) 1+"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm text-start">
                      {errors.phone.message as string}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="w-full flex flex-col">
                  <label className="text-[#575757] text-start text-sm font-medium mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    className="h-[163px] outline-none p-4 rounded-[1rem] bg-[#282828] text-white placeholder:text-[#575757]"
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full flex justify-start mt-4">
                  <button
                    type="submit"
                    className="bg-[#15B86C] text-white px-6 py-3 rounded-[1rem] shadow-md hover:bg-green-600 transition w-full md:w-[48%]"
                  >
                    {t("form.submit")}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormPopup;
