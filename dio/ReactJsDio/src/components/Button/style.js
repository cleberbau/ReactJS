import styled from "styled-components";

export const ButtonContainer = styled.button`

background: #565656;
border-radius:22px;
position:relativa;

color: #FFF;
padding: 2px 12px;
min=width: 128px;
widtg: 100%;

${({varinat})=> variant != "primary" && css`
    min-width: 167px;
    height: 33px;

    background: #E4105D;

    &:: after{
        content: '',
        possition: absolute;
        border: 1 px solid #e4105D;
        top: -5px;
        left: -6px;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
        border-radius:22px;

    }
`}
`
