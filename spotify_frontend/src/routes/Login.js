import { Icon } from "@iconify/react";
import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";

const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

const login = async () => {

        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
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
                    <div className="font-bold mb-4">To continue, log in to Spotify.</div>
                    <TextInput 
                        label="Email address or Username"
                        placeholder="Email address or Username"
                        className="my-4"
                        value={email}
                        setValue={setEmail}    
                    />
                    <PasswordInput 
                        label="Password"
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}    
                    />
                    <div className="w-full flex items-center justify-end my-8">
                        <button className="bg-green-400 text-lg font-semibold p-3 px-10 rounded-full" onClick={(e)=>{
                            e.preventDefault();
                            login();
                        }}>
                            LOG IN
                        </button>
                    </div>
                    <div className="w-full border border-gray-300"></div>
                    <div className="my-6 font-semibold text-lg">
                        Don't have an account?
                    </div>
                    <div className="py-4 border border-gray-500 rounded-full text-gray-500 font-bold w-full flex items-center justify-center">
                        <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
                    </div>
                </div>
            </div>
        

    )

};

export default LoginComponent;