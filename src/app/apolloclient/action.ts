import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
  mutation SignupUser($name: String!, $email: String!, $password: String!, $confirmPassword: String!) {
    signup(name: $name, email: $email, password: $password, confirmPassword: $confirmPassword) {
      name
      email
    }
  }
`;

export const ADD_CITY = gql`
mutation AddCity($name: String!, $email: String!){
addcity(name: $name, email: $email){
    name
}
}
`;

export const DELETE_CITY=gql`
mutation DeleteCity($name: String!, $email: String!) {
    deletecity(name: $name, email: $email)
  }

`

export const GET_CITIES= gql`
query GetCities($email: String){
    getcities(email: $email){
      name  
    }
}
`



