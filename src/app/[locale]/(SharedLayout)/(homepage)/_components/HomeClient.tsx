"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          onClick={onClose} // Close on background click
        >
          <motion.div
            className="w-[100%] max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl pt-6 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
          >
            {/* Close Button */}
            <button
  onClick={onClose}
  className="w-[40px] h-[40px] bg-[#282828] rounded-xl absolute top-7 right-6 flex items-center justify-center text-white "
>
✖
</button>

            {/* Header */}
            <div className="text-center text-[#575757] text-3xl  bukra-bolder mt-[12px]  mb-[40px]">
              من نحن
            </div>
            <div className="main-container w-full  bg-[url(/assets/images/image.png)] bg-cover bg-center bg-no-repeat rounded-tl-[32px] rounded-tr-[32px] rounded-br-none rounded-bl-none relative   mx-auto my-0" >

<div className="p-[40px]">

            {/* Logo Section */}
            <div className="flex justify-start items-center gap-4 ">
              <img
                src="/assets/images/logo.svg"
                alt="Placeholder Logo 1"
                className="w-[237.826px] h-[70px]"
              />
              
            </div>

            {/* Content Section */}
            <div className="flex flex-wrap justify-between items-start mt-10">
              {/* Left Section */}
              <div className="w-full lg:w-[48%] flex flex-col gap-8">
                <h2 className="text-white text-2xl bukra-semi-bold font-bold text-right">
                  رحـــلة مجموعة إنجاز العالميـــــــة
                </h2>
                <p className="text-[#8c8c8c] text-md leading-8 text-right">
                مجموعة إنجاز العالمية، التي انطلقت من قلب العاصمة الرياض، تمثل نموذجًا رياديًا للمملكة العربية السعودية في تقديم حلول متخصصة وشاملة تخدم مختلف القطاعات الاقتصادية. تأسست المجموعة على يد كلا من الأستاذ محمد صالح السويح والأستاذ علي صالح السويح قبل أكثر من 20 عامًا، برؤية طموحة تهدف إلى تطوير خدمات مبتكرة ومتنوعة وفق أعلى المعايير المحلية والدولية. بدأت المجموعة رحلتها بالخدمات العديدة والمتنوعة التي تلبي احتياجات القطاعات المختلفة، واستمرت في توسيع نطاق عملها لتشمل حلولاً متطورة تعتمد على أحدث التقنيات والشراكات الاستراتيجية.

                </p>
                <p className="text-[#8c8c8c] text-md leading-8 text-right">
                تميزت المجموعة بقدرتها على تحويل التحديات إلى فرص نجاح، مما عزز مكانتها كأحد الكيانات الرائدة في السوق، مع فريق عمل يضم أكثر من 700 موظف وموظفة، وثقة أكثر من 3000 عميل في مختلف المجالات. وقد حصدت المجموعة العديد من الجوائز المرموقة، من بينها جائزة "أفضل بيئة عمل 2024"، وأبرمت شراكات استراتيجية مع جهات دولية مثل حلف النيتو، وتلتزم مجموعة إنجاز العالمية بمعايير الجودة العالمية وحصولها على شهادات معتمدة مثل ISO، مما يعكس رؤيتها الراسخة نحو التميز والابتكار في مختلف خدماتها.
                </p>
              </div>
             

              {/* Right Section */}
              <div className="w-full lg:w-[48%] flex flex-col gap-8">
                <div>
                  <h2 className="text-white text-2xl bukra-semi-bold font-bold text-right">
                    رؤيتنا المستقبلية
                  </h2>
                  <p className="text-[#8c8c8c] text-md leading-8 text-right mt-8">
                  مجموعة إنجاز العالمية، التي تجمع بين الابتكار والخبرة، تُعد شريكًا مثاليًا لتعزيز الكفاءة التشغيلية والنمو الاقتصادي. بفضل التزامها بالمعايير العالمية وحلولها المتكاملة، أصبحت رائدة في دعم الأنشطة الاقتصادية محليًا وعالميًا. أحد مؤسسيها يشغل مناصب قنصل فخري لمالاوي ومستشار خاص لأوغندا، ويشرف على ملفات العمالة لعدة دول أفريقية. كما يرأس الغرفة التجارية الإسلامية الأوغندية ومجلس الأعمال السعودي، مما يعزز دوره في تعزيز العلاقات الاقتصادية الإقليمية والدولية.
                  </p>
                </div>
                <div>
                  <h2 className="text-white text-2xl bukra-semi-bold font-bold text-right">
                    الريادة
                  </h2>
                  <p className="text-[#8c8c8c] text-md leading-8 text-right mt-8">
                  تسعى مجموعة إنجاز العالمية لأن تكون حجر الأساس في تحقيق أهداف التنمية المستدامة ورؤية المملكة 2030، من خلال الابتكار في تقديم خدمات متكاملة ترتقي بتجربة العملاء وتحقق قيمة اقتصادية ومجتمعية. نحن في مجموعة إنجاز نؤمن بأن "التميز ليس خيارًا، بل هو التزام"، نعمل به يوميًا لصنع الغد.
                  </p>
                </div>
              </div>
            </div>
</div>
</div>

            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

  
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

  const ThirdSection = ({ isOpen, onClose }: PopupProps) => {
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
              className="w-full max-w-[1440px] h-[100vh] bg-[#191919] rounded-t-3xl p-6 overflow-y-auto overflow-x-hidden relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
            >
  <div className="main-container w-full max-w-[1360px] h-[80px] relative mx-auto my-0 flex items-center justify-between px-4 lg:px-0">
  
  {/* Logo - Stays Centered */}
  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 flex justify-center items-center h-[80px]">
    <img
      src="/assets/images/logo.svg"
      alt="Logo"
      className="h-[80px] max-w-[316px] object-contain"
    />
  </div>

  {/* Visit Website Button - Left Aligned */}
  <button className="flex w-[169px] h-[61px] px-6 py-4 gap-2 items-center bg-[#15b86c] hover:bg-[#158450] rounded-lg border-none absolute top-0 left-0 z-[5] pointer">
    <img
      src="/assets/images/global.svg"
      alt="Global Icon"
      className="w-6 h-6"
    />
    <span className="text-[16px] font-normal leading-[29px] text-white tracking-[0.32px]">
      زيارة الموقع
    </span>
  </button>

  {/* Close Button - Right Aligned */}
  <div
    onClick={onClose}
    className="w-[40px] h-[40px] bg-[#282828] rounded-[12px] flex items-center justify-center text-white cursor-pointer absolute top-0 right-0"
  >
    ✖
  </div>
</div>


    <div className="flex w-full xl:w-[1360px] flex-col gap-[64px] items-start flex-nowrap relative z-[1] mt-[108px] mr-0 mb-0 ml-[40px]">
        <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[2]">
          <span className="xl:h-[58px] self-stretch shrink-0 basis-auto  text-[32px] font-medium leading-[58px] text-[#fff] relative text-right xl:whitespace-nowrap z-[3]">
            مركز متخصص في تطوير الكفاءات المهنية والتدريب.
          </span>
          <span className="flex w-full xl:w-[1360px] h-[140px] justify-start items-start self-stretch shrink-0  text-[16px] font-medium leading-[35px] text-[#8c8c8c] relative text-right overflow-hidden z-[4]">
            يعد مركز إنجاز المتحدة للتدريب أحد أبرز المراكز المتخصصة في تقديم
            البرامج التدريبية والتطويرية التي تهدف إلى تعزيز المهارات وبناء
            القدرات البشرية في مختلف المجالات. تأسس المركز على رؤية واضحة تهدف
            إلى تمكين الأفراد والمؤسسات من تحقيق أهدافهم من خلال تقديم حلول
            تدريبية مبتكرة ومخصصة تلبي احتياجات سوق العمل المتغيرة. <br />
            يقدم المركز مجموعة واسعة من البرامج التدريبية التي تشمل التدريب
            الإداري، تطوير القيادة، المهارات التقنية، التحول الرقمي، إدارة
            المشاريع، بالإضافة إلى برامج متخصصة في الموارد البشرية والتسويق
            والمبيعات. يعتمد المركز في تصميم برامجه على أحدث المنهجيات العالمية
            وأفضل الممارسات، مما يضمن تحقيق أقصى استفادة للمتدربين.
          </span>
        </div>
        <div className="flex h-[287px] flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[5]">
          <span className="flex xl:w-[459px] xl:h-[58px] justify-start items-start shrink-0 basis-auto  text-[32px] font-medium leading-[58px] text-[#fff] relative text-right xl:whitespace-nowrap z-[6]">
            لماذا مركز إنجاز المتحدة للتدريب؟
          </span>
          <span className="flex w-full xl:w-[1360px] justify-start items-start self-stretch grow shrink-0 basis-0  text-[16px] font-medium leading-[35px] text-[#8c8c8c] relative text-right overflow-hidden z-[7]">
            يتميز مركز إنجاز المتحدة للتدريب بقدرته على تقديم حلول تدريبية
            متكاملة تسهم في تطوير المهارات وبناء الكفاءات البشرية التي تحتاجها
            المؤسسات لتحقيق النجاح. نقدم برامج تدريبية مصممة بعناية لتلبية
            احتياجات الأفراد والمؤسسات، مع التركيز على الجوانب العملية
            والتطبيقية التي تضمن تحقيق نتائج ملموسة. <br /> <br />
            نحن نؤمن بأن التدريب هو الركيزة الأساسية لبناء مؤسسات قوية وقادرة
            على المنافسة، وهذا ما يجعلنا نركز على تقديم برامج تدريبية تدعم
            التميز الوظيفي وتعزز القدرات القيادية. نعمل مع أفضل الخبراء
            والمتخصصين في مختلف المجالات لضمان أن تكون برامجنا ذات جودة عالية
            وتواكب أحدث التطورات العالمية.
          </span>
        </div>
        </div>
  
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
export default function HomeClient() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isThirdSectionOpen, setThirdSectionOpen] = useState(false);

    // State to control the number of images
    const [imageCount, setImageCount] = useState(12);

    // Image array
    const images = [
      "https://placehold.co/114x19",
      "https://placehold.co/101x19",
      "https://placehold.co/109x19",
      "https://placehold.co/138x19",
      "https://placehold.co/127x19",
      "https://placehold.co/114x19",
      "https://placehold.co/101x19",
      "https://placehold.co/109x19",
      "https://placehold.co/138x19",
      "https://placehold.co/127x19",
      "https://placehold.co/138x19",
      "https://placehold.co/127x19",
    ];
  return (
    <>
    
    
    <div className="flex flex-col items-center justify-center p-5">
      <button
        onClick={() => setPopupOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
    About us
      </button>

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
    <div className="flex flex-col items-center justify-center p-5">
      <button
        onClick={() => setFormOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
     Form
      </button>

      {/* Popup */}
      <FormPopup isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </div>
    <div className="flex flex-col items-center justify-center p-5">
      <button
        onClick={() => setThirdSectionOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
     third section
      </button>

      {/* Popup */}
      <ThirdSection isOpen={isThirdSectionOpen} onClose={() => setThirdSectionOpen(false)} />
    </div>

    <div className="main-container flex w-full max-w-[1360px] flex-col gap-4 items-center mx-auto my-0 px-4">
      
      {/* Small Rounded Box (Click to Change Image Count) */}
      <div
        className="w-[62px] h-[32px] shrink-0 bg-[#202125] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#303236] transition-all duration-500"
        onClick={() => setImageCount(imageCount === 12 ? 5 : 12)} // Toggle between 5 and 12 images
      >
        <img
          src="https://placehold.co/24x24"
          alt="Placeholder Icon"
          className="w-[24px] h-[24px]"
        />
      </div>

      {/* Motion Container for Dynamic Height */}
      <motion.div
        className="flex w-full max-w-[1230px] py-8 flex-col gap-6 items-center 
        rounded-2xl bg-gradient-to-b from-[#1e2029b3] to-[#232328b3] 
        backdrop-blur-[2px] transition-all"
        animate={{ height: imageCount === 12 ? "auto" : "auto" }} // Height animation
        transition={{ duration: 1 }} // 1000ms transition
      >
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatePresence>
            {images.slice(0, imageCount).map((textSrc, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1 }} // 1000ms transition
                className="flex w-[217px] h-[60px] px-4 gap-2 justify-center items-center 
                bg-[#3f3f3f] rounded-lg border-none transition hover:bg-[#555] 
                focus:ring-2 focus:ring-white"
              >
                <img
                  src="https://placehold.co/153x43"
                  alt="Placeholder Icon"
                  className="w-[153px] h-[43px]"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>

    </>
  );
}
