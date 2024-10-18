import NextAuth, { JWT, NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: {
                url: 'https://accounts.spotify.com/authorize',
                params: { scope: 'user-read-email' }
            }
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            session.accessToken = (token as JWT).accessToken
            return session
        }
    },
    pages: {
        signIn: '/login',
        error: '/login'
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }