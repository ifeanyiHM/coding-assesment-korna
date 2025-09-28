import styled, { css } from "styled-components";

interface ButtonProps {
  type?: "topic" | "follow" | "see more";
}

const Button = styled.button<ButtonProps>`
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 9999px;
  cursor: pointer;

  ${(props) =>
    props.type === "topic" &&
    css`
      padding: 0.5rem 1rem;
      background: var(--color-border);
      transition: background-color 0.2s ease;
      border: none;

      &:hover {
        background: #e5e5e5;
      }
    `}

  ${(props) =>
    props.type === "follow" &&
    css`
      padding: 0.375rem 1rem;
      border: 1px solid var(--color-primary);
      background-color: #fff;
      flex-shrink: 0;
      transition: border-color 0.2s ease;

      &:hover {
        border-color: #9ca3af;
      }
    `}

  ${(props) =>
    props.type === "see more" &&
    css`
      color: var(--color-secondary);
      background: none;
      border: none;
    `}
`;

export default Button;
