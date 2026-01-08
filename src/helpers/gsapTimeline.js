"use client";
import { createContext, useContext } from "react";
import gsap from "gsap";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const timeline = gsap.timeline({});

  return (
    <TimelineContext.Provider value={timeline}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  return useContext(TimelineContext);
}
