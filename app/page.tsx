"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Home,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NextKeyLanding() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      q: "What is the NextKey app?",
      a: "NextKey is a private digital tool built to simplify and humanize the housing access process for renters, landlords, and service providers.",
    },
    {
      q: "Who is it for?",
      a: "Renters seeking housing, landlords with available units, and community partners working on housing access.",
    },
    {
      q: "When does it launch?",
      a: "We’re preparing for launch—join our interest list to stay updated!",
    },
    {
      q: "Is this free?",
      a: "Yes, we aim to make NextKey accessible to renters at no cost. Landlord and partner pricing may vary.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_50%)] animate-spin-slow" />
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08),transparent_60%)] animate-pulse" />
      </div>

      {/* Investor Notice */}
      <div className="bg-yellow-100 text-yellow-800 text-center py-2 text-sm relative z-10">
        This site is intended for investors and partners only. Public app access is currently restricted.
      </div>

      {/* Navigation */}
      <nav className="border-b border-purple-800/20 bg-black/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/nextkey-logo.png"
              alt="NextKey Technologies"
              width={40}
              height={40}
              className="brightness-110"
            />
            <span className="text-xl font-bold text-white">NextKey</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-purple-200 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#features" className="text-purple-200 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#waitlist" className="text-purple-200 hover:text-white transition-colors">
              Join Waitlist
            </Link>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
            >
              Investor Interest
            </Button>
          </div>
        </div>
      </nav>

      {/* Q&A Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Q&A
          </motion.h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                className="bg-slate-800 border border-purple-500/20 rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left flex justify-between items-center text-white font-semibold"
                >
                  {item.q}
                  {openIndex === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-2 text-purple-300 overflow-hidden"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form Card (General Roles) */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Other Interest</CardTitle>
                <CardDescription className="text-purple-200">
                  Select your role and join our interest list
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your email address"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                />
                <select className="w-full bg-slate-700 border-slate-600 text-white rounded p-2">
                  <option>Renter</option>
                  <option>Landlord</option>
                  <option>Investor</option>
                  <option>Volunteer</option>
                  <option>Partner</option>
                  <option>Need Help</option>
                </select>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer Legal Disclaimer */}
      <footer className="py-8 bg-black/40 text-center text-xs text-purple-400 relative z-10">
        <p>
          NextKey is an independent tech solution and not affiliated with any housing authority or government agency.
        </p>
      </footer>
    </div>
  );
}
