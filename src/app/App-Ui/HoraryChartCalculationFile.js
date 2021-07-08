import React from 'react';
import { Form } from 'react-bootstrap';
import classes from "./HoraryChartCalculationFile.module.css";


const HoraryChartCalculationFile = () => {

    return (
        <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Horary Chart Calculation File</h4>
            <p className="card-description"> please make sure file is .xlsx .cvs or .xlx files. </p>
            <form className="forms-sample">
            <img
                className={classes.imgs}
                src={require("../../assets/images/astro/p6.svg")}
                alt="First slide"
              />
              <Form.Group>
                <label>File upload</label>
                <div className="custom-file">
                  <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                  <label className="custom-file-label" htmlFor="customFileLang">Upload file</label>
                </div>
              </Form.Group>
              <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );

}


export default HoraryChartCalculationFile;