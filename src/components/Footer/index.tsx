import * as S from "./style"
import Face from "../../assets/Vector.png"
import Insta from "../../assets/Vector(1).png"

 export function Footer(){
    return(
        <S.Footer>
            <a href="https://pt-br.facebook.com/" target="_blank">
                <img src={Face} alt="Facebook"/>
            </a>
             <img src={Insta} alt="Instagram"/>
             <p>
                Comics GTP
             </p>
        </S.Footer>
    )
 }
