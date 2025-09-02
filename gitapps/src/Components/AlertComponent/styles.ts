import styled from "styled-components";

import { AlertProps } from "./types";

export const Container = styled.div<AlertProps>`
    width: 50%;
    min-width: 1032px;
    color: var(--form-black);
    background-color: var(--regular-green);
    padding: 1rem;
    font-family: Poppins;
    display: ${(props) => props.open ? "flex" : "none"};
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 4px solid var(--white);
    border-radius: 6px;
`
