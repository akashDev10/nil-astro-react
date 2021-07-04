import React , {useState,useEffect} from 'react';
import MyVerticallyCenteredModalHouseDeatils from './MyVerticallyCenteredModalHouseDeatils';
import { Alert } from 'react-bootstrap';
import { safeUseLayoutEffect } from 'react-table';



const HouseDetailsInput = () => {


    const [modalShow, setModalShow] = useState(false);

    const [HouseDeatils, setHouseDetails] = useState([]);

    const [isChickEdit, setIsChickEdit] = useState(false);

    const [editArraysHouseDetails, setEditArraysHouseDetails] = useState({});


        const InputArraysHouseDetails = (data) => {


              if(isChickEdit){

              console.log("999999999999999999999-->", isChickEdit);
                
                handleRemoveItem(data.houseNo);
                setIsChickEdit(false);
                console.log("data house ->>",HouseDeatils)
                  setHouseDetails(previousState => ({
                    HouseDeatils: [...previousState, data]
                }));

              }else {

                setHouseDetails([data, ...HouseDeatils]);
              }

             

            

            

        };

        const NoData = () => {

            return (
            <Alert variant="success">
            <Alert.Heading>Welcome to second Stage</Alert.Heading>
            <p>
            please enter house details to proceed
            </p>
            <hr />
                <p className="mb-0">
                Let us know if any bug occur. Email us : Akash.chakraborty10@gmail.com 
                </p>
            </Alert>
            )

        }

        const onSubmitHouseDetails = () => {



        }


        const handleRemoveItem = houseNo => {
            console.log("delete data-->",houseNo)
            setHouseDetails(HouseDeatils.filter(item => item.houseNo !== houseNo))
        }

        const handleEditItem = houseNo => {
            setIsChickEdit(true);
            console.log("edit house no ",houseNo);
         const arr =  HouseDeatils.filter(item => item.houseNo === houseNo)
         console.log("edit house no ",arr);
         setModalShow(true)
         setEditArraysHouseDetails(arr[0])

            

        }
    


   

    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">House Details</h4>
                <p className="card-description"> Please Enter House Details
                </p>
                <button type="button" className="btn btn-gradient-success btn-icon-text" variant="primary" onClick={() => setModalShow(true) && setIsChickEdit(false)}>
                        <i className="mdi mdi-note-plus btn-icon-prepend"></i>                                                    
                        Add
                      </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                      <MyVerticallyCenteredModalHouseDeatils
                        show={modalShow}
                        onHide={() => setModalShow(false)}                                                                                                                                                          
                        puton={InputArraysHouseDetails}
                        editvalue={editArraysHouseDetails}
                        ischickedit = {isChickEdit.toString()}
                        />                                                                                                                                               
                        <hr/>
                        {HouseDeatils.length === 0 && <NoData/>}
                        {HouseDeatils.length > 0 &&
                <div className="table-responsive">
                    <form className="forms-sample" onSubmit={onSubmitHouseDetails}>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                      <th>House No</th>
                        <th>Lower Latitude</th>
                        <th>Lower Longitude Of House</th>
                        <th>Higher Latitude</th>
                        <th>Higher Longitude Of House</th>
                        <th>EDIT/DELETE</th>
                      </tr>
                    </thead>
                    <tbody>
                    {console.log("whatssss up",HouseDeatils)}
                        {HouseDeatils.map(input => 
                               
                            <tr key={input.houseNo}>
                            <td >{input.houseNo}</td>
                            <td> {input.lowerLatitude}</td>
                            <td>{input.lowerLongitudeOfHouse}</td>
                            <td> {input.higherLatitude}</td>
                            <td> {input.higherLongitudeOfHouse} </td>
                            <td> 
                            <button type="button" onClick={() =>handleEditItem(input.houseNo)} className="btn btn-gradient-dark btn-icon-text">
                                    Edit
                             <i className="mdi mdi-file-check btn-icon-append"></i>                          
                             </button>
                             <button type="button" onClick={() =>handleRemoveItem(input.houseNo)} className="btn btn-gradient-danger btn-icon-text">
                                <i className="mdi mdi-delete-forever btn-icon-prepend"></i>                                                    
                                    Delete
                                </button>
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
                  <hr/>
                  <button type="submit" className="btn btn-gradient-primary btn-icon-text">
                        <i className="mdi mdi-file-check btn-icon-prepend"></i>
                        Submit
                      </button>
                     </form>
                    </div> }
              </div>
            </div>
          </div>
    );

};

export default HouseDetailsInput;