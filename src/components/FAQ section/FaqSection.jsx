import React, { useState } from 'react';
import './Faqstyle.css';
import arrow from '../../Assets/serviceArrow.png';
import plusButton from '../../Assets/plusButton.png'
import minus from '../../Assets/minusButton.png'
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to complete a web development project?',
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      question: 'Can you handle large-scale mobile app development projects?',
      answer: 'Yes, we have experience in handling large-scale projects with complex requirements.'
    },
    {
      question: 'Can you integrate third-party APIs into our mobile app?',
      answer: 'Absolutely! We specialize in integrating third-party APIs to enhance functionality.'
    },
    {
      question: 'How do you ensure cross-platform compatibility for mobile apps?',
      answer: 'We follow best practices to ensure your app works seamlessly across multiple platforms.'
    },
    {
      question: 'What is your approach to user experience (UX) design?',
      answer: 'We prioritize intuitive and user-friendly design to ensure a great user experience.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FaqMainSection">
      <div className="faqheading d-flex align-items-center justify-content-between">
        <h3 className="uppercase">Frequently Asked Questions</h3>
        <div className="d-flex align-items-center gap-2">
          <img src={arrow} alt="arrow" />
          <h3 className="uppercase">View All</h3>
        </div>
      </div>

      <div className="faqContactSection container-fluid">
        <div className="row gap-4">
         
          <div className="col-md-6 faqFirstSection">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faqItem ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faqQuestion  d-flex align-items-center justify-content-between">
                  <h5>{faq.question}</h5>
                  <span>{activeIndex === index ? <img src={minus} className='plusMinus' alt="" /> : <img src={plusButton} className='plusMinus' />}</span>
                </div>
                {activeIndex === index && (
                  <div className="faqAnswer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="col-md-4 faqSecondSection">
            <h4>Ask Your Question</h4>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control p-3 mt-3" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control p-3 mt-3" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Your Question</label>
                <textarea className="form-control mt-3" rows={5} placeholder="Enter Your Question Here ....."></textarea>
              </div>
              <button type="submit" className="btn sendMessageBtn">
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
