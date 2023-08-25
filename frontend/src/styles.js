import styled from "styled-components"

export const FormContainer = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    align-items:center;
    background-color: #f0f8ff;
    .brand{
        display:flex;
        align-items:center;
        gap:1rem;
        justify-content:center;
        img{
            height:5rem;
        }
        h1{
            color:#1f3a93 ;
            text-transform:uppercase;
        }
    }
    form{
        display:flex;
        flex-direction:column;
        gap:2rem;
        padding:3rem 5rem;
        border-radius:2rem;
        input{
            background-color:transparent;
            padding:1rem;
            border: 0.1rem solid #3498db;
            color:#1f3a93;
            width:100%;
            font-size:1rem;
            &:focus{
                border: #1f3a93 0.1rem solid;
                outline:none
            }
        }
        button{
            background-color:#3498db ;
            color:white;
            padding:1rem 1rem;
            border:none;
            font-weight:bold;
            border-radius:0.4rem;
            curson:pointer;
            font-size:1rem;
            text-transform:uppercase;
            transition:0.5s ease-in-out;
            &:hover{
                background-color: #1f3a93;

            }
        }
        span{
            color:#1f3a93;
            text-transform:uppercase;
            a{
                text-decoration:none;
                font-weight:bold;
                
            }
        }
    }
`

export const NavBarContainer = styled.div`
    background-color: #043927;
    padding:1rem;
    h1{
        color:#D0F0C0;
    }
    .navbar{
        margin:0px 50px;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        .nav-items{
            margin-right:0px;
        }
        button{
            padding:10px;
            border-radius:16px;
            width:100px;
            margin-left:20px;
            font-size:15px;
            background-color:#D0F0C0;
            transition:0.5s ease-in-out;
            &:hover{
                background-color:#76b258;
            }
        }
        a{
            color:#043927;
            text-decoration:none;
            cursor:pointer;
        }
    }
`

export const ProfileContainer = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .profile{
        padding:20px;
        border:2px solid red;
        display:grid;
        grid-template-columns:130px auto;
        justify-content:space-between;
        p{
            margin: 15px 0;
        }
        .avatar{
            height:100px;
            width:100px;
        }
    }
`

export const ChatContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    align-items:center;
`

export const LoaderContainer = styled.div`
    height:90vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    align-items:center;
`

export const ContactContainer = styled.div`
    height:90vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    align-items:center;
    .chat{
        height:85vh;
        width:85vw;
        display:grid;
        grid-template-columns:30% 70%;
        background-color:aliceblue;
        @media screen and (min-width:720px) and (max-width:1080px)
        {
            grid-template-columns:35% 65%;  
        }
        .left{
            background-color:#043927;
            padding:20px;
            overflow:auto;
            justify-content:center;
            align-items:center;
            &::-webkit-scrollbar{
                width:0.2rem;
                &-thumb{
                    backrgound-color:red;
                    width:0.1rem;
                    border-radius:1rem;
                }
            }
            h1{
                color:#D0F0C0;
                
            }
            .contact-item{
                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                border-radius:10px;
                cursor:pointer;
                margin:20px 0px;
                padding:10px;
                display:flex;
                gap:20px;
                background-color:#D0F0C0;
                &:hover{
                    background-color:red;
                }
            }
            .contact-pic{
                width:50px;
                height:50px;
            }
        }
        }
`

export const WelcomeContainer = styled.div`
        text-align:center;
        display:flex;
        flex-direction:column;
        gap:2rem;
`

export const ChatWindowContainer = styled.div`
    padding:0px 40px;
    .chat-header{
        display:flex;
        flex-direction:row;
    }
    .profile-pic{
        margin:0px 40px; 
        width:50px;
        height:50px;
    }
`

export const ChatInputContainer = styled.div`
    display:grid;
    align-items:center;
    .input{
        display:flex;
        gap:1rem;
        align-content:center;
        height:40px;
        input{
            width:90%;
            color:green;
            border:2px solid green;
            padding-left:1rem;
            font-size:1.2rem;
            &::selection{
                backgroud-color:green;
            }
            &:focus{
                outline:none
            }
        }
        button{
            width:70px;
            padding:0.3rem 0.2rem;
            border-radius:0.2rem;
            align-items:center;
            justify-content:center;
            border:2px solid green;
        }
    }
`
export const MessageContainer = styled.div`
    height:75vh;
    padding:0px 40px;
`