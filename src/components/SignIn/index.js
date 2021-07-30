import { Grid } from "@material-ui/core";
import React from "react";
import logo from "../../assets/Images/background.png";
import {
  ContentWrapper,
  ImageStyle,
  ImageWrapper,
  Title,
  Text,
  FieldWrapper,
  InputField,
  FieldsWrapper,
  Button,
  BtnText,
  BtnWrapper,
  CheckBoxWrapper,
  SimpleText,
  HiddenCheckbox,
} from "./SignInElements";

const SignIn = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <ImageWrapper>
            <ImageStyle src={logo} />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContentWrapper>
            <Title>PANDA/TA</Title>
            <Text>Please complete to create your account.</Text>
            <FieldWrapper>
              <InputField placeholder={"First name"} />
              <InputField placeholder={"Last name"} />
            </FieldWrapper>
            <FieldsWrapper>
              <InputField placeholder={"Username"} />
            </FieldsWrapper>
            <FieldsWrapper>
              <InputField placeholder={"Email"} />
            </FieldsWrapper>
            <FieldsWrapper>
              <InputField placeholder={"Password"} />
            </FieldsWrapper>
            <FieldsWrapper>
              <InputField placeholder={"Confirm Password"} />
            </FieldsWrapper>
            <CheckBoxWrapper>
              <HiddenCheckbox />
              <SimpleText>I agree with terms and conditions</SimpleText>
            </CheckBoxWrapper>
            <BtnWrapper>
              <Button>SignUp</Button>
            </BtnWrapper>
            <BtnText>Already have an account? Sign in.</BtnText>
          </ContentWrapper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
