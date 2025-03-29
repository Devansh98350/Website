import React, { useEffect } from "react";
import Layout from "../../Layout/Layout.js";
import styled from "styled-components";
import Breadcrumbs from "../../Breadcrumb.js";

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
const UnorderedList = styled.ul`
  //   list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Tnc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="AstroSwarg - Terms and Conditions"
      description=""
      keywords=""
    >
      <Breadcrumbs />
      <StyledDiv>
        <div className="body">
          <h1 className="heading">Terms and Conditions</h1>
          <p>
            These terms and conditions of Use (hereinafter referred as “Terms of
            Usage”) describe and govern the User’s use of the content and
            services offered by AstroSwarg{" "}
            {/*Services Private Limited (Formerly
            Codeyeti Software Solutions Pvt. Ltd.)*/}{" "}
            through www.astroswarg.com (hereinafter referred as “We”
            “AstroSwarg” “us” “our” “astroswarg application” “Website”).
          </p>
          <h2>Updation</h2>
          <p>
            The Website may update/amend/modify these Terms of Usage from time
            to time. The User is responsible to check the Terms of Usage
            periodically to remain in compliance with these terms.
          </p>
          <h2>User Consent</h2>
          <p>
            By accessing the Website and using it, you (“Member”, “You”, “Your”)
            indicate that you understand the terms and unconditionally &
            expressly consent to the Terms of Usage of this Website. If you do
            not agree with the Terms of Usage, please do not click on the “I
            AGREE” button. The User is advised to read the Terms of Usage
            carefully before using or registering on the Website or accessing
            any material, information or services through the Website. Your use
            and continued usage of the Website (irrespective of the amendments
            made from time to time) shall signify your acceptance of the terms
            of usage and your agreement to be legally bound by the same.
          </p>
          <h2>General Description</h2>
          <p>
            The Website is an internet-based portal having its existence on
            World Wide Web, Application and other electronic medium and provides
            astrological content, reports, data, telephone, video and email
            consultations (hereinafter referred as “Content”). The Website is
            offering “Free Services” and “Paid Services” (Collectively referred
            as “Services”). Free Services are easily accessible without becoming
            a member however for accessing the personalised astrological
            services and/or receive additional Content and get access to Paid
            Services, You are required to register as a member on the portal. By
            registering for Paid Services, a Member agrees to:
          </p>
          <UnorderedList>
            <ListItem>
              To provide current, complete, and accurate information about
              himself as prompted to do so by the Website.
            </ListItem>
            <ListItem>
              To maintain and update the above information as required and
              submitted by you with the view to maintain the accuracy of the
              information being current and complete.
            </ListItem>
          </UnorderedList>
          <h2>Registration And Eligibility</h2>
          <UnorderedList>
            <ListItem>
              By using this website, you agree that you are over the age of 18
              years and are allowed to enter into a legally binding and
              enforceable contract under Indian Contract Act, 1872. The Website
              would not be held responsible for any misuse that may occur by
              virtue of any person including a minor using the services provided
              through the Website. You are however allowed to ask questions
              related to minors in your family as per the terms and conditions
              outlined herewith in this policy.
            </ListItem>
            <ListItem>
              For the User to avail the services, the User will be directed to
              Register as a Member on the Website whereby You (User) agree to
              provide update, current and accurate information while filling up
              the sign-in form. All information that you fill and provide to the
              Website and all updates thereto are referred to in these Terms of
              Usage as “Registration Data“.
            </ListItem>
            <ListItem>
              An account could be created by you through the Website ID (Your
              Phone Number) and password (OTP) or other log - in ID and password
              which can include a facebook, gmail or any other valid email ID.
              The User while creating an account hereby represents and warrants
              that all the information provided by the User is current, accurate
              and complete and that the User will maintain the accuracy and keep
              the information updated from time to time. Use of another User’s
              account information for availing the services is expressly
              prohibited. If in case it is found that the information so
              supplied on the Website is inaccurate, incomplete, untrue and not
              current, the Website has the right to suspend or terminate the
              User’s account and restrict/refuse the use of the Website by such
              User in future.
            </ListItem>
            <ListItem>
              The right to use this Website is personal to the User and is not
              transferable to any other person or entity. The User would be
              responsible for protecting the confidentiality of User’s passwords
              and other information required for the purposes of registration.
              The User would be fully responsible for all the activities that
              occur under the User’s account with the Website. The Website
              cannot and will not be liable for any loss or damage arising from
              the User’s failure to maintain secrecy and confidentiality. The
              User shall notify the Website immediately if they become aware of
              any unauthorized use of their Account(s) or breach of any
              security. The User must log out from its account at the end of the
              session.
            </ListItem>
            <ListItem>
              The User while availing any service shall be informed whether the
              service so rendered is personal to the Website or is available
              from a Third party. The Website shall have no control or
              monitoring on the information disseminated to any third party via
              the Website.
            </ListItem>
            <ListItem>
              The User agrees, understands and confirms that his/ her personal
              data including without limitation to details relating to debit
              card/ credit card transmitted over the Internet may be susceptible
              to misuse, hacking, theft and/ or fraud and that the Website or
              the Payment Service Provider(s) have no control over such matters.
            </ListItem>
            <ListItem>
              The Website does not permit the use of the Services by any User
              under the following conditions:
              <UnorderedList>
                <ListItem>
                  If the User is a resident of any jurisdiction that may
                  prohibit the use of the Services rendered by the Website.
                </ListItem>
                <ListItem>
                  If the User is a resident of any State/Country that prohibits
                  by way of law, regulation, treaty or administrative act for
                  entering into trade relations or/and due to any religious
                  practices.
                </ListItem>
                <ListItem>
                  If the User has created multiple accounts using various mobile
                  numbers. The User may not have more than one active account
                  with the Website.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <h2>Feature “Call With Astrologer”</h2>
          <p>
            The Website is providing certain service which is available through
            the medium of telecommunication with the Astrologer listed and
            enrolled with the Website. By agreeing to the present Terms of
            Usage, you are also giving your unconditional consent to the Website
            to arrange a call with you on your mobile number even though your
            number is on DND service provided by your mobile service provider.
          </p>
          <h2>First Free Chat/Call</h2>
          <p>
            AstroSwarg offers the first free chat or call, lasting 3 to 5
            minutes (varies among users), to each unique user. A unique user, as
            defined by AstroSwarg, is an individual whose mobile number and
            device ID have never been registered on AstroSwarg before.
          </p>
          <h2>Website Content</h2>
          <UnorderedList>
            <ListItem>
              The Website and any individual Websites which may be available
              through external hyperlinks with the Website are private property.
            </ListItem>
            <ListItem>
              All interaction on this Website inclusive of the guidance and
              advice received directly from the Licensed Provider must comply
              with these Terms of Usage.
            </ListItem>
            <ListItem>
              The User shall not post or transmit through this Website any
              material which violates or infringes in any way upon the rights of
              others, or any material which is unlawful, abusive, defamatory,
              invasive of privacy, vulgar, obscene, profane or otherwise
              objectionable, which encourages conduct that would constitute a
              criminal offence, give rise to civil liability or otherwise
              violate any law.
            </ListItem>
            <ListItem>
              The Website shall have a right to suspend or terminate access by
              such User or terminate the User’s registration and such User shall
              not gain access to the Website.
            </ListItem>
            <ListItem>
              The Website reserves the right to terminate the access or to
              change or discontinue any aspect or feature of the Website
              including, but not limited to, content, graphics, deals, offers,
              settings, etc.
            </ListItem>
            <ListItem>
              Any information other the guidance and advice, received directly
              from the Third-Party Service Provider, the educational, graphics,
              research sources and other incidental information on the Site, the
              content, should not be considered as medical advice.
            </ListItem>
            <ListItem>
              The Website does not take guarantee regarding the medical advice,
              if provided, by the third-party service provider inclusive of
              registered astrologers with the site. The User should always talk
              to an appropriately qualified health care professional for
              diagnosis and treatment including information regarding which
              medications or treatment may be appropriate for the User. None of
              the Content represents or warrants that any particular medication
              or treatment is safe, appropriate, or effective for you.
              AstroSwarg does not endorse any specific tests, medications,
              products or procedures.
            </ListItem>
            <ListItem>
              The Website does not take guarantee of any untoward incident that
              may happen with the User after seeking the Service. The Website or
              the Service Provider providing the advice is not liable and does
              not guarantee any results as expected by the User and accessing
              the Website in such scenario is purely at the risk of the User.
            </ListItem>
            <ListItem>
              By using the Site, Application or Services, User hereby agrees
              that any legal remedy or liability that you seek to obtain for
              actions or omissions of other Members inclusive of the service
              provider registered with the Website or other third parties linked
              with the Website, shall be limited to claim against such
              particular party who may have caused any harm. You agree not to
              attempt to impose liability on or seek any legal remedy from the
              Website with respect to such actions or omissions.
            </ListItem>
          </UnorderedList>
          <h2>User Account Access</h2>
          <p>
            The Website shall have access to the account and the information
            created by the User for ensuring and maintaining the high-quality
            services provided by the Website and for addressing the need of the
            customer in the most effective manner. User hereby consents for the
            unconditional access of the account by the Website, its employees,
            agents and other appointed person in such regard. For the purpose of
            addressing the complaints (if any received) and any suspected abuse
            reported, the Website shall investigate on case-to-case basis from
            the records available. The User is directed to read the terms
            provided in the Privacy Policy as regards such records.
          </p>
          <h2>Privacy Policy</h2>
          <p>
            The User hereby consents, expresses and agrees that the User has
            read and fully understand the Privacy Policy of the Website. The
            User further consents that the terms and contents of such Privacy
            policy is acceptable to the User inclusive of any
            update/alteration/change made and duly displayed on the Website
          </p>
          <h2>Breach And Termination</h2>
          <UnorderedList>
            <ListItem>
              The Website may, in whole or in part, without informing the User,
              modify, discontinue, change or alter the services ordered or the
              Account of the User registered with the Website. The Website may
              or may not issue notice or provide any reason for such action
              taken by the Website.
            </ListItem>
            <ListItem>
              Violation of any conditions mentioned in this Terms of Usage shall
              lead to immediate cancellation of the Registration of the User, if
              registered with the Website. The Website reserves right to
              terminate and initiate action immediately, if:
              <UnorderedList>
                <ListItem>
                  The Website is not able to verify and authenticate the
                  Registration data or any other relevant information provided
                  by the User.
                </ListItem>
                <ListItem>
                  The Website believes that the actions of the User may cause
                  legal liability for the Website, other Users or any service
                  provider linked with the Website.
                </ListItem>
                <ListItem>
                  The Website believes that the User has provided the Website
                  with false and misleading Registration Data or there is
                  interference with the other Users or the administration of the
                  services, or have violated the privacy policy as listed by the
                  Website.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              For the Service Provider inclusive of the Astrologer, You
              understand and agree that your relationship with the Website is
              limited to being a member and You act exclusively on your own
              behalf and for your own benefit. The Website may terminate and
              de-activate the Profile of such service provider for any violation
              of the present terms of usage and the Service Terms and Conditions
              agreed upon between the parties while registration of the data by
              such Service Provider.
            </ListItem>
          </UnorderedList>
          <h2>Delivery, Cancellation And Refund</h2>
          <UnorderedList>
            <ListItem>
              No refund shall be processed on the order of any reports under any
              circumstances if the order has reached the “processing” (Assigned
              to an Astrologer) stage. The risk and liability of placing order
              in a haste and careless manner totally lies with the User and the
              Website is not responsible for any refund once the processing
              stage has started.
            </ListItem>
            <ListItem>
              No refund shall be processed once the Order has been placed and
              executed. However, if the User intends to cancel a successfully
              placed order before execution, the User is required to contact the
              customer care team within 1 (one) hour of making the payment,
              whereafter it is totally at the discretion of the Website whether
              to issue refund.
            </ListItem>
            <ListItem>
              Any technical delay or glitch reported in the Website during the
              processing of the request which includes generating reports by the
              service provider i.e. Astrologer shall not be eligible for
              claiming refund. The User agrees that the timelines are
              approximate and all essentials steps would be taken to adhere to
              the timelines as displayed.
            </ListItem>
            <ListItem>
              No refund shall be processed for the reason that in-correct
              information or data has been provided by You. The User agrees to
              be careful while providing any information to the Website and must
              re-check the information filled before clicking on “Submit”. The
              User can request for change in the in-correct information or data
              entered provided, the request for such change has been made with
              the customer care within 1 (one hour) of execution of the service
              rendered by the service provider.
            </ListItem>
            <ListItem>
              No refund shall be processed for return of any damaged product.
              The User undertakes and agrees that by ordering any product as
              displayed on the Website, the Registered User shall be fully
              responsible for any damaged caused to the product, post its
              delivery. For orders made via “Cash on Delivery” method of
              payment, the User shall be charged for the cost of the product as
              displayed by the Website and the shipping/custom/courier charges
              as applicable, if the product is returned.
            </ListItem>
            <ListItem>
              Refund on pro-rata basis may be considered for any delay in the
              activation of the subscription services and any damage that may be
              caused to the product while in transit shall be dealt by the
              Website and its agencies.
            </ListItem>
            <ListItem>
              You agree that the display picture for the products listed for
              purchase by the User are for reference purpose only and the
              Website will try to deliver the product ordered in an as-is
              condition as displayed on the Website. The User is advised to
              exercise discretion in such case and no refund shall be issued on
              such grounds.
            </ListItem>
            <ListItem>
              The services offered and the products sold are strictly not meant
              to replace any philosophical, emotional or medical treatment. The
              Website holds no responsibility or liability about the reality or
              reliability of the astrological effects on the human physiology,
              by the gems represented and sold on the Website. The placing of
              order for buying such products or taking the services is solely on
              the discretion and will of the User and the Website does not have
              any responsibility upon the products sold. The User is advised to
              exercise discretion in such case and no refund shall be issued on
              such grounds.
            </ListItem>
            <ListItem>
              No refund shall be processed for providing a wrong contact number
              for the purpose of availing the “Call with Astrologer” feature.
              The User once opted for this feature is advised to keep the
              Contact Number in full coverage area and must answer the call when
              received. No refund shall be processed for any call which gets
              connected.
            </ListItem>
            <ListItem>
              The refunds, if any, shall be processed after deduction of the
              transaction charges levied by the Bank and/or the Payment Gateway,
              to & fro cost of the shipping and/or courier charges (With regard
              to purchase of a product listed on the Website), customs duty (if
              levied) and/or any other charges that may have been incurred by
              the Website during processing and/or delivering the service, as
              applicable.
            </ListItem>
            <ListItem>
              In case the Website or Payment gateway’s webpage, that is linked
              to the Website, is experiencing any server related issues like
              ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall,
              before initiating the second payment, check whether his/her Bank
              Account has been debited or not and accordingly resort to one of
              the following options:
              <UnorderedList>
                <ListItem>
                  In case the Bank Account appears to be debited, ensure that
                  you do not make the payment twice and immediately thereafter
                  contact the Website via customer care to confirm payment.
                </ListItem>
                <ListItem>
                  In case the Bank Account is not debited, the User may initiate
                  a fresh transaction to make payment.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              However, refund for multiple payment, if any, even after the above
              precaution against the same order shall be refunded in full
              without deduction of the transaction charges as mentioned above.
              The Website shall only retain the cost of one single order as
              intended to be placed by the User.
            </ListItem>
            <ListItem>
              If there are orders that the Website is unable to accept and must
              cancel, the Website at its sole discretion, reserves the right to
              refuse or cancel any order for any reason whatsoever. Some
              situations may result in the order being cancelled and include,
              without limitation, non-availability of the service, inaccuracy,
              error in pricing information or other problems as identified. If
              the User’s order is cancelled after charges being paid against the
              said service, the said amount paid for booking shall be refunded.
            </ListItem>
            <ListItem>
              By requesting for refund, user is agreeing to provide AstroSwarg’s
              quality audit team permission to access the chat/call recording of
              the consultation for which refund has been requested, in order to
              determine whether the case is eligible for refund or not.
            </ListItem>
            <ListItem>
              AstroSwarg quality audit team, at best effort basis, provide
              partial/full refunds to the users in their AstroSwarg wallet
              wherever consultant’s quality parameters are not satisfied. It can
              take upto 72 hours to analyse and refund the amount back to
              AstroSwarg wallet
              <br />
              <strong>Note:</strong> All refunds will be credited to user’s
              AstroSwarg wallet.
              <br /> Refunds will only be considered in the following cases:
              <UnorderedList>
                <ListItem>
                  Network issue due to which chat/call was affected in between
                  or there was a weak signal, background noise, inaudible
                  consultant etc during the video/normal call sessions
                </ListItem>
                <ListItem>
                  Consultant is unable to respond fluently in the language
                  mentioned in their profile
                </ListItem>
                <ListItem>
                  Consultant is taking inordinately long enough to respond back
                  to the user
                </ListItem>
                <ListItem>
                  Consultant has responded back in irrelevant or inappropriate
                  response to the query asked by the user
                </ListItem>
              </UnorderedList>
              <strong>Please Note:</strong> No refund will be given in case of
              lack of accuracy of any consultation. AstroSwarg takes no
              responsibility for factual accuracy on any consultations.
            </ListItem>
            <ListItem>
              No physical product is shipped outside India. Astro Shop products
              which require physical delivery are only deliverable within India.
            </ListItem>
          </UnorderedList>
          <h2>USER OBLIGATION</h2>
          <p>
            The User (inclusive of the astrologer and the Member Customer) under
            an obligation not to violate the privacy policy, terms and
            conditions and any other terms as defined on the Website. The User
            represents that he is an individual and not a corporation or other
            legal business entity. The rights to use the Website’s services is
            personal to the User.The User shall while using the Website and
            engaged in any form of communication on any of the forums inclusive
            of the products listed on the Website shall not violate the terms
            and conditions which are inclusive of:-
          </p>
          <UnorderedList>
            <ListItem>
              The User shall not Post, publish or transmit any messages that are
              false, misleading, defamatory, harmful, threatening, abusive,
              harassing, defamatory, invades another's privacy, offensive,
              promotes racism, hatred or harm against any individual or group or
              religion or caste, infringes another's rights including any
              intellectual property rights or copyright or trademark, violates
              or encourages any conduct that would violate any applicable law or
              regulation or would give rise to civil liability.
            </ListItem>
            <ListItem>
              The User shall not upload or post or otherwise make available any
              content that User do not have a right to make available, under any
              law or under contractual or fiduciary relationships.
            </ListItem>
            <ListItem>
              The User shall not upload or post or otherwise make available any
              content that infringes any patent, trademark, trade secret,
              copyright or other proprietary rights of any party. The User may,
              however, post excerpts of copyrighted material so long as they
              adhere to Fair Use guidelines.
            </ListItem>
            <ListItem>
              The User shall not collect screen names and email addresses of
              members who are registered on the Website for purposes of
              advertisement, solicitation or spam.
            </ListItem>
            <ListItem>
              The User shall not send unsolicited email, junk mail, spam, or
              chain letters, or promotions or advertisements for products or
              services.
            </ListItem>
            <ListItem>
              The User shall not upload or distribute files that contain
              viruses, corrupted files, or any other similar software or
              programs that may damage the operation of the Website or another’s
              computer.
            </ListItem>
            <ListItem>
              The User shall not engage in any activity that interferes with or
              disrupts access to the Website.
            </ListItem>
            <ListItem>
              The User shall not attempt to gain unauthorized access to any
              portion or feature of the Website, any other systems or networks
              connected to the Website, to any of the services offered on or
              through the Website, by hacking, password mining or any other
              illegitimate means.
            </ListItem>
            <ListItem>
              The User shall not violate any applicable laws or regulations for
              the time being in force within or outside India. The use and
              continuous use of the Website is subject to but not limited to
              using the services for personal use.
            </ListItem>
            <ListItem>
              The User shall not resell or make any commercial use of the
              Services without the express written consent from the Website.
            </ListItem>
            <ListItem>
              The User shall not violate these Terms of Usage including but not
              limited to any applicable Additional terms of the Website
              contained herein or elsewhere.
            </ListItem>
            <ListItem>
              The User shall not Reverse engineer, modify, copy, distribute,
              transmit, display, perform, reproduce, publish, license, create
              derivative works from, transfer, or sell any information or
              software obtained from the Website.
            </ListItem>
            <ListItem>
              The User by becoming a Registered member of the Website agrees to
              the following situations, which list is not exhaustive and may
              include services incidental to the below mentioned:-
              <UnorderedList>
                <ListItem>
                  The user agrees to receive communication through the
                  app/website through email/SMS or any other communication
                  medium including though Whatsapp Business Messages in regards
                  to the usage of the app/website.
                </ListItem>
                <ListItem>
                  The User agrees not to transmit via the Website any unlawful,
                  harassing, libelous, abusive, threatening, harmful, vulgar,
                  obscene or otherwise objectionable material of any kind or
                  nature.
                </ListItem>
                <ListItem>
                  The User not to transmit any material that encourages conduct
                  that could constitute a criminal offense, give rise to civil
                  liability, or otherwise violate any applicable local, state,
                  national or international law or regulation. Attempts to gain
                  unauthorized access to other computer systems are prohibited.
                </ListItem>
                <ListItem>
                  The User shall not interfere with any other members' use or
                  enjoyment of the Website or Services.
                </ListItem>
                <ListItem>
                  The User is under an obligation to report any misuse or abuse
                  of the Site. If you notice any abuse or misuse of the Site or
                  anything which is in violation of this Agreement, you shall
                  forthwith report such violation to Website by writing to
                  Customer Care. On receipt of such complaint, Website may
                  investigate such complaint and if necessary, may terminate the
                  membership of the Member responsible for such violation abuse
                  or misuse without any refund of the subscription fee.
                </ListItem>
                <ListItem>
                  Any false complaint made by a Member shall make such Member
                  liable for termination of his / her membership without any
                  refund of the subscription fee.
                </ListItem>
                <ListItem>
                  The Website reserves the right to withdraw its services to any
                  customer who is found to be unreasonable or abusive during
                  their conversation with the Service Provider inclusive of
                  astrologer regardless of any reason.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>

          <p>
            While the Website shall take all steps to resolve any situation that
            is in violation of the above obligations arises, however if the
            situation is not controllable, the Website reserves its right to
            send a written warning henceforth. Such violations, if repeated by
            the User, shall lead to a total ban for transacting on the platform
            by such User. If any balance is present in the wallet of the User,
            the same shall be refunded subject to the other charges that may be
            applicable for such violations.
          </p>
          <h2>Bank Account Information</h2>
          <p>
            The User is under an obligation to provide his banking information
            as and when required. For that purpose, the obligation of the User
            are:-
          </p>
          <UnorderedList>
            <ListItem>
              The User agrees that the debit/credit card details provided by
              him/her for use of the aforesaid Service(s) must be correct and
              accurate and that the User shall not use a debit/credit card that
              is not lawfully owned by him/her or the use of which is not
              authorized by the lawful owner thereof. The User further agrees
              and undertakes to provide correct and valid debit/credit card
              details.
            </ListItem>
            <ListItem>
              The User may pay the fees required to the Website by using a
              debit/credit card or through online banking account. The User
              warrants, agrees, and confirms that when he/she initiates a
              payment transaction and/or issues an online payment instruction
              and provides his/her card/bank details:
              <UnorderedList>
                <ListItem>
                  The User is fully and lawfully entitled to use such credit /
                  debit card, bank account for such transactions;
                </ListItem>
                <ListItem>
                  The User is responsible to ensure that the card/ bank account
                  details provided by him/ her are accurate;
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              The User is responsible to ensure sufficient credit is available
              on the nominated card/bank account at the time of making the
              payment to permit the payment of the dues payable or the bill(s)
              selected by the User inclusive of the applicable Fee.
            </ListItem>
          </UnorderedList>
          <p>
            The User further agrees that if any part of these Terms of Usage are
            determined to be invalid or unenforceable pursuant to applicable law
            including, but not limited to, the warranty disclaimers and
            liability limitations set forth herein, then the invalid or
            unenforceable provision will be deemed superseded by a valid,
            enforceable provision that most closely matches the intent of the
            original provision and the remainder of these Terms of Usage shall
            continue in effect.
          </p>
          <h2>Disclaimer / Limitation of Liability / Warranty</h2>
          <p>
            The User expressly understands and agree that, to the maximum extent
            permitted by applicable law, the Website does not provide warranties
            for the service. Astrological counselling provided through the
            Website is based on cumulative or individual knowledge, experience
            and interpretations of astrologers and as such, it may vary from one
            astrologer to another.
          </p>
          <UnorderedList>
            <ListItem>
              The Website is offering services through a diverse panel of
              Astrologers duly verified by the Website and such Service Provider
              (Astrologer) may from time to time make recommendations of using
              mantras, jantras, gemstones or other astrological remedies to be
              used by User. Such recommendations are being made in good faith by
              the astrologers and the Website and its subsidiaries, affiliates,
              officers, employees, agents, partners, and licensors make no
              warranty that:
              <UnorderedList>
                <ListItem>The service will meet your requirements.</ListItem>
                <ListItem>
                  The service will be uninterrupted, timely, secure, or
                  error-free.
                </ListItem>
                <ListItem>
                  The results that may be obtained from the use of the service
                  will be accurate or reliable.
                </ListItem>
                <ListItem>
                  The quality of any products, services, information, or other
                  material purchased or obtained by you through the service will
                  meet your expectations.
                </ListItem>
                <ListItem>
                  Any errors in the software will be corrected. You are required
                  to make full disclosure about the emotional, mental, and
                  physical state of the person seeking advice from the panel of
                  astrologers of the Website so that the astrologers make an
                  informed judgment about giving advice.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              The Website, services and other materials are provided by the
              Website on an "as is" basis without warranty of any kind, express,
              implied, statutory or otherwise, including the implied warranties
              of title, non-infringement, merchantability or fitness for a
              particular purpose. without limiting the foregoing, the Website
              makes no warranty that (i) the Website or the services will meet
              your requirements or your use of the Website or the services will
              be uninterrupted, timely, secure or error-free; (ii) the results
              that may be obtained from the use of the Website, services or
              materials will be effective, accurate or reliable; (iii) the
              quality of the Website, services or other materials will meet your
              expectations; or that (iv) any errors or defects in the Website,
              services or other materials will be corrected. no advice or
              information, whether oral or written, obtained by the User from
              the Website or through or from use of the services shall create
              any warranty not expressly stated in the terms of use.
            </ListItem>
            <ListItem>
              To the maximum extent permitted by applicable law, the Website
              will have no liability related to User content arising under
              intellectual property rights, libel, privacy, publicity, obscenity
              or other laws. The Website also disclaims all liability with
              respect to the misuse, loss, modification or unavailability of any
              User content.
            </ListItem>
            <ListItem>
              The Website will not be liable for any loss that the User may
              incur as a consequence of unauthorized use of their account or
              account information in connection with the Website or any services
              or materials, either with or without the User’s knowledge. The
              Website has endeavored to ensure that all the information on the
              Website is correct, but the Website neither warrants nor makes any
              representations regarding the quality, accuracy or completeness of
              any data, information, product or service. The Website shall not
              be responsible for the delay or inability to use the Website or
              related functionalities, the provision of or failure to provide
              functionalities, or for any information, software, products,
              functionalities and related graphics obtained through the Website,
              or otherwise arising out of the use of the Website, whether based
              on contract, tort, negligence, strict liability or otherwise.
              further, the Website shall not be held responsible for
              non-availability of the Website during periodic maintenance
              operations or any unplanned suspension of access to the Website
              that may occur due to technical reasons or for any reason beyond
              the Website's control.
            </ListItem>
            <ListItem>
              The User understands and agrees that any material or data
              downloaded or otherwise obtained through the Website is done
              entirely at their own discretion and risk and they will be solely
              responsible for any damage to their computer systems or loss of
              data that results from the download of such material or data. The
              Website is not responsible for any typographical error leading to
              an invalid coupon. The Website accepts no liability for any errors
              or omissions, with respect to any information provided to you
              whether on behalf of itself or third parties. The Services
              provided by the Website are for entertainment purposes only and
              the Website on behalf of itself and its suppliers, disclaims all
              warranties of any kind, express or implied, including without
              limitation any warranty of merchantability, fitness for a
              particular purpose, title, non-infringement and it makes no
              warranty or representation regarding the results that may be
              obtained from the use of content or services, the accuracy or
              reliability of any content obtained through the Services, any
              goods or services purchased or obtained through the Website, and
              makes no warranty that the services will meet your requirements,
              be uninterrupted, timely, secure or error-free. No advice or
              information, whether oral or written, obtained by you from the
              Website shall create any warranty.
            </ListItem>
            <ListItem>
              The services may consist of the following, without limitation:
              Astrological content, Reports, Tarot readings, fortunes,
              numerology, predictions, live telephone consultations, email
              consultations or products sold through AstroSwarg Shop. AstroSwarg
              charges for the chat/call service offered on this platform on per
              minute basis and holds no responsibility or liability about the
              reality or reliability of the astrological effects on the human
              physiology, by the gems, any other products or services
              represented and sold on the website. No advice or information,
              whether oral or written, obtained by you shall create any
              warranty.
            </ListItem>
            <ListItem>
              The advisors/consultants/astrologers are also members of the site
              and not employees of the Website or the company. However, the
              Website verifies the degrees, qualifications, credentials, and
              background of the advisors/consultants/astrologers but does not
              refer, endorse, recommend, verify, evaluate or guarantee any
              advice, information or other services provided by the
              advisors/consultants/astrologers or by the company, nor does it
              warrant the validity, accuracy, completeness, safety, legality,
              quality, or applicability of the content, anything said or written
              by, or any advice provided by the
              advisors/consultants/astrologers.
            </ListItem>
            <ListItem>
              The website is not a suicide helpline platform. If you are
              considering or contemplating suicide or feel that you are a danger
              to yourself or to others, you may discontinue use of the services
              immediately at your discretion and please notify appropriate
              police or emergency medical personnel. If you are thinking about
              suicide, immediately call a suicide prevention helpline such as
              AASRA (91-22-27546669). The Website shall not be liable for any
              inaccuracy, error or delay in, or omission of (a) any data,
              information or message, or (b) the transmission or delivery of any
              such data, information or message; or (c) any loss or damage
              arising from or occasioned by any such inaccuracy, error, delay or
              omission, non-performance or interruption in any such data,
              information or message. Under no circumstances shall the Website
              and/or the payment service providers, its employees, directors,
              and its third party agents involved in processing, delivering or
              managing the services, be liable for any direct, indirect,
              incidental, special or consequential damages, or any damages
              whatsoever, including punitive or exemplary arising out of or in
              any way connected with the provision of or any inadequacy or
              deficiency in the provision of the services or resulting from
              unauthorized access or alteration of transmissions of data or
              arising from suspension or termination of the services.
            </ListItem>
          </UnorderedList>
          <p>
            Notwithstanding anything to the contrary contained herein,
            AstroSwarg liability to you for any cause whatsoever, and regardless
            of the form of the action, will at all times be limited to the
            amount paid, if any, by you to the Website, for the service during
            the term of membership.
          </p>
          <h2>Indemnification</h2>
          <p>
            The User shall indemnify, defend and hold harmless the Website and
            its parent, subsidiaries, affiliates, officers, directors,
            employees, suppliers, consultants and agents from any and all third
            party claims, liability, damages and/or costs (including, but not
            limited to, attorney’s fees) arising from Your use of the Services,
            Your violation of the Privacy Policy or these Terms of Service, or
            Your violation of any third party's rights, including without
            limitation, infringement by You or any other user of Your account of
            any intellectual property or other right of any person or entity.
            These Terms of Service will inure to the benefit of Website’s
            successors, assigns, and licensees.
          </p>
          <h2>Proprietary Rights To Content</h2>
          <p>
            The User acknowledges that the Content, including but not limited to
            text, software, music, sound, photographs, video, graphics or other
            material contained in sponsor advertisements or distributed via
            email, commercially produced information presented to Member by the
            Website, its suppliers, and/or advertisers, is protected by
            copyrights, trademarks, service marks, patents and/or other
            proprietary rights and laws. The User is not permitted to copy, use,
            reproduce, distribute, perform, display, or create derivative works
            from the Content unless expressly authorized by the Website, its
            suppliers, or advertisers. Moreover, the content such as images,
            text, designs, etc on all of the portals of the Website are taken
            from various online portals such as Google Images. AstroSwarg
            {/*Services Private Limited (Formerly Codeyeti Software Solutions Pvt.
            Ltd.)*/}{" "}
            is not liable for any copyrights of that content or data.
          </p>
          <h2>Notices</h2>
          <p>
            Except as otherwise stated in these Terms of Service, all notices to
            a party shall be in writing and shall be made either via email or
            snail mail. Notice shall be deemed given 24 hours after an email is
            sent, or 3 days after deposit in the snail mail, to Member at the
            address provided by Member in the Registration Data and to the
            Website at the address set forth below:
            <br />
            <strong style={{ textAlign: "center" }}>
              {/* “Flat No.713, Devika Tower 6, Nehru Place, New Delhi-110019,
              India*/}
            </strong>
          </p>
          <h2>Restricted Content</h2>
          <h3>i) Child Endangerment</h3>
          <p>
            Our App prohibits users from creating, uploading, or distributing
            content that facilitates the exploitation or abuse of children will
            be subject to immediate deletion of the account. This includes all
            child sexual abuse materials.
          </p>
          <p>
            We prohibit the use of AstroSwarg app to endanger children. This
            includes but is not limited to use of apps to promote predatory
            behaviour towards children, such as:
          </p>
          <UnorderedList>
            <ListItem>
              Inappropriate interaction targeted at a child (for example,
              groping or caressing).
            </ListItem>
            <ListItem>
              Child grooming (for example, befriending a child online to
              facilitate, either online or offline, sexual contact and/or
              exchanging sexual imagery with that child).
            </ListItem>
            <ListItem>
              Sexualization of a minor (for example, imagery that depicts,
              encourages or promotes the sexual abuse of children or the
              portrayal of children in a manner that could result in the sexual
              exploitation of children).
            </ListItem>
            <ListItem>
              Sextortion (for example, threatening or blackmailing a child by
              using real or alleged access to a child’s intimate images).
            </ListItem>
            <ListItem>
              Trafficking of a child (for example, advertising or solicitation
              of a child for commercial sexual exploitation).
            </ListItem>
          </UnorderedList>
          <p>
            We will take appropriate action, if we become aware of content with
            child sexual abuse materials.
          </p>
          <p>
            In addition, content that appeal to children but contain adult
            themes are strictly prohibited, including but not limited to:
          </p>
          <UnorderedList>
            <ListItem>
              Content with excessive violence, blood, and gore.
            </ListItem>
            <ListItem>
              Content that depict or encourage harmful and dangerous activities.
            </ListItem>
          </UnorderedList>
          <p>
            We also don’t allow users that promote negative body or self-image
            including apps that depict for entertainment purposes plastic
            surgery, weight loss, and other cosmetic adjustments to a person's
            physical appearance.
          </p>
          <h3>ii) Inappropriate Content</h3>
          <p>
            To ensure that Our App remains a safe and respectful platform, we've
            created standards defining and prohibiting content that is harmful
            or inappropriate for our users.
          </p>
          <h3>iii) Sexual Content and Profanity</h3>
          <p>
            We don't allow accounts that contain or promote sexual content or
            profanity, including pornography, or any content or services
            intended to be sexually gratifying. We don’t allow app content that
            appear to promote or solicit a sexual act in exchange for
            compensation. We don’t allow content that contain or promote content
            associated with sexually predatory behaviour, or distribute
            non-consensual sexual content.
          </p>
          <p>
            If an account contains content that violates this policy it gives
            the absolute right to the owner to delete the account with immediate
            effect.
          </p>
          <p>Here are some examples of common violations:</p>
          <UnorderedList>
            <ListItem>
              Depictions of sexual nudity, or sexually suggestive poses in which
              the subject is nude, blurred or minimally clothed, and/or where
              the clothing would not be acceptable in an appropriate public
              context.
            </ListItem>
            <ListItem>
              Depictions, animations or illustrations of sex acts, or sexually
              suggestive poses or the sexual depiction of body parts.
            </ListItem>
            <ListItem>
              Content that depicts or are functionally sexual aids, sex guides,
              illegal sexual themes and fetishes.
            </ListItem>
            <ListItem>
              Content that is lewd or profane – including but not limited to
              content which may contain profanity, slurs, explicit text, or
              adult/sexual keywords in the store listing or in-app.
            </ListItem>
            <ListItem>
              Content that depicts, describes, or encourages bestiality.
            </ListItem>
            <ListItem>
              Content that promote sex-related entertainment, escort services,
              or other services that may be interpreted as providing or
              soliciting sexual acts in exchange for compensation, including,
              but not limited to compensated dating or sexual arrangements where
              one participant is expected or implied to provide money, gifts, or
              financial support to another participant ("sugar dating").
            </ListItem>
            <ListItem>
              Content that degrade or objectify people, such as apps that claim
              to undress people or see through clothing, even if labelled as
              prank or entertainment apps.
            </ListItem>
            <ListItem>
              Content or behaviour that attempts to threaten or exploit people
              in a sexual manner, such as creepshots, hidden camera,
              non-consensual sexual content created via deepfake or similar
              technology, or assault content.
            </ListItem>
          </UnorderedList>

          <h3>iv) Hate Speech</h3>
          <p>
            We don't allow users that promote violence, or incite hatred against
            individuals or groups based on race or ethnic origin, religion,
            disability, age, nationality, veteran status, sexual orientation,
            gender, gender identity, caste, immigration status, or any other
            characteristic that is associated with systemic discrimination or
            marginalization.
          </p>
          <p>Here are examples of common violations:</p>
          <UnorderedList>
            <ListItem>
              Content or speech asserting that a protected group is inhuman,
              inferior or worthy of being hated.
            </ListItem>
            <ListItem>
              Content that is hateful slurs, stereotypes, or theories about a
              protected group possessing negative characteristics (for example,
              malicious, corrupt, evil, etc.), or explicitly or implicitly
              claims the group is a threat.
            </ListItem>
            <ListItem>
              Content or speech trying to encourage others to believe that
              people should be hated or discriminated against because they are a
              member of a protected group.
            </ListItem>
            <ListItem>
              Content which promotes hate symbols such as flags, symbols,
              insignias, paraphernalia or behaviours associated with hate
              groups.
            </ListItem>
          </UnorderedList>
          <p>
            <strong>Violence</strong>
          </p>
          <p>
            We don't allow apps that depict or facilitate gratuitous violence or
            other dangerous activities.
          </p>
          <p>Here are some examples of common violations:</p>
          <UnorderedList>
            <ListItem>
              Graphic depictions or descriptions of realistic violence or
              violent threats to any person or animal.
            </ListItem>
            <ListItem>
              Content that promote self-harm, suicide, eating disorders, choking
              games or other acts where serious injury or death may result.
            </ListItem>
          </UnorderedList>

          <p>
            <strong>Terrorist Content</strong>
          </p>
          <p>
            We do not permit terrorist organizations to publish content for any
            purpose, including recruitment.
          </p>
          <p>
            We don't allow users with content related to terrorism, such as
            content that promotes terrorist acts, incites violence, or
            celebrates terrorist attacks.
          </p>
          <p>
            <strong>Dangerous Organizations and Movements</strong>
          </p>
          <p>
            We do not permit movements or organizations that have engaged in,
            prepared for, or claimed responsibility for acts of violence against
            civilians to publish content for any purpose, including recruitment.
          </p>
          <p>
            We don’t allow users with content related to planning, preparing, or
            glorifying violence against civilians.
          </p>
          <p>
            <strong>Sensitive Events</strong>
          </p>
          <p>
            We don't allow contents that capitalize on or are insensitive toward
            a sensitive event with significant social, cultural, or political
            impact, such as civil emergencies, natural disasters, public health
            emergencies, conflicts, deaths, or other tragic events.
          </p>
          <p>Here are examples of common violations:</p>
          <UnorderedList>
            <ListItem>
              Lacking sensitivity regarding the death of a real person or group
              of people due to suicide, overdose, natural causes, etc.
            </ListItem>
            <ListItem>
              Denying the occurrence of a well-documented, major tragic event.
            </ListItem>
            <ListItem>
              Appearing to profit from a sensitive event with no discernible
              benefit to the victims.
            </ListItem>
          </UnorderedList>
          <h3>v) Bullying and Harassment</h3>
          <p>
            We don't allow content that contain or facilitate threats,
            harassment, or bullying.
          </p>
          <p>Here are examples of common violations:</p>
          <UnorderedList>
            <ListItem>
              Bullying victims of international or religious conflicts.
            </ListItem>
            <ListItem>
              Content that seeks to exploit others, including extortion,
              blackmail, etc.
            </ListItem>
            <ListItem>
              Posting content in order to humiliate someone publicly.
            </ListItem>
            <ListItem>
              Harassing victims, or their friends and families, of a tragic
              event.
            </ListItem>
          </UnorderedList>

          <h3>vi) Dangerous Products</h3>
          <p>
            We don't allow users that facilitate the sale of explosives,
            firearms, ammunition, or certain firearms accessories.
          </p>
          <p>
            We don't allow users that provide instructions for the manufacture
            of explosives, firearms, ammunition, restricted firearm accessories,
            or other weapons. This includes instructions on how to convert a
            firearm to automatic, or simulated automatic, firing capabilities.
          </p>
          <p>
            <strong>Psychotropic drugs.</strong>
          </p>
          <p>
            We don't allow users that facilitate the sale of marijuana or
            marijuana products, regardless of legality. We don't allow users
            that facilitate the sale of tobacco (including e-cigarettes and vape
            pens) or encourage the illegal or inappropriate use of alcohol or
            tobacco. We don't allow users that facilitate the sale of
            psychotropic drugs or drugs falling under the restricted category of
            Drugs and Cosmetics Act and Rules 1945.
          </p>
          <h3>vii) Black Magic, Witchcraft, Voodoo and Tantrism</h3>
          <p>
            We as an Organisation, strictly prohibit our users to get into any
            form of black magic, witchcraft, voodoo and tantrism. In case it
            comes to our information, that a user is indulged
            intentionally/unintentionally in any such activity, we hereby
            reserve the right to delete the account.
          </p>
          <h2>AstroSwarg Services:</h2>
          <p>
            These Terms of Service apply to all users of AstroSwarg.{" "}
            {/*Services
            Private Limited (Formerly Codeyeti Software Solutions Pvt. Ltd.)*/}
            Information provided by our users through the AstroSwarg Service may
            contain links to third party websites that are not owned or
            controlled by AstroSwarg. AstroSwarg has no control over, and
            assumes no responsibility for, the content, privacy policies, or
            practices of any third party websites. Also, AstroSwarg does not
            assume any liability for any mistakes, misinterpretation of law,
            defamation, omissions, falsehood, obscenity, pornography or
            profanity in the statements, opinions, representations or any other
            form of third party content on the Site as well as that of its
            users. In addition, AstroSwarg will not and cannot censor or edit
            the content of any users and third-party site. By using the Service,
            you expressly acknowledge and agree that AstroSwarg shall not be
            responsible for any damages, claims or other liability arising from
            or related to your use of any content and third-party website. You
            understand that the information and opinions in the content
            represent solely the thoughts of the author and is neither endorsed
            by nor does it necessarily reflect AstroSwarg’s belief.
          </p>
          <h3>
            Errors, Corrections, and Right to Modify or Discontinue Service and
            Sites:
          </h3>
          <p>
            We do not represent or warrant that the AstroSwarg Site will be
            error-free, free of viruses or other harmful components, or that
            defects will be corrected. We do not represent or warrant that the
            information available on or through the AstroSwarg will be correct,
            accurate, timely or otherwise reliable. We may make changes to the
            features, functionality or content of the AstroSwarg at any time. We
            reserve the right in our sole discretion to edit or delete any
            documents, information or other content appearing on the Site.
            AstroSwarg reserves the right at any time and from time to time to
            modify or discontinue, temporarily or permanently, the Services
            and/or Sites (or any part thereof) with or without notice.
            AstroSwarg shall not be liable to you or to any third party for any
            modification, suspension or discontinuance of the Service or any
            Sites.
          </p>
          <h2>Governing Law And Jurisdiction</h2>
          <UnorderedList>
            <ListItem>
              Any dispute, claim or controversy arising out of or relating to
              this Terms of Usage including the determination of the scope or
              applicability of this Terms of Usage to arbitrate, or your use of
              the Application or information to which it gives access, shall be
              determined by arbitration in India, before a sole arbitrator
              mutually appointed by Members and Website. Arbitration shall be
              conducted in accordance with the Arbitration and Conciliation Act,
              1996. The seat of such arbitration shall be New Delhi. All
              proceedings of such arbitration, including, without limitation,
              any awards, shall be in the English language. The award shall be
              final and binding on the parties to the dispute.
            </ListItem>
            <ListItem>
              Notwithstanding the foregoing, either party has the right to seek
              any interim or preliminary relief from a court of competent
              jurisdiction in New Delhi in order to protect the rights of such
              party pending the completion of any arbitration hereunder, and
              both parties agree to submit to the exclusive jurisdiction of the
              courts of India and venue in New Delhi for any such proceeding. If
              either party files an action contrary to this provision, the other
              party may recover attorneys' fees and costs up to One Lakh Rupees
              INR.
            </ListItem>
            <ListItem>
              These Terms of Usage shall be governed by and construed in
              accordance with the laws of India without giving effect to any
              choice of law and principles that would require the application of
              the laws of a different state. If for any reason a court of
              competent jurisdiction finds any provision or portion of these
              Terms of Usage or Privacy Policy to be unenforceable or invalid,
              such provision shall be changed and interpreted so as to best
              accomplish the objectives of such unenforceable or invalid
              provision within the limits of applicable law, and the remainder
              of the Terms of Usage or Privacy Policy, as applicable, will
              continue in full force and effect. Headings are for reference
              purposes only and in no way define, limit, construe, or describe
              the scope or extent of such section. Any waiver of any provision
              of the Terms of Usage shall be effective only if in writing and
              signed by AstroSwarg. These Terms of Usage constitute the entire
              agreement between the parties with respect to the subject matter
              hereof and supersedes and replaces all prior or contemporaneous
              understandings or agreements, written or oral, regarding such
              subject matter.
            </ListItem>
            <ListItem>
              These Terms of Usage and your use of the Services will be
              interpreted in accordance with the laws of India excluding its
              rules on conflicts of laws. The parties agree to submit any
              dispute arising under these Terms of Usage to the jurisdiction of
              a court located in New Delhi for any actions for which the parties
              retain the right to seek injunctive or other equitable relief in a
              court of competent jurisdiction to prevent the actual or
              threatened infringement, misappropriation or violation of a
              party's copyrights, trademarks, trade secrets, patents, or other
              intellectual property rights.
            </ListItem>
          </UnorderedList>
        </div>
      </StyledDiv>
    </Layout>
  );
};

export default Tnc;
