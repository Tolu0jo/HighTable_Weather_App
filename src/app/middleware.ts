import middleware from "next-auth/middleware"
export default middleware

//or export{default} from "next-auth/middleware"
export const config={
    matcher:["/dashboard"]
}