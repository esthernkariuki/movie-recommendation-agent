"use client";

import { Sparkles } from "lucide-react";

interface Props {
  explanation: string;
}

export default function AIExplanation({ explanation }: Props) {
  return (
    <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg">

      <div className="flex items-center gap-3">

        <div className="rounded-full bg-indigo-500/15 p-2">
          <Sparkles className="h-5 w-5 text-indigo-400" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            AI Explanation
          </h2>

          <p className="text-sm text-slate-400">
            Why these movies were recommended
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-slate-800/40 p-5">

        <p className="whitespace-pre-wrap leading-8 text-slate-300">
          {explanation}
        </p>

      </div>

    </div>
  );
}