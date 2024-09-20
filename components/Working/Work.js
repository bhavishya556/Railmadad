"use client"
import React from 'react';
import { Roboto, Poppins } from 'next/font/google';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Wrench } from "lucide-react";

const roboto = Roboto({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function PrototypePage() {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-gray-100 p-6 ${poppins.className}`}>
      
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          🚧 We're Working on Something Amazing! 🚧
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Our team is working hard to build some exciting features for you. These will be implemented and ready for the Hackathon! 
        </p>

        <div className="flex justify-center mb-6">
          <Image
            src="/r2.png" // Make sure you add a placeholder image to your project.
            alt="Working on new features"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upcoming Features:</h2>
        <ul className="text-left text-gray-600 text-lg space-y-4">

  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    AI-Driven User Dashboard with Predictive Analytics
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    Smart Integration with Third-party APIs for Data Enrichment
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    AI-Enhanced Search and Filter Capabilities with Natural Language Processing (NLP)
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    AI-Backed Feedback Analysis: Identifying Strengths and Weaknesses
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    AI-Driven Complaint Trends: Detecting Departments with High Issue Rates
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    Predictive User Satisfaction Scores: AI-Based Improvement Insights
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    Priority-Based Query Handling with AI Automation for Faster Escalations
  </li>
  <li className="flex items-center">
    <Wrench className="mr-3 text-blue-500" />
    AI-Optimized Query Resolution Time: Predictive Issue Resolution Timelines
  </li>
</ul>


      
      </div>

      <footer className="mt-12 text-gray-500">
        © 2024, RailMadad | SIH 2024 (SmartX Team)
      </footer>
    </div>
  );
}
