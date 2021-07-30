import { Checkbox } from "@material-ui/core";
import styled from "styled-components";
import { COLORS } from "../../res/Colors";
export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const ImageStyle = styled.img``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 8rem;
`;

export const Title = styled.h1`
  color: #43425d;
  font-weight: bold;
  align-self: center;
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 200;
  font-size: 10;
  color: #43425d;
  align-self: center;
  margin-top: 0.8rem;
`;

export const FieldWrapper = styled.div`
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const InputField = styled.input`
  padding: 10px;
  margin: 10px;
  width: 100%;
  border: none;
  border-bottom: 2px;
  border-bottom-color: ${COLORS.secondary};
  border-bottom-style: solid;
  ::placeholder {
    color: ${COLORS.primary};
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 0px;
  }
`;

export const FieldsWrapper = styled.div`
  height: 4rem;
  display: flex;
  margin-top: 0.85rem;
`;

export const CheckBoxWrapper = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })``;

export const SimpleText = styled.p`
  color: ${COLORS.primary};
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background: ${COLORS.primary};
  color: ${COLORS.secondary};
  font-size: 1.1em;
  margin: 1rem;
  padding: 0.8rem;
  border-radius: 0.3rem;
  width: 10rem;
  border: none;
`;

export const BtnText = styled.button`
  color: ${COLORS.primary};
  margin: 1rem;
  font-weight: 200;
  text-decoration: underline;
  background-color: transparent;
  border: none;
`;
