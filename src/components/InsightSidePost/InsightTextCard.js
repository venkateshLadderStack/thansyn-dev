import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import CategoryListShapdot from '../../assets/img/category listing/shapdot.png';

const InsightTextCard = () => {
  return (
    <div
      className="insight-card card bg-Dark mt-40"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <div className="card-body padding-42">
        <img src={CategoryListShapdot} alt="" />
        <h2>Insight</h2>
        <h4>
          Future of technology:
          <br />
          Prediction 2021
        </h4>
        <div className="anylust-btn text-center mt_40">
          <a href="#" className="btn bule-graa text-whait btn-lg radius-0">
            READ INSIGHT
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsightTextCard;
