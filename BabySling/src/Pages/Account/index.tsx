import AccountMenuItem from '../../comp/etc/accountmenuitem';
import Jumbotron from '../../comp/etc/Jumbotron';

function AccountMenu({}):JSX.Element {
    return(
        <>
        <Jumbotron pageTitle='Your Account' pageaddresstext='Home / My Account'/>
        <div className="flex justify-center gap-10 my-10">
            <AccountMenuItem/>
            <AccountMenuItem/>
            <AccountMenuItem/>
            <AccountMenuItem/>
        </div>
        </>
    )
    
}


export default AccountMenu;