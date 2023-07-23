import React, {Component} from 'react';
import './App.css';
import ReactModal from 'react-modal-resizable-draggable';
import Demo from "./editor.js";

class App extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render() {
        return (
            <div className="App">
                <Demo/>
                <button onClick={this.openModal}>
                    Open modal
                </button>
                <ReactModal
                    initWidth={800}
                    initHeight={400}
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal-custom-class"}
                    onRequestClose={this.closeModal}
                    isOpen={this.state.modalIsOpen}>
                    <h3>My Modal</h3>
                    <div className="body">
                    </div>
                    <button onClick={this.closeModal}>
                        Close modal
                    </button>
                </ReactModal>
            </div>
        );
    }
}

export default App;