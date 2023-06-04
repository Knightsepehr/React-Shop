import RegistrationForm from "../../comp/forms/registerform"
import Jumbotron from "../../comp/etc/Jumbotron";

interface Props{

}

function RegisterPage({}) {
    return(
        <>
            <Jumbotron pageTitle="Create an Account" pageaddresstext="Home / Create An Account"/>
            <div className="w-full flex flex-col items-center justify-center py-10">
                <RegistrationForm/>
            </div>
        </>
    )
}

export default RegisterPage;