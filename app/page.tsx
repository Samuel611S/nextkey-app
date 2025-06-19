"use client";

import { useState, useEffect } from "react";
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
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function NextKeyLanding() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      a: "We're preparing for launch—join our interest list to stay updated!",
    },
    {
      q: "Is this free?",
      a: "Yes, we aim to make NextKey accessible to renters at no cost. Landlord and partner pricing may vary.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden text-white">
      {/* Enhanced Moving Background */}
      <motion.div 
        className="absolute inset-0 -z-20 overflow-hidden pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div 
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(159,122,234,0.1),transparent_70%)] animate-spin-slow"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        />
        <div 
          className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)] animate-spin-slower"
          style={{
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0c29]/80" />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 pointer-events-none"
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.3, 0],
            scale: [0, Math.random() * 0.5 + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
          }}
        />
      ))}

      {/* Investor Notice */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-yellow-100 text-yellow-800 text-center py-2 text-sm relative z-10"
      >
        This site is intended for investors and partners only. Public app access is currently restricted.
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border-b border-purple-800/20 bg-black/30 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/nextkey-logo.png"
              alt="NextKey Technologies"
              width={40}
              height={40}
              className="brightness-110 hover:filter hover:drop-shadow-[0_0_8px_rgba(159,122,234,0.6)] transition-all duration-300"
            />
            <span className="text-xl font-bold text-white">NextKey</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {['How It Works', 'Features', 'Join Waitlist'].map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-purple-200 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black relative overflow-hidden group"
              >
                <span className="relative z-10">Investor Interest</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Q&A Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                className="bg-slate-800/70 border border-purple-500/30 rounded-xl p-4 backdrop-blur-sm hover:border-purple-400/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left flex justify-between items-center text-white font-semibold"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{item.q}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </motion.button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="mt-4 text-purple-100 overflow-hidden"
                    >
                      <div className="pl-2 border-l-2 border-purple-500/50">
                        {item.a}
                      </div>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-blue-500/30 backdrop-blur-sm relative overflow-hidden">
              {/* Card background effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full filter blur-xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-2xl relative z-10">
                  Join Our Community
                </CardTitle>
                <CardDescription className="text-purple-200/80 relative z-10">
                  Select your role and join our interest list
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Input
                    placeholder="Your email address"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-500/30 transition-all"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <select className="w-full bg-slate-700/50 border-slate-600 text-white rounded-lg p-3 focus:border-purple-400 focus:ring-1 focus:ring-purple-500/30 transition-all">
                    <option>Renter</option>
                    <option>Landlord</option>
                    <option>Investor</option>
                    <option>Volunteer</option>
                    <option>Partner</option>
                    <option>Need Help</option>
                  </select>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                    Submit Interest
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="py-12 bg-black/40 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <motion.div 
              className="mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/images/nextkey-logo.png"
                alt="NextKey Technologies"
                width={60}
                height={60}
                className="brightness-110"
              />
            </motion.div>
            
            <div className="flex space-x-6 mb-6">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="#" className="text-purple-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <p className="text-xs text-purple-400/80 max-w-md">
              NextKey is an independent tech solution and not affiliated with any housing authority or government agency.
              <br />
              © {new Date().getFullYear()} NextKey Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}