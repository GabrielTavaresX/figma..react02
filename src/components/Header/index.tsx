import * as S from "./style"
 export function Header(){
   return(
    <S.Header>
      
       <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Buscar..." />

        </div>
       <S.NavBar>
       <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          </ul>
       </S.NavBar>
        
    </S.Header>
   )

 }
 