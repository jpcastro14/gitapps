import styled from "styled-components";

export const SideNavContainer = styled.div`
    display: grid;
    grid-template-rows: 15% 60% 20%;
    grid-template-columns: 100%;
    gap: 20px;
    flex-direction: column;
    width: 300px;
    background-color: red;
    justify-content: space-between;
    padding: 20px;
`;

export const LogoDiv = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
`;

export const ContentDiv = styled.div`
    width: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemDiv = styled.div`
    height: 30px;
    width: 100%;
    background-color: var(--white);
    border-radius: 8px;
    border: 1px solid var(--alternate-white);
    box-shadow: 2px 1px 2px 1px var(--regular-gray);
`;