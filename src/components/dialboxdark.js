import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class DialBoxDark extends React.Component {
    render() {
        return (
            <div class="pb-2 pt-1 bg-dark container border border-dark" >
                <div className='row mt-2 mb-2'>
                    <input type="text" className="form-control w-75 ml-3 col-9 mb-1 mr-sm-2" />
                    <button className="ml-2 col-2 btn btn-secondary" type="button">Dial</button>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-6' ><button className="w-100 btn btn-outline-info pt-3 pb-3" type="button">Answer</button></div>
                    <div className='col-6' ><button className="w-100  btn btn-outline-info pt-3 pb-3" type="button">Release</button></div>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-6' ><button className="w-100 btn btn-outline-info pt-3 pb-3" type="button">System Hold</button></div>
                    <div className='col-3' ><button className="w-100  btn btn-outline-info pt-3 pb-3" type="button">Mute</button></div>
                    <div className='col-3' ><button className="w-100  btn btn-outline-info pt-3 pb-3" type="button">Mute All</button></div>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-6' ><button className="w-100 btn btn-outline-info pt-3 pb-3 " type="button">Hold</button></div>
                    <div className='col-6' ><button className="w-100  btn btn-outline-info pt-3 pb-3" type="button">Redial</button></div>
                </div>
                <div className='row mt-2 mb-2'>
                    <div className='col-6' ><button className="w-100 btn btn-outline-info pt-3 pb-3" type="button">Conference</button></div>
                    <div className='col-6' ><button className="w-100  btn btn-outline-info pt-3 pb-3 " type="button">Transfer</button></div>
                </div>
            </div>
        )
    }
}

export default DialBoxDark;