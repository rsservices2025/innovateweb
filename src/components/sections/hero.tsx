// /src/components/sections/hero.tsx

"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SiteLogo } from "@/components/shared/site-logo";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
      {/* Top Left Badge */}
      <div className="absolute left-0 top-6 z-20">
        <div className="rounded-r-full border border-border bg-card px-5 py-2 pl-6">
          <SiteLogo />
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-blue-600/30 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 text-left"
          >
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Ultimate{" "}
              <span className="text-saas-gradient">Developer</span> Learning
              Bundle
            </h1>

            <div className="text-lg text-muted-foreground sm:text-xl">
              <TypeAnimation
                sequence={[
                  "1500+ Web Projects",
                  1200,
                  "Full Source Code Included",
                  1200,
                  "Beginner to Advanced",
                  1200,
                  "Lifetime Access",
                  1200,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Centered Button */}
            <div className="flex w-full justify-center pt-4 md:justify-start">
              <Button
                size="lg"
                className="bg-saas-gradient px-8 text-white"
                onClick={() => {
                  window.location.href = "/cart";
                }}
              >
                Get Instant Access
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md"
          >
            <div className="absolute inset-0 rounded-2xl bg-saas-gradient opacity-20 blur-2xl" />
            <Image
              src="/assets/book.png"
              alt="WebDev Practice Pack"
              width={500}
              height={500}
              className="relative z-10 w-full rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}