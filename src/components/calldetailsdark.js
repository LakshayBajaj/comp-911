import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';


class CallDetailsDark extends React.Component {
    render() {
        return (
            <div className='bg-dark pt-2 pb-2 container' >
                <div class="pb-2 pt-1 container border Border-light" >
                    <h6 className="text-light">Call Details</h6>
                    <div className='row' >
                        <div className='col-6'> <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Active" /> </div>
                        <div className='col-3'><button className="w-100 btn btn-secondary" type="button">IRR</button></div>
                        <div className='col-3'><button className="w-100 btn btn-secondary" type="button">note</button></div>
                    </div>
                    <div className='pb-2 row' >
                        <div className='col-6'>
                            <div class="w-100 btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Emer Type</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Type 1</a>
                                    <a class="dropdown-item" href="#">Type 2</a>
                                    <a class="dropdown-item" href="#">Type 3</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="w-100 btn-group">
                                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sec Type</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Type 1</a>
                                    <a class="dropdown-item" href="#">Type 2</a>
                                    <a class="dropdown-item" href="#">Type 3</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row' >
                        <div className='col-4 pt-1'><h4 className="text-light" >Events</h4></div>
                        <div className='col-4'> <button className="w-100 btn btn-secondary" type="button">Call SOP</button></div>
                        <div className='col-4'> <button className="w-100 btn btn-secondary" type="button">Call Script</button></div>
                    </div>
                    <div className='row' >
                        <div style={{height: '100px', width: '95%' }} className='mt-2 ml-2  border Border-light' ></div>

                    </div>
                </div>
                <div style={{height: '100px', }} className='mt-2 pl-2 border Border-light' >
                    <div className='pb-5 text-light' >Participants </div>
                </div>
            </div >
        )
    }
}

export default CallDetailsDark;