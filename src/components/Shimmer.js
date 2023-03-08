import {SHIMMER_CARD_COUNT} from "../config"
const ShimmerCard = () =>{
    return(
    <div className="shimmer-card">
        <div className="shimmer-img animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate"></div>
        <div className="shimmer-details stroke animate"></div>
    </div>
    )
}
const Shimmer = () => {
    return(
      
        <div className="shimmer-container">
        {new Array(8).fill().map((element, index) => {
          return <ShimmerCard key={index} />;
        })}
      </div>

    )
}
export default Shimmer;