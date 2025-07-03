import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email or phone number is required")
    .refine(
      (value) => {
        // Check if it's a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        // Check if it's a valid phone number (basic validation)
        const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
        return emailRegex.test(value) || phoneRegex.test(value)
      },
      {
        message: "Please enter a valid email address or phone number",
      },
    ),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

export type SignInFormData = z.infer<typeof signInSchema>
