import React ,{useState} from 'react';
import { Form,Modal } from 'react-bootstrap';



const MyVerticallyCenteredModalHouseDeatils = (props) => {

    const [houseNo, setHouseNo] = useState("2");
    const [lowerLatitude, setLowerLatitude] = useState('');
    const [lowerLongitudeOfHouse, setLowerLongitudeOfHouse] = useState('');
    const [higherLatitude, setHigherLatitude] = useState('');
    const [higherLongitudeOfHouse, setHigherLongitudeOfHouse] = useState('');

    const OnClickHouseNo = (event) => {
      if(props.ischickedit){
        setHouseNo(props.editvalue.houseNo);
        setHouseNo(event.target.value);
      }else {
        setHouseNo(event.target.value);
      }
    }

    const OnClickLowerLatitude = (event) => {
      if(props.ischickedit){
        setLowerLatitude(props.editvalue.lowerLatitude);
        setLowerLatitude(event.target.value);
      }else {
        setLowerLatitude(event.target.value);
      }

    }

    const OnClickLowerLongitudeOfHouse = (event) => {
      if(props.ischickedit){
        setLowerLongitudeOfHouse(props.editvalue.lowerLongitudeOfHouse);
        setLowerLongitudeOfHouse(event.target.value);
      }else {
        setLowerLongitudeOfHouse(event.target.value);
      }
     
    }

    const OnClickHigherLatitude = (event) => {
      if(props.ischickedit){
        setHigherLatitude(props.editvalue.higherLatitude);
        setHigherLatitude(event.target.value);
      }else {
        setHigherLatitude(event.target.value);
      }
    }

    const OnClickHigherLongitudeOfHouse = (event) => {
      if(props.ischickedit){
        setHigherLongitudeOfHouse(props.editvalue.higherLongitudeOfHouse);
        setHigherLongitudeOfHouse(event.target.value);
      }else {
        setHigherLongitudeOfHouse(event.target.value);
      }
    }



   const HouseDeatils = {

      houseNo,
      lowerLatitude,
      lowerLongitudeOfHouse,
      higherLatitude,
      higherLongitudeOfHouse
    }


   const onSubmitHandler = (event) => {
      event.preventDefault();
      props.puton(HouseDeatils);
      props.onHide();

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
                <select className="form-control" id="SelectGender" value={houseNo} onChange={OnClickHouseNo}>
                  <option >2</option>
                  <option>3</option>
                  <option>5</option>
                  <option>7</option>
                  <option>9</option>
                </select>
              </Form.Group>
                
              <Form.Group>
                <label htmlFor="InputName1">Lower Latitude</label>
                <Form.Control type="text" className="form-control" id="InputName1" value={lowerLatitude} placeholder="" onChange={OnClickLowerLatitude}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName2">Lower Longitude Of House</label>
                <Form.Control type="text" className="form-control" id="InputName2" value={lowerLongitudeOfHouse}  placeholder="" onChange={OnClickLowerLongitudeOfHouse}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName3">Higher Latitude</label>
                <Form.Control type="text" className="form-control" id="InputName3" value={higherLatitude}  placeholder="" onChange={OnClickHigherLatitude}/>
              </Form.Group>

              <Form.Group>
                <label htmlFor="InputName4">Higher Longitude Of House</label>
                <Form.Control type="text" className="form-control" id="InputName4" value={higherLongitudeOfHouse}  placeholder="" onChange={OnClickHigherLongitudeOfHouse}/>
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

export default MyVerticallyCenteredModalHouseDeatils;