import React, {useState} from 'react';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';

const LoginModal = ({loginUser, loginAdmin}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <span className="login-button"
                  onClick={toggle}>
                Login
            </span>
            <Modal isOpen={modal}
                   toggle={toggle}>
                <ModalHeader toggle={toggle}>Please choose the user you want to login with</ModalHeader>
                <ModalFooter className="align-center">
                    <Button color="primary"
                            onClick={() => {
                                toggle();
                                loginUser();
                            }}>
                        User
                    </Button>
                    <Button color="secondary" onClick={loginAdmin}>Admin</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default LoginModal;