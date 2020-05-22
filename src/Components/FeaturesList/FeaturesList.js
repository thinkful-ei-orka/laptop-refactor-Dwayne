import React from 'react';
import SingleFeature from '../SingleFeature/SingleFeature';

class FeaturesList extends React.Component {

    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {

            return <SingleFeature key={idx} currentFeature={feature} features={this.props.features} updateFeature={this.props.updateFeature} selected={this.props.selected} />
        });


        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default FeaturesList;