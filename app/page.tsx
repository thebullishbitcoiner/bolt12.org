"use client";
import Image from "next/image"
import React from "react"
import Header from "@/components/Header";
import UserProfile from "@/features/UserProfile";
import type {UserProfileProps} from "@/features/UserProfile";
import { MenuIcon } from "@bitcoin-design/bitcoin-icons-react/filled";

export default function Home() {
  const nodeImagePaths = [
    {
      path: "/nodes/lnd.png",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
    {
      path: "/nodes/cln.png",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
    {
      path: "/nodes/eclair.png",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
    {
      path: "/nodes/ldk.png",
      description:
        "Bitcoin ipsum dolor sit amet. Inputs hashrate hard fork digital signature UTXO timestamp server genesis block consensus! Hashrate transaction digital signature cryptocurrency double-spend problem nonce consensus!",
    },
  ];

    const userProfiles:UserProfileProps[] = [
      {
        userName: "Alice",
        featureName: "Reusable Payment Requests",
        imageSrc:  "/users/alice@2x.png",
        description:  "Now that I can slap a QR code on our tip jar, my band can seamlessly receive tips in bitcoin! No more creating a new QR code for every virtual fan who wants to tip us after a moon colony gig, and no more losing 75% of potential tippers due to the long wait for BOLT11 invoices.",
        link:  "/ux-design/#reusable-payment-requests"
      },
      {
        userName: "Brijesh",
        featureName: "Receiver Privacy",
        imageSrc:  "/users/brijesh@2x.png",
        description:  "As a shadowy super coder contributing to Bitcoin Core, I needed a way to accept donations that preserves anonymity while compartmentalizing my 784 digital identities. With BOLT12’s route blinding, I can now accept payments discreetly and securely!",
        link:  "/ux-design/#receiver-privacy"
      },
      {
        userName: "Charlotte",
        featureName: "Social Integration",
        imageSrc:  "/users/charlotte@2x.png",
        description:  "I’m a content creator on Nostr who has always wanted a self-custodial way to accept zaps for my VR artwork. By publishing my bitcoin wallet’s payment code to my Nostr profile, I can receive zaps directly, without custodians or middlemen. Viva la BOLT12!",
        link:  "/ux-design/#social-integration"
      },
      {
        userName: "Danh",
        featureName: "Auto-withdrawals",
        imageSrc:  "/users/danh@2x.png",
        description:  "After hearing some cyborgs talk about bitcoin on XNBC Squawk Cube, I decided to buy in. Later, I learned that it's better to self-custody bitcoin rather than trust exchanges. So, I set my exchange account to automatically deposit bitcoin into a self-custodial wallet using BOLT12 offers.",
        link:  "/ux-design/#auto-withdrawals"
      },
      {
        userName: "Elaheh",
        featureName: "Censorship Resistance",
        imageSrc:  "/users/elaheh@2x.png",
        description:  "As an activist living under an authoritarian robot regime, I needed a way to accept donations without payment services blocking my IP address. With onion messaging, my IP address remains hidden, ensuring I can receive support securely. Smash the autonomous patriarchy!",
        link:  "/ux-design/#"
      }
    ]

  return (
    <>
      <Header shy />
      <main className="flex min-h-screen flex-col items-center pt-20">
        <div className="md:h-screen flex items-center justify-center flex-col gap-8 p-4 py-12 lg:px-12">
          {/* Source: https://www.figma.com/file/6Fffpw0We8W3F5XnJfmdJ1/Bolt12.org?type=design&node-id=855%3A3620&mode=design&t=0LbwOMnp5HdPPCRR-1 */}
          <div className="relative w-full max-w-[1372px] h-0 pb-[52%]">
            <Image
              src={"/hero/bolt-12-hero-text-shadow.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-text-float"
            />
            <Image
              src={"/hero/bolt-12-hero-image.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-image-float"
            />
            <Image
              src={"/hero/bolt-12-hero-text.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-text-float"
            />
            <Image
              src={"/hero/bolt-12-hero-logo.png"}
              alt=""
              width={1372}
              height={723}
              className="w-full max-w-[1372px] absolute top-0 left-0 animate-hero-logo-float"
            />
          </div>
          <div className="flex flex-col items-center text-center  text-xl md:text-2xl lg:text-4xl w-full md:w-2/3 lg:w-1/2 justify-center">
            <span className="text-[#685588] font-headings font-regular">
              Ever wondered what it&rsquo;s like to live in the futuristic utopia of
              BOLT 12?
            </span>
            <span className="text-[#685588] font-display">
              Let&rsquo;s take a look!
            </span>
          </div>
        </div>
        {/* User Stories */}
        <div className="flex flex-col items-center w-full my-24 gap-20 p-8 lg:gap-32">
          {userProfiles.map((profile, index) => (
            <UserProfile key={index} {...profile} config={index % 2 === 0 ? "even" : "odd"} />
          ))}
        </div>

        {/* How to Integrate */}
        <div className="flex flex-col justify-between items-center bg-[url('/blueprint.jpg')] bg-cover w-full ">
          <img src="/curve.svg" alt="Curve" className="w-full" />
          <div className="flex flex-col gap-20 w-10/12 mt-12 justify-center">
            <div className="flex md:flex-row bg-red md:justify-between items-center flex-col gap-10">
              <div className="bg-[#37869F] md:w-[454px] w-full h-[87px] flex items-center justify-center rounded-tl-[48px] rounded-tr-[96px] rounded-br-[8px] rounded-bl-[96px]">
                <span className="text-[#FFF963] text-4xl font-headings">
                  How to Integrate BOLT12
                </span>
              </div>
              <div className="bg-[#FFF963] flex items-center justify-center w-[193px] h-[74px] rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px] drop-shadow-lg">
                <span className="text-[#FF2E00]">Read the Spec</span>
              </div>
            </div>
            <div className="gap-20 grid grid-cols-1 md:grid-cols-2 justify-items-center">
              {nodeImagePaths.map(({ path, description }, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-4 p-4 items-center md:w-[500px] w-full h-full md:h-[180px] bg-white  rounded-tl-[96px] rounded-tr-[8px] rounded-br-[96px] rounded-bl-[48px]"
                >
                  <Image
                    src={path}
                    alt={`Node ${index}`}
                    width={124}
                    height={124}
                  />
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/curve.svg"
            alt="Curve"
            className="w-full transform scale-x-[-1] rotate-180"
          />
        </div>

        <div className="flex flex-col items-center gap-10 my-40" id="get-involved">
          <span className="text-[#685588] font-display text-6xl">
            Get Involved
          </span>
          <span>
            Interested in pushing the standard forward or learning how to adopt?
            Here’s where the action happens:
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#37869F] shadow-footer px-6 py-4 flex items-center justify-center rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px]"
            >
              <span className="text-[#FFF963] text-2xl font-display">
                Discord
              </span>
            </a>
            <a
              href="#"
              className="bg-[#37869F] shadow-footer px-6 py-4 flex items-center justify-center rounded-tl-[96px] rounded-tr-[48px] rounded-br-[96px] rounded-bl-[24px]"
            >
              <span className="text-[#FFF963] text-2xl font-display">
                Github PR
              </span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
