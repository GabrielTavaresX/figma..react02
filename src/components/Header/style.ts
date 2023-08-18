import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"


export const Header = styled.header`
 border-bottom: 0.8rem solid var(--third);
    display: flex;
    height: 3rem;
    background-color: rgb(199, 198, 198);
    border-radius: 150px;
    picture{
        margin-left: 0.5;
    padding: 0.5;
    }
     img{
        height: 100%;
     }
     `
     export const NavBar = styled.nav`
   border-bottom: 0.8rem solid var(--third);
    display: flex;
    height: 3rem;
    background-color: rgb(199, 198, 198);
    border-radius: 150px;
      picture{
         margin-left: 0.5;
    padding: 0.5;
      }
      img{
         height: 100%;
      }
        ul{
         display: flex;
    align-items: right;
    list-style-type: none;
    height: 0%;
    position: absolute;
        
        li{
         padding: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
        
         a{
            text-decoration: none;
    color: var(--black);
         }
        }
   
   li:hover{
      backdrop-filter: blur(5px);
   }

#txtBusca {
   float: left;
    background-color: transparent;
    padding-left: 5px;
    font-style: italic;
    font-size: 18px;
    border-radius: 200px;
    height: 97%;
    width: 100%;
    align-items: center;
    display: flex;
}
        }
     `