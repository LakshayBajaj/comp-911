import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Row extends React.Component {
    render() {
        return (
            <div className="text-center justify-content-center row">
                <div className="col-4" >
                    <button type="button" className="container-fluid btn btn-light pl-2 pr-2 pt-2 pb-2 mt-1 mb-1 mr-1 ml-1"><h6><i class="mr-2 fas fa-helicopter"></i>Air Doctor</h6></button>
                </div>
                <div className="col-4" >
                    <button type="button" className="container-fluid btn btn-light pl-2 pr-2 pt-2 pb-2 mt-1 mb-1 ml-0 mr-0 mr-xs-3 ml-xs-3"><h6>Santa Rose Police</h6></button>
                </div>
                <div className="col-4" >
                    <button type="button" className="container-fluid btn btn-light pl-2 pr-2 pt-2 pb-2 mt-1 mb-1 mr-1 ml-1"><h6><i className="mr-2 fas fa-ambulance"></i>Ambulance</h6></button>
                </div>


            </div>
        )
    }
}

export default Row;