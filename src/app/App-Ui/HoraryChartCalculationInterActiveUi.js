import React ,{useState} from "react";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";



import 'bootstrap/dist/css/bootstrap.min.css';


const HoraryChartCalculationInterActiveUi = (props) => {


    const [name , setName ] = useState('');
    const [dateOfCalculation, setDateOfJudgement] = useState(new Date());
    const [timeOfCalculation, setTimeOfJudgement] = useState('');
    const [outputDirLocation, setOutputLocation] = useState('');
    const [currentLocationLongitude, setlongitudePlaceOfJudgement] = useState('');
    const [currentLocationLatitude, setlatitudePlaceOfJudgement] = useState('');
    const [kpAyanamsaSphoot, setKpAyanamsaSphoot] = useState('');
    const [selectedNumber, setNumber] = useState('');
    const [query, setQuestion] = useState('');
    const [placeOfCalculation,setPlaceOfCalculation] = useState('');


    const [longitudePlaceOfJudgementValidation, setlongitudePlaceOfJudgementValidation] = useState('');
    const [latitudePlaceOfJudgementValidation, setlatitudePlaceOfJudgementValidation] = useState('');
    const [timeOfCalculationValidation, setTimeOfJudgementValidation] = useState('');
    const [nameValidation , setNameValidation ] = useState('');
    const [kpAyanamsaSphootValidation, setKpAyanamsaSphootValidation] = useState('');
    const [selectedNumberValidation, setNumberValidation] = useState('');
    const [queryValidation, setQuestionValidation] = useState('');
    const [placeOfCalculationValidation,setPlaceOfCalculationValidation] = useState('');


    
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
 //       var forms = document.querySelectorAll('.needs-validation')
       
      
        // // Loop over them and prevent submission
        // Array.prototype.slice.call(forms)
        //   .forEach(function (form) {
        //     form.addEventListener('submit', function (event) {
        //       if (!form.checkValidity()) {
        //         event.preventDefault()
        //         event.stopPropagation()
                
        //       }
      
        //       form.classList.add('was-validated')
        //     }, false)
        //   })
  


    const onClickName = (event) => {
      if(event.target.value !== ''){

        setName(event.target.value);
        setNameValidation(false);
      }else {
        setNameValidation(true);
      }

    }

    const onClickKpAyanamsa = (event) => {
      if(event.target.value !== ''){

        setKpAyanamsaSphoot(event.target.value);
        setKpAyanamsaSphootValidation(false);
      }else {
        setKpAyanamsaSphootValidation(true);
      }
  }

    const onClickTimeOfJudgement = (event) => {
      if(event.target.value !== ''){

        setTimeOfJudgement(event.target.value);
        setTimeOfJudgementValidation(false);
      }else {
        setTimeOfJudgementValidation(true);
      }

    }
    const onClickOutputLocation = (event) => {
        setOutputLocation(event.target.value);
    }
    const onClickLongitudePlaceOfJudgement = (event) => {
        if (/^[0-9]{2}:[0-9]{2}$/.test(event.target.value)) 
        { 
            setlongitudePlaceOfJudgement(event.target.value);
            setlongitudePlaceOfJudgementValidation(false);
        }
        else {
            setlongitudePlaceOfJudgementValidation(true);

        }
    }
    const onClickLatitudePlaceOfJudgement = (event) => {
        if (/^[0-9]{2}:[0-9]{2}$/.test(event.target.value)) 
        { 
            setlatitudePlaceOfJudgement(event.target.value);
            setlatitudePlaceOfJudgementValidation(false);
        }
        else {
            setlatitudePlaceOfJudgementValidation(true);

        }
    }
    const onClickNumber = (event) => {
      if((event.target.value) > 0 && (event.target.value) < 263){
        setNumber(event.target.value);
        setNumberValidation(false);
      }else {
      setNumberValidation(true);
      }
    }
    const onClickQuestion = (event) => {
      if(event.target.value !== ''){

        setQuestion(event.target.value);
        setQuestionValidation(false);
      }else {
        setQuestionValidation(true);
      }
    }
    const onClickPlaceOfCalculation= (event) => {

      if(event.target.value !== ''){

        setPlaceOfCalculation(event.target.value);
        setPlaceOfCalculationValidation(false);
      }else {
        setPlaceOfCalculationValidation(true);
      }
    }



    const month = dateOfCalculation.getMonth()+1;

   const horaryCharDetails = {

        name,
        dateOfCalculation: `${dateOfCalculation.getDate()}-${month.length < 2 ? '0' + month : month}-${dateOfCalculation.getFullYear()}`,
        timeOfCalculation,
        outputDirLocation,
        kpAyanamsaSphoot,
        currentLocationLatitude,
        currentLocationLongitude,
        selectedNumber,
        query,
        placeOfCalculation

    }

    const errorData = [
      longitudePlaceOfJudgementValidation,
      latitudePlaceOfJudgementValidation,
      timeOfCalculationValidation,
      nameValidation,
      kpAyanamsaSphootValidation,
      selectedNumberValidation,
      queryValidation,
      placeOfCalculationValidation
    ];


    const SubbmitButton = errorData.every(valuess => valuess === false);

    const handlerOnSubmit = (event) => {

      console.log("On submit click->>",JSON.stringify(horaryCharDetails));

      const response = fetch("http://localhost:8080/api/save-basic-details",{
        method: 'POST',
        body: JSON.stringify(horaryCharDetails),
        headers: {'Content-Type': 'application/json'}
      });
      //const data = response.JSON();
      console.log(response);
         props.history.push('/horary-calculation/HouseDetailsInput')

    }


    return (
       
        <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Horary chart Interactive</h4>
            <form className="form-sample needs-validation" onSubmit={handlerOnSubmit} noValidate>
              <p className="card-description"> Input Detail </p>
              <div className="row">
                <div className="col-md-6">
                    <Form.Group className="row" >
                    <label htmlFor="validationCustomName" className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                    <Form.Control id="validationCustomName" className="form-control" isInvalid={name && nameValidation} isValid={name && !nameValidation} type="text" placeholder="Name" onChange={onClickName} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Name cannot be empty </div>
                    </div>
                  </Form.Group>
                </div>
                
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="validationCustomDate"  className="col-sm-3 col-form-label">Date of judgement</label>
                    <div className="col-sm-9">
                    <DatePicker id="validationCustomDate" className="form-control w-100"
                    placeholder="dd-mm-yyyy"
                      selected={dateOfCalculation}
                      onChange={(date) => setDateOfJudgement(date)}
                      dateFromat='YYYY-MM-dd'
                      required/>
                    <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

            <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Time of judgement</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="01:45:00" isInvalid={timeOfCalculation && timeOfCalculationValidation} isValid={timeOfCalculation && !timeOfCalculationValidation} onChange={onClickTimeOfJudgement} required/>
                    <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Output Location</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="01:00:00" onChange={onClickOutputLocation} required/>
                    <div className="invalid-feedback"> Please choose a username. </div>
                    </div>
                  </Form.Group>
                </div>
              </div>



              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Longitude place of judgement</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="88:11" isInvalid={currentLocationLongitude && longitudePlaceOfJudgementValidation} isValid={currentLocationLongitude && !longitudePlaceOfJudgementValidation} onChange={onClickLongitudePlaceOfJudgement} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Number should be in 77:88 format</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Latitude place of judgement</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="88:11" isInvalid={currentLocationLatitude && latitudePlaceOfJudgementValidation} isValid={currentLocationLatitude && !latitudePlaceOfJudgementValidation} onChange={onClickLatitudePlaceOfJudgement} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Number should be in 77:88 format</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Number</label>
                    <div className="col-sm-9">
                    <Form.Control  type="number" onChange={onClickNumber} isInvalid={selectedNumber && selectedNumberValidation} isValid={selectedNumber && !selectedNumberValidation} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Number should be between 1 to 263 </div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Place of calculation</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="kolkata"  isInvalid={placeOfCalculation && placeOfCalculationValidation} isValid={placeOfCalculation && !placeOfCalculationValidation} onChange={onClickPlaceOfCalculation} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Field cannot be empty </div>
                    </div>
                  </Form.Group>
                </div>
              </div>


              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="exampleTextarea1">What is your Question</label>
                    <textarea className="form-control" id="exampleTextarea1" rows="4" isInvalid={query && queryValidation} isValid={query && !queryValidation}  placeholder="Question" onChange={onClickQuestion} required></textarea>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Field cannot be empty </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">KP Ayanamsa on current date </label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="kolkata" isInvalid={kpAyanamsaSphoot && kpAyanamsaSphootValidation} isValid={kpAyanamsaSphoot && !kpAyanamsaSphootValidation} onChange={onClickKpAyanamsa} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> KP Ayanamsa cannot be empty </div>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <button disabled={!SubbmitButton} type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
            <button className="btn btn-light">Cancel</button>
            
            </form>
          </div>
        </div>
      </div>

    );


};


export default HoraryChartCalculationInterActiveUi

