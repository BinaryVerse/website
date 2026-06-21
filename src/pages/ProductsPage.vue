<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
// import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import SectionHeading from '@/components/SectionHeading.vue'
import {
  FlaskConical, Settings, BrainCircuit, LayoutGrid,
  Check, Atom, Gauge, Network, ShieldCheck, BarChart3, Zap,
  Send, Loader2, AlertCircle, Rocket, Sparkles, Bell,
} from '@lucide/vue'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY
const MAIL_API_URL = import.meta.env.VITE_MAIL_API_URL

const activeTab = ref('chemical')

const modules = [
  {
    id: 'chemical',
    icon: FlaskConical,
    label: 'Chemical Intelligence',
    title: 'Comprehensive Chemical Intelligence Database',
    features: [
      'Centralized inventory with CAS numbers and chemical formulas',
      'Seamless 2D structure and interactive 3D molecular model visualization',
      'Comprehensive data profiles: SMILES notations, physical properties, molecular weight',
      'Visual characteristics and state-at-room-temperature data',
    ],
  },
  {
    id: 'equipment',
    icon: Settings,
    label: 'Equipment Config',
    title: 'Smart Equipment Configuration & Physics Modeling',
    features: [
      'Pre-configured asset library: Pumps, Reactors, Heat Exchangers, Distillation Columns',
      'Hybrid modeling with custom Python script code for physics/thermodynamic equations',
      'Flexible dynamic mapping: variable constraints, targeted outcomes, operating parameters',
      'Multi-directional stream logic (suction/discharge flow rates)',
    ],
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    label: 'AI Training',
    title: 'No-Code Data-Driven AI Training',
    features: [
      'Template-driven workflows with downloadable pre-structured CSV datasets',
      'Automated data validation and parsing',
      'Built-in analytical charts for data distribution visualization',
      'One-click ML modeling pipeline directly inside the digital twin',
    ],
  },
  {
    id: 'canvas',
    icon: LayoutGrid,
    label: 'Experimentation Canvas',
    title: 'Drag-and-Drop Virtual Experimentation Canvas',
    features: [
      'Node-based Process Flow Diagram (PFD) with visual drag-and-drop',
      'Interconnected pipeline simulation: chain multiple equipment nodes seamlessly',
      'Cross-node parameter mapping for complex real-world dependencies',
      'Full sequential system loop simulation with dynamic outputs',
    ],
  },
]

const features = [
  { icon: ShieldCheck, title: 'Automated Validation', desc: 'Instant data parsing and validation for production datasets.' },
  { icon: Atom, title: '3D Molecular Visualization', desc: 'Interactive 3D models for every compound in your inventory.' },
  { icon: Network, title: 'Node Chaining', desc: 'Chain equipment nodes to simulate entire production pipelines.' },
  { icon: Gauge, title: 'Hybrid Modeling', desc: 'Embed physics equations alongside ML predictions in real-time.' },
  { icon: BarChart3, title: 'Data Distribution Charts', desc: 'Visualize historical variables before training your models.' },
  { icon: Zap, title: 'One-Click Training', desc: 'Build ML-driven predictive models with a single click.' },
]

/* const pricingTiers = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'For small teams getting started with digital twins.',
    features: [
      'Up to 5 equipment nodes',
      'Chemical database access',
      '2D molecular visualization',
      'Basic ML training',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$1,499',
    period: '/month',
    description: 'For growing teams that need full simulation power.',
    features: [
      'Unlimited equipment nodes',
      'Full chemical intelligence',
      '2D & 3D visualization',
      'Advanced ML pipelines',
      'Custom Python scripting',
      'Priority support',
      'API access',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations requiring tailored solutions.',
    features: [
      'Everything in Professional',
      'Dedicated infrastructure',
      'Custom integrations',
      'On-premise deployment',
      'SLA guarantees',
      'Dedicated account manager',
      'Training & onboarding',
    ],
    highlighted: false,
  },
] */

const leadForm = ref({ name: '', email: '', company: '', message: '' })
const formSubmitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')
const turnstileToken = ref('')
let turnstileWidgetId: string | null = null

function renderTurnstile() {
  const container = document.getElementById('product-turnstile')
  if (!container || !(window as any).turnstile) return

  if (turnstileWidgetId !== null) {
    try { (window as any).turnstile.remove(turnstileWidgetId) } catch (_) {}
    turnstileWidgetId = null
  }

  turnstileWidgetId = (window as any).turnstile.render(container, {
    sitekey: TURNSTILE_SITE_KEY,
    theme: 'dark',
    callback: (token: string) => {
      turnstileToken.value = token
    },
    'expired-callback': () => {
      turnstileToken.value = ''
    },
    'error-callback': () => {
      turnstileToken.value = ''
    },
  })
}

function waitForTurnstile() {
  if ((window as any).turnstile) {
    renderTurnstile()
  } else {
    const interval = setInterval(() => {
      if ((window as any).turnstile) {
        clearInterval(interval)
        renderTurnstile()
      }
    }, 200)
  }
}

onMounted(() => {
  waitForTurnstile()
})

onBeforeUnmount(() => {
  if (turnstileWidgetId !== null && (window as any).turnstile) {
    try { (window as any).turnstile.remove(turnstileWidgetId) } catch (_) {}
  }
})

async function submitLead() {
  submitError.value = ''

  if (!turnstileToken.value) {
    submitError.value = 'Please complete the verification before submitting.'
    return
  }

  isSubmitting.value = true

  try {
    const subject = `Demo Request: ${leadForm.value.name} — ${leadForm.value.company || 'No Company'}`
    const text = [
      `Name: ${leadForm.value.name}`,
      `Email: ${leadForm.value.email}`,
      `Company: ${leadForm.value.company || 'N/A'}`,
      ``,
      `Message:`,
      leadForm.value.message || 'No message provided.',
    ].join('\n')

    const res = await fetch(MAIL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject,
        text,
        turnstileToken: turnstileToken.value,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || `Server responded with ${res.status}`)
    }

    formSubmitted.value = true
    leadForm.value = { name: '', email: '', company: '', message: '' }
    turnstileToken.value = ''
  } catch (err: any) {
    submitError.value = err.message || 'Something went wrong. Please try again.'
    if ((window as any).turnstile && turnstileWidgetId !== null) {
      (window as any).turnstile.reset(turnstileWidgetId)
    }
    turnstileToken.value = ''
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  formSubmitted.value = false
  submitError.value = ''
  nextTick(() => {
    waitForTurnstile()
  })
}
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-cyan-accent/5 to-transparent" />
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, rgba(0,242,254,0.4) 1px, transparent 1px); background-size: 24px 24px;"
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge variant="outline" class="border-cyan-accent/30 text-cyan-accent mb-6">
          Our Products
        </Badge>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up">
          Intelligent Solutions for
          <span class="gradient-text">Process Industries</span>
        </h1>
        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
          Transform your physical operations into a powerful virtual simulation platform.
        </p>
      </div>
    </section>

    <!-- ═══ Flagship Product ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Binaryverse Digital Twin"
          subtitle="Model an entire plant or a single machine in a virtual environment."
        />

        <!-- Tabbed Modules -->
        <Tabs v-model="activeTab" class="w-full">
          <TabsList class="w-full flex flex-wrap gap-2 bg-secondary/50 p-1.5 rounded-xl h-auto">
            <TabsTrigger
              v-for="mod in modules"
              :key="mod.id"
              :value="mod.id"
              class="flex-1 min-w-[140px] data-[state=active]:bg-cyan-accent/10 data-[state=active]:text-cyan-accent rounded-lg py-2.5 text-sm"
            >
              <component :is="mod.icon" class="w-4 h-4 mr-2 hidden sm:inline-block" />
              {{ mod.label }}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            v-for="mod in modules"
            :key="mod.id"
            :value="mod.id"
            class="mt-8"
          >
            <Card class="bg-card/60 border-border">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center">
                    <component :is="mod.icon" class="w-5 h-5 text-cyan-accent" />
                  </div>
                  <h3 class="text-xl font-semibold font-[family-name:var(--font-heading)]">{{ mod.title }}</h3>
                </div>
                <ul class="space-y-3">
                  <li v-for="feat in mod.features" :key="feat" class="flex items-start gap-3">
                    <Check class="w-5 h-5 text-cyan-accent mt-0.5 flex-shrink-0" />
                    <span class="text-muted-foreground">{{ feat }}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <!-- Value Proposition -->
        <div class="mt-12 p-8 rounded-2xl bg-gradient-to-r from-cyan-accent/5 to-blue-500/5 border border-cyan-accent/20">
          <div class="flex items-start gap-4">
            <div class="text-3xl">💡</div>
            <blockquote class="text-muted-foreground leading-relaxed italic">
              "This platform acts as a virtual sandbox for the process industry. By transforming physical equipment into intelligent, data-validated ML nodes, teams can simulate entire factory pipelines, predict performance drops, and optimize chemical yields safely in a risk-free digital environment before ever turning on a physical machine."
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Demo Video ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-5xl mx-auto">
        <SectionHeading
          title="See It in Action"
          subtitle="Watch a complete walkthrough of the Binaryverse Digital Twin platform."
        />
        <div class="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-cyan-accent/5">
          <video
            controls
            preload="metadata"
            class="w-full aspect-video bg-black"
            poster=""
          >
            <source src="/demo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <!-- Decorative glow -->
          <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-accent/10 to-blue-500/10 blur-xl -z-10" />
        </div>
      </div>
    </section>

    <!-- ═══ Features Grid ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Core Capabilities"
          subtitle="Everything you need to build, train, and simulate with confidence."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="feat in features"
            :key="feat.title"
            class="bg-card/60 border-border hover:border-cyan-accent/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <CardContent class="p-6">
              <div class="w-10 h-10 rounded-lg bg-cyan-accent/10 flex items-center justify-center mb-4 group-hover:bg-cyan-accent/20 transition-colors">
                <component :is="feat.icon" class="w-5 h-5 text-cyan-accent" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ feat.desc }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- ═══ Pricing ═══ -->
    <!-- <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Pricing"
          subtitle="Choose the plan that fits your team's needs."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card
            v-for="tier in pricingTiers"
            :key="tier.name"
            class="relative transition-all duration-300 hover:-translate-y-1"
            :class="tier.highlighted
              ? 'border-cyan-accent/50 bg-gradient-to-b from-cyan-accent/5 to-transparent shadow-lg shadow-cyan-accent/10'
              : 'bg-card/60 border-border'"
          >
            <CardHeader>
              <div class="flex items-center justify-between">
                <CardTitle class="font-[family-name:var(--font-heading)]">{{ tier.name }}</CardTitle>
                <Badge v-if="tier.highlighted" class="bg-cyan-accent/10 text-cyan-accent border-cyan-accent/30">
                  Popular
                </Badge>
              </div>
              <CardDescription>{{ tier.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="mb-6">
                <span class="text-4xl font-bold font-[family-name:var(--font-heading)]">{{ tier.price }}</span>
                <span v-if="tier.period" class="text-muted-foreground text-sm">{{ tier.period }}</span>
              </div>
              <ul class="space-y-3">
                <li v-for="feat in tier.features" :key="feat" class="flex items-center gap-3 text-sm">
                  <Check class="w-4 h-4 text-cyan-accent flex-shrink-0" />
                  <span class="text-muted-foreground">{{ feat }}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <RouterLink to="/contact" class="w-full">
                <Button
                  class="w-full"
                  :class="tier.highlighted
                    ? 'bg-gradient-to-r from-cyan-accent to-blue-500 text-background font-semibold hover:opacity-90'
                    : ''"
                  :variant="tier.highlighted ? 'default' : 'outline'"
                >
                  {{ tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started' }}
                </Button>
              </RouterLink>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>-->

    <!-- ═══ Coming Soon ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-accent/5 rounded-full blur-3xl animate-pulse" />
        <div class="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" />
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <!-- Floating badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-accent/10 to-blue-500/10 border border-cyan-accent/20 mb-8 animate-fade-in-up">
          <Rocket class="w-4 h-4 text-cyan-accent" />
          <span class="text-sm font-medium text-cyan-accent">Launching Soon</span>
          <Sparkles class="w-4 h-4 text-cyan-accent" />
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] animate-fade-in-up stagger-1">
          The Future of Process Simulation
          <br />
          <span class="gradient-text">Is Almost Here</span>
        </h2>

        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
          We're putting the finishing touches on something extraordinary. Our platform is being
          battle-tested with industry leaders to ensure it's nothing short of revolutionary.
        </p>

        <!-- Feature teasers -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up stagger-3">
          <div class="p-6 rounded-2xl bg-card/60 border border-border hover:border-cyan-accent/30 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-cyan-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-accent/20 transition-colors">
              <Rocket class="w-6 h-6 text-cyan-accent" />
            </div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">Built Different</h3>
            <p class="text-sm text-muted-foreground">Not just another SaaS tool — a paradigm shift in how factories think, simulate, and evolve.</p>
          </div>
          <div class="p-6 rounded-2xl bg-card/60 border border-border hover:border-cyan-accent/30 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-cyan-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-accent/20 transition-colors">
              <Sparkles class="w-6 h-6 text-cyan-accent" />
            </div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">Worth the Wait</h3>
            <p class="text-sm text-muted-foreground">Great things take time. We're crafting an experience that will redefine digital twin technology.</p>
          </div>
          <div class="p-6 rounded-2xl bg-card/60 border border-border hover:border-cyan-accent/30 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-cyan-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-accent/20 transition-colors">
              <Bell class="w-6 h-6 text-cyan-accent" />
            </div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">Be the First</h3>
            <p class="text-sm text-muted-foreground">Request a demo below and get early access when we launch. Early adopters get priority onboarding.</p>
          </div>
        </div>

        <!-- Catchy tagline -->
        <div class="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-accent/5 to-blue-500/5 border border-cyan-accent/20 animate-fade-in-up stagger-4">
          <p class="text-lg md:text-xl font-medium font-[family-name:var(--font-heading)] text-foreground">
            "We're not launching a product.
            <span class="gradient-text">We're launching a revolution.</span>"
          </p>
          <p class="text-sm text-muted-foreground mt-2">— The Binaryverse Team</p>
        </div>
      </div>
    </section>

    <!-- ═══ Lead Capture ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-2xl mx-auto">
        <SectionHeading
          title="Request a Demo"
          subtitle="Speak with our solutions engineers to see how Binaryverse can transform your operations."
        />

        <Card class="bg-card/60 border-border">
          <CardContent class="p-8">
            <form v-if="!formSubmitted" @submit.prevent="submitLead" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="text-sm font-medium mb-2 block">Name</label>
                  <Input v-model="leadForm.name" placeholder="Your name" required />
                </div>
                <div>
                  <label class="text-sm font-medium mb-2 block">Email</label>
                  <Input v-model="leadForm.email" type="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div>
                <label class="text-sm font-medium mb-2 block">Company</label>
                <Input v-model="leadForm.company" placeholder="Company name" />
              </div>
              <div>
                <label class="text-sm font-medium mb-2 block">Message</label>
                <Textarea v-model="leadForm.message" placeholder="Tell us about your use case..." rows="4" />
              </div>

              <!-- Turnstile Widget -->
              <div>
                <div id="product-turnstile"></div>
              </div>

              <!-- Error Banner -->
              <div
                v-if="submitError"
                class="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-sm text-destructive"
              >
                <AlertCircle class="w-5 h-5 flex-shrink-0" />
                <span>{{ submitError }}</span>
              </div>

              <Button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-cyan-accent to-blue-500 text-background font-semibold hover:opacity-90"
              >
                <Loader2 v-if="isSubmitting" class="w-4 h-4 mr-2 animate-spin" />
                <Send v-else class="w-4 h-4 mr-2" />
                {{ isSubmitting ? 'Sending...' : 'Request Demo' }}
              </Button>
            </form>

            <!-- Success state -->
            <div v-else class="text-center py-8">
              <div class="w-16 h-16 rounded-full bg-cyan-accent/10 flex items-center justify-center mx-auto mb-4">
                <Check class="w-8 h-8 text-cyan-accent" />
              </div>
              <h3 class="text-xl font-semibold font-[family-name:var(--font-heading)] mb-2">Thank You!</h3>
              <p class="text-muted-foreground mb-6">We've received your request and will be in touch shortly.</p>
              <Button
                variant="outline"
                @click="resetForm"
                class="border-cyan-accent/30 text-cyan-accent hover:bg-cyan-accent/10"
              >
                Send Another Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
