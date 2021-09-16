import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'write about najmul',
        text: 'text here something',
        library: 'Angular',
        CheckBOx: true,
    };

    handlerChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                CheckBOx: e.target.checked,
            });
        } else {
            console.log('nothing found');
        }
    };

    submitHandler = (e) => {
        const { title, text, library, CheckBOx } = this.state;
        e.preventDefault(); // to stop default behaiviar
        console.log(title, text, library, CheckBOx);
    };

    render() {
        const { title, text, library, CheckBOx } = this.state; // distructure state object
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        placeholder="write something"
                        value={title}
                        onChange={this.handlerChange}
                    />
                    <br />
                    <br />
                    <textarea
                        name="text"
                        type="textarea"
                        placeholder="writhe something"
                        value={text}
                        onChange={this.handlerChange}
                    />
                    <br /> <br />
                    <select value={library} onChange={this.handlerChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br /> <br />
                    <input type="checkbox" checked={CheckBOx} onChange={this.handlerChange} />
                    <br /> <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

// import React from 'react';

// export default class Form extends React.Component {
//     state = {
//         title: 'write about najmul',
//     };

//     inputHandler = (e) => {
//         console.log(e.target.value);
//         this.setState({
//             title: e.target.value,
//         });
//     };

//     render() {
//         const { title } = this.state;
//         return (
//             <div>
//                 <form action="#">
//                     <input
//                         type="text"
//                         placeholder="write something"
//                         value={title}
//                         onChange={this.inputHandler}
//                     />
//                       <p>{title}</p>
//                 </form>
//             </div>
//         );
//     }
// }
