export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="w-full max-w-3xl px-6 py-20 sm:px-10">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-950 sm:p-12">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
              <span>LuminaOps</span>
              <span className="opacity-50">•</span>
              <span>Launching soon</span>
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

            <ul className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                Command channel rules (Telegram DM-first)
              </li>
              <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                Account segregation map (GitHub/Vercel/Stripe)
              </li>
              <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                Daily memory + nightly consolidation routine
              </li>
              <li className="rounded-xl border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-900">
                Rollout plan: least-privilege → automation
              </li>
            </ul>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                href="https://buy.stripe.com/3cI8wP99P66geX19Fs7bW00"
              >
                Buy LuminaOps Kit — £19
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-6 text-sm font-medium transition hover:bg-black/[.04] dark:border-white/10 dark:hover:bg-white/10"
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy on Vercel
              </a>
            </div>

            <p className="text-xs text-zinc-500">
              Next: ship this landing page, then release the first paid kit (one-time purchase)
              and iterate based on early users.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
