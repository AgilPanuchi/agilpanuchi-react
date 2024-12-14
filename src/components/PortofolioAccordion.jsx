// AccordionComponent.jsx
import React from "react";
import { Accordion } from "react-bootstrap";
import { AccordionData } from "../data/index";

const PortofolioAccordion = () => {
  return (
    <Accordion>
      {AccordionData.map((item, id) => (
        <React.Fragment key={id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Latar Belakang Proyek</Accordion.Header>
            <Accordion.Body className="accordion-body-custom">{item.Latar}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tujuan Proyek</Accordion.Header>
            <Accordion.Body className="accordion-body-custom">{item.tujuan}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Fitur Utama</Accordion.Header>
            <Accordion.Body className="accordion-body-custom">{item.fitur}</Accordion.Body>
          </Accordion.Item>
        </React.Fragment>
      ))}
    </Accordion>
  );
};

export default PortofolioAccordion;
