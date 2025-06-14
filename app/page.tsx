import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Home, Users, Shield, Zap, TrendingUp, Star, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NextKeyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-800/20 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                  Black-owned PropTech • Disrupting Housing Access
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Tech That Unlocks Housing,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Not Just Listings
                  </span>
                </h1>
                <p className="text-xl text-purple-200 leading-relaxed">
                  Solving what portals, 311, and realtors can't. One app bridging the gaps in housing access,
                  discrimination, and broken systems. Built for impact. Designed to scale.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Join the Revolution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-purple-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live Beta Testing</span>
                </div>
                <div>500+ Early Adopters</div>
                <div>Investor Ready</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-purple-500/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">NextKey App Preview</h3>
                    <Badge className="bg-green-600/20 text-green-400">Live</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-purple-500">
                      <div className="text-purple-300 text-sm">Smart Matching</div>
                      <div className="text-white">97% compatibility rate</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-pink-500">
                      <div className="text-pink-300 text-sm">Fair Housing</div>
                      <div className="text-white">Zero discrimination tolerance</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="text-blue-300 text-sm">Community Impact</div>
                      <div className="text-white">Bridging housing gaps</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Where Community Meets Code</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Our platform connects renters and landlords through intelligent matching, eliminating bias and
              streamlining the housing process for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* For Renters */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-2xl">For Renters</CardTitle>
                </div>
                <CardDescription className="text-purple-200 text-lg">
                  Find your perfect home without the discrimination and confusion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">Smart Profile Creation</div>
                      <div className="text-purple-300 text-sm">AI-powered matching based on lifestyle, not bias</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">Transparent Process</div>
                      <div className="text-purple-300 text-sm">Know exactly what landlords are looking for</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">Community Support</div>
                      <div className="text-purple-300 text-sm">Connect with verified renters and resources</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* For Landlords */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-pink-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-pink-600/20 rounded-lg">
                    <Home className="h-6 w-6 text-pink-400" />
                  </div>
                  <CardTitle className="text-white text-2xl">For Landlords</CardTitle>
                </div>
                <CardDescription className="text-purple-200 text-lg">
                  Find quality tenants faster with intelligent screening
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">Quality Matching</div>
                      <div className="text-purple-300 text-sm">Pre-screened tenants that fit your criteria</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">Reduced Vacancy</div>
                      <div className="text-purple-300 text-sm">Faster turnaround with better tenant retention</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                    <div>
                      <div className="text-white font-medium">Fair Housing Compliance</div>
                      <div className="text-purple-300 text-sm">Built-in compliance tools and reporting</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Flow */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Connect</h3>
              <p className="text-purple-300">Smart profiles match compatible renters and landlords</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Verify</h3>
              <p className="text-purple-300">Transparent screening process for both parties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Move In</h3>
              <p className="text-purple-300">Seamless transition with ongoing community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Future of Housing Access Starts Here</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Powered by AI, driven by community, designed for equity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-400 mb-4" />
                <CardTitle className="text-white">Fair Housing AI</CardTitle>
                <CardDescription className="text-purple-200">
                  Bias-free matching algorithms that prioritize compatibility over demographics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardHeader>
                <Zap className="h-8 w-8 text-pink-400 mb-4" />
                <CardTitle className="text-white">Instant Verification</CardTitle>
                <CardDescription className="text-purple-200">
                  Real-time background checks and income verification for faster approvals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-400 mb-4" />
                <CardTitle className="text-white">Market Intelligence</CardTitle>
                <CardDescription className="text-purple-200">
                  Real-time pricing data and neighborhood insights for informed decisions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardHeader>
                <Users className="h-8 w-8 text-green-400 mb-4" />
                <CardTitle className="text-white">Community Network</CardTitle>
                <CardDescription className="text-purple-200">
                  Connect with local resources, support groups, and housing advocates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardHeader>
                <Home className="h-8 w-8 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Smart Recommendations</CardTitle>
                <CardDescription className="text-purple-200">
                  Personalized housing suggestions based on lifestyle and preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardHeader>
                <Star className="h-8 w-8 text-purple-400 mb-4" />
                <CardTitle className="text-white">Impact Tracking</CardTitle>
                <CardDescription className="text-purple-200">
                  Measure and celebrate the positive impact on housing accessibility
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-purple-300">Early Adopters</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">97%</div>
              <div className="text-purple-300">Match Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50%</div>
              <div className="text-purple-300">Faster Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">One App. One Key. Every Door.</h2>
              <p className="text-xl text-purple-200">
                Join the revolution in housing access. Be among the first to experience the future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Renter Waitlist */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Join as a Renter</CardTitle>
                  <CardDescription className="text-purple-200">
                    Get early access to bias-free housing search
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Your email address"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Input
                    placeholder="City/Location"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Join Renter Waitlist
                  </Button>
                </CardContent>
              </Card>

              {/* Landlord Waitlist */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-pink-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Join as a Landlord</CardTitle>
                  <CardDescription className="text-purple-200">
                    Access quality tenants through smart matching
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Your email address"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Input
                    placeholder="Number of properties"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                    Join Landlord Waitlist
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Investor Interest */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-slate-800 to-slate-900 border-yellow-500/20 max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Investor Interest</CardTitle>
                  <CardDescription className="text-purple-200">
                    Join us in revolutionizing housing access and building generational wealth
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                    <Input
                      placeholder="Email"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <Input
                    placeholder="Investment interest/amount"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                  <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700">
                    Express Interest
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Support the Movement</h2>
            <p className="text-xl text-purple-200">Help fund development while representing the future of housing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">NextKey Tee</span>
                </div>
                <h3 className="text-white font-semibold mb-2">NextKey T-Shirt</h3>
                <p className="text-purple-300 text-sm mb-4">Premium cotton with our signature logo</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">$25 - Pre-Order</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">NextKey Hoodie</span>
                </div>
                <h3 className="text-white font-semibold mb-2">NextKey Hoodie</h3>
                <p className="text-purple-300 text-sm mb-4">Comfortable hoodie for the housing revolution</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">$45 - Pre-Order</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">Sticker Pack</span>
                </div>
                <h3 className="text-white font-semibold mb-2">NextKey Stickers</h3>
                <p className="text-purple-300 text-sm mb-4">Spread the word with premium stickers</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">$10 - Pre-Order</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-800/20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/nextkey-logo.png"
                  alt="NextKey Technologies"
                  width={32}
                  height={32}
                  className="brightness-110"
                />
                <span className="text-white font-bold">NextKey Technologies</span>
              </div>
              <p className="text-purple-300 text-sm">
                Revolutionizing housing access through technology and community.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-purple-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@nextkeyglobal.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Atlanta, GA</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-purple-300 text-sm">
                <Link href="#" className="block hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Press
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-purple-300 text-sm">
                <Link href="#" className="block hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Fair Housing
                </Link>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-purple-800/20" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-purple-300 text-sm">© 2024 NextKey Technologies LLC. All rights reserved.</div>
            <div className="text-purple-300 text-sm">
              <strong>IP Disclaimer:</strong> All proprietary technology, algorithms, and methodologies are protected
              intellectual property of NextKey Technologies LLC.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
