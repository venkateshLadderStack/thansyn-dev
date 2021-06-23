import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import InsightsFeaturedSidePosts from './InsightFeatured';
import InsightsLatestSidePosts from './InsightLatest';

const InsightTabs = () => {
  const [tab, setTab] = useState('latest');

  return (
    <>
      <nav className="catagory-tab">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className={`nav-item nav-link ${tab === 'latest' && 'active'}`}
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => setTab('latest')}
          >
            LATEST
          </a>
          <a
            className={`nav-item nav-link ${tab === 'featured' && 'active'}`}
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            onClick={() => setTab('featured')}
          >
            FEATURED
          </a>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${tab === 'latest' && 'show active'}`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <InsightsLatestSidePosts />
        </div>
        <div
          className={`tab-pane fade ${tab === 'featured' && 'show active'}`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <InsightsFeaturedSidePosts />
        </div>
      </div>
    </>
  );
};

export default InsightTabs;
