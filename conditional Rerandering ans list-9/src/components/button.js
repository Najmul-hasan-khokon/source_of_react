import React from 'react';

class Button extends React.Component {
    render() {
        console.log('button is rendered');
        const { change, locale } = this.props;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'click here' : 'ekhane click korun'}
                </button>
            </div>
        );
    }
}

export default Button;
// import React from 'react';

// class Button extends React.Component {
//     render() {
//         const { changes, locale, show } = this.props;

//         return (
//             <div>
//                 <button type="button" onClick={() => changes(locale)}>
//                     {locale === 'bn-BD' ? 'click here' : 'ekhane click korun'}
//                 </button>
//                 {show && <p>hello</p>}
//             </div>
//         );
//     }
// }

// export default Button;
