import NavigationBar from "../molecules/Navigation/NavigationBar";

/**
 * Plantilla para colocar siempre el Sidebar y el Navbar
 */

function Container ({...props}) {
    return (
        <NavigationBar {...props} />
    );
};

export default Container;