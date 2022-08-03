import React from "react";
import Popup from 'reactjs-popup';

function CreateNewHome(){

    const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

    return(
        <div className="col-md-8">
            <Popup trigger={<button id="new-house-button" className="btn btn-primary">Create a New House</button>} modal>
                <div id="popup-contents">
                    <form>
                        <div className='form-group'>
                            <label htmlFor='house-name'>House Name</label>
                            <input type='text' placeholder='House Nickname' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='house-image'>Image</label>
                            <input type='text' placeholder='Image URL' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='house-address'>Address</label>
                            <input type='text' placeholder='Street Address' />
                        </div>
                        <div className='form-group'>
                            <input id='city' type='text' name='city' placeholder='City' />
                            <select id='state' type='text' name='state'>
                                {states.map((state) => <option value={state}>{state}</option>)}
                            </select>
                            <input id='zip' type='text' placeholder='Zip Code' />
                        </div>
                        <button name="submit" type="submit" className="btn btn-primary">Create House</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
}
export default CreateNewHome