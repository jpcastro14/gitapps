import styled from "styled-components";

export const SideNavContainer = styled.div`
    display: grid;
    grid-template-rows: 25% 60% 10%;
    grid-template-columns: 100%;
    gap: 20px;
    flex-direction: column;
    width: 300px;
    background-color: var(--darker-blue);
    justify-content: space-between;
    padding: 20px;
`;

export const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        height: 100px;
    }
`;

export const ContentDiv = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 10% 10% 10% 10%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 450px;
    button{
        height: 46px;
        border: 2px solid var(--regular-blue);
        border-radius: 6px;
        background-color: transparent;
        font-size: 18px;
        font-weight:lighter;
        &:hover{
            background-color: var(--regular-blue);
        }
    }
`;

export const ItemDiv = styled.div`
    height: 30px;
    width: 100%;
    background-color: var(--white);
    border-radius: 8px;
    border: 1px solid var(--alternate-white);
    box-shadow: 2px 1px 2px 1px var(--regular-gray);
`;

export const LogoutDiv = styled.div`
    width: 100%;
    button{
        font-size: 18px;
        width: 100%;
        height: 46px;
        background-color: var(--regular-red);
        border: 1px solid var(--regular-red);
        border-radius: 8px;
        &:hover{
            background-color: var(--lighter-red);
        }
    }
`