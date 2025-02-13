import spotify_logo from "../assets/images/spotify_logo_white.svg"
import IconText from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";

const focusCardsData = [
    {
        title:"Peaceful Piano", 
        description:"Rest and indulge with peaceful piano pieces.",
        imgUrl:"https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=" 
    },
    {
        title:"Deep focus", 
        description:"Keep calm and focus with this music.",
        imgUrl:"https://www.brainscape.com/academy/content/images/size/w620/2022/02/Ultimate-study-guide-header.png" 

    },
    {
        title:"Instrumental study", 
        description:"Focus with soft study music in the background.",
        imgUrl:"https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=2048x2048&w=is&k=20&c=AO3CyIrYfxt2TECmRWM4QRPB2Ed4ROTSlGR1U6yTDbo=" 
    },
    {
        title:"Focus flow", 
        description:"Up tempo instrumental hip hop beats.",
        imgUrl:"https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.jpg?s=2048x2048&w=is&k=20&c=_1rH4yH4CQyvaWZWw8uW2r6Y8HUPZN3NaKUU06Fg6KA="  
    }, 
    {
        title:"Beats to think to", 
        description:"Focus with deep techno and tech house.",
        imgUrl:"https://www.shutterstock.com/shutterstock/photos/2153937561/display_1500/stock-photo-woman-with-afro-hair-dancing-and-listening-music-with-headphones-and-smartphone-in-the-street-2153937561.jpg" 
    }];

const HomeComponent = () => {
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
                        <div className="w-3/5 flex justify-around">
                        <TextWithHover displayText={"Premium"}/>
                        <TextWithHover displayText={"Support"}/>
                        <TextWithHover displayText={"Download"}/>
                        </div>
                        <div className="border-r h-1/2 flex border-white"></div>
                        <div className="w-2/5 flex justify-around items-center h-full">
                        <TextWithHover displayText={"Sign up"}/>
                        <div className="flex px-8 items-center justify-center font-semibold cursor-pointer bg-white rounded-full h-2/3">Log in</div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView 
                        titleText="Focus" 
                        cardsData={focusCardsData}
                    />
                    <PlaylistView 
                        titleText="Spotify Playlists"
                        cardsData={focusCardsData}
                    />
                    <PlaylistView 
                        titleText="Sound of India"
                        cardsData={focusCardsData}
                    />
                </div>

            </div>
        </div>
    )
};

const PlaylistView = ({titleText, cardsData}) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-between space-x-6">
                { // cardsData will be an array 
                    
                    cardsData.map((item) => {
                        return (
                            <Card 
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                    
                }                
            {/*    <Card 
                    title="Peaceful Piano" 
                    description="Rest and indulge with peaceful piano pieces."
                    imgUrl="https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=" 
                />
                <Card 
                    title="Deep focus" 
                    description="Keep calm and focus with this music."
                    imgUrl="https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=" 
                />
                <Card 
                    title="Instrumental study" 
                    description="Focus with soft study music in the background."
                    imgUrl="https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=" 
                />
                <Card 
                    title="Focus flow" 
                    description="Up tempo instrumental hip hop beats."
                    imgUrl="https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=" 
                />
                <Card 
                    title="Beats to think to" 
                    description="Focus with deep techno and tech house."
                    imgUrl="https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=" 
                /> */}
                </div>
            </div>           
        
    )
};

const Card = ({title, description, imgUrl}) => {
    return (
        
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="py-2">
                <img 
                    className="w-full rounded-md" 
                    src={imgUrl}             
                    alt="label" />
            </div>
            <div className="text-white py-3 font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>   
    )

};

export default HomeComponent;