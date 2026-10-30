import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
}





// // ==========================================================
// // الجزء 1: في المكوّن اللي فيه الزر (مثلًا DesignPartner.jsx)
// // ==========================================================
// export default function DesignPartner() {
//   // ✅ ضيف الدالة هنا، جوّه المكوّن وقبل return
//   const goToFaq = () => {
//     document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section>
//       {/* ======================================================
//           الجزء 2: الزر لازم يكون button وفيه onClick
//           ====================================================== */}
//       <button type="button" onClick={goToFaq}>
//         اقرأ الأسئلة الشائعة
//       </button>
//     </section>
//   );
// }





// // ==========================================================
// // الجزء 3: في المكوّن اللي عايز تنزله (FAQ.jsx)
// // ✅ لازم السكشن يكون عليه id بنفس الاسم اللي في الدالة
// // ==========================================================
// <section id="faq" className="scroll-mt-24 ...">
//   {/* محتوى الأسئلة */}
// </section>





// تحتاج 3 حاجات بس
// دالة scrollIntoView جوّه المكوّن.
// زر <button onClick={...}> (مش <a href="#..."> عشان ما يظهرش #).
// id على السكشن الهدف بنفس الاسم بالظبط.

// الزر والسكشن لازم يكونوا في نفس الصفحة.