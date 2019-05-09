import React from 'react';
import faker from 'faker';

class SiteContent extends React.Component {
    render() {
        return (
            <div className="ui comments">
                <a href="/" className="avator">
                    <img class="ui fluid image" alt="" src={faker.image.food()} />
                </a></div>
        );
    }

}
export default SiteContent;