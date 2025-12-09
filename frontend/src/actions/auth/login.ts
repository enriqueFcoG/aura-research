"use server"
import { LoginState, SigninFormSchema } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

export async function signin(prevState: LoginState , formData: FormData): Promise<LoginState> {
    //using zod to validate form data
    const validatedFields = SigninFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    })
 
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    //call backend api to login user
    const { email, password } = validatedFields.data

    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
 
    if (!res.ok) {
        //due security we are showing one error message
        return { errors:  "Invalid Email or Password", message: "Invalid Email or Password" }
    }
    //TODO: get token from external backend
    // await createSession(user.id)
    redirect('/profile')
 
}