import React, {useState, useEffect} from 'react';
import './App.css';
import HousePreview from './components/HousePreview';

function App() {
  const [houses, setHouses] = useState([])

  useEffect(()=> {
    fetch('http://localhost:9292/houses')
    .then(resp => resp.json())
    .then(setHouses)
  })

  const houseCards= houses.map(house =>{
    return <HousePreview key={house.id} house={house}/>
  })

  const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

  return (
    <div className="App">
      <div className='container'>

        <div className='header'>
          <div className='row'>
            <div className='col-md-4'>
              <h1>Flip-it</h1>
            </div>
            <div className='col-md-8'>

            </div>
          </div>
        </div>


        <div className='other-houses'>

          <div className='other-houses-search'>
            <div className='row'>
              <div className='col-md-4'>
                <form>
                  <div className='form-group house-search'>
                    <input type='text' className='form-control' placeholder='Search for other Houses' />
                  </div>
                </form>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12' id='house-preview-container'>
                <div className='row'>
                  {houseCards}
                </div>
              </div>
            </div>
          </div>

          <div className='other-houses-search-results'>
            <div className='row'>
              <div className='col-md-12'>
                  <div className='row'>

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

                    <div className='col-md-3'>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <div id='room-title'>
                            <h2>Rooms</h2>
                          </div>
                        </div>
                        <div className='col-sm-6'>
                          <div id='room-add-button'>
                            <button className='btn btn-primary'>Add Room</button>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div id='rooms-container' className='col-sm-12'>
                          <div className='room-listing'>
                            <a href='./#'>Kitchen</a>
                          </div>
                          <div className='room-listing'>
                            <a href='./#'>Guest Bedroom</a>
                          </div>
                          <div className='room-listing'>
                            <a href='./#'>Master Bedroom</a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className='col-md-3'>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <div id='project-title'>
                            <h2>Projects</h2>
                          </div>
                        </div>
                        <div className='col-sm-6'>
                          <div id='project-add-button'>
                            <button className='btn btn-primary'>Add Project</button>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div id='projects-container' className='col-sm-12'>
                          <h3>Kitchen Projects</h3>
                          <div className='project-listing'>
                            <a href='./#'>Fix Sink</a>
                          </div>
                          <div className='project-listing'>
                            <a href='./#'>Install Stove</a>
                          </div>
                          <div className='project-listing'>
                            <a href='./#'>Replace Countertop</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className='row'>
                        <div className='col-sm-12'>
                          <form>
                            <div class="form-group">
                              <label for='project-name'>Project Name</label>
                              <input type="text" id='project-name' class="form-control" value='Fix Sink' />
                            </div>
                            <div class="form-group">
                              <label for='project-description'>Project Description</label>
                              <textarea id='project-description' rows='5' class="form-control" value='The faucet is leaking so I need to replace it.' />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-12'>
                          <div className='row'>
                            <div className='col-sm-6'>
                              <p>Tools Needed</p>
                            </div>
                            <div className='col-sm-6'>
                              <button className='btn btn-primary'>Add a Tool</button>
                            </div>
                          </div>
                          <div id='tools-list-container'>
                            <div className='row'>
                              <div className='col-sm-12 single-tool'>
                                <div className='row'>
                                  <div className='col-sm-3 tool-image-container'>
                                    <img className='tool-image' src='https://cdn-icons-png.flaticon.com/512/2505/2505264.png' alt='tool' />
                                  </div>
                                  <div className='col-sm-9'>
                                    <p>Hammer</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-12 single-tool'>
                                <div className='row'>
                                  <div className='col-sm-3 tool-image-container'>
                                    <img className='tool-image' src='https://www.iconpacks.net/icons/1/free-wrench-icon-951-thumb.png' alt='tool' />
                                  </div>
                                  <div className='col-sm-9'>
                                    <p>Wrench</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-12 single-tool'>
                                <div className='row'>
                                  <div className='col-sm-3 tool-image-container'>
                                    <img className='tool-image' src='https://static.thenounproject.com/png/45421-200.png' alt='tool' />
                                  </div>
                                  <div className='col-sm-9'>
                                    <p>Screwdriver</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-12 single-tool'>
                                <div className='row'>
                                  <div className='col-sm-3 tool-image-container'>
                                    <img className='tool-image' src='https://static.thenounproject.com/png/295351-200.png' alt='tool' />
                                  </div>
                                  <div className='col-sm-9'>
                                    <p>Blowtorch</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-12'>
                          <div className='row'>
                            <div className='col-sm-6'>
                              <p>Parts Needed</p>
                            </div>
                            <div className='col-sm-6'>
                              <button className='btn btn-primary'>Add a Part</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id='parts-list-container'>
                        <div className='row'>
                          <div className='col-sm-12'>
                            <div className='row'>
                              <div className='col-sm-3 part-image-container'>
                                <img className='part-image' src='https://cdn-icons-png.flaticon.com/512/3096/3096626.png' alt='tool' />
                              </div>
                              <div className='col-sm-6'>
                                <p>Faucet</p>
                              </div>
                              <div className='col-sm-3 part-price'>
                                <p>$99.99</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-sm-12'>
                          <p><strong>Total Cost: $99.99</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
