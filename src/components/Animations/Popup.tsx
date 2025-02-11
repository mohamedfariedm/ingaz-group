"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup:React.FC<PopupProps> = ({ isOpen, onClose }) => {
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
                تميزت المجموعة بقدرتها على تحويل التحديات إلى فرص نجاح، مما عزز مكانتها كأحد الكيانات الرائدة في السوق، مع فريق عمل يضم أكثر من 700 موظف وموظفة، وثقة أكثر من 3000 عميل في مختلف المجالات. وقد حصدت المجموعة العديد من الجوائز المرموقة، من بينها جائزة &quot;أفضل بيئة عمل 2024&quot;، وأبرمت شراكات استراتيجية مع جهات دولية مثل حلف النيتو، وتلتزم مجموعة إنجاز العالمية بمعايير الجودة العالمية وحصولها على شهادات معتمدة مثل ISO، مما يعكس رؤيتها الراسخة نحو التميز والابتكار في مختلف خدماتها.
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
                  تسعى مجموعة إنجاز العالمية لأن تكون حجر الأساس في تحقيق أهداف التنمية المستدامة ورؤية المملكة 2030، من خلال الابتكار في تقديم خدمات متكاملة ترتقي بتجربة العملاء وتحقق قيمة اقتصادية ومجتمعية. نحن في مجموعة إنجاز نؤمن بأن &quot;التميز ليس خيارًا، بل هو التزام&quot;، نعمل به يوميًا لصنع الغد.
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

export default Popup;
