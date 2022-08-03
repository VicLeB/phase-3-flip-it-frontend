import React from "react";


function House({address}){


    const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

    if (address === undefined) {
        return <div>Loading...</div>
    }

    return(
        <div className='col-md-3'>
            <h2>House</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='house-name'>House Name</label>
                    <input type='text' placeholder={address?.house?.house_name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='house-image'>Image</label>
                    <input type='text' placeholder={address?.house?.image_url} />
                </div>
                <div className='form-group'>
                    <label htmlFor='house-address'>Address</label>
                    <input type='text' placeholder={address?.street_name} />
                </div>
                <div className='form-group'>
                    <input id='city' type='text' name='city' placeholder={address?.city} />
                    <select id='state' type='text' name='state'>
                        {states.map((state) => <option key= {state} value={state}>{address?.state}</option>)}
                    </select>
                    <input id='zip' type='text' placeholder={address?.zip_code} />
                </div>
            </form>
        </div>
    )
}
export default House