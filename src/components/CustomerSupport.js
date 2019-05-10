import React from 'react';
const CustomerSupport = () => {
    return (
        <div>
            <h4 className="ui dividing header">Customer Support</h4>
            <div className="ui placeholder segment">
                <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                        <div className="ui form">
                            <div className="field">
                                <label>Sender</label>
                                <div className="ui left icon input">
                                    <input type="text" placeholder="Your Contact number" id="sender" />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Reciever</label>
                                <div className="ui left icon input">
                                    <input type="text" placeholder="Contact number" id="reciever" />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="ui inverted green  animated button">
                                <div className="hidden content">Call</div>
                                <div className="visible content">
                                    <i className="phone icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle aligned column">
                        <div className="column">
                            <div className="ui form">
                                <div className="field">
                                    <label>Reciever</label>
                                    <div className="ui left icon input">
                                        <input type="text" placeholder="Contact Number" id="smsSender" />
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Messgae Text</label>
                                    <textarea rows="2" id="msg"></textarea>
                                </div>
                                <div className="ui blue submit button">Message</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">
                    Or
                         </div>
            </div>
        </div>
    );
}
export default CustomerSupport;