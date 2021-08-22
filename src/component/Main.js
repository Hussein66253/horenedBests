import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {
    render() {
        return (
            <div>
                <HornedBeast
                    data={{
                        imgSrc: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                        title: 'Uniwhal',
                        description: "A unicorn and a narwhal nuzzling their horns",
                    }} />
                <HornedBeast
                    data={{
                        imgSrc: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                        title: 'Uniwhal',
                        description: "A unicorn and a narwhal nuzzling their horns",
                    }} />
                <HornedBeast
                    data={{
                        imgSrc: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
                        title: 'Uniwhal',
                        description: "A unicorn and a narwhal nuzzling their horns",
                    }} />


            </div>
        );
    }
}
export default Main;