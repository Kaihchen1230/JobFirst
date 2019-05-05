import React from 'react';
import { Modal } from 'antd';
import { navigate } from "gatsby";

class PopOutWindow extends React.Component{

    
    state = {
        show : this.props.show,
        count : 0
    }
    
    

    render(){
        if(this.props.show && this.state.count == 0){
            this.setState({
                show: this.props.show,
                count : 1
            })
        }

        return(
            
            <div>
                <Modal
                    visible={this.state.show}
                    onOk = {() => {
                        this.setState({
                            show: false,
                            count: 0
                        })
                        this.props.isLoading(false);
                        this.props.isVisible(false);
                        navigate("/app/user-profile/"+this.props.userId);
                    }}
                    onCancel = {() => {
                        this.setState({
                            show: false,
                            count: 0
                        })
                        this.props.isLoading(false);
                        this.props.isVisible(false);
                    }}
                    okText = {this.props.okText}
                    cancelText={this.props.cancelText}
                >
                    <p>
                        {this.props.content}
                    </p>
                </Modal>
            </div>
        )
    }
}


export default PopOutWindow;