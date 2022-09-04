import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Ronin Karate</title>
          <meta property="og:title" content="Ronin Karate" />
        </Head>
        <div className="home-hero">
          <div className="home-bg"></div>
          <Header></Header>
          <div className="home-container1">
            <div className="home-container2">
              <h1 className="home-text">Ronin Karate</h1>
              <span className="home-text01">
                <span>
                  Kontakt for angående prøvetræning. Medbring noget vand og løst
                  siddende træningstøj. Vi træner i drenges gymnastiksalen på
                  Åby Skole.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
            <img
              alt="image"
              src="/playground_assets/gray-vector.svg"
              className="home-image"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1660899227222-b9fd7fe2e060?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY2MDkyMTMxNA&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image1"
            />
          </div>
        </div>
        <div className="home-section1">
          <div className="home-container3">
            <div className="home-container4">
              <h6 className="home-text04">Tilmeldning</h6>
              <h3 className="home-text05 healine">Vi tilbyder</h3>
              <span className="home-text06 textXL">
                Vi har opdelt vores træning efter klassetrin.  Tilmeldning sker
                igennem Aabyhøj gymnastik forening.
              </span>
            </div>
            <div className="home-cards-container">
              <div className="home-card1">
                <img
                  src="/playground_assets/beginner-1200w.jpg"
                  alt="image"
                  className="home-image2"
                />
                <h6 className="home-text07 textXL">1, 2, 3 klasse</h6>
                <span className="home-text08">
                  <span className="home-text09">
                    Træningen er målrettet denne yngre aldersgruppe og har fokus
                    på sjov og fælleskab.
                  </span>
                  <br className="home-text10"></br>
                  <br className="home-text11"></br>
                  <span className="home-text12">mon bælte system</span>
                  <br></br>
                </span>
                <a
                  href="https://aaifgym.dk/cms/ProfileMaintainEnrollment.aspx?TeamID=501"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link button"
                >
                  Tilmeld
                </a>
              </div>
              <div className="home-card2">
                <img
                  src="/playground_assets/intermediate-1200w.jpeg"
                  alt="image"
                  className="home-image3"
                />
                <h6 className="home-text14 textXL">Fra 4 klasse og voksende</h6>
                <span className="home-text15">
                  <span>
                    Kihon (basis), Kumite (kamp), Kata (sekvenser), Selvforsvar,
                    Sports karate.
                  </span>
                  <br></br>
                  <br></br>
                  <span>Fælles og opdelt træning.</span>
                  <br></br>
                </span>
                <a
                  href="https://aaifgym.dk/cms/ProfileMaintainEnrollment.aspx?TeamID=500"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1 button"
                >
                  Tilmeld
                </a>
              </div>
              <div className="home-card3">
                <img
                  src="/playground_assets/parent-1200w.jpg"
                  alt="image"
                  className="home-image4"
                />
                <h6 className="home-text21 textXL">Forælder + barn</h6>
                <span className="home-text22">
                  <span>Træn med dit barn</span>
                  <br></br>
                  <br></br>
                </span>
                <a
                  href="https://aaifgym.dk/cms/TeamEnrollmentAlt.aspx?TeamNameID=113"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2 button"
                >
                  Tilmeld
                </a>
              </div>
            </div>
            <div className="home-work-with-us">
              <div className="home-container5">
                <h3 className="home-text26 healine">Træning</h3>
                <span className="home-text27">
                  <span className="home-text28">1.-3. klasse</span>
                  <br className="home-text29"></br>
                  <span>Onsdag: 17:00 → 18:00</span>
                  <br className="home-text31"></br>
                  <br className="home-text32"></br>
                  <span className="home-text33">4. klasse +</span>
                  <br className="home-text34"></br>
                  <span>Mandag: 17:30 → 19:00</span>
                  <br className="home-text36"></br>
                  <span>Onsdag: 18:00 → 19:30</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container6">
                <div className="home-container7">
                  <img
                    alt="image"
                    src="/playground_assets/blue_wave.svg"
                    className="home-image5"
                  />
                </div>
                <div className="home-container8">
                  <h4 className="home-text39 healine">
                    <span className="home-text40">Åby Skole</span>
                    <br></br>
                  </h4>
                  <span className="home-text42">
                    <span> Åbyvej 80, 8230 Aarhus</span>
                    <br></br>
                    <br></br>
                    <span>
                      Gymnastik sal i stueplan. Ind af døren og til venstre.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/feature_small-1500h.jpg');
          }
          .home-bg {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0.55;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-container1 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container2 {
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text01 {
            color: var(--dl-color-gray-900);
            max-width: 600px;
            text-align: center;
          }
          .home-image {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .home-image1 {
            left: auto;
            right: 0px;
            width: 100%;
            bottom: 0px;
            display: none;
            position: absolute;
            object-fit: cover;
          }
          .home-section1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-pimary-900);
          }
          .home-container3 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: column;
          }
          .home-container4 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text04 {
            color: var(--dl-color-pimary-500);
            font-size: 0.875em;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .home-text05 {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .home-text06 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .home-cards-container {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-card1 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image2 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-text07 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
          }
          .home-text08 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .home-link {
            text-decoration: none;
          }
          .home-card2 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image3 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-text14 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
          }
          .home-text15 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-card3 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-image4 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-text21 {
            color: var(--dl-color-secondary-100);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Open Sans;
          }
          .home-text22 {
            color: var(--dl-color-secondary-700);
            font-size: 1rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            font-family: Open Sans;
            line-height: 1.625rem;
          }
          .home-link2 {
            text-decoration: none;
          }
          .home-work-with-us {
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 41%;
            display: flex;
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text26 {
            color: var(--dl-color-secondary-400);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text27 {
            color: var(--dl-color-secondary-500);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text28 {
            font-weight: 700;
          }
          .home-text33 {
            font-weight: 700;
          }
          .home-container6 {
            flex: 0 0 auto;
            width: 33%;
            display: flex;
            position: relative;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: flex-start;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            background-color: #09a6e9;
          }
          .home-container7 {
            width: 100%;
            height: 269px;
            display: flex;
            align-items: flex-end;
            border-radius: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-end;
            background-image: url('/playground_assets/location-1400w.jpg');
            background-position: center;
            border-top-left-radius: var(--dl-radius-radius-radius50);
            border-top-right-radius: var(--dl-radius-radius-radius50);
          }
          .home-image5 {
            top: auto;
            left: auto;
            width: 100%;
            bottom: 0px;
            object-fit: cover;
            margin-bottom: -1px;
          }
          .home-container8 {
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text39 {
            font-size: 1.25rem;
          }
          .home-text40 {
            color: #f2f5f9ff;
            font-weight: 700;
            white-space: normal;
          }
          .home-text42 {
            color: rgb(242, 245, 249);
            margin-top: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .home-hero {
              background-size: cover;
              background-image: url('/playground_assets/feature_small-1500h.jpg');
            }
            .home-text04 {
              color: var(--dl-color-pimary-500);
              font-size: 0.875em;
              font-style: normal;
              font-weight: 700;
              text-transform: uppercase;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-card1 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text08 {
              color: var(--dl-color-secondary-700);
              font-size: 1rem;
              font-family: Open Sans;
              line-height: 1.625rem;
            }
            .home-card2 {
              width: 90%;
              margin-bottom: var(--dl-space-space-fiveunits);
            }
            .home-card3 {
              width: 90%;
            }
            .home-text22 {
              color: var(--dl-color-secondary-700);
              font-size: 1rem;
              font-family: Open Sans;
              line-height: 1.625rem;
            }
            .home-text27 {
              color: var(--dl-color-secondary-500);
            }
            .home-text29 {
              font-weight: 300;
              background-color: rgb(241, 245, 249);
            }
            .home-text31 {
              font-weight: 300;
              background-color: rgb(241, 245, 249);
            }
            .home-text32 {
              font-weight: 300;
              background-color: rgb(241, 245, 249);
            }
            .home-text34 {
              font-weight: 300;
              background-color: rgb(241, 245, 249);
            }
            .home-text36 {
              font-weight: 300;
              background-color: rgb(241, 245, 249);
            }
            .home-text40 {
              color: #f2f5f9;
            }
            .home-text42 {
              color: rgb(242, 245, 249);
            }
          }
          @media (max-width: 767px) {
            .home-text01 {
              color: var(--dl-color-gray-900);
            }
            .home-section1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container4 {
              width: 100%;
            }
            .home-work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .home-container5 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-container2 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-card1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-text08 {
              text-align: left;
            }
            .home-text09 {
              text-align: left;
            }
            .home-text10 {
              text-align: left;
            }
            .home-text11 {
              text-align: left;
            }
            .home-text12 {
              text-align: left;
            }
            .home-card2 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-text15 {
              text-align: left;
            }
            .home-text22 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
