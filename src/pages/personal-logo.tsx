import styled from "styled-components";

const LogoContainer = styled.div`
    
    margin-top: 5rem;
    --main-color: #EA2228;
    display: flex;
    justify-content: center;;
    font-family: league-gothic-condensed,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 10rem;
    line-height: 9rem;
    text-transform: uppercase;
    color: var(--main-color);
    > * {
        border-top: 1rem solid var(--main-color);
        border-bottom: 1rem solid var(--main-color);
        padding: 0 1rem;
    }
    .first-word {
        background-color: var(--main-color);
        color: white;
        margin-right: 1rem;
    }
    .second-word {
        padding: 0;
    }
`;

const PersonalLogoPage = () => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/dqp8tfk.css" />
            </head>
            <body>
                <LogoContainer>
                    <div className="first-word">Kevin</div> &nbsp; <div className="second-word">Zeillmann</div> 
                </LogoContainer>
            </body>

        </>
    )
}

export default PersonalLogoPage;