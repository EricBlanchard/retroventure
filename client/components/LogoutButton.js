import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Should be able to drop this component anywhere and it will be a quick well formatted way to logout and leave the application
// Should probably open up a modal and ask if you are sure
class LogoutButton extends React.Component {
    constructor() {
        super();
        this.state = {
            messageFromServer: '',
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }
    closeModal() {
        this.setState({
            modalIsOpen: false,
            messageFromServer: ''
        });
    }
    render() {
        if (this.state.messageFromServer == '') {
            return (
                <div>
                    <p>SHould be a modal somewhere in here!</p>
                    <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="button-page-load"></span></Button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className="Modal">
                        <Link to={{ pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
                            <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
                        </Link><br />
                        <div className='button-center'>
                            <br />
                            <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Expense</Button>
                        </div>
                    </Modal>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>SHould be a modal somewhere in here inside the else!</p>
                    <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="Modal">
                        <div className='button-center'>
                            <h3>{this.state.messageFromServer}</h3>
                            <Link to={{ pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
                                <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
                            </Link>
                        </div>
                    </Modal>
                </div>
            )
        }
    }
}
export default LogoutButton;