import React from 'react';
import Button from './button';

class Clock extends React.Component {
    state = {
        date: new Date(),
        locale: 'bn-BD',
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    ClockHandler = (locale) => {
        this.setState({
            locale,
        });
    };

    render() {
        console.log('clock is rendered');
        const { date, locale } = this.state;

        return (
            <div>
                <h1>{date.toLocaleTimeString(locale)}</h1>
                {locale === 'bn-BD' ? (
                    <Button change={this.ClockHandler} locale="en-US" />
                ) : (
                    <Button change={this.ClockHandler} locale="bn-BD" />
                )}
            </div>
        );
    }
}

export default Clock;

// footer
// import React from 'react';
// import Button from './button';

// class Clock extends React.Component {
//     state = { date: new Date(), locale: 'bn-BD' };

//     componentDidMount = () => {
//         this.clockTimer = setInterval(() => this.tick(), 1000);
//     };

//     componentWillUnmount = () => {
//         clearInterval(this.clockTimer);
//     };

//     handleClick = (locale) => {
//         this.setState({
//             locale,
//         });
//     };

//     tick = () => {
//         this.setState({
//             date: new Date(),
//         });
//     };

//     render() {
//         const { date, locale } = this.state;

//         // last;
//         // let button;
//         // if (locale === 'bn-BD') {
//         //     button = (
//         //         <Button changes={this.handleClick} locale="en-US">
//         //             click here
//         //         </Button>
//         //     );
//         // } else {
//         //     button = (
//         //         <Button changes={this.handleClick} locale="bn-BD">
//         //             click here
//         //         </Button>
//         //     );
//         // }

//         // footer;

//         return (
//             <div>
//                 <h1>{date.toLocaleTimeString(locale)}</h1>
//                 {locale === 'bn-BD' ? (
//                     <Button changes={this.handleClick} locale="en-US" show={false} />
//                 ) : (
//                     <Button changes={this.handleClick} locale="bn-BD" show />
//                 )}
//             </div>
//         );
//     }
// }

// export default Clock;
