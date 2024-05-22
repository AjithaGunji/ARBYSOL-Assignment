import './project.css'

export function Durga() {
    return (
        <div className="container">
            <div className='navbar'>
            <span className='heading'>New Enrollment</span>
            <span className="fields"><span className='star'>*</span>Required Fields</span>
            </div>
            <hr />

            <div className="child">
                <label id='data'>Select Clinic <span className='star'>*</span> </label>

                <select id='selecter' > 
                    <option value="-1" >Select Clinic*</option>
                    <option value="Appolo Clinic">Appolo Clinic</option>
                    <option value="MedPluse Clinic">MedPluse Clinic</option>
                    <option value="Medico Clinic">Medico Clinic</option>
                    <option value=" Yasoda Clinic">Yasoda Clinic</option>
                </select>
            </div>

            <div className="child">
                <label id='data'>Select Device <span className='star'>*</span> </label>

                <select id='selecter'> 
                    <option value="-1">First Select a Device</option>
                    <option value="Device1">Device1</option>
                    <option value="Device2">Device2</option>
                    <option value="Device3">Device3</option>
                    <option value="Device4">Device4</option>
                </select>
            </div>

            <div className="child">
                <label id='data'>Enrollment Type <span className='star'>*</span> </label>

                <select id='selecter'> 
                    <option value="-1">First Select a Type</option>
                    <option value="Type1">Type1</option>
                    <option value="Type2">Type2</option>
                    <option value="Type3">Type3</option>
                    <option value="Type4">Type4</option>
                </select>
            </div>
            <span className='crtiteria'>Dual Modality Criteria</span>
            <div>
            <label id='data'>Enter Patient info</label>
                <div className='inbox'>
                    <label>Last Name<span className='star'>*</span> </label>
                    <input type="text" placeholder='Last Name *' />
                    <label>First Name<span className='star'>*</span> </label>
                    <input type="text" placeholder='First Name *' />
                    <label>Middle Name</label>
                    <input type="text" placeholder='First Name *' />
                    <label>Date Of Birth<span className='star'>*</span> </label>
                    <input type="date" placeholder='First Name *' />

                    <div>
                        <label id='hello'>Gender<span className='star'>*</span></label>
                        <input type="radio" value="Male" name='gender'/>Male
                        <input type="radio" value="Female" name='gender'/>Female

                        <label id='hello'>Has Pacemarker<span className='star'>*</span></label>
                        <input type="radio" value="N/A" name='Has'/>N/A
                        <input type="radio" value="Yes" name='Has'/>Yes
                        <input type="radio" value="No" name='Has'/>No

                        <label id='hello'>Has ICD<span className='star'>*</span></label>
                        <input type="radio" value="N/A" name='Has'/>N/A
                        <input type="radio" value="Yes" name='Has'/>Yes
                        <input type="radio" value="No" name='Has'/>No

                    </div>
                    <div>
                        <label>Address Line 1<span className='star'>*</span></label>
                        <input type="text" name="" id="holder" placeholder='Address Line 1' />
                        <br />
                        <label>Address Line 2   </label>
                        <input type="text" name="" id="holder" placeholder='Address Line 1' />
                    </div>
                    <div>
                    <label id='hello'>City<span className='star'>*</span></label>
                        <input type="text" name="" id="hii" placeholder='City' />
                        <label id='group'>State<span className='star'>*</span></label>
                        <select id='state'> 
                            <option value="-1">State</option>
                            <option value="ANDHRA">ANDHRA</option>
                            <option value="TELANGANA">TELANGANA</option>
                            <option value="TAMILNADU">TAMILNADU</option>
                            <option value="BHIHAR">BHIHAR</option>
                        </select>

                        <div className='zip-phone'>
                    <div className='zipcode'>
                    <label id='ip'>Zip<span className='star'>*</span></label>
                        <input type="text" name="" id="ip" placeholder='Zip*' />
                        <input type="text" name="" id="ip" placeholder='USA*' />
                    </div>
                    
                   
                      <span className='phones'> <label htmlFor="">Primary Number<span className='star'>*</span></label>
                        <input type="phone" placeholder='Primary Number' />
                        <label htmlFor="">Secondary Number</label>
                        <input type="phone" placeholder='Secondary Number' /></span>
                       
                    </div>
                 
                    </div>
                
                </div>
                
            </div>


            <div className="child">
                <label id='data'>Ordering Provider <span className='star'>*</span> </label>

                <select id='selecter'> 
                    <option value="-1">First Select a Clinic</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                </select>
            </div>
            <div className="child">
                <label id='data'>Reading Provider <span className='star'>*</span> </label>

                <select id='selecter'> 
                    <option value="-1">First Select a Clinic</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                </select>
            </div>
            <div className="child">
                <label id='data'>Referring Provider <span className='star'>*</span> </label>

                <select id='selecter'> 
                    <option value="-1">Referring Provider Name</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                    <option value="None">None</option>
                </select>
            </div>
            <button className='save-button'>
                Save

            </button>
        </div>
    )
}