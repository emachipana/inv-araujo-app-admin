import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FONTS } from "../../styles/fonts";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ size }) => size || 18}px;
  font-weight: 700;
  text-align: start;
`;

export const Section = styled.section`
  width: 100%;
  height: ${({ isFile, type }) => isFile ? "auto" : (type === "textarea" ? "80px" : "38px")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ isFile }) => isFile ? "0" : "0.3rem 0.7rem"};
  outline: 1px solid  ${({ color }) => color};
  outline: ${({ isFile }) => isFile ? "none" : ""};
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? ".6" : 1};
`;

export const Main = css`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  outline: none;
  color: ${COLORS.gray};
  background-color: transparent;
  font-family: ${FONTS.primary};

  &::placeholder {
    color: ${COLORS.taupe};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const TextError = styled.p`
  font-size: 14px;
  padding: 1px 4px;
  font-weight: 600;
  color: ${COLORS.white};
  border-radius: 4px;
  margin-bottom: -8px;
  background-color: ${COLORS.red};
  opacity: .8;
`;

export const CheckContainer = styled.div`
  width: ${({ size }) => size || 20}px;
  height: ${({ size }) => size || 20}px;
  border: 1px solid ${({ checked }) => checked ? COLORS.persian : COLORS.platinium};
  border-radius: 0.25rem;
  background-color: ${({ checked }) => checked ? COLORS.persian : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  transition: .1s ease;
`;
