import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/job-interview9.jpg';
import './service.css';

const Service = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  } 

  return (
    <>
      <Header title="Our Service" image={HeaderImage}>
        We render quality and efficient service and automated Reference Checks.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          <p>
            Layer 3 references will assist you in negating that risk substantially. All of our references are conducted by video which are then sent to you for your review. Seeing the facial expressions of the reference provider, and hearing the tonality of their voice is vital in assessing what the person's thoughts are about your candidate. Also, the information is unedited. We do not summarize the information as most agencies will do. We believe it's important that you see the response unedited. We do not email questions to reference providers to be completed and sent back. That methodology provides no opportunity for probing or clarification on responses that may be unclear. Emailed responses also give no indication as to the tone of the response. It’s up to the reader of the reference information to surmise the level of strength behind the comments.
          </p>
          <p>
            Video recordings of the reference capture the full essence of the comments being offered about a prospective candidate. Also, Layer 3 references ask a wide range of questions on both technical proficiency and soft skill questions to understand the abilities of the individual at a much more complete three-dimensional level. Many third-party reference providers, as you may be aware, are asking 3 to 5 questions maximum. We ask 15 core questions as a minimum in addition to supplementary probe questions if necessary to ensure we understand the responses with precise clarity. Again, we do not edify responses. We believe edifying responses to “sanitize them somewhat” takes away from the authenticity of the information being provided. We provide a minimum of 2 references unless you require additional references. At the very least one of the references would be from a former direct superior.
          </p>
        </div>
      </section>
    </>
  );
};

export default Service;
