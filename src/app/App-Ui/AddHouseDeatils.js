import React ,{useState} from 'react';
import { Form,Modal } from 'react-bootstrap';

const AddHouseDeatils = (props) => {

    const [house, setHouseNo] = useState("2");
    const [lowLatitude, setLowerLatitude] = useState('');
    const [lowSphoot, setLowerLongitudeOfHouse] = useState('');
    const [highLatitude, setHigherLatitude] = useState('');
    const [highSphoot, setHigherLongitudeOfHouse] = useState('');

    const OnClickHouseNo = (event) => {
        setHouseNo(event.target.value);
    }

    const OnClickLowerLatitude = (event) => {
        setLowerLatitude(event.target.value);

    }

    const OnClickLowerLongitudeOfHouse = (event) => {
        setLowerLongitudeOfHouse(event.target.value);
    }

    const OnClickHigherLatitude = (event) => {
        setHigherLatitude(event.target.value);

    }

    const OnClickHigherLongitudeOfHouse = (event) => {
        setHigherLongitudeOfHouse(event.target.value);
    }


  const HouseDeatils = {
    house,
    lowLatitude,
    lowSphoot,
    highLatitude,
    highSphoot
    }

   const onSubmitHandler = (event) => {
      event.preventDefault();
      props.puton(HouseDeatils);
      props.onHide();




      setHouseNo('');
      setLowerLatitude('');
      setLowerLongitudeOfHouse('');
      setHigherLatitude('');
      setHigherLongitudeOfHouse('');

    }




    return (
        <Modal
          {...props}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add House Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="col-17 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Basic form elements</h4>
            <p className="card-description"> Basic form elements </p>
            <form className="forms-sample" onSubmit={onSubmitHandler}>

            <Form.Group>
                <label htmlFor="SelectGender">House No</label>
                <select className="form-control" id="SelectGender" value={house} onChange={OnClickHouseNo}>
                  <option >2</option>
                  <option>3</option>
                  <option>5</option>
                  <option>7</option>
                  <option>9</option>
                </select>
              </Form.Group>
                
              <Form.Group>
                <label htmlFor="InputName1">Lower Latitude</label>
               <Form.Control type="text" className="form-control" id="InputName1" value={lowLatitude}  placeholder="" onChange={OnClickLowerLatitude}/>
              </Form.Group>
              <Form.Group>
                <label htmlFor="InputName2">Lower Longitude Of House</label>
                <Form.Control type="text" className="form-control" id="InputName2" value={lowSphoot}  placeholder="" onChange={OnClickLowerLongitudeOfHouse}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName3">Higher Latitude</label>
                <Form.Control type="text" className="form-control" id="InputName3" value={highLatitude}  placeholder="" onChange={OnClickHigherLatitude}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName4">Higher Longitude Of House</label>
                <Form.Control type="text" className="form-control" id="InputName4" value={highSphoot}  placeholder="" onChange={OnClickHigherLongitudeOfHouse}/>
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

export default AddHouseDeatils;