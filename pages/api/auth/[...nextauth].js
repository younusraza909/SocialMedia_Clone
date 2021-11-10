import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],

    //this will customize and give you next auth default page
    // theme: {
    //     logo: 'https://links.papareact.com/sq0',
    //     brandColor: "#F13287",
    //     colorScheme: "auto"
    // }
    pages: {
        signIn: "/auth/signin"
    },
    // To customizre callback result 
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
                .split(' ')
                .join("")
                .toLowerCase()

            //token.sub is google return id
            session.user.uid = token.sub
            return session
        }
    }
})