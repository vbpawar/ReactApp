import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="ui form">
                <h4 className="ui dividing header">Shipping Information</h4>
                <div className="field">
                    <label>Personal Details:</label>
                    <div className="two fields">
                        <div className="five wide field">
                            <input type="text" name="shipping-fname" placeholder="Enter First Name" />
                        </div>
                        <div className="five wide field">
                            <input type="text" name="shipping-lname" placeholder="Enter Last Name" />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label>Billing Address:</label>
                    <div className="two fields">
                        <div className="seven wide field">
                            <input type="text" name="billing-address" placeholder="street address" />
                        </div>
                        <div className="three wide field">
                            <input type="text" name="billing-address-2" placeholder="optional address" />
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="two fields">
                        <div className="five wide field">
                            <label>Country</label>
                            <div className="ui fluid search selection dropdown">
                                <input type="hidden" name="country" />
                                <i className="dropdown icon"></i>
                                <div className="default text">select country</div>
                                <div className="menu">
                                    <div className="item" data-value="af"><i className="af flag"></i>Afganistan</div>
                                    <div className="item" data-value="In"><i className="in flag"></i>India</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Form;