import Navbar from "./navbar";

const Layout = ({children}) => {

    return(
        <div className="content">
            <Navbar/>
            {children}
            <footer>Powered by Parker</footer>
        </div>
    );
}

export default Layout