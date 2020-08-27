import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './buttons.css';


class Row extends React.Component {
    render() {
        return (
            <div className="text-center justify-content-center row">
                <div className="col-4" >
                    <button type="button" className=" container-fluid btn btn-light pl-2 pr-2 pt-4 pb-4 mt-1 mb-1 mr-1 ml-1"><h5 ><i class=" fas fa-helicopter"></i>Air Doctor</h5></button>
                </div>
                <div className="col-4" >
                    <button type="button" className="container-fluid btn btn-light pl-2 pr-2 pt-4 pb-4 mt-1 mb-1 ml-0 mr-0"><h5>Santa Rose Police</h5></button>
                </div>
                <div className="col-4" >
                    <button type="button" className="container-fluid btn btn-light pl-2 pr-2 pt-4 pb-4 mt-1 mb-1 mr-1 ml-1"><h5><i className=" fas fa-ambulance"></i>Ambulance</h5></button>
                </div>


            </div>
        )
    }
}

export default Row;