import React from "react";
import { ButtonContainer } from "./style";

const Button = ({title, variant="primary"})=>{
    return(
       <ButtonContainer variant={variant} onClick={onClick}>
        {title}

       </ButtonContainer>

    )
}
export{Button}