import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";
import styled from "styled-components";

const StyledDiv = styled.div`
  .body {
    width: 90%;
    margin: auto;
    text-align: justify;
  }

  .heading {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="AstroSwarg - Pricing Policy">
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Pricing Policy</h1>
          <h3>Price Range</h3>
          <p>
            At astroswarg.com, we have customised pricing according to the
            services rendered by us. The details are provided to you beforehand
            according to the effort, efficiency and the output of the service.
            Typically, the range of transactions on our Android and iOS
            applications varies from INR 100 to 2000 per user per session.
          </p>
          <h3>Schedule of payment</h3>
          <p>
            Some of our services can be utilised for fixed durations. In such
            cases, it is clearly mentioned within the description of these
            services. The period of usage in these cases vary from 1 month to 6
            months.
          </p>
          <h3>Price Matching</h3>
          <p>
            At astroswarg.com we are committed to offering you the best possible
            prices. We will be glad to meet our competitor's pricing if you ever
            find a service that we offer, in the similar interest and providing
            same professionalism and features, available from a similar service
            provider.
          </p>
          <p>
            Our prices do not vary according to the market needs, competitor
            pricing etc.
          </p>
          <h3>Sale Adjustment</h3>
          <p>
            If a service that you have purchased is reduced in price within one
            weeks of your booking date, we will not be able to adjust the sale
            price for you. Please note that we cannot make sale adjustment. If
            you have booked a slot for a date, generally, we cannot reschedule
            the slot to another date. This will result in the cancellation of
            the booking/order(s). Please refer cancellation policies for more
            details.
          </p>
          <h3>Pricing Errors</h3>
          <p>
            We work hard to ensure the accuracy of pricing. Despite our efforts,
            pricing errors may still occur. If a service’s price is higher than
            the price displayed, we will cancel your booking and notify you of
            the cancellation.
          </p>
          <p>
            Our service is offered for sale by AstroSwarg{" "}
            {/*Services Private
  Limited (Formerly Codeyeti Software Solutions Pvt. Ltd.)*/}{" "}
            for your personal needs. Therefore, we reserve the right to refuse
            to sell to any person whom we believe may be misusing the service.
          </p>
          <p>Please feel free to reach us at contact@astroswarg.com</p>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Pricing;
