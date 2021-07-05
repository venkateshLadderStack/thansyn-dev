import { graphql, Link } from 'gatsby';
import React from 'react';
import TitleCard from '../components/TitleCard';
import Layout from '../components/layout';
import ConnectWithAnalyst from '../components/ConnectWithAnalyst';
import Seo from '../components/seo';

const insights = ({ data }) => {
  const items = data.wpPage.insightPageFields.addInsightsCategories;
  return (
    <Layout>
      <Seo title="Insights" />
      <TitleCard>Insights</TitleCard>
      <div className="row">
        {items.map((item, index) => (
          <div
            class="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="what-new-item">
              <div class="whats-top">
                <Link to={`/categories/${item.enterSlug}`}>
                  <img src={item.insightCategoryImage?.sourceUrl} alt="" />
                </Link>
              </div>
              <div
                class="whats-bottom"
                style={{
                  backgroundColor: 'black',
                }}
              >
                <div class="event-info">
                  <div class="event-txt">
                    <Link to={`/categories/${item.enterSlug}`}>
                      <h3 style={{ color: 'white', fontWeight: '600' }}>
                        {item.insightCategoryName}
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ConnectWithAnalyst />
    </Layout>
  );
};

export default insights;

export const query = graphql`
  query Insights {
    wpPage(id: { eq: "cG9zdDo0MTc=" }) {
      insightPageFields {
        addInsightsCategories {
          insightCategoryName
          insightCategoryImage {
            sourceUrl
          }
          enterSlug
        }
      }
    }
  }
`;
