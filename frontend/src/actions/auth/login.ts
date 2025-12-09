"use server"
import { LoginState, SigninFormSchema } from "@/app/lib/definitions";
import { createSession } from "@/lib/server/session";
import { authenticateUser } from "@/services/auth.service";
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

    const user = await authenticateUser(validatedFields.data)

    if (!user) {
        //due security we are showing one error message
        return { errors:  "Invalid Email or Password", message: "Invalid Email or Password" }
    }
    //TODO: get token from external backend
    await createSession(user.access_token, user.refresh_token)
    redirect('/profile')
 
}