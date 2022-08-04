import React from "react";
import Popup from 'reactjs-popup';
import { useRecoilState } from 'recoil'
import {theFormHouseName, theFormHouseImage, theFormHouseAddress, theFormHouseCity, theFormHouseState, theFormHouseZip} from '../atoms'

function CreateNewHome(){

    const [formHouseName, setFormHouseName] = useRecoilState(theFormHouseName);
    const [formHouseImage, setFormHouseImage] = useRecoilState(theFormHouseImage);
    const [formHouseAddress, setFormHouseAddress] = useRecoilState(theFormHouseAddress);
    const [formHouseCity, setFormHouseCity] = useRecoilState(theFormHouseCity);
    const [formHouseState, setFormHouseState] = useRecoilState(theFormHouseState);
    const [formHouseZip, setFormHouseZip] = useRecoilState(theFormHouseZip);

    const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

    function houseFormSubmit(e){
        (e).preventDefault();
        fetch("http://localhost:9292/houses",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                house_name: formHouseName,
                image_url: formHouseImage,
                street_name: formHouseAddress,
                city:formHouseCity,
                state: formHouseState,
                zip_code:formHouseZip,
            })
        })
    }


    return(
        <div className="col-md-8">
            <Popup trigger={<button id="new-house-button" className="btn btn-primary">Create a New House</button>} modal>
                <div id="popup-contents">
                    <form onSubmit={houseFormSubmit}>
                        <div className='form-group'>
                            <label htmlFor='house-name'>House Name</label>
                            <input type='text' placeholder='House Nickname' onChange={(e) => setFormHouseName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='house-image'>Image</label>
                            <input type='text' placeholder='Image URL' onChange={(e) => setFormHouseImage(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='house-address'>Address</label>
                            <input type='text' placeholder='Street Address' onChange={(e) => setFormHouseAddress(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <input id='city' type='text' name='city' placeholder='City' onChange={(e) => setFormHouseCity(e.target.value)} />
                            <select id='state' type='text' name='state' onChange={(e) => setFormHouseState(e.target.value)} >
                                {states.map((state) => <option value={state}>{state}</option>)}
                            </select>
                            <input id='zip' type='text' placeholder='Zip Code' onChange={(e) => setFormHouseZip(e.target.value)} />
                        </div>
                        <button name="submit" type="submit" className="btn btn-primary">Create House</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
}
export default CreateNewHome