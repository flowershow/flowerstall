---
title: Metacrisis - an Introduction
description: "In an era defined by global catastrophic risk, polycrisis describes a collection of escalating crises and their complex interactions. Metacrisis points to the common, foundational conditions that generate and sustain these crises.This site offers an accessible introduction to metacrisis: what it is, how it relates to polycrisis, and why it matters. The emphasis is on clarity and rigor rather than drama: presenting the key ideas in a calm, factual way."
layout: plain
---

<style>
  /* Custom Utilities for Dark Mode */
  .glass-panel {
    background: rgba(28, 25, 23, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(251, 191, 36, 0.1);
  }
  .hero-bg {
    background-image: url('https://images.unsplash.com/photo-1532978873245-f938d6418386?q=80&w=2070&auto=format&fit=crop'); 
    /* Alternate darker image option: https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop */
    background-size: cover;
    background-position: center;
    background-attachment: fixed; /* Parallax effect */
  }
  .text-glow {
    text-shadow: 0 0 30px rgba(251, 191, 36, 0.15);
  }
  /* Share button hover effect */
    .share-btn:hover {
    color: #b45309;
    transform: translateY(-1px);
  }
</style>

<script>
  function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied to clipboard!");
  }
</script>

<!-- I. Hero Section -->
<header class="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center hero-bg overflow-hidden py-20">
  <!-- Dark Overlay plus Eclipse-->
  <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-eclipse-dark"></div>
  <div class="absolute -right-32 -top-40 w-[420px] h-[420px] rounded-full bg-slate-950 shadow-[0_0_80px_40px_rgba(251,191,36,0.22)] border border-amber-400/40"></div>
  <div class="absolute -right-40 -top-52 w-[520px] h-[520px] rounded-full border border-amber-500/10"></div>
  <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
    <div class="inline-block mb-6 px-3 py-1 border border-amber-500/30 rounded-full bg-black/40 backdrop-blur-sm">
      <span class="text-amber-400 text-xs sm:text-sm font-sans tracking-widest uppercase font-semibold">An Introduction</span>
    </div>
    <h1 class="font-display text-5xl md:text-7xl lg:text-9xl mb-6 leading-tight text-white text-glow">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700">Metacrisis</span>
    </h1>
    <div class="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-stone-400 mb-12 space-y-4">
      <p>
        In an era defined by global catastrophic risk, <span class="text-stone-200 font-semibold">polycrisis</span> describes a collection of escalating crises and their complex interactions. <span class="text-amber-500 font-semibold">Metacrisis</span> points to the common, foundational conditions that generate and sustain these crises.
      </p>
      <p class="text-stone-500 text-base md:text-lg">
        This site offers an accessible introduction to metacrisis: what it is, how it relates to polycrisis, and why it matters.
      </p>
    </div>
    <!-- Hero Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
    <a href="#definition" class="w-full sm:w-auto px-8 py-3 rounded-sm bg-stone-200 text-stone-900 font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5">
      Read short introduction
    </a>
    <a href="/paper" class="w-full sm:w-auto px-8 py-3 rounded-sm border border-stone-600 text-stone-300 font-semibold hover:border-amber-500 hover:text-amber-400 transition-colors duration-300 backdrop-blur-sm bg-black/20">
      Read the paper
    </a>
  </div>
  <div class="mt-16 animate-bounce opacity-50">
    <svg class="w-6 h-6 mx-auto text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  </div>
  </div>
  <!-- Footer Text (Absolute Positioned at Bottom) -->
  <div class="absolute bottom-6 w-full text-center z-20 px-4">
    <p class="text-[10px] md:text-xs text-stone-500 font-sans uppercase tracking-widest opacity-60">
      Backed by <a href="https://lifeitself.org/">Life Itself Collective</a> & part of the <a href="https://secondrenaissanc.net/">Second Renaissance Initiative</a>
    </p>
  </div>
</header>

<!-- II. Combined Definition & Introduction Section -->
<section id="definition" class="py-24 bg-eclipse-dark text-stone-200">
  <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
    <!-- LEFT COLUMN (1/3): Definition (Paper Color Background) -->
    <div class="lg:col-span-1 bg-[#E0D7D2] text-stone-900 p-8 rounded shadow-lg shadow-black/20">
      <h2 class="text-4xl md:text-5xl text-stone-800 mb-6">Definition</h2> 
      <p class="text-xl md:text-2xl leading-relaxed text-stone-800 mb-6">
        <span class="font-bold">Metacrisis</span> is a multi-systemic breakdown, emerging from the foundational views, values, and institutional logics of modern culture, threatening the coherence of the current globalised civilization, and the integrity of complex living systems.
      </p>
      <!-- Discrete Share Buttons -->
      <div class="flex gap-4 mt-2 border-t border-stone-400/30 pt-4">
        <!-- X (Twitter) -->
        <a href="https://twitter.com/intent/tweet?text=The%20Metacrisis%3A%20Defining%20the%20root%20crisis%20of%20civilization." target="_blank" class="text-stone-600 hover:text-amber-700 transition-all p-1" title="Share on X">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        </a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmetacrisis.org" target="_blank" class="text-stone-600 hover:text-amber-700 transition-all p-1" title="Share on LinkedIn">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <!-- Facebook -->
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmetacrisis.org" target="_blank" class="text-stone-600 hover:text-amber-700 transition-all p-1" title="Share on Facebook">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <!-- Copy Link -->
        <button onclick="copyLink()" class="text-stone-600 hover:text-amber-700 transition-all p-1" title="Copy Link">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
        </button>
      </div>
    </div>
    <!-- RIGHT COLUMN (2/3): Introduction (Dark Background) -->
    <div class="lg:col-span-2 space-y-6 pt-6 lg:pt-0">
      <h2 class="text-4xl md:text-5xl text-stone-200 mb-6">Introduction</h2> 
      <div class="prose prose-xl prose-invert prose-stone font-serif max-w-none leading-loose text-stone-300 space-y-8">
        <p>
          Global crises are proliferating. Amid ecological destruction, economic fragility, and escalating AI, the term <strong class="text-white">polycrisis</strong> has entered common use to describe this entanglement of failures.
        </p>
        <p>
          But this framing doesn’t reach deeply enough. <strong class="text-white">Metacrisis</strong> draws our attention to the roots. Much as symptoms signal an underlying illness, polycrisis points to metacrisis. Treating symptoms alone doesn’t lead to recovery.
        </p>
        <p>
          At the level of global society, the roots of our illness reach all the way down to our way of seeing the world and ourselves. A growing field of metacrisis thought explores, among other factors, the ways in which particular<strong class="text-white">worldviews</strong> ultimately produce and reinforce global catastrophic risk.
        </p>
        <div class="not-prose mt-8">
          <a href="#paper" class="group inline-flex items-center gap-3 text-stone-200 font-sans font-medium hover:text-amber-400 transition-colors">
            <span class="w-10 h-10 rounded-full border border-stone-600 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span>Read the White Paper</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- III. At a Glance Section (Dark) -->
<section class="py-20 bg-stone-900 border-t border-white/5">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-2xl sm:text-3xl text-white mb-10 text-center md:text-left">
      Polycrisis and Metacrisis <span class="text-stone-500 italic font-normal">at a glance</span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Item 1 -->
      <div class="bg-black/20 border border-stone-800 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
        <p class="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
          Polycrisis
        </p>
        <p class="text-stone-300 font-serif leading-relaxed text-lg">
          Entanglement of multiple, escalating crises and their cascading interactions.
        </p>
      </div>
      <!-- Item 2 -->
      <div class="bg-black/20 border border-stone-800 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
        <p class="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
          Metacrisis
        </p>
        <p class="text-stone-300 font-serif leading-relaxed text-lg">
          Multi-systemic breakdown emerging from the foundational views, values, and institutional logics of modern culture.
        </p>
      </div>
      <!-- Item 3 -->
      <div class="bg-black/20 border border-stone-800 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300">
        <p class="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-amber-600 mb-3">
          Why this matters
        </p>
        <p class="text-stone-300 font-serif leading-relaxed text-lg">
          Just as symptoms point to an underlying illness, polycrisis points to metacrisis. Diagnosis is a precondition for wise response.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- IV. The Roots Section (Eclipse Dark Background) -->
<section class="py-24 bg-eclipse-dark relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-900/50 to-transparent pointer-events-none"></div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="max-w-3xl mb-16">
      <h2 class="text-4xl md:text-5xl text-white mb-6">The Roots of Illness</h2>
      <p class="text-xl text-stone-400 leading-relaxed">
        Viewed through a <span class="italic text-stone-200">polycrisis</span> lens, climate breakdown is a logistical challenge. Viewed through <span class="italic text-stone-200">metacrisis</span>, it is a symptom of how we see the world.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Card 1 -->
      <div class="p-8 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 transition-colors group">
        <div class="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center mb-4 text-amber-500 font-bold border border-stone-700">1</div>
        <h3 class="text-2xl text-amber-500 mb-4 group-hover:text-amber-400 font-serif font-semibold">Mechanistic Reality</h3>
        <p class="text-lg text-stone-400 leading-relaxed">
          A view that the world is just a complicated machine. This leads to a disenchanted relationship with nature and the mistreatment of complex living systems.
        </p>
      </div>
      <!-- Card 2 -->
      <div class="p-8 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 transition-colors group">
        <div class="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center mb-4 text-amber-500 font-bold border border-stone-700">2</div>
        <h3 class="text-2xl text-amber-500 mb-4 group-hover:text-amber-400 font-serif font-semibold">Fundamental Separateness</h3>
        <p class="text-lg text-stone-400 leading-relaxed">
          A worldview that casts individuals and nations as rivals for power, driving global coordination failure and legitimising extraction.
        </p>
      </div>
      <!-- Card 3 -->
      <div class="p-8 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 transition-colors group">
        <div class="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center mb-4 text-amber-500 font-bold border border-stone-700">3</div>
        <h3 class="text-2xl text-amber-500 mb-4 group-hover:text-amber-400 font-serif font-semibold">Dominance Narrative</h3>
        <p class="text-lg text-stone-400 leading-relaxed">
          Positions humanity alone at the top of a pyramid of power, erasing the truth that harming nature is harming ourselves.
        </p>
      </div>
      <!-- Card 4 -->
      <div class="p-8 rounded-xl bg-stone-900/50 border border-stone-800 hover:border-amber-700/50 transition-colors group">
        <div class="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center mb-4 text-amber-500 font-bold border border-stone-700">4</div>
        <h3 class="text-2xl text-amber-500 mb-4 group-hover:text-amber-400 font-serif font-semibold">Rational Self-Interest</h3>
        <p class="text-lg text-stone-400 leading-relaxed">
          Coupled with a myth of progress, this fuels market fundamentalism and an economy fixated on endless growth on a finite planet.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- V. Cultural Paradigm Section (Dark Stone + Texture) -->
<section class="py-24 bg-stone-900 border-t border-stone-800">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
      <!-- Section Header -->
      <div class="lg:col-span-1">
        <span class="font-sans text-xs font-bold tracking-widest text-amber-600 uppercase mb-2 block">Deep Dive</span>
        <h2 class="text-3xl md:text-4xl text-white mb-6">The Cultural Paradigm of Modernity</h2>
        <p class="text-lg text-stone-400 mb-6">
          The crisis has roots in the deeply embedded structures of ideas and beliefs that shape our institutions.
        </p>
        <a id="paper" href="#" class="inline-block bg-amber-700 hover:bg-amber-600 text-stone-100 font-sans font-semibold py-3 px-6 rounded-sm transition-all shadow-lg tracking-wide uppercase text-xs">
          Read White Paper
        </a>
      </div>
      <!-- Ideology Grid (Full Content, Dark Theme) -->
      <div class="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-black/30 p-6 rounded-lg border border-stone-800 hover:bg-black/50 hover:border-amber-900/50 transition">
          <h4 class="text-stone-200 mb-2 text-2xl">Rationalism</h4>
          <p class="text-lg text-stone-400 leading-relaxed">
            <span class="text-amber-500 text-xs uppercase tracking-wide block mb-1">Objectivity</span>
            All that exists is physical matter, governed by natural laws. Human reason can reveal universal truths about this external world.
          </p>
        </div>
        <div class="bg-black/30 p-6 rounded-lg border border-stone-800 hover:bg-black/50 hover:border-amber-900/50 transition">
          <h4 class="text-stone-200 mb-2 text-2xl">Materialism</h4>
          <p class="text-lg text-stone-400 leading-relaxed">
            <span class="text-amber-500 text-xs uppercase tracking-wide block mb-1">Reductionism</span>
            The universe is a vast machine. The living world is nothing more than the sum of small separate parts.
          </p>
        </div>
        <div class="bg-black/30 p-6 rounded-lg border border-stone-800 hover:bg-black/50 hover:border-amber-900/50 transition">
          <h4 class="text-stone-200 mb-2 text-2xl">Progress-ism</h4>
          <p class="text-lg text-stone-400 leading-relaxed">
            <span class="text-amber-500 text-xs uppercase tracking-wide block mb-1">Linear Growth</span>
            History is a project of continuous improvement, legitimising extraction, industrialisation, and dominance over nature.
          </p>
        </div>
        <div class="bg-black/30 p-6 rounded-lg border border-stone-800 hover:bg-black/50 hover:border-amber-900/50 transition">
          <h4 class="text-stone-200 mb-2 text-2xl">Individualism</h4>
          <p class="text-lg text-stone-400 leading-relaxed">
            <span class="text-amber-500 text-xs uppercase tracking-wide block mb-1">Self-Interest</span>
            The rational individual is the foundation of truth. Self-interest and competition are natural organising forces.
          </p>
        </div>
        <div class="bg-black/30 p-6 rounded-lg border border-stone-800 hover:bg-black/50 hover:border-amber-900/50 transition">
          <h4 class="text-stone-200 mb-2 text-2xl">Equality-ism</h4>
          <p class="text-lg text-stone-400 leading-relaxed">
            <span class="text-amber-500 text-xs uppercase tracking-wide block mb-1">Human Rights</span>
            All humans are created equal—giving rise to the idea of human rights, though realised imperfectly across empire.
          </p>
        </div>
        <div class="bg-black/30 p-6 rounded-lg border border-stone-800 hover:bg-black/50 hover:border-amber-900/50 transition">
          <h4 class="text-stone-200 mb-2 text-2xl">Secular-ism</h4>
          <p class="text-lg text-stone-400 leading-relaxed">
            <span class="text-amber-500 text-xs uppercase tracking-wide block mb-1">Disenchantment</span>
            Meaning is located in the human, not the divine. The idea of a living cosmos gives way to a world of inert matter.
          </p>
        </div>
      </div>
    </div>
    <!-- Prominent Voices Section (NEW) -->
    <div class="border-t border-stone-800 pt-16 mt-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Left Column: Heading -->
        <div class="md:col-span-1">
          <h3 class="text-2xl text-stone-200 mb-2">Defining Metacrisis</h3>
          <p class="text-sm text-stone-500 font-sans tracking-wide uppercase">Prominent Voices</p>
        </div>
        <!-- Right Column: Quotes -->
        <div class="md:col-span-2 space-y-12">   
          <!-- Quote 1: Jonathan Rowson -->
          <blockquote class="relative pl-6 border-l-2 border-amber-800/50">
            <p class="text-lg text-stone-300 font-serif italic leading-loose">
              “The metacrisis is the historically specific threat to truth, beauty, and goodness caused by our persistent misunderstanding, misvaluing, and misappropriating of reality. The metacrisis is the crisis within and between all the world’s major crises, a root cause that is at once singular and plural, a multi-faceted delusion arising from the spiritual and material exhaustion of modernity that permeates the world’s interrelated challenges and manifests institutionally and culturally to the detriment of life on earth.”
            </p>
            <footer class="mt-4 font-sans text-sm font-bold text-amber-600 uppercase tracking-widest">
              — Jonathan Rowson
            </footer>
          </blockquote>
          <!-- Quote 2: Nicholas Hedlund -->
          <blockquote class="relative pl-6 border-l-2 border-amber-800/50">
            <p class="text-lg text-stone-300 font-serif italic leading-loose">
              “The metacrisis is a complex, multifaceted gestalt or ‘laminated system’... the complex unity or concatenated nature of our twenty-first century planetary crises, due to their systemic nature and overlapping root causes.”
            </p>
            <footer class="mt-4 font-sans text-sm font-bold text-amber-600 uppercase tracking-widest">
              — Nicholas Hedlund
            </footer>
          </blockquote>
          <!-- Quote 3: Zak Stein -->
          <blockquote class="relative pl-6 border-l-2 border-amber-800/50">
            <p class="text-lg text-stone-300 font-serif italic leading-loose">
              “The metacrisis... has to do with how humans understand themselves and the world... systems and societies are in trouble, but it is the psyche that is in the direst of straits.”
            </p>
            <footer class="mt-4 font-sans text-sm font-bold text-amber-600 uppercase tracking-widest">
              — Zak Stein
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
