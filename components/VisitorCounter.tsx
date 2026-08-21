"use client";

import { useEffect, useState } from "react";
import { Users, Eye, Activity } from "lucide-react";
import { motion } from "framer-motion";

const INITIAL_SEED = 1420;

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorCount() {
      try {
        const hasVisited = sessionStorage.getItem("visited_session_v1");
        const shouldIncrement = !hasVisited;

        if (shouldIncrement) {
          sessionStorage.setItem("visited_session_v1", "true");
        }

        const res = await fetch(`/api/visitors${shouldIncrement ? "?increment=true" : ""}`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("API response error");

        const data = await res.json();
        if (isMounted && typeof data.count === "number") {
          setCount(data.count);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Visitor API unavailable, using fallback:", err);
      }

      // Fallback: LocalStorage based counting
      if (isMounted) {
        let localVal = INITIAL_SEED;
        try {
          const stored = localStorage.getItem("portfolio_visitor_count");
          if (stored) {
            localVal = parseInt(stored, 10);
          }
          if (!sessionStorage.getItem("visited_session_v1")) {
            sessionStorage.setItem("visited_session_v1", "true");
            localVal += 1;
            localStorage.setItem("portfolio_visitor_count", localVal.toString());
          }
        } catch {
          // If storage blocked
        }
        setCount(localVal);
        setIsLoading(false);
      }
    }

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  // Smooth counting animation when count is loaded
  useEffect(() => {
    if (count === null) return;

    const startVal = Math.max(0, count - 30);
    setDisplayCount(startVal);

    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    const incrementStep = (count - startVal) / steps;
    let current = startVal;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      current += incrementStep;
      if (stepCount >= steps) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#151513] border border-[#e8e4de]/8 hover:border-[#d97736]/40 transition-all duration-300 shadow-sm group cursor-default"
      title="Total Portfolio Visitors"
    >
      <div className="relative flex h-2 w-2 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97736] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d97736]"></span>
      </div>

      <Users className="w-3.5 h-3.5 text-[#d97736] group-hover:scale-110 transition-transform duration-200" />

      <span className="text-[11px] font-mono tracking-wider text-[#a6a094] flex items-center gap-1.5">
        <span className="uppercase text-[10px] text-[#8d877b] font-medium tracking-widest hidden sm:inline">
          Visitors:
        </span>
        <span className="text-[#fdfcfb] font-semibold font-mono">
          {isLoading ? (
            <span className="animate-pulse">...</span>
          ) : (
            displayCount.toLocaleString()
          )}
        </span>
      </span>
    </motion.div>
  );
}
