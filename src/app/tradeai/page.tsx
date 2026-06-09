import type { Metadata } from "next";
import TradeAIApp from "./TradeAIApp";

export const metadata: Metadata = {
  title: "TradeAI — AI Copilot for Trade & Logistics Operations",
  description:
    "TradeAI by Nexavine Technologies — an AI copilot for trade and logistics operations: document intelligence, shipment insights, workflow automation and compliance support.",
};

export default function TradeAIPage() {
  return <TradeAIApp />;
}
