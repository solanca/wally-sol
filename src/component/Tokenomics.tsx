import Divider from "./Divider";
import {motion} from 'framer-motion'
type Props = {};

const Tokenomics = (_props: Props) => {
  return (
    <div className="tokenomics">
      <div className="tokenomics__container container">
      <motion.div
              animate={{
                y: [-30, 0, -30],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              {/* <img src="assets/website assets/3.png" alt="" /> */}
        <img
          className="tokenomics__boat"
          src="/assets/img/tokenomics/1.png"
          // width={"30%"}
          alt=""
        />
            </motion.div>
      
        <div className="tokenomics__col">
          <span className="tokenomics__badge">Total supply: 1 T</span>
          <h2 className="tokenomics__title">Wallynomics</h2>
          <div className="tokenomics__items">
            <div className="tokenomics__star">
              <img src="/assets/img/tokenomics/tokenomics-star.svg" alt="" />
              <span>
                0%
                <br />
                TAX
              </span>
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
        <Divider />
      </div>
    </div>
  );
};

export default Tokenomics;
