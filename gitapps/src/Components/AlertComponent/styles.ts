import styled from "styled-components";

import { AlertProps } from "./types";

export const Container = styled.div<AlertProps>`
    width: 50%;
    min-width: 1032px;
    color: var(--form-black);
    padding: 2rem;
    display: ${(props) => props.open ? "flex" : "none"};
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 1px solid var(--form-black);
    border-radius: 6px;
    background-color: var(--form-white);

`
