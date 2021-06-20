import React from 'react';
import styled from 'styled-components';

const AboutCardWrapper = styled.div`
  background: ${props => (props.color ? `${props.color}` : null)};
`;

const AboutCard = ({ data }) => {
  return (
    <div
      className="col-lg-6 col-md-6"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <AboutCardWrapper className="card-item" color={data.color}>
        <div className="card-content">
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </div>
      </AboutCardWrapper>
    </div>
  );
};

export default AboutCard;
