// Higher Order Component - A component (HOC) that renders another component (regular component)
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// regular component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// Higher Order Component - E' generico: può wrappare qualsiasi component, aggiungendogli in questo caso del testo
// la funzione withAdminWarning ritorna un HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => ( // return del HOC, in fondo le props del HOC vengono passate al component wrappato
        <div>
            { props.isAdmin && <p>This is private info. Please don't share.</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

// wrappo il regular component Info con la funzione withAdminWarning: il risultato è il HOC AdminInfo
const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>, document.getElementById('app'));


//ex
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : 'Not Authorized' }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'));