import React from 'react';
import HornedBeast from './HornedBeast';
import DataJson from './data.json';
class Main extends React.Component {

    render() {
        return (
            <div>
                {
                    DataJson.map((item, index) => {
                        return (
                            <HornedBeast

                                image_url={item.image_url}
                                title={item.title}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>
        );
    }
}
export default Main;