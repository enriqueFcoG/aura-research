"use client";
import { signin } from "@/actions/auth/login";
import Link from "next/link";
import { useActionState } from "react";


const Login = () => {
    const [state, action, pending] = useActionState(signin, {})

    return (
      <div className="min-w-sm ">
        <form action={action} className="space-y-3">
          <p className="text-4xl font-bold text-center text-white">Welcome</p>
          <br/>
          <label htmlFor="email">Email</label>
          <div className=" flex min-w-lg rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all duration-200">
            <input id="email" name="email" type="email" placeholder="Email" className="pl-2 ml-2 w-full border-none outline-none text-stone-500 " />
          </div>
          <br/>
          <label htmlFor="email">Password</label>
          <div className="flex min-w-lg w-full rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all w-full duration-200">
            <input id="password" name="password" type="password" placeholder="Password" className=" ml-2 w-full border-none outline-none text-stone-500 " />
          </div>
          <br/>
          <button type="submit" disabled={pending} className="flex-1 text-cyan-50 bg-secondary-light rounded-sm h-[40px] w-full ">Continue</button>
          <br/>
          <br/>
          {state?.errors && (
              <>
                <p className="text-sm text-red-500">{state.message}</p>
              </>
          )}
          <p className="text-sm text-white mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    )
};

export default Login;