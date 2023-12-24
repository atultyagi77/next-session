import { withIronSession } from "next-iron-session";

export function withSession  (handler){
    return withIronSession(handler,{
        password: "somelong32characterpasswordSomerandomcharacter",
        cookieName: "AtulsCookie",
        cookieOptions : {
            secure: false
        }
    })
}   