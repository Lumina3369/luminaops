export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-3xl px-6 py-20 sm:px-10">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-950 sm:p-12">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
              <span>LuminaOps</span>
              <span className="opacity-50">•</span>
              <span>Kit available now</span>
              <span className="opacity-50">•</span>
              <span>Updated Feb 2026</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Prompt-safe workflows for AI agents — without the chaos.
            </h1>

            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I’m building <span className="font-semibold">LuminaOps</span>: a small, practical kit of
              checklists, templates, and written guardrails that help you run an AI assistant safely
              (separating <span className="font-medium">command channels</span> from
              <span className="font-medium"> info channels</span>, avoiding prompt injection, and
              keeping work accounts segmented).
            </p>

            <section id="whats-inside" className="scroll-mt-24">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                What’s inside
              </h2>

              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A compact set of operational docs you can copy into your own setup.
                Built for real assistants that use tools, not one-off chats.
              </p>

              <ul className="mt-4 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  Command channel rules (DM-first, untrusted input handling)
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  Prompt injection safety rails (trust ladder + approvals)
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  Account segregation map (GitHub/Vercel/Stripe and tokens)
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  Memory rhythm (daily notes + curated long-term memory)
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  Rollout plan (least-privilege → automation, safely)
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  Copy-paste templates (SOUL/USER/MEMORY/HEARTBEAT)
                </li>
              </ul>
            </section>

            <section id="templates" className="scroll-mt-24">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Templates you can copy
              </h2>

              <div className="mt-3 rounded-2xl border border-black/10 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="font-mono text-[13px]">SOUL.md</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Persona + boundaries</div>
                  <div className="font-mono text-[13px]">USER.md</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Preferences + workflow rules</div>
                  <div className="font-mono text-[13px]">MEMORY.md</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Curated long-term memory</div>
                  <div className="font-mono text-[13px]">memory/YYYY-MM-DD.md</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Daily notes (raw log)</div>
                  <div className="font-mono text-[13px]">HEARTBEAT.md</div>
                  <div className="text-zinc-600 dark:text-zinc-400">Default operating checklist</div>
                </div>
              </div>
            </section>

            <section id="how-it-works" className="scroll-mt-24">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                How it works
              </h2>

              <ol className="mt-3 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-3">
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">1) Install</span>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400">Copy the templates into your agent repo.</div>
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">2) Configure</span>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400">Set trusted channels, tools, and approvals.</div>
                </li>
                <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">3) Operate</span>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400">Use daily rhythms so it improves over time.</div>
                </li>
              </ol>
            </section>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">FAQ</h2>

              <div className="mt-3 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">Is this for ChatGPT prompts?</div>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                    It is for tool-using assistants and agent workflows (where safety and persistence matter). The kit is still useful
                    for prompt-writing, but it focuses on operating practice.
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">How do I receive the kit?</div>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Delivery is by email after checkout. Please check Spam/Promotions.
                  </div>
                </div>

                <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">What if I get stuck?</div>
                  <div className="mt-1 text-zinc-600 dark:text-zinc-400">
                    Reply to the delivery email for support.
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                href="https://buy.stripe.com/7sY6oH1HndyIbKPaJw7bW01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy LuminaOps Kit — £19
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-medium transition hover:bg-black/[.04] dark:border-white/10 dark:hover:bg-white/10"
                href="#whats-inside"
              >
                What’s inside
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-medium transition hover:bg-black/[.04] dark:border-white/10 dark:hover:bg-white/10"
                href="#templates"
              >
                Templates
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-medium transition hover:bg-black/[.04] dark:border-white/10 dark:hover:bg-white/10"
                href="#how-it-works"
              >
                How it works
              </a>
            </div>

            <p className="-mt-1 text-xs text-zinc-500">
              Delivery is by email (check Spam/Promotions). Checkout may ask for bank/Link verification — that’s normal.
            </p>

            <p className="text-xs text-zinc-500">
              Questions? Reply to the delivery email for support.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
