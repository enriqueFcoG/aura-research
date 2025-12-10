"use client";

import { signup } from "@/actions/auth/register";
import { FormField } from "@/components/forms/FormField";
import Link from "next/link";
import { useActionState } from "react";

const Register = () => {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <div className="bg-white p-4 rounded-xl">
      <form action={action}>
        <p className="text-4xl font-bold text-center text-secondary-light">
          Create your account
        </p>

        <FormField
          id="firstName"
          name="firstName"
          label="First Name"
          error={state?.errors?.firstName}
        />

        <FormField
          id="lastName"
          name="lastName"
          label="Last Name"
          error={state?.errors?.lastName}
        />

        <FormField
          id="email"
          name="email"
          type="email"
          label="Email"
          error={state?.errors?.email}
        />

        <FormField
          id="password"
          name="password"
          type="password"
          label="Password"
          error={state?.errors?.password}
        />

        <div className="p-2">
          <button
            type="submit"
            disabled={pending}
            className="flex-1 text-cyan-50 bg-secondary-light rounded-xl h-[40px] w-full"
          >
            Sign Up
          </button>

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
