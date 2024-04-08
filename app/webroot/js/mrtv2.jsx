let template = `
<div>
    <h1>Heading</h1>
    <hr />
    <ComponentOne msg="MsgText-ComponentOne" />
</div>
`;


const App = () => {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};


ReactDOM.render(
    React.createElement(App, null),
    document.getElementById("app")
);