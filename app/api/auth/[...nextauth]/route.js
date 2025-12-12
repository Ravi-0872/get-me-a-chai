import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/payment";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        const client = await mongoose.connect("mongodb://localhost:27017/GetMeAChai");
        const currentuser = User
          .findOne({ email:email });
        if (!currentuser) {
          await User.create({
            email: email,
            username: email.split("@")[0],
          });
          await newUser.save()
          user.name=newUser.username;
        }
        else {
          user.name=currentuser.username;
        }
        return true;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
