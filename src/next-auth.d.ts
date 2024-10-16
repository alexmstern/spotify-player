import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface JWT {
        accessToken?: string
    }
    
    interface Session {
        accessToken?: string
    }

    interface User {
        id?: string
    }
}