"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThirdSection } from "./ThirdSection";
import Popup from "./Popup";

function ButtonGrid({locale}: {locale: string}) {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isAboutUs, setAboutUsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(5); // Default to large screen
  const [isSmallScreenPopup, setSmallScreenPopup] = useState(false); // NEW STATE for Small Screen Popup

  // Data Array with Image, Titles, and Descriptions
  const allItemsAr = [
    {
      image: "/assets/images/layers/9.svg",
      title1: "مركز متخصص في تطوير الكفاءات المهنية والتدريب.",
      description1: `يعد مركز إنجاز المتحدة للتدريب أحد أبرز المراكز المتخصصة في تقديم البرامج التدريبية والتطويرية التي تهدف إلى تعزيز المهارات وبناء القدرات البشرية في مختلف المجالات. تأسس المركز على رؤية واضحة تهدف إلى تمكين الأفراد والمؤسسات من تحقيق أهدافهم من خلال تقديم حلول تدريبية مبتكرة ومخصصة تلبي احتياجات سوق العمل المتغيرة.
يقدم المركز مجموعة واسعة من البرامج التدريبية التي تشمل التدريب الإداري، تطوير القيادة، المهارات التقنية، التحول الرقمي، إدارة المشاريع، بالإضافة إلى برامج متخصصة في الموارد البشرية والتسويق والمبيعات. يعتمد المركز في تصميم برامجه على أحدث المنهجيات العالمية وأفضل الممارسات، مما يضمن تحقيق أقصى استفادة للمتدربين.`,
      title2: "لماذا مركز إنجاز المتحدة للتدريب؟",
      description2: `يتميز مركز إنجاز المتحدة للتدريب بقدرته على تقديم حلول تدريبية متكاملة تسهم في تطوير المهارات وبناء الكفاءات البشرية التي تحتاجها المؤسسات لتحقيق النجاح. نقدم برامج تدريبية مصممة بعناية لتلبية احتياجات الأفراد والمؤسسات، مع التركيز على الجوانب العملية والتطبيقية التي تضمن تحقيق نتائج ملموسة.

نحن نؤمن بأن التدريب هو الركيزة الأساسية لبناء مؤسسات قوية وقادرة على المنافسة، وهذا ما يجعلنا نركز على تقديم برامج تدريبية تدعم التميز الوظيفي وتعزز القدرات القيادية. نعمل مع أفضل الخبراء والمتخصصين في مختلف المجالات لضمان أن تكون برامجنا ذات جودة عالية وتواكب أحدث التطورات العالمية.`,
    },
    {
      image: "/assets/images/layers/3.svg",
      title1: "نجاز المتحدة للموارد البشرية – شركاء في بناء قوة عمل استثنائية",
      description1: `تعد إنجاز المتحدة للموارد البشرية واحدة من الشركات الرائدة في مجال إدارة الموارد البشرية وتقديم الحلول المتكاملة التي تعزز كفاءة المؤسسات وقدرتها على تحقيق أهدافها الاستراتيجية. تأسست الشركة على أسس علمية وعملية متينة، حيث تجمع بين الخبرات الواسعة لفريق من المتخصصين في مجال الموارد البشرية وأحدث المنهجيات العالمية في إدارة وتطوير الكوادر البشرية.
تقدم إنجاز المتحدة للموارد البشرية مجموعة واسعة من الخدمات التي تشمل الاستقدام، إدارة المواهب، تطوير السياسات والإجراءات، تقييم الأداء، إدارة الرواتب والمزايا، بالإضافة إلى تقديم استشارات متخصصة في مجال تحسين بيئة العمل ورفع مستوى الرضا الوظيفي.`,
      title2: "لماذا إنجاز المتحدة للموارد البشرية؟",
      description2: `تتميز إنجاز المتحدة للموارد البشرية بقدرتها الفريدة على فهم التحديات المعقدة التي تواجه المؤسسات في مجال إدارة الموارد البشرية وتحويلها إلى فرص للنمو والتميز. نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.

نحن نؤمن بأن نجاح أي مؤسسة يعتمد على قدرتها على إدارة وتطوير كوادرها البشرية بشكل فعال، وهذا ما يجعلنا نركز على تقديم خدمات تدعم اكتشاف المواهب، تطوير المهارات، وتحسين بيئة العمل. تتميز خدماتنا بالمرونة والقدرة على التكيف مع احتياجات العملاء، مما يجعلنا الشريك المثالي للمؤسسات التي تسعى إلى تحقيق التميز والريادة في قطاعاتها.`,
    },
    {
      image: "/assets/images/layers/4.svg",
      title1:
        "متخصصة في استقطاب وتوظيف الكفاءات لتلبية احتياجات الأفراد والقطاعات المختلفة بكفاءة واحترافية.",
      description1: `تعد إنجاز للموارد البشرية واحدة من الشركات الرائدة في مجال إدارة وتطوير الموارد البشرية، حيث تقدم حلولًا متكاملة ومبتكرة تساعد المؤسسات على تحقيق أهدافها الاستراتيجية من خلال بناء قوة عمل عالية الكفاءة. تأسست الشركة على أسس علمية وعملية متينة، تجمع بين الخبرات الواسعة لفريق من المتخصصين في مجال الموارد البشرية وأحدث المنهجيات العالمية في إدارة الكوادر البشرية.
تقدم إنجاز للموارد البشرية مجموعة واسعة من الخدمات تشمل الاستقدام، إدارة المواهب، تقييم الأداء، إدارة الرواتب والمزايا، واستشارات الموارد البشرية. تعمل الشركة مع قطاعات متنوعة تشمل القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها. تتميز إنجاز للموارد البشرية باتباعها منهجية عمل قائمة على التحليل العميق والتفكير الاستراتيجي، مما يمكنها من تقديم توصيات عملية وفعالة تسهم في تحقيق النمو المستدام ورفع كفاءة العمليات.`,
      title2: "لماذا إنجاز للموارد البشرية؟",
      description2: `تتميز إنجاز للموارد البشرية بقدرتها الفريدة على فهم التحديات المعقدة التي تواجه المؤسسات في مجال إدارة الموارد البشرية وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الموارد البشرية هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات تدعم اكتشاف المواهب، تطوير المهارات، وتحسين بيئة العمل. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/5.svg",
      title1: `استقدام العمالة المنزلية من مجموعة متنوعة من الدول مع
         توفير أفضل الكوادر المؤهلة `,
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا إنجاز للاستقدام؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/6.svg",
      title1: "6",
      description1: "Description for first title - 6.",
      title2: "Title Two - 6",
      description2: "Description for second title - 6.",
    },
    {
      image: "/assets/images/layers/7.svg",
      title1:
        `تقدم حلولاً مالية مبتكرة واستشارات احترافية لدعم 
        الشركات في تحقيق أهدافها بكفاءة.`,
      description1: `تعد شركة إنجاز المتحدة للاستشارات الإدارية واحدة من أبرز الشركات الرائدة في مجال تقديم الحلول الاستشارية المتكاملة التي تهدف إلى تعزيز كفاءة المؤسسات وتمكينها من تحقيق أهدافها الاستراتيجية. تأسست الشركة على أسس علمية وعملية متينة، حيث تجمع بين الخبرات الواسعة لأفضل الاستشاريين المحترفين وأحدث المنهجيات العالمية في مجال الإدارة والاستشارات.
تقدم إنجاز المتحدة للاستشارات الإدارية مجموعة واسعة من الخدمات التي تشمل التخطيط الاستراتيجي، إدارة التغيير، تحسين العمليات، تطوير الهياكل التنظيمية، وإدارة المشاريع، بالإضافة إلى تقديم استشارات متخصصة في مجالات الابتكار والتحول الرقمي`,
      title2: "لماذا إنجاز المتحدة للاستشارات الإدارية؟",
      description2: `تتميز إنجاز المتحدة للاستشارات الإدارية بقدرتها الفريدة على فهم التحديات المعقدة التي تواجه المؤسسات وتحويلها إلى فرص للنمو والتميز. نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استشارية مبتكرة ومخصصة، مصممة لتعزيز الكفاءة التشغيلية وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن نجاح أي مؤسسة يعتمد على قدرتها على التكيف مع التغيرات السريعة في بيئة الأعمال، وهذا ما يجعلنا نركز على تقديم استشارات تدعم التحول الرقمي والابتكار، بالإضافة إلى تحسين العمليات وتبسيط الهياكل التنظيمية. تتميز خدماتنا بالمرونة والقدرة على التكيف مع احتياجات العملاء، مما يجعلنا الشريك المثالي للمؤسسات التي تسعى إلى تحقيق التميز والريادة في قطاعاتها.`,
    },
    {
      image: "/assets/images/layers/1.svg",
      title1:
        "شركة اعتمد للتمويل - شركة اعتمد للتمويل تقدم حلولاً مالية مبتكرة وشاملة تلبي احتياجات الأفراد والشركات",
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا إنجاز للاستقدام؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/2.svg",
      title1:
        "شركة إنجاز لتقنية المعلومات - حلول تقنية مبتكرة لإدارة القوى العاملة.",
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا شركة إنجاز لتقنية المعلومات؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/8.svg",
      title1:
        "ركة اعتمد للتمويل - شركة اعتمد للتمويل تقدم حلولاً مالية مبتكرة وشاملة تلبي احتياجات الأفراد والشركات",
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا إنجاز للاستقدام؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/10.svg",
      title1:
        "شركة أبشر المتحدة للمقاولات - خدمات عقود احترافية لدعم البنية التحتية. والتوريد التجاري بأسلوب احترافي لتلبية احتياجات القطاعات. دعم التوسع التجاري وتعزيز الشراكات الدولية",
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا شركة أبشر المتحدة للمقاولات؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/11.svg",
      title1:
        `استقدام العمالة المنزلية من مجموعة متنوعة من الدول مع
         توفير أفضل الكوادر المؤهلة `,
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا إنجاز للاستقدام؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
    {
      image: "/assets/images/layers/12.svg",
      title1: "شركة فيرا للتصميمات - تصميم إبداعي وحلول تجارية مبتكرة.",
      description1: `تعد إنجاز للاستقدام واحدة من الشركات الرائدة في مجال توفير الكوادر البشرية المؤهلة والمدربة لتلبية احتياجات سوق العمل المحلي والدولي. تأسست الشركة على أسس قوية من الخبرة والكفاءة، حيث تعمل على توفير حلول استقدام متكاملة تلبي متطلبات المؤسسات في مختلف القطاعات.

تقدم إنجاز للاستقدام خدماتها وفقًا لأعلى المعايير العالمية، بدءًا من البحث عن الكفاءات المناسبة، ومرورًا بعمليات التقييم والاختيار الدقيقة، ووصولًا إلى توفير الكوادر البشرية المؤهلة التي تتماشى مع احتياجات العملاء. تعمل الشركة مع مجموعة واسعة من القطاعات، بما في ذلك القطاع الحكومي والخاص وغير الربحي، مما يمكنها من فهم التحديات الفريدة لكل قطاع وتقديم حلول مخصصة تلبي احتياجات عملائها.`,
      title2: "لماذا فيرا للتصميمات؟",
      description2: `تتميز إنجاز للاستقدام بقدرتها الفريدة على فهم التحديات التي تواجه المؤسسات في مجال توفير الكوادر البشرية المؤهلة وتحويلها إلى فرص للنمو والتميز. نحن نقدم لعملائنا قيمة مضافة حقيقية من خلال حلول استقدام متكاملة ومخصصة، مصممة لتعزيز كفاءة القوى العاملة وتمكين المؤسسات من تحقيق أهدافها الاستراتيجية.
نحن نؤمن بأن الكوادر البشرية المؤهلة هي الركيزة الأساسية لنجاح أي مؤسسة، وهذا ما يجعلنا نركز على تقديم خدمات استقدام تدعم اكتشاف المواهب وتوفير الكفاءات المناسبة. نعمل مع عملائنا لبناء سياسات وإجراءات فعالة تعزز من إنتاجية الموظفين ورضاهم الوظيفي، مما ينعكس إيجابًا على أداء المؤسسة ككل.`,
    },
  ];
  const allItemsEn = [
    {
        image: "/assets/images/layers/9.svg",
        title1: "A Specialized Center for Professional Skill Development and Training.",
        description1: `The United Achievement Training Center is one of the leading centers specialized in providing training and development programs aimed at enhancing skills and building human capacities in various fields. The center was established with a clear vision aimed at empowering individuals and organizations to achieve their goals by providing innovative and tailored training solutions that meet the changing needs of the labor market.
The center offers a wide range of training programs that include administrative training, leadership development, technical skills, digital transformation, project management, in addition to specialized programs in human resources, marketing, and sales. The center designs its programs based on the latest global methodologies and best practices, ensuring maximum benefit for the trainees.`,
        title2: "Why Choose the United Achievement Training Center?",
        description2: `The United Achievement Training Center is distinguished by its ability to provide integrated training solutions that contribute to skill development and building the human competencies that organizations need to achieve success. We offer carefully designed training programs to meet the needs of individuals and organizations, focusing on practical and applicable aspects that ensure tangible results.

We believe that training is the essential foundation for building strong and competitive institutions, which is why we focus on delivering training programs that support professional excellence and enhance leadership capabilities. We work with top experts and specialists in various fields to ensure that our programs are of high quality and keep pace with the latest global developments.`,
    },
    {
        image: "/assets/images/layers/3.svg",
        title1: "United Achievement Human Resources – Partners in Building an Exceptional Workforce",
        description1: `United Achievement Human Resources is one of the leading companies in human resources management, providing integrated solutions that enhance the efficiency of organizations and their ability to achieve their strategic goals. The company was founded on strong scientific and practical foundations, combining the extensive expertise of a team of specialists in human resources with the latest global methodologies in managing and developing human cadres.
United Achievement Human Resources offers a wide range of services including recruitment, talent management, policy and procedure development, performance evaluation, payroll and benefits management, as well as specialized consulting in improving work environments and enhancing job satisfaction.`,
        title2: "Why Choose United Achievement Human Resources?",
        description2: `United Achievement Human Resources is distinguished by its unique ability to understand the complex challenges faced by organizations in human resource management and transform them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives.

We believe that the success of any organization depends on its ability to manage and develop its human resources effectively, which is why we focus on providing services that support talent discovery, skill development, and improving work environments. Our services are characterized by flexibility and adaptiveness to client needs, making us the ideal partner for institutions seeking excellence and leadership in their sectors.`,
    },
    {
        image: "/assets/images/layers/4.svg",
        title1: "Specialized in Attracting and Employing Competencies to Meet the Needs of Individuals and Various Sectors Efficiently and Professionally.",
        description1: `Achievement Human Resources is one of the leading companies in managing and developing human resources, providing integrated and innovative solutions that help organizations achieve their strategic goals by building a highly efficient workforce. The company was established on robust scientific and practical foundations, combining the extensive expertise of a team of specialists in human resources with the latest global methodologies in managing human cadres.
Achievement Human Resources offers a wide range of services including recruitment, talent management, performance evaluation, payroll and benefits management, and human resources consulting. The company works with various sectors including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs. Achievement Human Resources distinguishes itself by following a work methodology based on deep analysis and strategic thinking, enabling it to provide practical and effective recommendations that contribute to sustainable growth and enhance operational efficiency.`,
        title2: "Why Choose Achievement Human Resources?",
        description2: `Achievement Human Resources is distinguished by its unique ability to understand the complex challenges faced by organizations in human resource management and transform them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that human resources are the essential foundation for the success of any organization, which is why we focus on providing services that support talent discovery, skill development, and improving work environments. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
    {
        image: "/assets/images/layers/5.svg",
        title1: "Recruitment of Domestic Workers from a Variety of Countries with the Provision of the Best Qualified Cadres.",
        description1: `Achievement Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Achievement Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Achievement Recruitment?",
        description2: `Achievement Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
    {
        image: "/assets/images/layers/6.svg",
        title1: "6",
        description1: "Description for first title - 6.",
        title2: "Title Two - 6",
        description2: "Description for second title - 6.",
    },
    {
        image: "/assets/images/layers/7.svg",
        title1: "United Achievement Consulting Company - Innovative Financial Solutions and Professional Consultations to Support Companies in Achieving Their Goals Efficiently.",
        description1: `United Achievement Administrative Consulting Company is one of the leading companies in providing comprehensive consulting solutions that aim to enhance the efficiency of institutions and enable them to achieve their strategic goals. The company was established on strong scientific and practical foundations, bringing together the extensive expertise of the best professional consultants and the latest global methodologies in management and consulting.
United Achievement Administrative Consulting Company offers a wide range of services including strategic planning, change management, process improvement, organizational structure development, project management, in addition to providing specialized consultations in the areas of innovation and digital transformation.`,
        title2: "Why Choose United Achievement Administrative Consulting?",
        description2: `United Achievement Administrative Consulting is distinguished by its unique ability to understand the complex challenges faced by institutions and transform them into opportunities for growth and excellence. We provide our clients with real added value through innovative and tailored consulting solutions designed to enhance operational efficiency and enable organizations to achieve their strategic objectives.
We believe that the success of any institution depends on its ability to adapt to rapid changes in the business environment, which is why we focus on offering consultations that support digital transformation and innovation, in addition to process improvement and streamlining organizational structures. Our services are characterized by flexibility and the ability to adapt to clients' needs, making us the ideal partner for organizations seeking excellence and leadership in their sectors.`,
    },
    {
        image: "/assets/images/layers/1.svg",
        title1: "Etmad Finance Company - Offers Innovative and Comprehensive Financial Solutions to Meet the Needs of Individuals and Businesses.",
        description1: `Etmad Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Etmad Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Etmad Recruitment?",
        description2: `Etmad Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
    {
        image: "/assets/images/layers/2.svg",
        title1: "Etmad Information Technology Company - Innovative Technical Solutions for Workforce Management.",
        description1: `Etmad Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Etmad Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Etmad Information Technology Company?",
        description2: `Etmad Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
    {
        image: "/assets/images/layers/8.svg",
        title1: "Etmad Finance Company - Offers Innovative and Comprehensive Financial Solutions to Meet the Needs of Individuals and Businesses.",
        description1: `Etmad Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Etmad Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Etmad Recruitment?",
        description2: `Etmad Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
    {
        image: "/assets/images/layers/10.svg",
        title1: "Absher United Contracting Company - Professional Contract Services to Support Infrastructure and Commercial Supply in an Innovative Manner to Meet Sectoral Needs.",
        description1: `Etmad Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Etmad Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Absher United Contracting Company?",
        description2: `Etmad Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
    {
        image: "/assets/images/layers/11.svg",
        title1: "Recruitment of Domestic Workers from a Variety of Countries with the Provision of the Best Qualified Cadres.",
        description1: `Etmad Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Etmad Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Etmad Recruitment?",
        description2: `Etmad Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity satisfaction, positively impacting the overall performance of organization.`,
    },
    {
        image: "/assets/images/layers/12.svg",
        title1: "Veera Designs - Creative Design and Innovative Business Solutions.",
        description1: `Etmad Recruitment is one of the leading companies in providing qualified and trained human resources to meet the needs of the local and international labor market. The company was established on strong foundations of experience and efficiency, working to provide integrated recruitment solutions that meet the requirements of organizations in various sectors.

Etmad Recruitment offers its services according to the highest global standards, starting from searching for suitable competencies, through precise evaluation and selection processes, to providing qualified human resources that align with client needs. The company works with a wide range of sectors, including governmental, private, and non-profit sectors, enabling it to understand the unique challenges of each sector and provide tailored solutions that meet its clients' needs.`,
        title2: "Why Choose Veera Designs?",
        description2: `Etmad Recruitment is distinguished by its unique ability to understand the challenges faced by organizations in providing qualified human resources and transforming them into opportunities for growth and excellence. We provide our clients with real added value through integrated and tailored recruitment solutions designed to enhance workforce efficiency and enable organizations to achieve their strategic objectives. 
We believe that qualified human resources are the essential foundation for the success of any organization, which is why we focus on providing recruitment services that support talent discovery and supply the right competencies. We work with our clients to build effective policies and procedures that enhance employee productivity and satisfaction, positively impacting the overall performance of the organization.`,
    },
];
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setSmallScreenPopup(true);
        setItemsToShow(1); // Small screens
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3); // Medium screens
      } else {
        setItemsToShow(5); // Large screens
      }
    };

    updateItemsToShow(); // Set initial state
    window.addEventListener("resize", updateItemsToShow); // Listen for resizes

    return () => window.removeEventListener("resize", updateItemsToShow); // Cleanup
  }, []);
  const allItems = locale === "ar" ? allItemsAr : allItemsEn;
  // Dynamically slice items based on isExpanded state
  const items = isExpanded ? allItems : allItems.slice(0, itemsToShow);

  // Toggle Expansion
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Handle Click on Image to Open ThirdSection
  const handleImageClick = (item: any) => {
    if(item.title1 === "6"){
      setAboutUsOpen(true);
    }else{
      setSelectedData(item);
      setPopupOpen(true);
    }
  };


  return (
    <>
    {/* ✅ Large and Medium Screen Grid (Default View) */}
    <div className="main-container absolute bottom-[16px]  flex w-full xl:w-[1360px] flex-col gap-[9px] items-center mx-auto my-0">
      {/* Small Rounded Box (Toggles Expansion) */}
      <div
        className="w-[62px] h-[32px] shrink-0 bg-[#202125] rounded-[16px] flex items-center justify-center cursor-pointer"
        onClick={toggleExpand}
      >
        <img
          src="/assets/images/layers/arrow.svg"
          alt="Toggle Icon"
          className={isExpanded ? "w-[24px] h-[24px]" : "w-[24px] h-[24px] rotate-180"}
        />
      </div>

      {/* Animated Button Grid Container */}
      <motion.div
animate={{ height: isExpanded ? (isSmallScreenPopup ? "auto" : "278px") : "126px" }}
exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full xl:w-[1230px] py-[33px] px-[40px] flex-col gap-[24px] items-center shrink-0 rounded-[24px] relative bg-[#1e1e1e90] z-[1] sm:z-[5]"
      >
        <div className="flex w-full xl:w-[1150px] gap-[16px] justify-center items-start shrink-0 flex-wrap relative">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.span
                onClick={() => handleImageClick(item)}
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex w-full md:w-[217px] h-[60px] px-4 gap-2 justify-center items-center bg-[#3f3f3f] rounded-lg border-none transition hover:bg-[#555] focus:ring-2 focus:ring-white cursor-pointer"
              >
                <img src={item.image} alt={`Image ${index + 1}`} className="w-[153px] h-[43px]" />
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>



    {/* Pass Selected Data to ThirdSection */}
    {isPopupOpen && (
        <ThirdSection
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          data={selectedData}
        />
      )}
      {isAboutUs && (
              <Popup isOpen={isAboutUs} onClose={() => setAboutUsOpen(false)} />
      )}
  </>
  );
}

export default ButtonGrid;
