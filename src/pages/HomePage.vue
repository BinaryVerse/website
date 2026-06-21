<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading.vue'
import { Cpu, FlaskConical, Settings, BrainCircuit, ArrowRight } from '@lucide/vue'

const offerings = [
  {
    icon: Cpu,
    title: 'Digital Twin Simulation',
    description: 'Create high-fidelity virtual replicas of physical equipment and entire plant floors for risk-free experimentation.',
  },
  {
    icon: FlaskConical,
    title: 'Chemistry Database',
    description: 'Access a centralized chemical intelligence database with molecular visualization, SMILES notations, and physical properties.',
  },
  {
    icon: Settings,
    title: 'Equipment Configuration',
    description: 'Pre-configured industrial assets with hybrid physics modeling and flexible dynamic parameter mapping.',
  },
  {
    icon: BrainCircuit,
    title: 'No-Code ML Training',
    description: 'Build predictive models directly inside the digital twin interface with one-click ML training pipelines.',
  },
]
</script>

<template>
  <div>
    <!-- ═══ Hero Section ═══ -->
    <section class="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <!-- Animated grid background -->
      <div class="absolute inset-0 opacity-[0.06]">
        <div class="absolute inset-0 animate-grid-move"
          style="background-image: linear-gradient(rgba(0,242,254,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,254,0.3) 1px, transparent 1px); background-size: 40px 40px;"
        />
      </div>

      <!-- Radial glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-accent/5 blur-[120px]" />

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center pt-24 pb-20">
        <div class="animate-fade-in-up">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-cyan-accent/30 text-cyan-accent bg-cyan-accent/5 mb-6">
            Industrial Digital Twins &amp; AI
          </span>
        </div>

        <h1 class="animate-fade-in-up stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Simulating the
          <span class="gradient-text">Future</span>
          of Industry
        </h1>

        <p class="animate-fade-in-up stagger-2 mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          High-fidelity digital twins powered by artificial intelligence. Bridge physical equipment, chemical intelligence, and machine learning to optimize your processes in a risk-free virtual environment.
        </p>

        <div class="animate-fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <RouterLink to="/products">
            <Button size="lg" class="bg-gradient-to-r from-cyan-accent to-blue-500 text-background font-semibold px-8 hover:opacity-90 transition-opacity text-base">
              Explore Products
              <ArrowRight class="ml-2 w-4 h-4" />
            </Button>
          </RouterLink>
          <RouterLink to="/contact">
            <Button size="lg" variant="outline" class="border-border hover:bg-white/5 text-foreground px-8 text-base">
              Contact Us
            </Button>
          </RouterLink>
        </div>

        <!-- Floating stats -->
        <div class="animate-fade-in-up stagger-4 grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16">
          <div>
            <div class="text-2xl md:text-3xl font-bold gradient-text">99.9%</div>
            <div class="text-xs text-muted-foreground mt-1">Simulation Accuracy</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold gradient-text">10x</div>
            <div class="text-xs text-muted-foreground mt-1">Faster Optimization</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold gradient-text">0</div>
            <div class="text-xs text-muted-foreground mt-1">Physical Risk</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div class="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div class="w-1.5 h-3 rounded-full bg-cyan-accent animate-pulse" />
        </div>
      </div>
    </section>

    <!-- ═══ What We Do ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              title="What We Do"
              subtitle="We bridge the gap between physical industrial operations and intelligent virtual simulation."
              align="left"
            />
            <p class="text-muted-foreground leading-relaxed mb-6">
              Binaryverse builds next-generation digital twin platforms that transform how process industries design, test, and optimize their operations. By combining chemical intelligence databases, physics-based equipment modeling, and data-driven machine learning, we create virtual environments that mirror real-world behavior with exceptional fidelity.
            </p>
            <p class="text-muted-foreground leading-relaxed">
              Our platform empowers engineers to simulate entire factory pipelines, predict performance bottlenecks, and optimize chemical yields — all without touching a single physical machine.
            </p>
          </div>
          <div class="relative">
            <!-- Abstract illustration -->
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card border border-border flex items-center justify-center overflow-hidden">
              <div class="relative w-3/4 h-3/4">
                <!-- Animated nodes -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center animate-float">
                  <Cpu class="w-7 h-7 text-cyan-accent" />
                </div>
                <div class="absolute bottom-0 left-0 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float stagger-2">
                  <FlaskConical class="w-7 h-7 text-blue-400" />
                </div>
                <div class="absolute bottom-0 right-0 w-16 h-16 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float stagger-4">
                  <BrainCircuit class="w-7 h-7 text-purple-400" />
                </div>
                <!-- Connection lines -->
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <line x1="100" y1="40" x2="40" y2="165" stroke="rgba(0,242,254,0.15)" stroke-width="1" stroke-dasharray="4 4" />
                  <line x1="100" y1="40" x2="160" y2="165" stroke="rgba(0,242,254,0.15)" stroke-width="1" stroke-dasharray="4 4" />
                  <line x1="40" y1="165" x2="160" y2="165" stroke="rgba(0,242,254,0.15)" stroke-width="1" stroke-dasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ What We Offer ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="What We Offer"
          subtitle="A comprehensive suite of tools to virtualize your industrial operations."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="(item, index) in offerings"
            :key="item.title"
            class="bg-card/60 border-border hover:border-cyan-accent/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <CardContent class="p-6">
              <div
                class="w-12 h-12 rounded-xl bg-cyan-accent/10 flex items-center justify-center mb-4 group-hover:bg-cyan-accent/20 transition-colors animate-fade-in-up"
                :class="`stagger-${index + 1}`"
              >
                <component :is="item.icon" class="w-6 h-6 text-cyan-accent" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] text-lg mb-2">{{ item.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ item.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- ═══ Who We Are ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <SectionHeading
          title="Who We Are"
          subtitle="A team of engineers, scientists, and technologists building the future of industrial simulation."
        />
        <p class="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Binaryverse was founded on the belief that every physical process can be understood, modeled, and optimized through intelligent simulation. Our multidisciplinary team combines deep expertise in chemical engineering, process design, data science, and software architecture to deliver solutions that are both scientifically rigorous and practically transformative.
        </p>
        <RouterLink to="/about">
          <Button variant="outline" class="border-cyan-accent/30 text-cyan-accent hover:bg-cyan-accent/5">
            Learn More About Us
            <ArrowRight class="ml-2 w-4 h-4" />
          </Button>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
