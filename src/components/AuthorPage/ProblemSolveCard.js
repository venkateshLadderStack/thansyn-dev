import React from 'react';
import { Link } from 'gatsby';

const ProblemSolveCard = ({ problems, Phone, Approved }) => {
  return (
    <div
      className="col-lg-6 col-md-12 mb-lg-2 mb-4 grid-item"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="analust-content analyst-box mt-0 mb-4">
        <h4 className="item-titel">Top {problems?.length} problems I solve</h4>
        {problems?.map((item, index) => (
          <div className="anylust-problem d-flex" key={index}>
            <div className="anylus-star">
              <img src={Approved} alt="" />
            </div>
            <div className="anylus-problem-content">
              <h4>Problem {index + 1}</h4>
              <p>{item?.problemISolve}</p>
            </div>
          </div>
        ))}

        <p className="sub-title">Connect and explore opportunities</p>

        <div className="anylust-btn text-center mt_40">
          <Link to="/contact-us" className="btn bg-succes btn-lg radius-0">
            <img className="mr-2" src={Phone} alt="" />
            SCHEDULE A CALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolveCard;
