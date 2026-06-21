<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeading from '@/components/SectionHeading.vue'
import { Lightbulb, Target, Users, FlaskConical, Cog, BrainCircuit } from '@lucide/vue'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of what digital simulation can achieve, constantly exploring new approaches to modeling and prediction.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Every model we build is grounded in rigorous science. From thermodynamic equations to data validation, accuracy is non-negotiable.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best solutions emerge when diverse expertise converges — chemistry, engineering, data science, and design working as one.',
  },
]

const expertise = [
  {
    icon: FlaskConical,
    title: 'Chemical Engineering',
    description: 'Deep understanding of chemical processes, reaction kinetics, thermodynamics, and material properties that power our chemical intelligence database.',
  },
  {
    icon: Cog,
    title: 'Process Engineering',
    description: 'Expertise in industrial equipment design, fluid mechanics, heat transfer, and plant operations that inform our equipment modeling capabilities.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    description: 'Advanced ML and AI capabilities enabling predictive modeling, anomaly detection, and process optimization at scale.',
  },
]
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section class="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, rgba(0,242,254,0.4) 1px, transparent 1px); background-size: 24px 24px;"
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge variant="outline" class="border-cyan-accent/30 text-cyan-accent mb-6">
          About Us
        </Badge>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up">
          Building the
          <span class="gradient-text">Intelligence</span>
          Behind Industry
        </h1>
        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
          We are a team of engineers, scientists, and technologists united by a singular mission: making industrial simulation accessible, accurate, and actionable.
        </p>
      </div>
    </section>

    <!-- ═══ Who We Are ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeading
              title="Who We Are"
              subtitle="Pioneering the convergence of physical science and artificial intelligence."
              align="left"
            />
            <div class="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Binaryverse was founded on a simple but powerful belief: <strong class="text-foreground">every physical process can be understood, modeled, and optimized through intelligent simulation.</strong>
              </p>
              <p>
                We recognized that process industries — chemical manufacturing, petroleum refining, pharmaceutical production — were underserved by existing digital tools. Engineers were forced to choose between oversimplified spreadsheets and prohibitively complex legacy software. Neither option kept pace with the speed and complexity of modern industrial operations.
              </p>
              <p>
                So we built something different. Our platform brings together three pillars of industrial intelligence: a comprehensive chemical database, physics-aware equipment modeling, and no-code machine learning — all unified in an intuitive drag-and-drop environment that anyone on your team can use.
              </p>
            </div>
          </div>

          <!-- Mission & Vision cards -->
          <div class="space-y-6">
            <Card class="bg-card/60 border-border">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center">
                    <Target class="w-5 h-5 text-cyan-accent" />
                  </div>
                  <h3 class="text-lg font-semibold font-[family-name:var(--font-heading)]">Our Mission</h3>
                </div>
                <p class="text-muted-foreground leading-relaxed">
                  To democratize industrial simulation by making high-fidelity digital twins accessible to every team — from startups to global enterprises — enabling them to innovate faster, reduce risk, and optimize outcomes without physical experimentation.
                </p>
              </CardContent>
            </Card>

            <Card class="bg-card/60 border-border">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Lightbulb class="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 class="text-lg font-semibold font-[family-name:var(--font-heading)]">Our Vision</h3>
                </div>
                <p class="text-muted-foreground leading-relaxed">
                  A world where every industrial plant has a living, breathing digital twin — continuously learning from real-time data, predicting performance, and autonomously suggesting optimizations to drive safety, sustainability, and profitability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Core Values ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Core Values"
          subtitle="The principles that guide everything we build."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            v-for="value in values"
            :key="value.title"
            class="bg-card/60 border-border hover:border-cyan-accent/30 transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <CardContent class="p-8">
              <div class="w-14 h-14 rounded-xl bg-cyan-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-accent/20 transition-colors">
                <component :is="value.icon" class="w-7 h-7 text-cyan-accent" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] text-xl mb-3">{{ value.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ value.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- ═══ Expertise ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Expertise"
          subtitle="Where deep domain knowledge meets cutting-edge technology."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            v-for="item in expertise"
            :key="item.title"
            class="bg-card/60 border-border hover:border-cyan-accent/30 transition-all duration-300 group"
          >
            <CardContent class="p-8">
              <div class="w-12 h-12 rounded-lg bg-cyan-accent/10 flex items-center justify-center mb-5 group-hover:bg-cyan-accent/20 transition-colors">
                <component :is="item.icon" class="w-6 h-6 text-cyan-accent" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] text-lg mb-3">{{ item.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ item.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
