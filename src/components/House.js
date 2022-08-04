import React from "react";


function House({address}){


    const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

    if (address === undefined) {
        return <div>Loading...</div>
    }

    return(
        <div className='col-md-3'>
            <img id="house-image" src={address?.house?.image_url} />
            <h3>{address?.house?.house_name}</h3>
            <strong>Address:</strong>
            <p>
                {address?.street_name}<br />
                {address?.city}, {address?.state} {address?.zip_code}
            </p>
        </div>
    )
}
export default House