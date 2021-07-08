import React , {useState} from 'react';
import AddPlanetDetails from './AddPlanetDetails';
import EditPlanetDetails from './EditPlanetDetails';
import { Alert } from 'react-bootstrap';




const PlanetDetailsInput = () => {


    const [modalShow, setModalShow] = useState(false);

    const [PlanetDeatils, setPlanetDetails] = useState([]);

    const [isChickEdit, setIsChickEdit] = useState(false);

    const [editArraysPlanetDetails, setEditArraysPlanetDetails] = useState({});

        const InputArraysPlanetDetailsAdd = (data) => {
                setPlanetDetails([data, ...PlanetDeatils]);
        };


        const InputArraysPlanetDetailsEdit = (data) => {
          setPlanetDetails(
            PlanetDeatils.map((planetData) => {
              if(planetData.planet === data.planet){
                planetData.lowDate=data.lowDate;
                planetData.lowSphoot=data.lowSphoot;
                planetData.highDate=data.highDate;
                planetData.highSphoot=data.highSphoot;
              }
                  return planetData;
            })
          )

          setIsChickEdit(false);
        };



        const NoData = () => {

            return (
            <Alert variant="success">
            <Alert.Heading>Welcome to second Stage</Alert.Heading>
            <p>
            please enter planet details to proceed
            </p>
            <hr />
                <p className="mb-0">
                Let us know if any bug occur. Email us : Akash.chakraborty10@gmail.com 
                </p>
            </Alert>
            )

        }

        const onSubmitPlanetDetails = () => {

          console.log("On submit click planet details->>",JSON.stringify(PlanetDeatils));

         const response = fetch("http://localhost:8080/api/save-planet-details",{
            method: 'POST',
            body: JSON.stringify(PlanetDeatils),
            headers: {'Content-Type': 'application/json'}

          })

          console.log(response);

          const getResponse = fetch("http://localhost:8080/api/result-page",{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}

          })

          console.log(getResponse);

         
          



        }


        const handleRemoveItem = planet => {
            //console.log("delete data-->",PlanetNo)
            setPlanetDetails(PlanetDeatils.filter(item => item.planet !== planet))
        }

        const handleResetItem = () => {
          setPlanetDetails([]);
        }

        const handleEditItem = planet => {
            setIsChickEdit(true);
            console.log("edit Planet no ",planet);
         const arr =  PlanetDeatils.filter(item => item.planet === planet)
         console.log("edit Planet no ",arr);
         setModalShow(true)
         setEditArraysPlanetDetails(arr[0])

        }
    


   

    return (

        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Planet Details</h4>
                <p className="card-description"> Please Enter Planet Details
                </p>
                <button type="button" className="btn btn-gradient-success btn-icon-text" variant="primary" onClick={() => setModalShow(true) && setIsChickEdit(false)}>
                        <i className="mdi mdi-note-plus btn-icon-prepend"></i>                                                    
                        Add
                      </button>
                      <button type="button" className="btn btn-inverse-primary btn-rounded btn-icon pull-right" onClick={() => handleResetItem()} >
                        <i className="mdi mdi-reload btn-icon-prepend"></i>
                      </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                     {!isChickEdit && <AddPlanetDetails
                        show={modalShow}
                        onHide={() => setModalShow(false)}                                                                                                                                                          
                        puton={InputArraysPlanetDetailsAdd}
                        /> }

                       {isChickEdit && <EditPlanetDetails
                        show={modalShow}
                        onHide={() => setModalShow(false)}                                                                                                                                                          
                        puton={InputArraysPlanetDetailsEdit}
                        editvalue={editArraysPlanetDetails}

                        /> }                                                                                                                                              
                        <hr/>
                        {PlanetDeatils.length === 0 && <NoData/>}
                        {PlanetDeatils.length > 0 &&
                <div className="table-responsive">
                    <form className="forms-sample" onSubmit={onSubmitPlanetDetails}>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                      <th>Planet</th>
                        <th>Lower Latitude</th>
                        <th>Lower Longitude Of Planet</th>
                        <th>Higher Latitude</th>
                        <th>Higher Longitude Of Planet</th>
                        <th>EDIT/DELETE</th>
                      </tr>
                    </thead>
                    <tbody>
                    {console.log("whatssss up",PlanetDeatils)}
                        {PlanetDeatils.map(input => 
                               
                            <tr key={input.planet}>
                            <td >{input.planet}</td>
                            <td> {input.lowDate}</td>
                            <td>{input.lowSphoot}</td>
                            <td> {input.highDate}</td>
                            <td> {input.highSphoot} </td>
                            <td> 
                            <button type="button" onClick={() =>handleEditItem(input.planet)} className="btn btn-gradient-dark btn-icon-text">
                                    Edit
                             <i className="mdi mdi-file-check btn-icon-append"></i>                          
                             </button>
                             <button type="button" onClick={() =>handleRemoveItem(input.planet)} className="btn btn-gradient-danger btn-icon-text">
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

export default PlanetDetailsInput;