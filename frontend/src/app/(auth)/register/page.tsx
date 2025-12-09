"use client";

import { signup } from "@/actions/auth/register";
import Link from "next/link";
import { useActionState } from "react";

const Register = () => {
  const [state, action, pending] = useActionState(signup, undefined)
  
  return (
    <div className="bg-white p-4 rounded-xl">
      <form action={action}>
    <p className="text-4xl font-bold text-center text-secondary-light">Create your account</p>
    <br></br>

    <div className="p-2">
      <label htmlFor="firstName" className="text-secondary-light">First Name</label>
        <div className=" flex min-w-lg rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all duration-200">
          <input id="firstName" name="firstName" className="pl-2 ml-2 w-full border-none outline-none text-stone-500 " />
        </div>
      {state?.errors?.firstName && <p className="text-red-500" >{state.errors.firstName}</p>}
    </div>

    <div className="p-2">
      <label htmlFor="lastName" className="text-secondary-light">Last Name</label>
        <div className=" flex min-w-lg rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all duration-200">
          <input id="lastName" name="lastName" className="pl-2 ml-2 w-full border-none outline-none text-stone-500 " />
        </div>
      {state?.errors?.lastName && <p className="text-red-500">{state.errors.lastName}</p>}
    </div>

    <div className="p-2">
      <label htmlFor="email" className="text-secondary-light">Email</label>
        <div className=" flex min-w-lg rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all duration-200">
          <input id="email" name="email" type="email" className="pl-2 ml-2 w-full border-none outline-none text-stone-500 " />
        </div>
      {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
    </div>

    <div className="p-2">
      <label htmlFor="password" className="text-secondary-light">Password</label>
      <div className=" flex min-w-lg rounded-l border border-stone-500/50 h-[40px] bg-white focus-within:border-cyan-500 transition-all duration-200">
        <input id="password" name="password" type="password"className="pl-2 ml-2 w-full border-none outline-none text-stone-500 " />
      </div>
      {state?.errors?.password && (
        <div>
          <p className="text-red-500" >Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error} className="text-red-500">- {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <div className="p-2">
      <button type="submit" disabled={pending} className="flex-1 text-cyan-50 bg-secondary-light rounded-xl h-[40px] w-full ">Sign Up</button>
      <p className="text-sm text-gray-600 mt-4">
        Back to{" "}
        <Link href="/login" className="text-blue-600">
          Sign In
        </Link>
      </p>
    </div>
  </form>
</div>
  );
};

export default Register;