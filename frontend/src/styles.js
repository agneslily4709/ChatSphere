import styled from "styled-components"

export const FormContainer = styled.div`
    height:80vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap: 1rem;
    align-items:center;
    .brand{
        display:flex;
        align-items:center;
        gap:1rem;
        justify-content:center;
        img{
            height:5rem;
        }
        h1{
            color:#043927;
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
            border: 0.1rem solid #76b258;
            color::#043927;
            width:100%;
            font-size:1rem;
            &:focus{
                border: #0439270.1rem solid;
                outline:none
            }
        }
        button{
            background-color:#76b258 ;
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
                background-color: #d0f0c0;
                color:#76b258 ;
            }
        }
        span{
            color:#043927;
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
        @media screen and (min-width:720px) and (max-width:1080px){
                .navbar {
                  flex-direction: column; /* Stack elements vertically on smaller screens */
                  align-items: center; /* Center-align items vertically */
                }
              
                h1 {
                margin:15px;
                  font-size: 20px; /* Further reduce font size for smaller screens */
                }
              
                button {
                  width: 70px; /* Reduce button width for smaller screens */
                  margin-left: 0; /* Remove margin for smaller screens */
                  margin-top: 10px; /* Add margin to separate buttons */
                }
              }
    }
`

export const ProfileContainer = styled.div`
    height:80vh;
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
        @media (max-width: 768px) {
               display:flex;
                flex-direction:column;
                align-items:center;
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
        @media (max-width: 768px) {
            grid-template-columns:20% 80%;  
            .contact-item{
                align-items:center;
            }
            .chat-tagline{
                font-size:15px;
            }
            .username{
                display:none;
            }
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
.input{
    display:flex;
    justify-content:space-between;
    margin:0px 20px 0px 20px;
    input{
        width:100%;
        height:30px;
        padding:10px;
        border:2px solid green;
        font-size:20px;
    }
    button{
        width:80px;
        border:2px solid green;
        background-color:green;
        color:white;
    }
}
`

export const MessageContainer = styled.div`
    margin:0px 20px;
    height:70vh;
    overflow:auto;
    .message{
        margin:20px;
        color:black;
        .sender {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 10px; /* Add some margin to separate messages */
          background-color: #E0FFD0; /* Example background color for sender messages */
          color: #333; /* Example text color for sender messages */
          padding: 5px;
          border-radius: 10px; /* Rounded corners for the message bubble */
        }
        
        .receiver {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-right: 10px; /* Add some margin to separate messages */
          background-color:  #043927; /* Example background color for receiver messages */
          color: #fff; /* Example text color for receiver messages */
          padding: 5px;
          border-radius: 10px; /* Rounded corners for the message bubble */
        }
    }
`