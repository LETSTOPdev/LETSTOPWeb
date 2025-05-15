"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { PremiumBackground } from "@/components/premium-background"

export default function FaqPage() {
  // State to track which FAQ items are open and which category is active
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<string>("credits")

  // Toggle FAQ item open/closed
  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Set the active category
  const setCategory = (category: string) => {
    setActiveCategory(category)
    // Close all open items when changing categories
    setOpenItems({})
  }

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <PremiumBackground />
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* FAQ Header with enhanced visibility */}
        <div className="text-center mb-16 bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
            <span className="text-white">Frequently Asked</span> <span className="text-primary">Questions</span>
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg">
            Have questions about the platform and how it works? Explore the FAQ section to find information about
            earning while driving and utilizing the unique LETSTOP reward system. For more information, contact LETSTOP{" "}
            <a href="mailto:support@letstop.io" className="text-primary hover:underline font-medium">
              here
            </a>
            .
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            className={`${activeCategory === "credits" ? "bg-primary" : "bg-black/60 hover:bg-primary/10"} border border-gray-800 text-white px-4 py-2 rounded-full text-sm transition-colors shadow-md`}
            onClick={() => setCategory("credits")}
          >
            LETSTOP Credits
          </button>
          <button
            className={`${activeCategory === "xp" ? "bg-primary" : "bg-black/60 hover:bg-primary/10"} border border-gray-800 text-white px-4 py-2 rounded-full text-sm transition-colors shadow-md`}
            onClick={() => setCategory("xp")}
          >
            Experience Points
          </button>
          <button
            className={`${activeCategory === "app" ? "bg-primary" : "bg-black/60 hover:bg-primary/10"} border border-gray-800 text-white px-4 py-2 rounded-full text-sm transition-colors shadow-md`}
            onClick={() => setCategory("app")}
          >
            App Features
          </button>
          <button
            className={`${activeCategory === "crypto" ? "bg-primary" : "bg-black/60 hover:bg-primary/10"} border border-gray-800 text-white px-4 py-2 rounded-full text-sm transition-colors shadow-md`}
            onClick={() => setCategory("crypto")}
          >
            Cryptocurrency
          </button>
          <button
            className={`${activeCategory === "referral" ? "bg-primary" : "bg-black/60 hover:bg-primary/10"} border border-gray-800 text-white px-4 py-2 rounded-full text-sm transition-colors shadow-md`}
            onClick={() => setCategory("referral")}
          >
            Referral System
          </button>
          <button
            className={`${activeCategory === "wallet" ? "bg-primary" : "bg-black/60 hover:bg-primary/10"} border border-gray-800 text-white px-4 py-2 rounded-full text-sm transition-colors shadow-md`}
            onClick={() => setCategory("wallet")}
          >
            Wallet
          </button>
        </div>

        {/* LETSTOP Credits Section */}
        {activeCategory === "credits" && (
          <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">LETSTOP Credits</h2>
            </div>

            <div className="divide-y divide-gray-800/50">
              {/* FAQ Item 1 */}
              <div className={`faq-item p-6 ${openItems["credits-1"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-1")}
                >
                  <h3 className="text-lg font-medium">How do I earn credits with the app?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-1"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-1"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    By driving safely, observing traffic rules, avoiding distractions, and staying off your phone, you
                    can accumulate LETSTOP credits and XP, which help you level up and unlock additional benefits.
                    LETSTOP credits are earned for each drive, which can be converted into rewards, including STOP
                    Tokens.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className={`faq-item p-6 ${openItems["credits-2"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-2")}
                >
                  <h3 className="text-lg font-medium">What can I do with LETSTOP credits?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-2"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-2"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    LETSTOP credits can be used for vouchers, in-app vehicle upgrades, or converted into STOP Tokens.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className={`faq-item p-6 ${openItems["credits-3"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-3")}
                >
                  <h3 className="text-lg font-medium">How can I enhance my earnings in the app?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-3"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-3"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    You can use LETSTOP credits to make in-app purchases, such as vehicle upgrades, which can then
                    increase the credits you earn on subsequent drives. As you progress, you may want to upgrade your
                    plan so you can maximize the credits you can earn. Additionally, participating in the referral
                    program by inviting friends offers a 5% credit bonus from the earnings of your friends' drives for
                    their first month.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className={`faq-item p-6 ${openItems["credits-4"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-4")}
                >
                  <h3 className="text-lg font-medium">What kind of rewards can I expect for good driving behavior?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-4"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-4"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    LETSTOP rewards diligent drivers with credits that can be converted into various vouchers, used for
                    upgrades, or converted into STOP Tokens, recognizing and incentivizing safer driving habits.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className={`faq-item p-6 ${openItems["credits-5"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-5")}
                >
                  <h3 className="text-lg font-medium">How does leveling up with XP affect my rewards in LETSTOP?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-5"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-5"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    As you level up by earning XP with LETSTOP, you'll find that each drive becomes more rewarding, with
                    an increase in the credits you can earn. Rising through the levels also unlocks new opportunities,
                    including vehicle upgrades, enhancing both your safety and the benefits you receive in our driver
                    rewards program.
                  </p>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className={`faq-item p-6 ${openItems["credits-6"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-6")}
                >
                  <h3 className="text-lg font-medium">How are LETSTOP credits calculated in the app?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-6"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-6"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Our sophisticated system uses an integrated algorithm for precise credit distribution to each user.
                    The calculation is based on a combination of four primary factors: user level, the credit balance in
                    the application, the chosen vehicle within the app, and the overall driving score.
                  </p>
                </div>
              </div>

              {/* FAQ Item 7 */}
              <div className={`faq-item p-6 ${openItems["credits-7"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-7")}
                >
                  <h3 className="text-lg font-medium">
                    Should I trade my credits right away or is there a benefit to holding on to them?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-7"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-7"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    You can trade them in for rewards, but if you use them for in-app upgrades, you can increase the
                    number of LETSTOP credits that you can earn from your drives. For example, by upgrading your vehicle
                    in the app, you can earn a higher number of credits per drive. Think of it like compound interest in
                    your bank account. The more you have, the more you can earn.
                  </p>
                </div>
              </div>

              {/* FAQ Item 8 */}
              <div className={`faq-item p-6 ${openItems["credits-8"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-8")}
                >
                  <h3 className="text-lg font-medium">Can I lose LETSTOP credits?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-8"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-8"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    No, you cannot lose LETSTOP credits once they have been earned. LETSTOP is committed to positive
                    reinforcement, encouraging safe driving by ensuring that your credits are always secure and
                    reflective of your driving achievements.
                  </p>
                </div>
              </div>

              {/* FAQ Item 9 */}
              <div className={`faq-item p-6 ${openItems["credits-9"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("credits-9")}
                >
                  <h3 className="text-lg font-medium">Do you have a referral system?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["credits-9"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["credits-9"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Yes! You can earn an extra 5% in LETSTOP credits based on the credits your friends earn from their
                    drives during their first month. To invite your friends, simply give your unique username to your
                    friends to enter at registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Points Section */}
        {activeCategory === "xp" && (
          <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Experience Points (XP)</h2>
            </div>

            <div className="divide-y divide-gray-800/50">
              {/* XP FAQ Item 1 */}
              <div className={`faq-item p-6 ${openItems["xp-1"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("xp-1")}
                >
                  <h3 className="text-lg font-medium">What is the role of Experience Points (XP) in the app?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["xp-1"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["xp-1"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    XP stands for Experience Points. As you drive more, you earn XP which helps you level up in the app.
                    The higher your level, the more rewards you can potentially earn. It's our way of rewarding
                    continuous and responsible driving habits.
                  </p>
                </div>
              </div>

              {/* XP FAQ Item 2 */}
              <div className={`faq-item p-6 ${openItems["xp-2"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("xp-2")}
                >
                  <h3 className="text-lg font-medium">How do I earn more XP?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["xp-2"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["xp-2"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Every safe journey you embark on contributes to your XP. The more you drive safely, adhering to
                    traffic rules, and avoiding phone distractions, the more XP you will accumulate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* App Features Section */}
        {activeCategory === "app" && (
          <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">App Features</h2>
            </div>

            <div className="divide-y divide-gray-800/50">
              {/* App FAQ Item 1 */}
              <div className={`faq-item p-6 ${openItems["app-1"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-1")}
                >
                  <h3 className="text-lg font-medium">How does the app promote safer driving?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-1"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-1"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Initially, the app focuses on discouraging touching the phone while driving. As we continue to
                    develop, we plan to introduce additional features such as electric vehicle rewards, dangerous turn
                    detection, reminder functionalities, speed limit monitoring, and travel guidance to further enhance
                    and promote safer driving habits.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 2 */}
              <div className={`faq-item p-6 ${openItems["app-2"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-2")}
                >
                  <h3 className="text-lg font-medium">How does LETSTOP's AI help me improve my driving behavior?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-2"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-2"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    LETSTOP's AI analyzes your driving patterns, offering personalized tips to enhance your driving
                    skills and ensure a safer journey.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 3 */}
              <div className={`faq-item p-6 ${openItems["app-3"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-3")}
                >
                  <h3 className="text-lg font-medium">
                    What are the benefits of using LETSTOP's smart driving technology?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-3"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-3"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    LETSTOP's smart driving technology offers a range of benefits including improved road safety,
                    real-time driving feedback, and rewards for safe driving practices.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 4 */}
              <div className={`faq-item p-6 ${openItems["app-4"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-4")}
                >
                  <h3 className="text-lg font-medium">
                    Can I link other media systems like Apple Music or Spotify with the app?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-4"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-4"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    In the near future, we aim to provide multimedia system links, allowing you to integrate platforms
                    like Apple Music and Spotify.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 5 */}
              <div className={`faq-item p-6 ${openItems["app-5"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-5")}
                >
                  <h3 className="text-lg font-medium">What is the STOP Store?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-5"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-5"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    The STOP Store is an in-app marketplace where you can use your earned LETSTOP credits to purchase
                    vehicle upgrades, mystery boxes, and vouchers that you can redeem to enhance your driving experience
                    and reward your safe driving habits.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 6 */}
              <div className={`faq-item p-6 ${openItems["app-6"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-6")}
                >
                  <h3 className="text-lg font-medium">What are Mystery Boxes?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-6"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-6"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Mystery Boxes are special in-app purchases that contain a random selection of rewards. Each box has
                    a guaranteed reward. These rewards may include LETSTOP credits, car upgrades, subscription upgrades
                    and XP boosts.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 7 */}
              <div className={`faq-item p-6 ${openItems["app-7"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-7")}
                >
                  <h3 className="text-lg font-medium">How can I obtain a Mystery Box?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-7"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-7"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    You can get a Mystery Box by using your earned LETSTOP credits in the STOP Store. You can also
                    receive a Welcome Mystery Box when referred by another user.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 8 */}
              <div className={`faq-item p-6 ${openItems["app-8"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-8")}
                >
                  <h3 className="text-lg font-medium">What rewards can I find in a Mystery Box?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-8"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-8"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Each Mystery Box holds a random reward, which could be anything from a substantial amount of LETSTOP
                    credits or rare vehicle upgrades.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 9 */}
              <div className={`faq-item p-6 ${openItems["app-9"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-9")}
                >
                  <h3 className="text-lg font-medium">Is there a limit to how many Mystery Boxes I can purchase?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-9"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-9"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    There is no set limit to the number of Mystery Boxes you can purchase. However, the availability may
                    be subject to the number of LETSTOP credits you have accumulated.
                  </p>
                </div>
              </div>

              {/* App FAQ Item 10 */}
              <div className={`faq-item p-6 ${openItems["app-10"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("app-10")}
                >
                  <h3 className="text-lg font-medium">Can the rewards in Mystery Boxes expire?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["app-10"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["app-10"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Some rewards within Mystery Boxes, such as vouchers, may have expiration dates. Be sure to check the
                    details of each reward once you have received it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cryptocurrency Section */}
        {activeCategory === "crypto" && (
          <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Cryptocurrency</h2>
            </div>

            <div className="divide-y divide-gray-800/50">
              {/* Crypto FAQ Item 1 */}
              <div className={`faq-item p-6 ${openItems["crypto-1"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("crypto-1")}
                >
                  <h3 className="text-lg font-medium">What is cryptocurrency?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["crypto-1"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["crypto-1"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Cryptocurrency is a type of digital or virtual currency that uses cryptography for security, making
                    it resistant to counterfeiting. Unlike traditional currencies issued by governments,
                    cryptocurrencies operate on decentralized platforms.
                  </p>
                </div>
              </div>

              {/* Crypto FAQ Item 2 */}
              <div className={`faq-item p-6 ${openItems["crypto-2"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("crypto-2")}
                >
                  <h3 className="text-lg font-medium">How does cryptocurrency relate to the app?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["crypto-2"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["crypto-2"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Our app rewards responsible driving behavior with LETSTOP credits, which can be exchanged for
                    rewards, including STOP Tokens, which are a form of cryptocurrency.
                  </p>
                </div>
              </div>

              {/* Crypto FAQ Item 3 */}
              <div className={`faq-item p-6 ${openItems["crypto-3"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("crypto-3")}
                >
                  <h3 className="text-lg font-medium">What's a crypto exchange, and how do I use it?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["crypto-3"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["crypto-3"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    A cryptocurrency exchange is a platform where you can buy, sell, or trade cryptocurrencies for other
                    digital or traditional currencies. To use them, you'll need to sign up, undergo a verification
                    process, deposit your cryptocurrency (like STOP Tokens), and then initiate trades.
                  </p>
                </div>
              </div>

              {/* Crypto FAQ Item 4 */}
              <div className={`faq-item p-6 ${openItems["crypto-4"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("crypto-4")}
                >
                  <h3 className="text-lg font-medium">
                    I've never used crypto before. How easy is it to get started with your app?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["crypto-4"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["crypto-4"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Our app is designed for all users, whether you're familiar with crypto or not. It offers an
                    intuitive experience, and you don't need prior knowledge in the field of crypto to start earning
                    rewards. There's no obligation to exchange LETSTOP credits into STOP Tokens, nor do you need to
                    transfer them to a crypto exchange; credits can be used exclusively for vouchers or vehicle
                    upgrades.
                  </p>
                </div>
              </div>

              {/* Crypto FAQ Item 5 */}
              <div className={`faq-item p-6 ${openItems["crypto-5"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("crypto-5")}
                >
                  <h3 className="text-lg font-medium">How can I convert my STOP Tokens into traditional currency?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["crypto-5"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["crypto-5"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Once you've converted LETSTOP credits into STOP Tokens, you can trade them on crypto exchanges for
                    other cryptocurrencies or convert them into traditional currencies, traditional currencies, such as
                    USD or EUR, which can then be withdrawn to your bank account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Referral System Section */}
        {activeCategory === "referral" && (
          <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Referral System</h2>
            </div>

            <div className="divide-y divide-gray-800/50">
              {/* Referral FAQ Item 1 */}
              <div className={`faq-item p-6 ${openItems["referral-1"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("referral-1")}
                >
                  <h3 className="text-lg font-medium">How does the LETSTOP referral system work?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["referral-1"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["referral-1"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    The LETSTOP referral system rewards users with extra LETSTOP credits when they invite friends to
                    join the app. Once the referred friends register and start using the app, the user who referred them
                    will receive 5% bonus credits based on their friends' activity for a full month. Their referred
                    friend will receive a Welcome Mystery Box with bonus credits.
                  </p>
                </div>
              </div>

              {/* Referral FAQ Item 2 */}
              <div className={`faq-item p-6 ${openItems["referral-2"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("referral-2")}
                >
                  <h3 className="text-lg font-medium">How do I refer friends to LETSTOP?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["referral-2"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["referral-2"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    You can refer your friends in one of two ways: 1. Your phone number 2. ⁠Your username. Your unique
                    LETSTOP referral username can be found in your user profile section within the app. Share your
                    username with friends and family so they can enter it when they register.
                  </p>
                </div>
              </div>

              {/* Referral FAQ Item 3 */}
              <div className={`faq-item p-6 ${openItems["referral-3"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("referral-3")}
                >
                  <h3 className="text-lg font-medium">Is there a limit to how many people I can refer to LETSTOP?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["referral-3"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["referral-3"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    No, there is no limit. You can refer as many people as you like, and you will receive bonus credits
                    for each friend who signs up and meets the qualifying criteria for an entire month!
                  </p>
                </div>
              </div>

              {/* Referral FAQ Item 4 */}
              <div className={`faq-item p-6 ${openItems["referral-4"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("referral-4")}
                >
                  <h3 className="text-lg font-medium">
                    Do the friends I refer to LETSTOP need to complete any specific actions for me to earn the referral
                    bonus?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["referral-4"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["referral-4"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Yes, the friends you refer must sign up using your referral code and must actively use the app for
                    you to receive the referral bonus.
                  </p>
                </div>
              </div>

              {/* Referral FAQ Item 5 */}
              <div className={`faq-item p-6 ${openItems["referral-5"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("referral-5")}
                >
                  <h3 className="text-lg font-medium">Can I track the bonuses I earn from referrals?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["referral-5"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["referral-5"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Yes, the app includes a section where you can track the status of your referrals and the bonuses
                    you've accumulated from them.
                  </p>
                </div>
              </div>

              {/* Referral FAQ Item 6 */}
              <div className={`faq-item p-6 ${openItems["referral-6"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("referral-6")}
                >
                  <h3 className="text-lg font-medium">How long will I receive these bonuses?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["referral-6"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["referral-6"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>Bonuses from friend referrals will be awarded for your friends' first month of membership.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wallet Section */}
        {activeCategory === "wallet" && (
          <div className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden mb-16 shadow-xl">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Wallet</h2>
            </div>

            <div className="divide-y divide-gray-800/50">
              {/* Wallet FAQ Item 1 */}
              <div className={`faq-item p-6 ${openItems["wallet-1"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-1")}
                >
                  <h3 className="text-lg font-medium">What assets can be traded in the wallet?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-1"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-1"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    Currently, users can hold and transfer STOP tokens using their in-app wallet. Additional assets may
                    be supported in the future as the wallet evolves.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 2 */}
              <div className={`faq-item p-6 ${openItems["wallet-2"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-2")}
                >
                  <h3 className="text-lg font-medium">Which network does the wallet operate on?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-2"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-2"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    The wallet operates on the Solana blockchain, which allows for fast and low-cost transactions. While
                    it currently supports Solana, it is designed as a multichain wallet, with potential for expansion to
                    other networks in the future.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 3 */}
              <div className={`faq-item p-6 ${openItems["wallet-3"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-3")}
                >
                  <h3 className="text-lg font-medium">
                    What is the difference between LETSTOP Credits and STOP Tokens?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-3"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-3"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    LETSTOP credits are earned by driving safely and are not cryptocurrency tokens. They represent the
                    amount of STOP tokens that users are eligible to claim. Similarly, STOP tokens can be converted back
                    into LETSTOP credits, but only within the app's ecosystem.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 4 */}
              <div className={`faq-item p-6 ${openItems["wallet-4"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-4")}
                >
                  <h3 className="text-lg font-medium">What is the meaning of "convert"?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-4"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-4"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    "Convert" refers to the process of exchanging LETSTOP credits, earned through safe driving, for STOP
                    tokens. This process can also work in reverse, allowing users to exchange STOP tokens for credits.
                    The conversion feature is accessible via the wallet interface.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 5 */}
              <div className={`faq-item p-6 ${openItems["wallet-5"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-5")}
                >
                  <h3 className="text-lg font-medium">Do you have access to my wallet?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-5"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-5"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    LETSTOP does not have access to users' wallets. All wallets are locally stored on users' devices,
                    ensuring that users maintain full control of their funds.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 6 */}
              <div className={`faq-item p-6 ${openItems["wallet-6"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-6")}
                >
                  <h3 className="text-lg font-medium">What happens if I lose my passcode?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-6"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-6"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    If you lose your passcode, you can reconfigure it through the wallet's settings using your Secret
                    Recovery Phrase. This phrase acts as a backup and is essential for regaining access.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 7 */}
              <div className={`faq-item p-6 ${openItems["wallet-7"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-7")}
                >
                  <h3 className="text-lg font-medium">Can I restore my wallet if I lose my Secret Recovery Phrase?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-7"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-7"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    No. It is not possible to recover your wallet without the Secret Recovery Phrase. This phrase is the
                    only way to restore access. Keep it private, secure, and easily accessible. Never share it with
                    anyone.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 8 */}
              <div className={`faq-item p-6 ${openItems["wallet-8"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-8")}
                >
                  <h3 className="text-lg font-medium">What are the 12 words used for?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-8"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-8"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    The 12 words, also known as the Secret Recovery Phrase or Mnemonic Phrase, act as a private key that
                    enables access to your wallet. Each unique combination of words generates a specific wallet, making
                    it a crucial security feature.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 9 */}
              <div className={`faq-item p-6 ${openItems["wallet-9"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-9")}
                >
                  <h3 className="text-lg font-medium">
                    Should I share my Secret Recovery Phrase with staff or anyone who asks?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-9"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-9"] ? "max-h-[500px]" : "max-h-0"}`}>
                  <p>
                    No. LETSTOP staff will never ask for your Secret Recovery Phrase. Sharing it with anyone compromises
                    your wallet's security and could result in the loss of your funds.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 10 */}
              <div className={`faq-item p-6 ${openItems["wallet-10"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-10")}
                >
                  <h3 className="text-lg font-medium">How many attempts do I have to enter my passcode?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-10"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-10"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    You have three attempts to enter your passcode correctly. After three failed attempts, a cooldown
                    period will be activated, increasing with each additional failed attempt.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 11 */}
              <div className={`faq-item p-6 ${openItems["wallet-11"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-11")}
                >
                  <h3 className="text-lg font-medium">What is the minimum amount for a transfer?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-11"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-11"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    The minimum amount required for transferring STOP tokens is 100 tokens. Transfers below this amount
                    are not supported.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 12 */}
              <div className={`faq-item p-6 ${openItems["wallet-12"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-12")}
                >
                  <h3 className="text-lg font-medium">How long does a transfer take to complete from the wallet?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-12"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-12"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Transfers typically take between 1-2 minutes or less, depending on network congestion on the Solana
                    blockchain. During high activity periods, it might take slightly longer.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 13 */}
              <div className={`faq-item p-6 ${openItems["wallet-13"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-13")}
                >
                  <h3 className="text-lg font-medium">Can I transfer other currencies to the LETSTOP Wallet?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-13"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-13"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Yes, you can transfer other Solana-based currencies to your LETSTOP wallet. However, these
                    currencies won't be displayed within the app and can only be managed through other Solana-compatible
                    wallets, such as Phantom.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 14 */}
              <div className={`faq-item p-6 ${openItems["wallet-14"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-14")}
                >
                  <h3 className="text-lg font-medium">How many transactions can I do in a day?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-14"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-14"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Each user is limited to one transfer and one conversion every 24 hours. This limit helps ensure
                    system stability and prevents misuse.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 15 */}
              <div className={`faq-item p-6 ${openItems["wallet-15"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-15")}
                >
                  <h3 className="text-lg font-medium">How do I send credits and tokens?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-15"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-15"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Credits cannot be sent to other users. They can only be converted into STOP tokens. STOP tokens, on
                    the other hand, can be sent by using the "Send" function within the wallet.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 16 */}
              <div className={`faq-item p-6 ${openItems["wallet-16"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-16")}
                >
                  <h3 className="text-lg font-medium">
                    How can I deposit, receive, or send tokens?t, receive, or send tokens?t, receive, or send tokens?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-16"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-16"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    1. Deposit/Receive: Use the "Receive" button in the wallet to access your public wallet address.
                    This address can be shared to receive STOP tokens. 2. Send: Use the "Send" button in the wallet to
                    transfer STOP tokens to another wallet address.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 17 */}
              <div className={`faq-item p-6 ${openItems["wallet-17"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-17")}
                >
                  <h3 className="text-lg font-medium">How do I convert STOP tokens into LETSTOP credits?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-17"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-17"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    To convert STOP tokens into LETSTOP credits, open your wallet and press the red "Convert" button.
                    Select the desired amount of STOP tokens to convert. These converted credits can then be used to
                    purchase items or services directly within the LETSTOP app.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 18 */}
              <div className={`faq-item p-6 ${openItems["wallet-18"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-18")}
                >
                  <h3 className="text-lg font-medium">Does LETSTOP charge a fee on transactions?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-18"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-18"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    No, LETSTOP does not charge any fees for transactions, conversions, or transfers. All transaction
                    costs are currently sponsored by LETSTOP.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 19 */}
              <div className={`faq-item p-6 ${openItems["wallet-19"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-19")}
                >
                  <h3 className="text-lg font-medium">
                    I accidentally sent tokens to the wrong wallet. Can I recover the funds?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-19"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-19"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Unfortunately, once tokens are sent to the wrong wallet address, they cannot be recovered. Always
                    double-check the destination address before initiating a transfer.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 20 */}
              <div className={`faq-item p-6 ${openItems["wallet-20"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-20")}
                >
                  <h3 className="text-lg font-medium">How do I install the LETSTOP Wallet?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-20"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-20"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    To install the wallet, ensure your LETSTOP app is updated to the latest version from Google Play or
                    the App Store.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 21 */}
              <div className={`faq-item p-6 ${openItems["wallet-21"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-21")}
                >
                  <h3 className="text-lg font-medium">What is my public address?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-21"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-21"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Your public wallet address can be found by tapping the "Receive" button within the wallet. This
                    address is unique to your wallet and can be shared to receive STOP tokens.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 22 */}
              <div className={`faq-item p-6 ${openItems["wallet-22"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-22")}
                >
                  <h3 className="text-lg font-medium">Why hasn't my balance updated?</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-22"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-22"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>
                    Balance updates can be delayed due to network congestion. If your balance doesn't update
                    immediately, please wait a few moments and check again.
                  </p>
                </div>
              </div>

              {/* Wallet FAQ Item 23 */}
              <div className={`faq-item p-6 ${openItems["wallet-23"] ? "active" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem("wallet-23")}
                >
                  <h3 className="text-lg font-medium">
                    I can't find the answer to my question. How do I contact support?
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${openItems["wallet-23"] ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`faq-answer mt-4 text-gray-300 ${openItems["wallet-23"] ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <p>For assistance, submit your inquiry here: Contact us.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl">
          <p className="text-gray-200 mb-6 text-lg">
            For more information, contact LETSTOP at{" "}
            <a href="mailto:support@letstop.io" className="text-primary hover:underline font-medium">
              support@letstop.io
            </a>
          </p>
          <a
            href="mailto:support@letstop.io"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 inline-flex items-center relative overflow-hidden group shadow-lg"
          >
            <span className="relative z-10">Contact Us</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </a>
        </div>
      </div>
    </div>
  )
}
