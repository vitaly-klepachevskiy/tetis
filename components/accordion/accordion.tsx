'use client';

import { useRef, useState } from 'react';
import './accordion.scss';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <div className="question" onClick={toggleAccordion}>
        <span>{question}</span>
        <span className="icon">{isOpen ? '×' : '+'}</span>
      </div>
      <div
        ref={contentRef}
        className="answer"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
