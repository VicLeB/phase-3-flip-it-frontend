import React from "react";

function House(){
    
    const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

    return(
        <div className='col-md-3'>
            <h2>House</h2>
            <form>
                <div className='form-group'>
                    <label for='house-name'>House Name</label>
                    <input type='text' placeholder='House Nickname' />
                </div>
                <div className='form-group'>
                    <label for='house-image'>Image</label>
                    <input type='text' placeholder='Image URL' />
                </div> 
                <div className='form-group'>
                    <label for='house-address'>Address</label>
                    <input type='text' placeholder='Street Address' />
                </div>   
                <div className='form-group'>
                    <input id='city' type='text' name='city' placeholder='City' />
                    <select id='state' type='text' name='state'>
                        {states.map((state) => <option value={state}>{state}</option>)}
                    </select>
                    <input id='zip' type='text' placeholder='Zip Code' />
                </div>                             
            </form>
        </div>
    )
}
export default House