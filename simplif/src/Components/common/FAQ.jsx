import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { CiCircleChevDown, CiCircleChevUp } from"react-icons/ci";


const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How much does Simplif cost to use?',
      answer: 'Simplif is a completely free platform for both brand and influencers to use. there are no monthly subscription plans,contracts, or hidden fees. To maintain and enhance our platform, we apply a small service fee at the checkout aimedat improving your overall experience. ',
      open: false
    },
    {
      question: 'Am I protected when placing an order?',
      answer: "Simplif's protection ensures that both parties are safeguarded while using the platform. When you place an order, the payment will be held until it has been successfully completed and you are fully satisfied. Our resolution center, accessiblewithin the order page, enables you to open a revision request for amendments tothe content if needed.",
      open: false
    },
    {
      question: 'Do I have commercial rights to the delivery?',
      answer: "Unless clearly stated otherwise in the package description, when the order is delivered, you are granted all the intellectual property rights. This includes, but is not limited to, copyrights for the work delivered by the influencer. You have all rights to use it across your social channels and ads.",
      open: false
    },
    {
      question: "How do I contact the influencer?",
      answer: "a chat box will immediately appear on the order page after placing an order, allowing you to communicate effectively and send messages directly to the influencer's order inbox.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <Box sx={{ width:"60%", m:'auto',  display:'flex', alignItems:'start', flexDirection:'column', mb:12 }}>
        <Typography variant="h4" color="initial" sx={{ width:'100%', fontWeight: 'bold' ,textAlign:'center', my:2 }}>Frequently asked questions</Typography>
      {faqs.map((faq, index) => (
        <Box key={index} sx={{ width:"100%",background:'#EDEDED', p:2, mt:2 }}>
          <Box onClick={() => toggleFAQ(index)} style={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {faq.question} {faq.open ? <CiCircleChevUp size={30}/> : <CiCircleChevDown size={30}/>}
          </Box>
          <Box style={{ display: faq.open ? 'block' : 'none', marginTop: '10px', fontSize:"14px" }}>{faq.answer}</Box>
          <hr />
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
