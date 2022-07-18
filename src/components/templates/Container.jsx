import NavigationBar from "../molecules/Navigation/NavigationBar";

function Container ({...props}) {
    return (
        <NavigationBar {...props} />
    );
};

export default Container;