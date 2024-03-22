import Divider from './Divider'

type Props = {}

const Tokenomics = (_props: Props) => {
  return (
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
          <Divider/>
            </div>

      </div>
  )
}

export default Tokenomics