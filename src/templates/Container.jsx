import NavigationBar from "../components/Navigation/NavigationBar";

function Container ({...props}) {
    return (
        <NavigationBar {...props} />
    );
};

export default Container;