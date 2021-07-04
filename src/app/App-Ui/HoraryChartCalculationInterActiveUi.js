import React ,{useState} from "react";
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";



import 'bootstrap/dist/css/bootstrap.min.css';


const HoraryChartCalculationInterActiveUi = (props) => {


    const [name , setName ] = useState('');
    const [dateOfJudgement, setDateOfJudgement] = useState(new Date());
    const [timeOfJudgement, setTimeOfJudgement] = useState('');
    const [outputLocation, setOutputLocation] = useState('');
    const [longitudePlaceOfJudgement, setlongitudePlaceOfJudgement] = useState('');
    const [latitudePlaceOfJudgement, setlatitudePlaceOfJudgement] = useState('');
    const [number, setNumber] = useState('');
    const [question, setQuestion] = useState('');
    const [placeOfCalculation,setPlaceOfCalculation] = useState('');



    //const [ errors, setErrors ] = useState(false);
    const [longitudePlaceOfJudgementValidation, setlongitudePlaceOfJudgementValidation] = useState(false);
    const [latitudePlaceOfJudgementValidation, setlatitudePlaceOfJudgementValidation] = useState(false);

    
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
       
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                
              }
      
              form.classList.add('was-validated')
            }, false)
          })
  


    const onClickName = (event) => {
        setName(event.target.value);
    }
    const onClickTimeOfJudgement = (event) => {
        setTimeOfJudgement(event.target.value);
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
        setNumber(event.target.value);
    }
    const onClickQuestion = (event) => {
        setQuestion(event.target.value);
    }
    const onClickPlaceOfCalculation= (event) => {
        setPlaceOfCalculation(event.target.value);
    }



   const horaryCharDetails = {

        name,
        dateOfJudgement: `${dateOfJudgement.getMonth()+1}-${dateOfJudgement.getDate()}-${dateOfJudgement.getFullYear()}`,
        timeOfJudgement,
        outputLocation,
        longitudePlaceOfJudgement,
        latitudePlaceOfJudgement,
        number,
        question,
        placeOfCalculation

    }






    const handlerOnSubmit = (event) => {
        

         props.history.push('/general-pages/HouseDetailsInput')

        console.log("On submit click--------------------",horaryCharDetails);

        

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
                    <Form.Control id="validationCustomName" className="form-control"  type="text" placeholder="Name" onChange={onClickName} required/>
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
                      selected={dateOfJudgement}
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
                    <Form.Control  type="text" placeholder="01:45:00" onChange={onClickTimeOfJudgement} required/>
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
                    <Form.Control  type="text" placeholder="88:11" isInvalid={longitudePlaceOfJudgementValidation} onChange={onClickLongitudePlaceOfJudgement} required/>
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback"> Number should be in 77:88 format</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Latitude place of judgement</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="88:11" isInvalid={latitudePlaceOfJudgementValidation} onChange={onClickLatitudePlaceOfJudgement} required/>
                    <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Form.Group>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Number</label>
                    <div className="col-sm-9">
                    <Form.Control  type="number" onChange={onClickNumber} required/>
                    <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Place of calculation</label>
                    <div className="col-sm-9">
                    <Form.Control  type="text" placeholder="kolkata" onChange={onClickPlaceOfCalculation} required/>
                    <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Form.Group>
                </div>
              </div>


              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <label htmlFor="exampleTextarea1">What is your Question</label>
                    <textarea className="form-control" id="exampleTextarea1" rows="4" placeholder="Question" onChange={onClickQuestion} required></textarea>
                    <div className="valid-feedback">Looks good!</div>
                  </Form.Group>
                </div>
              </div>
              <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
            <button className="btn btn-light">Cancel</button>
            
            </form>
          </div>
        </div>
      </div>

    );


};


export default HoraryChartCalculationInterActiveUi

