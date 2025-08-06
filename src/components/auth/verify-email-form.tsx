"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { z } from "zod";
import LogoSvg from "@/utils/svgs/LogoSvg";
import BackgroundWhiteLogoSvg from "@/utils/svgs/BackgroundWhiteLogoSvg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const verifyEmailSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;

export default function VerifyEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [email, setEmail] = useState<string>("");

  const form = useForm<VerifyEmailFormData>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (countdown > 0 && !canResend) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countdown, canResend]);

  // Get email from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const onSubmit = async (data: VerifyEmailFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Verify email data:", data);
      // Handle successful verification
    } catch (error) {
      console.error("Verification error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {
    if (canResend) {
      console.log("Resend code");
      // Reset countdown and disable resend button
      setCountdown(60);
      setCanResend(false);
      // Handle resend code API call here
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/auth/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hidden md:block h-auto absolute -left-20 top-1/2 -translate-y-1/2 translate-x-1/2 origin-center">
        <BackgroundWhiteLogoSvg />
      </div>
      <div className="w-full md:max-w-lg">
        <div className="rounded-3xl p-8 shadow-[0_0_22px_0_rgba(143,141,235,0.55)] bg-white/15 border-2 border-[#e5e7eb]">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-[#8898f0] mb-6 flex justify-center">
              <LogoSvg width={120} height={40} />
            </span>
            <h3 className="text-2xl font-bold text-[#000000] mb-2">
              Sign in with Email
            </h3>
            <p className="text-[#9ca3af] text-sm">
              {email || "ex@example.com"}{" "}
              <Link href="/signup/sender">
                <span className="text-[#8898f0] cursor-pointer underline">
                  Change Email
                </span>
              </Link>
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* OTP Field */}
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center space-y-6">
                    <FormControl>
                      <InputOTP
                        maxLength={4}
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <InputOTPGroup className="gap-4">
                          <InputOTPSlot
                            index={0}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20 first:rounded-full"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20"
                          />
                          <InputOTPSlot
                            index={3}
                            className="w-16 h-16 !rounded-full border-2 border-[#8898f0] text-2xl font-semibold text-[#8898f0] bg-white/20 last:rounded-full"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />

              {/* Resend Code */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={!canResend}
                  className={`text-sm transition-colors ${
                    canResend 
                      ? "text-[#8898f0] hover:text-[#6977C5] cursor-pointer" 
                      : "text-[#9ca3af] cursor-not-allowed"
                  }`}
                >
                  {canResend ? "Resend Code" : `Resend Code in ${countdown}s`}
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                variant="myCustomButton1"
                className="h-12"
              >
                {isLoading ? "Verifying..." : "Continue"}
              </Button>

              {/* Success Message */}
              <div className="text-center">
                <p className="text-[#9ca3af] text-sm">
                  OTP Sent Successfully
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
