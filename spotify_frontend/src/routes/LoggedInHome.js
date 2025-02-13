    import {useState} from "react";
    import {Howl, Howler} from "howler";
    import {Icon} from "@iconify/react";
    import spotify_logo from "../assets/images/spotify_logo_white.svg";
    import IconText from "../components/shared/IconText";
    import TextWithHover from "../components/shared/TextWithHover";
    import LoggedInContainer from "../containers/LoggedInContainer";
    
    const focusCardsData = [
        {
            title: "Peaceful Piano",
            description: "Relax and indulge with beautiful piano pieces",
            imgUrl: "https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=",
        },
        {
            title: "Deep Focus",
            description: "Keep calm and focus with this music",
            imgUrl: "https://www.brainscape.com/academy/content/images/size/w620/2022/02/Ultimate-study-guide-header.png",
        },
        {
            title: "Instrumental Study",
            description: "Focus with soft study music in the background.",
            imgUrl: "https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=2048x2048&w=is&k=20&c=AO3CyIrYfxt2TECmRWM4QRPB2Ed4ROTSlGR1U6yTDbo=",
        },
        {
            title: "Focus Flow",
            description: "Up tempo instrumental hip hop beats",
            imgUrl: "https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.jpg?s=2048x2048&w=is&k=20&c=_1rH4yH4CQyvaWZWw8uW2r6Y8HUPZN3NaKUU06Fg6KA=",
        },
        {
            title: "Beats to think to",
            description: "Focus with deep techno and tech house",
            imgUrl: "https://www.shutterstock.com/shutterstock/photos/2153937561/display_1500/stock-photo-woman-with-afro-hair-dancing-and-listening-music-with-headphones-and-smartphone-in-the-street-2153937561.jpg",
        },
    ];
    
    const spotifyPlaylistsCardData = [
        {
            title: "Peaceful Piano",
            description: "Relax and indulge with beautiful piano pieces",
            imgUrl: "https://media.istockphoto.com/id/1129332575/photo/favorite-classical-music-close-up-view-of-gentle-female-hands-playing-a-melody-on-piano-while.jpg?s=2048x2048&w=is&k=20&c=pz9--6xJpCXNvMfViLslF57fPVhzSfh3-LA5LGct2ZM=",
        },
        {
            title: "Deep Focus",
            description: "Keep calm and focus with this music",
            imgUrl: "https://www.brainscape.com/academy/content/images/size/w620/2022/02/Ultimate-study-guide-header.png",
        },
        {
            title: "Instrumental Study",
            description: "Focus with soft study music in the background.",
            imgUrl: "https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=2048x2048&w=is&k=20&c=AO3CyIrYfxt2TECmRWM4QRPB2Ed4ROTSlGR1U6yTDbo=",
        },
        {
            title: "Focus Flow",
            description: "Up tempo instrumental hip hop beats",
            imgUrl: "https://media.istockphoto.com/id/92026251/photo/hip-hop-musician.jpg?s=2048x2048&w=is&k=20&c=_1rH4yH4CQyvaWZWw8uW2r6Y8HUPZN3NaKUU06Fg6KA=",
        },
        {
            title: "Beats to think to",
            description: "Focus with deep techno and tech house",
            imgUrl: "https://www.shutterstock.com/shutterstock/photos/2153937561/display_1500/stock-photo-woman-with-afro-hair-dancing-and-listening-music-with-headphones-and-smartphone-in-the-street-2153937561.jpg",
        },
    ];
    
    const Home = () => {
        return (
            <LoggedInContainer curActiveScreen="home">
                <PlaylistView titleText="Focus" cardsData={focusCardsData} />
                <PlaylistView
                    titleText="Spotify Playlists"
                    cardsData={spotifyPlaylistsCardData}
                />
                <PlaylistView
                    titleText="Sound of India"
                    cardsData={focusCardsData}
                />
            </LoggedInContainer>
        );
    };
    
    const PlaylistView = ({titleText, cardsData}) => {
        return (
            <div className="text-white mt-8">
                <div className="text-2xl font-semibold mb-5">{titleText}</div>
                <div className="w-full flex justify-between space-x-4">
                    {
                        // cardsData will be an array
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
                </div>
            </div>
        );
    };
    
    const Card = ({title, description, imgUrl}) => {
        return (
            <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
                <div className="pb-4 pt-2">
                    <img className="w-full rounded-md" src={imgUrl} alt="label" />
                </div>
                <div className="text-white font-semibold py-3">{title}</div>
                <div className="text-gray-500 text-sm">{description}</div>
            </div>
        );
    };
    
    export default Home;
    