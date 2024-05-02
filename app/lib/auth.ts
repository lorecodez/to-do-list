import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT } from 'next-auth/jwt'
import { prisma } from "@/prisma/prisma";
import { Account, AuthOptions, Profile, Session, User } from "next-auth";


export const authoptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',

            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "your@email.com"
                },
                password: {
                    label: "Password",
                    type: "text",
                }
            },
            authorize: async (credentials: any) => {
                if(!credentials){
                    return null;
                };

                const { email, password } = credentials;

                const user = await prisma.users.findUnique({
                    where: {
                        email
                    }
                });

                if(!user){
                    return null;
                }

                const userPassword = user.password;

                const isVaildPassword = bcrypt.compareSync(password, userPassword);

                if(!isVaildPassword) {
                    return null;
                }

                return user
            }
        })
    ], 
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        async encode({secret, token}){
            if(!token){
                throw new Error('No token to encode');
            }
            return jwt.sign(token, secret);
        },
        async decode({secret, token}){
            if(!token){
                throw new Error('No token to decode');
            }
            const decodedToken = jwt.verify(token, secret);
            if(typeof decodedToken === 'string'){
                return JSON.parse(decodedToken);
            }else{
                return decodedToken;
            }
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        async session(params: {session: Session; token: JWT; user: User}) {
            if(params.session.user){
                params.session.user.email = params.token.email;
            };

            return params.session;
        },
        async jwt(params: {
            token: JWT;
            user?: User | undefined;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: Boolean | undefined;
        }) {
            if(params.user){
                params.token.email = params.user.email;
            };

            return params.token;
        },
    },
};