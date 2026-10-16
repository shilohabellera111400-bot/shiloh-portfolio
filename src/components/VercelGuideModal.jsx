import React, { useState } from 'react';
import { X, Copy, Check, Rocket, Globe, ShieldAlert, ExternalLink, Terminal } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function VercelGuideModal({ isOpen, onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const gitCommands = [
    `git add .`,
    `git commit -m "feat: complete developer portfolio with achievements"`,
    `git branch -M main`,
    `git remote add origin https://github.com/YOUR_GITHUB_USERNAME/shiloh-portfolio.git`,
    `git push -u origin main`
  ].join('\n');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-red-500/40 bg-[#111117] p-6 sm:p-8 shadow-2xl">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-56 h-56 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-2xl bg-red-950/70 border border-red-500/40 flex items-center justify-center text-red-400">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              How to Deploy to Vercel &amp; GitHub
            </h3>
            <p className="text-xs text-neutral-400">Step-by-step beginner guide for Shiloh</p>
          </div>
        </div>

        {/* Security Alert Note */}
        <div className="mt-4 p-4 rounded-2xl border border-amber-500/30 bg-amber-950/20 flex items-start gap-3 text-xs text-amber-200 leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold text-amber-300">Important Security Note:</strong>
            <p className="mt-0.5">
              Never share your account password in plain text or chat! GitHub and Vercel use secure browser login (OAuth) and Personal Access Tokens, which is much safer and free.
            </p>
          </div>
        </div>

        {/* 3 Simple Steps */}
        <div className="mt-6 space-y-6">
          {/* Step 1 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 mb-2 font-serif text-lg font-bold text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                1
              </span>
              <span>Create a Repository on GitHub</span>
            </div>
            <ol className="list-decimal list-inside text-xs sm:text-sm text-neutral-300 space-y-1.5 ml-2 font-light">
              <li>
                Open{' '}
                <a
                  href="https://github.com/new"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-400 underline font-medium"
                >
                  github.com/new ↗
                </a>
              </li>
              <li>
                Name your repository: <code className="bg-white/10 px-1.5 py-0.5 rounded text-white font-mono">shiloh-portfolio</code>
              </li>
              <li>Set visibility to <strong>Public</strong> (so your prof can view it).</li>
              <li>Leave "Add a README" unchecked, then click <strong>Create repository</strong>.</li>
            </ol>
          </div>

          {/* Step 2 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5 font-serif text-lg font-bold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  2
                </span>
                <span>Push Your Code with Git</span>
              </div>
              <button
                onClick={() => copyToClipboard(gitCommands, 1)}
                className="text-xs text-red-400 hover:text-white flex items-center gap-1 cursor-pointer bg-white/5 px-2.5 py-1 rounded-lg"
              >
                {copiedIndex === 1 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-neutral-400 mb-3 font-light">
              Run these commands in PowerShell inside this project folder:
            </p>
            <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed">
              {gitCommands}
            </pre>
          </div>

          {/* Step 3 */}
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 mb-2 font-serif text-lg font-bold text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                3
              </span>
              <span>Deploy to Vercel (1-Click)</span>
            </div>
            <ol className="list-decimal list-inside text-xs sm:text-sm text-neutral-300 space-y-1.5 ml-2 font-light">
              <li>
                Go to{' '}
                <a
                  href="https://vercel.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-400 underline font-medium"
                >
                  vercel.com ↗
                </a>{' '}
                and click <strong>Continue with GitHub</strong>.
              </li>
              <li>Click <strong>Add New... → Project</strong> on your Vercel Dashboard.</li>
              <li>
                Find your <code className="bg-white/10 px-1.5 py-0.5 rounded text-white font-mono">shiloh-portfolio</code> repository and click <strong>Import</strong>.
              </li>
              <li>
                Click the blue <strong>Deploy</strong> button. Vercel automatically builds and gives you a free live URL (e.g.{' '}
                <span className="text-emerald-400 font-mono">https://shiloh-portfolio.vercel.app</span>)!
              </li>
            </ol>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-red-600 text-white hover:bg-red-500 transition-all shadow-[0_0_20px_-4px_#ef4444] cursor-pointer"
          >
            Got it, Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
}
