import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import Label from '../components/label'
import MemberDetails from '../components/member-details'
import ServiceCard from '../components/service-card'
import SecondaryButton from '../components/secondary-button'
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
          <div className="home-container01">
            <div className="home-container02">
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
          <div className="home-container03">
            <div className="home-container04">
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
              <div className="home-container05">
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
              <div className="home-container06">
                <div className="home-container07">
                  <img
                    alt="image"
                    src="/playground_assets/blue_wave.svg"
                    className="home-image5"
                  />
                </div>
                <div className="home-container08">
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
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image6"
          />
        </div>
        <div className="home-section2">
          <div className="home-container09">
            <Label text="WITH BURNED SOLES​"></Label>
            <h2 className="home-text48 text2XL">
              <span className="home-text49">
                You need to fight like David with Goliath
              </span>
              <br></br>
            </h2>
            <span className="home-text50 textXL">
              Brother, life in est is not like in the west. Over the night, the
              black clouds appear, but at least I have my poetry for my freedom.
              The victory is for those that rise after they fall.
            </span>
          </div>
          <div className="home-growing-company-section">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
              className="home-image7"
            />
            <div className="home-container10">
              <div className="home-container11">
                <svg viewBox="0 0 967.4605714285714 1024" className="home-icon">
                  <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
                </svg>
              </div>
              <h3 className="home-text51 healine">A growing company</h3>
              <span className="home-text52">
                The extension comes with three pre-build pages to help you get
                started faster. You can change the text and images and
                you&apos;re good to go.
              </span>
              <div className="home-container12">
                <div className="home-container13">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                  </svg>
                </div>
                <span className="home-text53">
                  Carefully crafted components
                </span>
              </div>
              <div className="home-container14">
                <div className="home-container15">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M917.806 357.076c-22.21-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-368c-44.114 0-80 35.888-80 80v736c0 44.112 35.886 80 80 80h608c44.112 0 80-35.888 80-80v-496c0-14.332-4.372-39.35-42.194-90.924zM785.374 302.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.982 17.78 50.678 41.878 81.374 72.572v0zM896 944c0 8.672-7.328 16-16 16h-608c-8.672 0-16-7.328-16-16v-736c0-8.672 7.328-16 16-16 0 0 367.956-0.002 368 0v224c0 17.672 14.324 32 32 32h224v496z"></path>
                    <path d="M602.924 42.196c-51.574-37.822-76.592-42.196-90.924-42.196h-368c-44.112 0-80 35.888-80 80v736c0 38.632 27.528 70.958 64 78.39v-814.39c0-8.672 7.328-16 16-16h486.876c-9.646-7.92-19.028-15.26-27.952-21.804z"></path>
                  </svg>
                </div>
                <span className="home-text54">Amazing page examples</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <svg
                    viewBox="0 0 1024.5851428571427 1024"
                    className="home-icon07"
                  >
                    <path d="M1008 6.286c12 8.571 17.714 22.286 15.429 36.571l-146.286 877.714c-1.714 10.857-8.571 20-18.286 25.714-5.143 2.857-11.429 4.571-17.714 4.571-4.571 0-9.143-1.143-13.714-2.857l-301.143-122.857-170.286 186.857c-6.857 8-16.571 12-26.857 12-4.571 0-9.143-0.571-13.143-2.286-14.286-5.714-23.429-19.429-23.429-34.286v-258.286l-269.714-110.286c-13.143-5.143-21.714-17.143-22.857-31.429-1.143-13.714 6.286-26.857 18.286-33.714l950.857-548.571c12-7.429 27.429-6.857 38.857 1.143zM812.571 862.857l126.286-756-819.429 472.571 192 78.286 493.143-365.143-273.143 455.429z"></path>
                  </svg>
                </div>
                <span className="home-text55">Dynamic components</span>
              </div>
            </div>
          </div>
          <div className="home-container18">
            <h6 className="home-text56">
              <span>THE ENTOURAGE</span>
            </h6>
            <h3 className="home-text58 healine">
              It is everything, and it won&apos;t change
            </h3>
            <span className="home-text59 textXL">
              <span className="home-text60">
                It depends on your friends and companions, it depends on who
                goes out with you, if they have money, if you have money.
              </span>
            </span>
          </div>
          <div className="home-team">
            <div className="home-container19">
              <Link href="/profile">
                <a className="home-link3">
                  <div className="home-container20">
                    <MemberDetails image_src="/playground_assets/team1-200h.jpg"></MemberDetails>
                    <div className="home-container21">
                      <div className="home-container22">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="home-icon09"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="home-container23">
                        <svg viewBox="0 0 1024 1024" className="home-icon11">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                      <div className="home-container24">
                        <svg viewBox="0 0 1024 1024" className="home-icon13">
                          <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="home-link4">
                  <div className="home-container25">
                    <MemberDetails
                      heading1="Romina Hadid"
                      heading11="Marketing Specialist"
                      image_src="/playground_assets/team2-200h.jpg"
                    ></MemberDetails>
                    <div className="home-container26">
                      <div className="home-container27">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="home-icon15"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="home-container28">
                        <svg viewBox="0 0 1024 1024" className="home-icon17">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="home-link5">
                  <div className="home-container29">
                    <MemberDetails
                      heading1="Alexa Smith"
                      heading11="UI/UX Designer"
                      image_src="/playground_assets/team6-200h.jpg"
                    ></MemberDetails>
                    <div className="home-container30">
                      <div className="home-container31">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="home-icon19"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="home-container32">
                        <svg viewBox="0 0 1024 1024" className="home-icon21">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                      <div className="home-container33">
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="home-icon23"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/profile">
                <a className="home-link6">
                  <div className="home-container34">
                    <MemberDetails
                      heading1="Jenna Kardi"
                      heading11="Founder and ceo"
                      image_src="/playground_assets/team4-200h.png"
                    ></MemberDetails>
                    <div className="home-container35">
                      <div className="home-container36">
                        <svg
                          viewBox="0 0 950.8571428571428 1024"
                          className="home-icon25"
                        >
                          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                        </svg>
                      </div>
                      <div className="home-container37">
                        <svg viewBox="0 0 1024 1024" className="home-icon27">
                          <path d="M783.104 239.957c-74.667-74.283-165.888-111.957-271.104-111.957-106.197 0-197.675 37.717-271.915 112-74.368 74.283-112.085 165.845-112.085 272 0 105.173 37.675 196.395 111.957 271.104 74.283 74.923 165.803 112.896 272.043 112.896 105.259 0 196.48-37.973 271.189-112.768 74.88-74.795 112.811-166.059 112.811-271.232 0-106.155-37.973-197.717-112.896-272.043zM722.859 722.901c-48.512 48.597-103.936 76.288-168.192 84.693v-210.261h85.333v-85.333h-85.333v-59.733c0-14.123 11.477-25.6 25.643-25.6h59.691v-85.333h-59.605c-31.659 0-58.069 11.648-79.232 35.072-21.163 23.339-31.829 51.84-31.829 85.675v49.92h-85.333v85.333h85.333v210.347c-64.939-8.32-120.576-36.053-168.832-84.651-58.667-59.051-87.168-128.085-87.168-211.029 0-83.883 28.459-153.088 87.125-211.627 58.453-58.581 127.659-87.040 211.541-87.040 82.987 0 151.979 28.501 210.987 87.168 59.008 58.539 87.68 127.744 87.68 211.499 0 82.816-28.715 151.851-87.808 210.901z"></path>
                        </svg>
                      </div>
                      <div className="home-container38">
                        <svg viewBox="0 0 1024 1024" className="home-icon29">
                          <path d="M382 554h88v382q-62-6-139-43t-123-83q62-34 113-110t61-146zM730 554h206q-10 100-66 188-50-24-90-79t-50-109zM154 742q-58-90-66-188h206q-10 54-50 109t-90 79zM642 554q10 70 61 146t113 110q-44 46-121 83t-141 43v-382h88zM382 470q-10-70-61-146t-113-110q44-46 121-83t141-43v382h-88zM642 470h-88v-382q62 6 139 43t123 83q-62 34-113 110t-61 146zM294 470h-206q10-100 66-188 50 24 90 79t50 109zM730 470q10-54 50-109t90-79q56 88 66 188h-206z"></path>
                        </svg>
                      </div>
                      <div className="home-container39">
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="home-icon31"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-section3">
          <div className="home-container40">
            <h6 className="home-text61 textSM">
              <span>ON THE COASTLINE</span>
            </h6>
            <h3 className="home-text63 healine">We are missing the summer</h3>
            <span className="home-text64 textXL">
              <span className="home-text65">
                We&apos;re waiting for the weather to warm up so that we can go
                to the coastline. We really miss the summertime, our second home
                the coastline.
              </span>
              <br></br>
            </span>
            <div className="home-services">
              <ServiceCard></ServiceCard>
              <div className="home-container41">
                <div className="home-container42">
                  <svg viewBox="0 0 1024 1024" className="home-icon33">
                    <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                  </svg>
                </div>
                <h1 className="home-text66 textXL">Grow your market</h1>
                <span className="home-text67">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
              <div className="home-container43">
                <div className="home-container44">
                  <svg viewBox="0 0 1024 1024" className="home-icon35">
                    <path d="M726 726v-172h-86v172h86zM554 726v-428h-84v428h84zM384 726v-300h-86v300h86zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-34 0-60-26t-26-60v-596q0-34 26-60t60-26h596z"></path>
                  </svg>
                </div>
                <h1 className="home-text68 textXL">Launch time</h1>
                <span className="home-text69">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </span>
              </div>
            </div>
            <div className="home-contact">
              <Label text="MESSAGE US"></Label>
              <h2 className="home-text70">Type in the bellow form</h2>
              <span className="home-text71 textXL">
                They say there&apos;s no future for the street rascals, nothing
                for them, leave them to fall. But it isn&apos;t always how you
                would like it to be, especially when you do nothing for
                yourself.
              </span>
              <a
                href="mailto:lars.rudbeck.bak@gmail.com?subject=Ronin Karate"
                className="home-link7"
              >
                <div className="home-form">
                  <h1 className="home-text72">Interesseret i en træning?</h1>
                  <span className="home-text73 textXL">
                    Complete this form and we will get back to you in 24 hours.
                  </span>
                  <span className="home-text74 textXS">FULL NAME</span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="home-textinput textSM input"
                  />
                  <span className="home-text75 textXS">EMAIL</span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="home-textinput1 textSM input"
                  />
                  <span className="home-text76 textXS">MESSAGE</span>
                  <textarea
                    cols="80"
                    rows="4"
                    disabled="true"
                    placeholder="Type a message"
                    className="home-textarea textSM textarea"
                  ></textarea>
                  <div className="home-container45">
                    <SecondaryButton
                      button="Send message"
                      rootClassName="secondary-button-root-class-name"
                    ></SecondaryButton>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="home-image8"
          />
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
          .home-container01 {
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
          .home-container02 {
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
          .home-container03 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: column;
          }
          .home-container04 {
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
          .home-container05 {
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
          .home-container06 {
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
          .home-container07 {
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
          .home-container08 {
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
          .home-image6 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
          }
          .home-section2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-container09 {
            width: 66%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text48 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            line-height: 2.5rem;
          }
          .home-text49 {
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .home-text50 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .home-growing-company-section {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image7 {
            width: 33%;
            object-fit: cover;
            margin-left: auto;
            margin-right: auto;
            border-radius: var(--dl-radius-radius-radius50);
          }
          .home-container10 {
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
          .home-container11 {
            flex: 0 0 auto;
            width: 4rem;
            height: 4rem;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .home-icon {
            fill: var(--dl-color-pimary-500);
            width: 24px;
            height: 24px;
          }
          .home-text51 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unitandhalf);
          }
          .home-text52 {
            color: var(--dl-color-secondary-400);
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unitandhalf);
          }
          .home-container12 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .home-icon02 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .home-text53 {
            color: var(--dl-color-secondary-400);
          }
          .home-container14 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .home-icon04 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .home-text54 {
            color: var(--dl-color-secondary-400);
          }
          .home-container16 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-pimary-700);
          }
          .home-icon07 {
            fill: var(--dl-color-pimary-500);
            width: 20px;
            height: 20px;
          }
          .home-text55 {
            color: var(--dl-color-secondary-400);
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 66%;
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text56 {
            color: #f97316ff;
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
          }
          .home-text58 {
            color: var(--dl-color-secondary-400);
            text-align: center;
          }
          .home-text59 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            margin-bottom: 0.25rem;
          }
          .home-text60 {
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .home-team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-container19 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-link3 {
            display: contents;
          }
          .home-container20 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .home-container21 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37bcf8;
          }
          .home-icon09 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec4999;
          }
          .home-icon13 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-link4 {
            display: contents;
          }
          .home-container25 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .home-container26 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container27 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #bd195d;
          }
          .home-icon15 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container28 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .home-icon17 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-link5 {
            display: contents;
          }
          .home-container29 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .home-container30 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container31 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37bcf8;
          }
          .home-icon19 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container32 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .home-icon21 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container33 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #bd195d;
          }
          .home-icon23 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-link6 {
            display: contents;
          }
          .home-container34 {
            width: 50%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .home-container35 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-unitandhalf);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-container36 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #37bcf8;
          }
          .home-icon25 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container37 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #4aa4e3ff;
          }
          .home-icon27 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container38 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #ec4999;
          }
          .home-icon29 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-container39 {
            flex: 0 0 auto;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #bd195d;
          }
          .home-icon31 {
            fill: var(--dl-color-gray-white);
            width: 18px;
            height: 18px;
          }
          .home-section3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-secondary-100);
          }
          .home-container40 {
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text61 {
            font-style: normal;
            font-weight: 700;
          }
          .home-text63 {
            color: var(--dl-color-gray-white);
          }
          .home-text64 {
            width: 80%;
            text-align: center;
            font-weight: 300;
            margin-bottom: 0.25rem;
          }
          .home-text65 {
            white-space: normal;
          }
          .home-services {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container41 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container42 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon33 {
            width: 24px;
            height: 24px;
          }
          .home-text66 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .home-text67 {
            color: rgba(100, 116, 139, 1);
            font-size: 1.25rem;
            text-align: center;
          }
          .home-container43 {
            flex: 0 0 auto;
            width: 30%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-container44 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #f2f5f9ff;
          }
          .home-icon35 {
            width: 24px;
            height: 24px;
          }
          .home-text68 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-unitandhalf);
            font-weight: 600;
          }
          .home-text69 {
            color: rgba(100, 116, 139, 1);
            font-size: 1.25rem;
            text-align: center;
          }
          .home-contact {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-text70 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-text71 {
            color: rgba(255, 255, 255, 0.75);
            width: 80%;
            text-align: center;
            font-weight: 300;
          }
          .home-link7 {
            display: contents;
          }
          .home-form {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            padding: var(--dl-space-space-twoandhalf);
            max-width: 700px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius50);
            flex-direction: column;
            text-decoration: none;
            background-color: var(--dl-color-pimary-800);
          }
          .home-text72 {
            color: var(--dl-color-secondary-400);
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2rem;
          }
          .home-text73 {
            color: rgba(100, 116, 139, 1);
          }
          .home-text74 {
            color: rgba(100, 116, 139, 1);
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.25rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textinput {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-textinput:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text75 {
            color: rgba(100, 116, 139, 1);
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.25rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textinput1 {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-textinput1:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px#4AA4E3;
          }
          .home-text76 {
            color: rgba(100, 116, 139, 1);
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.25rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textarea {
            color: rgba(148, 163, 184, 1);
            width: 100%;
            outline: 0;
            padding: var(--dl-space-space-triplequarter);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-textarea:focus {
            color: var(--dl-color-secondary-500);
            box-shadow: 0 0 0 2px #4aa4e3;
          }
          .home-container45 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image8 {
            top: auto;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: -1px;
            position: absolute;
            object-fit: cover;
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
            .home-section2 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-text48 {
              text-align: center;
            }
            .home-section3 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-container40 {
              width: 100%;
            }
            .home-services {
              align-items: center;
              flex-direction: column;
            }
            .home-container41 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .home-container43 {
              width: 100%;
              padding-bottom: var(--dl-space-space-doubleunit);
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
            .home-container04 {
              width: 100%;
            }
            .home-work-with-us {
              margin-top: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .home-container05 {
              width: 100%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container06 {
              width: 100%;
            }
            .home-container09 {
              width: 100%;
            }
            .home-growing-company-section {
              flex-direction: column;
            }
            .home-image7 {
              width: 100%;
            }
            .home-container10 {
              width: 100%;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-container18 {
              width: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container19 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .home-container20 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container25 {
              width: 50%;
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container29 {
              width: 50%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-container34 {
              width: 50%;
            }
            .home-form {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-container02 {
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
            .home-container10 {
              align-items: flex-start;
            }
            .home-container19 {
              align-items: center;
              flex-direction: column;
            }
            .home-text63 {
              text-align: center;
            }
            .home-text70 {
              text-align: center;
            }
            .home-text72 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
