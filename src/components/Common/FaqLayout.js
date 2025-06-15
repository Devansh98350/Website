// import React, { useState } from "react";

// const FAQLayout = ({ faqData }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const styles = {
//     sectionStyle: {
//       padding: "20px",
//       // paddingTop: "calc(20px + 50px)",
//       backgroundColor: "#ffffff",
//       fontFamily: "Segoe UI",
//       lineHeight: "1",
//       textAlign: "justify",
//       overflowX: "hidden",
//     },
//     faqContainer: {
//       marginTop: "40px",
//       maxWidth: "95%",
//       margin: "0 auto",
//       padding: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     },
//     faqHeading: {
//       color: "rgb(0,0,255)",
//       fontSize: "32px",
//       fontWeight: "700",
//       textAlign: "center",
//       lineHeight: "48px",
//     },
//     faq: {
//       marginBottom: "2.5px",
//       borderBottom: "1px solid #ccc",
//       paddingBottom: "2.5px",
//     },
//     question: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       cursor: "pointer",
//       margin: 0,
//     },
//     questionText: {
//       fontSize: "16px",
//       lineHeight: "1",
//       fontWeight: "700",
//     },
//     icon: {
//       fontSize: "24px",
//       color: "#333",
//       transition: "transform 0.2s, color 0.2s",
//     },
//     iconActive: {
//       transform: "rotate(45deg)",
//       color: "#007bff",
//     },
//     answer: {
//       display: "none",
//       marginTop: "10px",
//       //   color: "#666",
//       fontSize: "16px",
//       fontFamily: "Segoe UI",
//     },
//     answerVisible: {
//       display: "block",
//     },
//     pstyle: {
//       paddingTop: "0",
//       marginTop: "0%",
//       fontSize: "16px",
//       fontFamily: "Segoe UI",
//     },
//   };

//   return (
//     <section style={styles.sectionStyle}>
//       <div style={styles.faqContainer}>
//         <h2 style={styles.faqHeading}>Frequently Asked Questions</h2>
//         {faqData.map((faqItem, index) => (
//           <div style={styles.faq} key={index}>
//             <div style={styles.question} onClick={() => toggleFAQ(index)}>
//               <h3 style={styles.questionText}>{faqItem.title}</h3>
//               <span
//                 style={{
//                   ...styles.icon,
//                   ...(activeIndex === index ? styles.iconActive : {}),
//                 }}
//               >
//                 +
//               </span>
//             </div>
//             <div
//               style={{
//                 ...styles.answer,
//                 ...(activeIndex === index ? styles.answerVisible : {}),
//               }}
//             >
//               <p style={styles.pstyle}>{faqItem.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQLayout;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const FAQLayout = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const Heading = styled.h2`
    color: red;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    line-height: 48px;

    @media (max-width: 600px) {
      font-size: 24px;
      line-height: 36px;
    }
  `;
  const styles = {
    sectionStyle: {
      padding: "20px",
      backgroundColor: "#ffffff",
      fontFamily: "Segoe UI",
      lineHeight: "1",
      textAlign: "justify",
      overflowX: "hidden",
    },
    faqContainer: {
      marginTop: "40px",
      maxWidth: "98%",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    faqHeading: {
      color: "red",
      fontSize: "32px",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "48px",
    },
    faq: {
      marginBottom: "10px",
      borderBottom: "1px solid #ccc",
      paddingBottom: "10px",
    },
    question: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
    questionText: {
      fontSize: "16px",
      fontWeight: "700",
    },
    icon: {
      fontSize: "24px",
      color: "#333",
      transition: "transform 0.2s, color 0.2s",
    },
    iconActive: {
      transform: "rotate(45deg)",
      color: "#007bff",
    },
    pstyle: {
      marginTop: "10px",
      fontSize: "16px",
      fontFamily: "Segoe UI",
      lineHeight: 1.5,
    },
  };

  return (
    <section style={styles.sectionStyle}>
      <div style={styles.faqContainer}>
        <Heading>Frequently Asked Questions</Heading>
        {faqData.map((faqItem, index) => (
          <div style={styles.faq} key={index}>
            <div style={styles.question} onClick={() => toggleFAQ(index)}>
              <h3 style={styles.questionText}>{faqItem.title}</h3>
              <span
                style={{
                  ...styles.icon,
                  ...(activeIndex === index ? styles.iconActive : {}),
                }}
              >
                +
              </span>
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={styles.pstyle}>{faqItem.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQLayout;
