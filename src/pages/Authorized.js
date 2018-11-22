import Redirect from 'umi/redirect';

const Authorized = (props)=>{
    var authority = props.authority;
    // return props.children;
    return props.noMatch;
}

export default ({ children }) => (
    <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/account/login" />}>
        {children}
    </Authorized>
);