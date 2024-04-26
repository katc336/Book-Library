import MobileTheme from "../SharedComponents/MobileTheme"
import MobileNavBar from "./MobileNavBar";
import WebNavBar from "./WebNavBar";
const NavBar = () => {
    const { isMobile } = MobileTheme();
    return (
        <div>
            {
                isMobile
                    ?
                    <div>
                        <MobileNavBar />
                    </div>
                    :
                    <div>
                        <WebNavBar />
                    </div>
            }
        </div>
    )
}
export default NavBar