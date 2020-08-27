import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Row from './buttons'

class DialLists extends React.Component {
    render() {
        return (
            <div class="container border border-dark" >
                <h5 className="mt-2">
                    Dial Lists
                </h5>
                <div class="w-50 input-group input-group-sm mb-3">
                    <input type="text" class="form-control" aria-describedby="inputGroup-sizing-sm" />
                    <span class="input-group-text" id="inputGroup-sizing-sm"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg></span>
                </div>

                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <div class="mb-3 mt-2 btn-group" role="group">
                    <button type="button" class="btn btn-secondary">Speed Dial</button>
                    <button type="button" class="btn btn-secondary">Directory</button>
                    <button type="button" class="btn btn-secondary">Call Takers</button>
                    <button type="button" class="btn btn-secondary">Transfer</button>
                </div>

            </div>
        )
    }
}

export default DialLists;
