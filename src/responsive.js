import { css } from "styled-components";

export const large = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
      @media only screen and (max-width: 789px) {
        ${props}
      }
    `;
};

export const mobile = (props) => {
  return css`
        @media only screen and (max-width: 680px) {
          ${props}
        }
      `;
};
