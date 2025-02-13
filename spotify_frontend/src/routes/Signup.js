import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";

const SignupComponent = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const signUp = async () => {

        const data = {email, password, username, firstName, lastName};
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            navigate("/home");
        }
        else {
            alert("Failure");
        }
    }
    
    return (
        
        <div className="w-full h-full flex flex-col items-center">
                <div className="logo p-8 border-b border-gray-300 w-full flex justify-center">
                    <Icon icon="logos:spotify" width="175"/>
                </div>
                <div className="inputRegion w-1/3 py-10 flex flex-col items-center justify-center">
                
                    {/* We will have our 2 inputs email and password. */}
                    <div className="font-bold text-2xl mb-4">Sign up for free to start listening.</div>
                    <TextInput 
                        label="Email address"
                        placeholder="Enter your email address"
                        className="my-4"
                        value={email}
                        setValue={setEmail}    
                    />
                    <TextInput 
                        label="Username"
                        placeholder="Enter your username"
                        className="mb-4"
                        value={username}
                        setValue={setUsername}    
                    />
                    <PasswordInput 
                        label="Create Password"
                        placeholder="create a strong password"
                        value={password}
                        setValue={setPassword}    
                    />
                    <div className="w-full flex justify-between items-center space-x-8">
                    <TextInput 
                        label="First Name"
                        placeholder="Enter your first name"
                        className="my-4"
                        value={firstName}
                        setValue={setFirstName}    
                    />
                    <TextInput 
                        label="Last Name"
                        placeholder="Enter your last name"
                        className="my-4"
                        value={lastName}
                        setValue={setLastname}    
                    />
                    </div>
                    <div className="w-full flex items-center justify-center my-8">
                        <button 
                            className="bg-green-400 text-lg font-semibold p-3 px-10 rounded-full"
                            onClick={(e) => {e.preventDefault();
                            signUp();
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="w-full border border-gray-300"></div>
                    <div className="my-6 font-semibold text-lg">
                        Already have an account?
                    </div>
                    <div className="py-4 border border-gray-500 rounded-full text-gray-500 font-bold w-full flex items-center justify-center">
                        <Link to="/login">LOG IN INSTEAD</Link>
                    </div>
                </div>
            </div>
        

    )

};

export default SignupComponent;