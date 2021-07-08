import React , {useState} from 'react';
import AddHouseDeatils from './AddHouseDeatils';
import EditHouseDetails from './EditHouseDetails';
import { Alert } from 'react-bootstrap';




const HouseDetailsInput = (props) => {


    const [modalShow, setModalShow] = useState(false);

    const [HouseDeatils, setHouseDetails] = useState([]);

    const [isChickEdit, setIsChickEdit] = useState(false);

    const [editArraysHouseDetails, setEditArraysHouseDetails] = useState({});

        const InputArraysHouseDetailsAdd = (data) => {
                setHouseDetails([data, ...HouseDeatils]);
        };


        const InputArraysHouseDetailsEdit = (data) => {
          setHouseDetails(
            HouseDeatils.map((houseData) => {
              if(houseData.house === data.house){
                houseData.lowLatitude=data.lowLatitude;
                houseData.lowSphoot=data.lowSphoot;
                houseData.highLatitude=data.highLatitude;
                houseData.highSphoot=data.highSphoot;
              }
                  return houseData;
            })
          )

          setIsChickEdit(false);
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

          console.log("On submit click House details->>",JSON.stringify(HouseDeatils));

         const response = fetch("http://localhost:8080/api/save-house-details",{
            method: 'POST',
            body: JSON.stringify(HouseDeatils),
            headers: {'Content-Type': 'application/json'}

          })

          console.log(response);
          props.history.push('/horary-calculation/PlanetDetailsInput')

        }


        const handleRemoveItem = house => {
            //console.log("delete data-->",houseNo)
            setHouseDetails(HouseDeatils.filter(item => item.house !== house))
        }

        const handleResetItem = () => {
          setHouseDetails([]);
        }

        const handleEditItem = house => {
            setIsChickEdit(true);
            console.log("edit house no ",house);
         const arr =  HouseDeatils.filter(item => item.house === house)
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
                      <button type="button" className="btn btn-inverse-primary btn-rounded btn-icon pull-right" onClick={() => handleResetItem()} >
                        <i className="mdi mdi-reload btn-icon-prepend"></i>
                      </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                     {!isChickEdit && <AddHouseDeatils
                        show={modalShow}
                        onHide={() => setModalShow(false)}                                                                                                                                                          
                        puton={InputArraysHouseDetailsAdd}
                        /> }

                       {isChickEdit && <EditHouseDetails
                        show={modalShow}
                        onHide={() => setModalShow(false)}                                                                                                                                                          
                        puton={InputArraysHouseDetailsEdit}
                        editvalue={editArraysHouseDetails}

                        /> }                                                                                                                                              
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
                               
                            <tr key={input.house}>
                            <td >{input.house}</td>
                            <td> {input.lowLatitude}</td>
                            <td>{input.lowSphoot}</td>
                            <td> {input.highLatitude}</td>
                            <td> {input.highSphoot} </td>
                            <td> 
                            <button type="button" onClick={() =>handleEditItem(input.house)} className="btn btn-gradient-dark btn-icon-text">
                                    Edit
                             <i className="mdi mdi-file-check btn-icon-append"></i>                          
                             </button>
                             <button type="button" onClick={() =>handleRemoveItem(input.house)} className="btn btn-gradient-danger btn-icon-text">
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