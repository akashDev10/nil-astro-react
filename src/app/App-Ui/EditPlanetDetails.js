import React ,{useState} from 'react';
import { Form,Modal } from 'react-bootstrap';


const EditPlanetDetails = (props) => {

    const [planet, setPlanetNo] = useState(props.editvalue.planet);
    const [lowDate, setLowerDate] = useState(props.editvalue.lowDate);
    const [lowSphoot, setLowerLongitudeOfPlanet] = useState(props.editvalue.lowSphoot);
    const [highDate, setHigherLatitude] = useState(props.editvalue.highDate,);
    const [highSphoot, setHigherLongitudeOfPlanet] = useState(props.editvalue.highSphoot);



    const OnClickPlanetNo = (event) => {
        setPlanetNo(event.target.value);
    }

    const OnClickLowerDate = (event) => {
        setLowerDate(event.target.value);

    }

    const OnClickLowerLongitudeOfPlanet = (event) => {
        setLowerLongitudeOfPlanet(event.target.value);
    }

    const OnClickHigherLatitude = (event) => {
        setHigherLatitude(event.target.value);

    }

    const OnClickHigherLongitudeOfPlanet = (event) => {
        setHigherLongitudeOfPlanet(event.target.value);
    }


  const PlanetDeatils = {
    planet,
    lowDate,
    lowSphoot,
    highDate,
    highSphoot
    }


   const onSubmitHandler = (event) => {
      event.preventDefault();

      props.puton(PlanetDeatils);
      props.onHide();



      setPlanetNo('');
      setLowerDate('');
      setLowerLongitudeOfPlanet('');
      setHigherLatitude('');
      setHigherLongitudeOfPlanet('');

    }




    return (
        <Modal
          {...props}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Planet Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="col-17 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Please enter below details :</h4>
            <p className="card-description"> Check before submit </p>
            <form className="forms-sample" onSubmit={onSubmitHandler}>

            <Form.Group>
                <label htmlFor="SelectGender">Planet</label>
                <select className="form-control" id="SelectGender" value={planet} onChange={OnClickPlanetNo}>
                  <option >SU</option>
                  <option>MO</option>
                  <option>MA</option>
                  <option>ME</option>
                  <option>JU</option>
                  <option>VE</option>
                  <option>SA</option>
                  <option>RA</option>
                </select>
              </Form.Group>
                
              <Form.Group>
                <label htmlFor="InputName1">Lower Latitude</label>
               <Form.Control type="text" className="form-control" id="InputName1" value={lowDate}  placeholder="" onChange={OnClickLowerDate}/>
              </Form.Group>
              <Form.Group>
                <label htmlFor="InputName2">Lower Longitude of planet at 05:30am</label>
                <Form.Control type="text" className="form-control" id="InputName2" value={lowSphoot}  placeholder="" onChange={OnClickLowerLongitudeOfPlanet}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName3">Higher Latitude</label>
                <Form.Control type="text" className="form-control" id="InputName3" value={highDate}  placeholder="" onChange={OnClickHigherLatitude}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName4">Higher Longitude of planet at 05:30am</label>
                <Form.Control type="text" className="form-control" id="InputName4" value={highSphoot}  placeholder="" onChange={OnClickHigherLongitudeOfPlanet}/>
              </Form.Group>
              
              <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
              <button onClick={props.onHide} className="btn btn-light">Close</button>
            </form>
          </div>
        </div>
      </div>
          </Modal.Body>

        </Modal>
      );
}

export default EditPlanetDetails;