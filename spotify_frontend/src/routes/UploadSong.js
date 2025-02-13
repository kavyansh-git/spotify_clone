import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers"
import { useNavigate } from "react-router-dom";

const UploadSong = () => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState("");
    const navigate = useNavigate();

    const submitSong = async () => {
        
        const data = {name, thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if (response.err) {
            alert("Could not create Song");
            return;
        }
        alert("Success");
        navigate("/home");
    }

    console.log(window);
    console.log(window.cloudinary);

    return (
        <div className="w-full h-full flex">
            {/*This will be the left panel. */}
            <div className="w-1/5 h-full flex flex-col justify-between pb-10 bg-black">
                <div>
                    {/* This div is for logo. */}
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt="spotify logo " width={125}/>
                    </div>
                    <div className="py-2">
                        <IconText 
                            iconName={"material-symbols:home"}
                            displayText={"Home"}
                            active
                        />
                        <IconText 
                            iconName={"iconoir:search"}
                            displayText={"Search"}
                            
                        />
                        <IconText 
                            iconName={"ion:library-outline"}
                            displayText={"Your Library"}
                            
                        />
                        <IconText 
                            iconName={"ic:sharp-library-music"}
                            displayText={"My Music"}
                            
                        />
                    </div>
                    <div className="pt-4">
                        <IconText 
                            iconName={"mingcute:new-folder-fill"}
                            displayText={"Create Playlist"}
                            
                        />
                        <IconText 
                            iconName={"mdi:favourite"}
                            displayText={"Liked Songs"}
                            
                        />                        
                    </div>
                </div>
                <div className="px-5">
                    <div className="w-2/5 flex items-center justify-center p-2 border border-gray-400 hover:border-white cursor-pointer rounded-full text-white">
                        <Icon icon="lucide:globe" />
                        <div className="ml-2 text-sm font-semibold">English</div>
                    </div>
                </div>
            </div>
            {/*This will be the right part(main content). */}
            <div className="w-4/5 h-full bg-app-black overflow-auto">
                <div className="navbar w-full h-1/10 bg-black flex items-center justify-end  bg-opacity-50">
                    <div className="w-1/2 flex items-center h-full">
                        <div className="w-2/3 flex justify-around">
                        <TextWithHover displayText={"Premium"}/>
                        <TextWithHover displayText={"Support"}/>
                        <TextWithHover displayText={"Download"}/>
                        </div>
                        <div className="border-r h-1/2 flex border-white"></div>
                        <div className="w-1/3 flex justify-around items-center h-full">
                        <TextWithHover displayText={"Upload Song"}/>
                        <div className="flex w-10 h-10 items-center justify-center font-semibold cursor-pointer bg-white rounded-full">KG</div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload your Music
                    </div>
                    <div className="w-2/3 flex space-x-2 justify-between">
                        <div className="w-1/2">
                        <TextInput 
                            label="Name"
                            labelClassName={"text-white"}
                            placeholder="Name"
                            value={name}
                            setValue={setName} 
                        />
                        </div>
                        <div className="w-1/2">
                        <TextInput 
                            label="Thumbnail"
                            labelClassName={"text-white"}
                            placeholder="Thumbnail"
                            value={thumbnail}
                            setValue={setThumbnail} 
                        />
                        </div>                        
                    </div>
                    <div className="py-8">
                        {uploadedSongFileName? (
                            <div className="bg-gray-400 rounded-full w-1/3 p-3">{uploadedSongFileName.substring(0,35)}...</div>
                        ) : (
                        <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName}/>
                        )}
                    </div>
                    <div className="bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold" onClick={submitSong} >
                        Submit Song
                    </div>
                    
                </div>

            </div>
        </div>
    )
};

export default UploadSong;