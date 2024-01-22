import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://th.bing.com/th/id/OIP.DkyrDCX0QCz62j_LBNV3rAHaEG?rs=1&pid=ImgDetMain"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Sindhri Hotel and Restaurent</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">2000Rs</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">Check availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
