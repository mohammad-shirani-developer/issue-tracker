import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import  {prisma}  from "@/prisma/client";
import { NextAuthOptions } from "next-auth";

const authOptions:NextAuthOptions={
    adapter:PrismaAdapter(prisma),
  providers:[
    GitHubProvider({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!
  })
  ],
  session:{
    strategy:'jwt'
  }
}

export default authOptions