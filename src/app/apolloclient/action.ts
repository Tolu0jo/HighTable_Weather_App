import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
  mutation SignupUser($name: String!, $email: String!, $password: String!, $confirmPassword: String!) {
    signup(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
      name
      email
    }
  }
`;