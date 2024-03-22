import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <section className="hero">
        <div className="hero__container container">
          <div className="hero__cat">
            <img src="assets/img/hero/1.png" alt="1" />
            <div className="hero__message hero-message">
              <img
                className="hero-message__background"
                src="assets/img/hero/hero-message.png"
                alt=""
              />
              <p className="hero-message__text"></p>
            </div>
          </div>
          <div className="hero__col">
            <div className="hero__top">
              <img
                className="hero__suptitle"
                src="assets/img/hero/hero-suptitle.png"
                alt=""
              />
              <div className="hero__lang lang">
                <ul className="lang__list">
                  {/* <li className="lang__item" onclick="window.location.href = '/'">
                    EN
                  </li>
                  <li className="lang__item" onclick="window.location.href='/cn/'">
                    CN
                  </li> */}
                </ul>
              </div>
            </div>
            <h1 className="hero__title">
              NEVER FALL IN<br />LOVE WITH A<br /><span>meme coin</span>
            </h1>
            <div className="hero__row">
              <a
                className="hero__btn hero__btn_lg"
                href="https://raydium.io/swap/?outputCurrency=AcY6RWuWKM5NU7BeSE4c4zQxBZpyU7pTLNF3g5DTWUC2"
                >GET $wally</a>
              <div className="hero__socials">
                <a
                  className="hero__btn hero__btn_sm"
                  href="https://twitter.com/wallyonsol"
                >
                 <img src="assets/svg/twitter.svg"/>
                </a>
                <a
                  className="hero__btn hero__btn_sm"
                  href="https://t.me/wallysolana"
                >
                  <img src='assets/svg/telegram.svg'/>
                </a>
                <a className="hero__btn hero__btn_sm" href="https://dextools.io/">
                  <img src='assets/svg/dextool.svg'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="community">
        <div className="marque community__marque community__marque_top">
          <div>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
            <span>$wally</span>
            <span className="text-yellow">unexpected</span>
          </div>
        </div>
        <div className="community__container container">
          <div className="community__col">
            <h2 className="community__title">YOU JUST GOT wally'D</h2>
            <p className="community__text">
              Unlike the deceptive wally you know, investing in $wally flips
              the script. Here, the you've been wally'd effect works in your
              favor, offering a rare opportunity where what seems too good to be
              true is actually genuine. $wally prides itself on a stark
              realism, it's based on enduring the storms, outlasting the
              illusions to remain the last one standing amidst the market's ebb
              and flow. In this world of fake hype, jeety ass developers and
              false promises, $wally is your beacon of truth, proving that
              sometimes, a wally can indeed lead you to treasure.
            </p>
            <div className="community__btns">
              <a
                className="community__btn community__btn_red"
                href="https://t.me/wallysolana"
              >
               <img src='assets/svg/telegram1.svg'/>
                Join Telegram
              </a>
              <a
                className="community__btn community__btn_gray"
                href="https://twitter.com/wallyonsol"
              >
                <img src='assets/svg/twitter1.svg'/>
              </a>
            </div>
          </div>
          <img
            className="community__illustration"
            src="/assets/img/community/5.png"
            alt="rocket"
          />
        </div>
        <div className="marque community__marque community__marque_bottom">
          <div>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
            <span>$wally</span>
            <span className="text-blue">+283%</span>
            <span>$wally</span>
            <span className="text-blue">+1293%</span>
            <span>$wally</span>
            <span className="text-blue">+9238%</span>
            <span>$wally</span>
            <span className="text-blue">+567%</span>
            <span>$wally</span>
            <span className="text-blue">+930%</span>
            <span>$wally</span>
            <span className="text-blue">+330%</span>
          </div>
        </div>
      </section>
      <div className="tokenomics">
        <div className="tokenomics__container container">
          <img
            className="tokenomics__boat"
            src="/assets/img/tokenomics/1.png"
            alt=""
          />
          <div className="tokenomics__col">
            <span className="tokenomics__badge">Total supply: 1 B</span>
            <h2 className="tokenomics__title">Tokenomics</h2>
            <div className="tokenomics__items">
              <div className="tokenomics__star">
                <img src="/assets/img/tokenomics/tokenomics-star.svg" alt="" />
                <span>0%<br />TAX</span>
              </div>
              <img
                className="tokenomics__items-bg"
                src="/assets/img/tokenomics/tokenomics-items-bg.png"
                alt=""
              />
              <div className="tokenomics__items-inner">
                <div className="tokenomics__item">
                  <span className="tokenomics__label"> LP </span>
                  <strong className="tokenomics__value">Burned</strong>
                </div>
                <div className="tokenomics__item">
                  <span className="tokenomics__label"> MINT </span>
                  <strong className="tokenomics__value">Revoked</strong>
                </div>
                <div className="tokenomics__item">
                  <span className="tokenomics__label"> LP </span>
                  <strong className="tokenomics__value">20 SOL</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="marque tokenomics__marque tokenomics__marque_bottom">
          <div>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
            <span>$wally</span>
            <span className="text-green">+283%</span>
            <span>$wally</span>
            <span className="text-green">+1293%</span>
            <span>$wally</span>
            <span className="text-green">+9238%</span>
            <span>$wally</span>
            <span className="text-green">+567%</span>
            <span>$wally</span>
            <span className="text-green">+930%</span>
            <span>$wally</span>
            <span className="text-green">+330%</span>
          </div>
        </div>
      </div>
      <section className="ready">
        <img className="ready-content" src="/assets/img/ready/website 2.png" alt="ready"/>
      </section>
      <div className="marque ">
        <div>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
          <span>$wally</span>
          <span className="text-green">+283%</span>
          <span>$wally</span>
          <span className="text-green">+1293%</span>
          <span>$wally</span>
          <span className="text-green">+9238%</span>
          <span>$wally</span>
          <span className="text-green">+567%</span>
          <span>$wally</span>
          <span className="text-green">+930%</span>
          <span>$wally</span>
          <span className="text-green">+330%</span>
        </div>
      </div>
      <section className="about">
       <img className="about-content" src="/assets//img/about/website 3.png"/>
      </section>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__col">
            <a className="footer__logo" href="/">THE wally</a>
            <div className="footer__socials">
              <a
                className="footer__btn footer__btn_sm"
                href="https://twitter.com/wallyonsol"
              >
                {/* <svg
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M20.6383 0.561523H24.6249L15.8716 10.746L26.0983 24.5615H18.0729L11.7896 16.166L4.59627 24.5615H0.6096L9.88293 13.6685L0.0895996 0.561523H8.31427L13.9909 8.2309L20.6383 0.561523ZM19.2429 22.1704H21.4529L7.15293 2.86411H4.77827L19.2429 22.1704Z"
                      fill="currentColor"
                    />
                  </g>
                </svg> */}
              </a>
              <a className="footer__btn" href="https://t.me/wallysolana">
                {/* <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2633 3.96034C23.2633 3.96034 25.4555 3.13971 25.2728 5.13266C25.2119 5.9533 24.6639 8.82548 24.2376 11.9322L22.7761 21.1349C22.7761 21.1349 22.6543 22.4831 21.5582 22.7176C20.462 22.952 18.8179 21.8969 18.5134 21.6624C18.2698 21.4866 13.9463 18.8489 12.4239 17.5593C11.9976 17.2076 11.5104 16.5042 12.4848 15.6836L18.8788 9.82199C19.6095 9.11858 20.3403 7.47733 17.2955 9.47028L8.77017 15.0388C8.77017 15.0388 7.79585 15.625 5.96902 15.0974L2.0108 13.9251C2.0108 13.9251 0.54931 13.0459 3.04602 12.1666C9.13557 9.41162 16.6257 6.59804 23.2633 3.96034Z"
                    fill="currentColor"
                  />
                </svg> */}
                Telegram
              </a>
            </div>
            <p className="footer__copyright">2024 all wallyes reserved</p>
          </div>
          <div className="footer__socials">
            <a
              className="footer__btn footer__btn_sm"
              href="https://twitter.com/wallyonsol"
            >
              {/* <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M20.6383 0.561523H24.6249L15.8716 10.746L26.0983 24.5615H18.0729L11.7896 16.166L4.59627 24.5615H0.6096L9.88293 13.6685L0.0895996 0.561523H8.31427L13.9909 8.2309L20.6383 0.561523ZM19.2429 22.1704H21.4529L7.15293 2.86411H4.77827L19.2429 22.1704Z"
                    fill="currentColor"
                  />
                </g>
              </svg> */}
            </a>
            <a className="footer__btn" href="https://t.me/wallysolana">
              {/* <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2633 3.96034C23.2633 3.96034 25.4555 3.13971 25.2728 5.13266C25.2119 5.9533 24.6639 8.82548 24.2376 11.9322L22.7761 21.1349C22.7761 21.1349 22.6543 22.4831 21.5582 22.7176C20.462 22.952 18.8179 21.8969 18.5134 21.6624C18.2698 21.4866 13.9463 18.8489 12.4239 17.5593C11.9976 17.2076 11.5104 16.5042 12.4848 15.6836L18.8788 9.82199C19.6095 9.11858 20.3403 7.47733 17.2955 9.47028L8.77017 15.0388C8.77017 15.0388 7.79585 15.625 5.96902 15.0974L2.0108 13.9251C2.0108 13.9251 0.54931 13.0459 3.04602 12.1666C9.13557 9.41162 16.6257 6.59804 23.2633 3.96034Z"
                  fill="currentColor"
                />
              </svg> */}
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
