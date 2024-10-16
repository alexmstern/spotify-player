import NextAuth, { NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: {
                url: 'https://accounts.spotify.com/authorize',
                params: { scope: 'user-read-email' },
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }