import { useSelector } from "react-redux";
import "./Usercontent.css";
import { Map } from '@googlemaps/react-wrapper'

const Usercontent = () => {
    const { selectedUserDetail } = useSelector((state) => state.selectedUserDetail);
    const { section } = useSelector((state) => state.sectionSelected);

    return (<>
        {section === "Profile" ? <div className="Usercontent">
          <div className="Profile-content">
            <div className="personal-details">
                <img className="profile-picture" src={selectedUserDetail.profilepicture} />
                <div  className="personal-info">{selectedUserDetail.name}</div>
                <div className="personal-info"><p className="personal-title">Username : </p><p className="personal-value">{selectedUserDetail.username}</p></div>
                <div className="personal-info"><p className="personal-title">e-mail : </p><p className="personal-value">{selectedUserDetail.email}</p></div>
                <div className="personal-info"><p className="personal-title">Phone : </p><p className="personal-value">{selectedUserDetail.phone}</p></div>
                <div className="personal-info"><p className="personal-title">Website : </p><p className="personal-value">{selectedUserDetail.website}</p></div>
                <div className="border-bottom"></div>
            </div>
            <div className="company-details">
                <p className="company-title">Company</p>
                <div className="company-info"><p className="personal-title">Name : </p><p className="personal-value">{selectedUserDetail.company.name}</p></div>
                <div className="company-info"><p className="personal-title">catchPhrase : </p><p className="personal-value">{selectedUserDetail.company.catchPhrase}</p></div>
                <div className="company-info"><p className="personal-title">bs : </p><p className="personal-value">{selectedUserDetail.company.bs}</p></div>
            </div>
          </div>
          <div className="border-right"></div>
          <div className="address-details">
            <div className="address-title">Address :</div>
            <div className="personal-info"><p className="personal-title">Street : </p><p className="personal-value">{selectedUserDetail.address.street}</p></div>
            <div className="personal-info"><p className="personal-title">Suite : </p><p className="personal-value">{selectedUserDetail.address.suite}</p></div>
            <div className="personal-info"><p className="personal-title">City : </p><p className="personal-value">{selectedUserDetail.address.city}</p></div>
            <div className="personal-info"><p className="personal-title">zipcode : </p><p className="personal-value">{selectedUserDetail.address.zipcode}</p></div>
            <img className="map-image" src={require("../../../images/google-map.jpg")} />
            <div className="map-lat-long">
            <div className="map-lat"><p className="map-value-title">Lat : </p><span className="map-value">{selectedUserDetail.address.geo.lat}</span></div>
            <div className="map-long"><p className="map-value-title">Long : </p><span className="map-value">{selectedUserDetail.address.geo.lng}</span></div>
            </div>
            
            {/*<div>{selectedUserDetail.address.geo}</div>*/}
          </div>
          
          <div></div>
        </div> : <div className="coming-soon-text">Coming Soon</div>}
        </>
    )
}

export default Usercontent