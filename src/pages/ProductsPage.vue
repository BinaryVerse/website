<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import SectionHeading from '@/components/SectionHeading.vue'
import {
  Store, PackageCheck, Wallet, Truck,
  Check, Users, Rocket as RocketOutline, Headset, Megaphone, ShieldCheck,
  Rocket, Sparkles, Bell,
} from '@lucide/vue'

const activeTab = ref('onboarding')

const modules = [
  {
    id: 'onboarding',
    icon: Store,
    label: 'Easy Onboarding',
    title: 'Get Your Shop Online in Minutes',
    features: [
      'Register your shop — grocery, pharmacy, stationery, supermarket, or any other category',
      'Upload your catalog with photos, prices, and stock in a simple dashboard',
      'No coding, no upfront fees, and no dedicated tech team required',
      'Go live and start taking orders as soon as your listing is approved',
    ],
  },
  {
    id: 'orders',
    icon: PackageCheck,
    label: 'Order Management',
    title: 'Manage Orders From One Simple Dashboard',
    features: [
      'Real-time order notifications the moment a customer checks out',
      'Accept, prepare, and hand off orders with a few taps',
      'Keep stock and item availability up to date instantly',
      'Order history and daily summaries to track how your shop is doing',
    ],
  },
  {
    id: 'payments',
    icon: Wallet,
    label: 'Payments',
    title: 'Get Paid Reliably, On Your Schedule',
    features: [
      'Secure, cashless payments collected directly through the app',
      'Transparent, fair commission on every order — no hidden fees',
      'Regular payouts straight to your bank account',
      'Clear settlement reports for every order and payout cycle',
    ],
  },
  {
    id: 'delivery',
    icon: Truck,
    label: 'Delivery Network',
    title: 'Leave Delivery to Us',
    features: [
      'A dedicated network of delivery partners picks up and delivers every order',
      'Live tracking for you and your customer from pickup to drop-off',
      'No need to hire, manage, or coordinate your own delivery staff',
      'Delivery radius tuned to keep orders fast and reliable',
    ],
  },
]

const features = [
  { icon: Users, title: 'Wider Reach', desc: 'Get discovered by every nearby customer browsing the app, not just walk-ins.' },
  { icon: ShieldCheck, title: 'Easy Setup', desc: 'List your shop and catalog in minutes with no technical experience needed.' },
  { icon: Wallet, title: 'Secure Payments', desc: 'Cashless checkout and predictable payouts, handled for you.' },
  { icon: PackageCheck, title: 'Real-Time Orders', desc: 'Instant notifications so you never miss an order.' },
  { icon: Megaphone, title: 'Marketing Support', desc: 'In-app placement and promotions to help new shops get noticed.' },
  { icon: Headset, title: 'Dedicated Support', desc: 'A partner support team to help you get set up and stay running smoothly.' },
]

</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, rgba(255,107,53,0.4) 1px, transparent 1px); background-size: 24px 24px;"
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge variant="outline" class="border-brand/30 text-brand mb-6">
          For Shop Owners
        </Badge>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up">
          Turn Your Shop Into an
          <span class="gradient-text">Online Store</span>
        </h1>
        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
          Grocery, pharmacy, stationery, supermarket, fashion, or anything else — any local shop owner can open an account and start selling on Quicky.
        </p>
      </div>
    </section>

    <!-- ═══ How Selling Works ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Everything You Need to Sell Online"
          subtitle="From listing your shop to getting paid, Quicky handles the hard parts so you can focus on your business."
        />

        <!-- Tabbed Modules -->
        <Tabs v-model="activeTab" class="w-full">
          <TabsList class="w-full flex flex-wrap gap-2 bg-secondary/50 p-1.5 rounded-xl h-auto">
            <TabsTrigger
              v-for="mod in modules"
              :key="mod.id"
              :value="mod.id"
              class="flex-1 min-w-[140px] data-[state=active]:bg-brand/10 data-[state=active]:text-brand rounded-lg py-2.5 text-sm"
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
                  <div class="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                    <component :is="mod.icon" class="w-5 h-5 text-brand" />
                  </div>
                  <h3 class="text-xl font-semibold font-[family-name:var(--font-heading)]">{{ mod.title }}</h3>
                </div>
                <ul class="space-y-3">
                  <li v-for="feat in mod.features" :key="feat" class="flex items-start gap-3">
                    <Check class="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                    <span class="text-muted-foreground">{{ feat }}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <!-- Value Proposition -->
        <div class="mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand/5 to-red-500/5 border border-brand/20">
          <div class="flex items-start gap-4">
            <div class="text-3xl">🏪</div>
            <blockquote class="text-muted-foreground leading-relaxed italic">
              "Quicky acts as your shop's online counter. By connecting your catalog to every nearby customer and handling payments and delivery for you, you can reach far more people than foot traffic alone — without hiring extra staff or building your own app."
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Features Grid ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Why Sell on Quicky"
          subtitle="Everything a local shop owner needs to grow online, in one place."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="feat in features"
            :key="feat.title"
            class="bg-card/60 border-border hover:border-brand/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <CardContent class="p-6">
              <div class="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                <component :is="feat.icon" class="w-5 h-5 text-brand" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">{{ feat.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ feat.desc }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- ═══ Coming Soon ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 -left-32 w-64 h-64 bg-brand/5 rounded-full blur-3xl animate-pulse" />
        <div class="absolute bottom-1/4 -right-32 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/3 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" />
      </div>

      <div class="relative max-w-4xl mx-auto text-center">
        <!-- Floating badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand/10 to-red-500/10 border border-brand/20 mb-8 animate-fade-in-up">
          <Rocket class="w-4 h-4 text-brand" />
          <span class="text-sm font-medium text-brand">Launching Soon</span>
          <Sparkles class="w-4 h-4 text-brand" />
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] animate-fade-in-up stagger-1">
          Your Neighborhood, One App Away
          <br />
          <span class="gradient-text">Is Almost Here</span>
        </h2>

        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-2">
          We're putting the finishing touches on Quicky, working closely with early shop partners to make sure
          onboarding, orders, and payouts feel effortless from day one.
        </p>

        <!-- Feature teasers -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in-up stagger-3">
          <div class="p-6 rounded-2xl bg-card/60 border border-border hover:border-brand/30 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
              <RocketOutline class="w-6 h-6 text-brand" />
            </div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">Built for Local Shops</h3>
            <p class="text-sm text-muted-foreground">Not just another delivery app — a storefront designed around how neighborhood businesses actually work.</p>
          </div>
          <div class="p-6 rounded-2xl bg-card/60 border border-border hover:border-brand/30 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
              <Sparkles class="w-6 h-6 text-brand" />
            </div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">Worth the Wait</h3>
            <p class="text-sm text-muted-foreground">We're crafting an onboarding experience that gets your shop selling online in minutes, not weeks.</p>
          </div>
          <div class="p-6 rounded-2xl bg-card/60 border border-border hover:border-brand/30 transition-all duration-300 group">
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand/20 transition-colors">
              <Bell class="w-6 h-6 text-brand" />
            </div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] mb-2">Be the First</h3>
            <p class="text-sm text-muted-foreground">Early partner shops get priority onboarding and lower launch fees.</p>
          </div>
        </div>

        <!-- Catchy tagline -->
        <div class="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand/5 to-red-500/5 border border-brand/20 animate-fade-in-up stagger-4">
          <p class="text-lg md:text-xl font-medium font-[family-name:var(--font-heading)] text-foreground">
            "Every shop deserves an online storefront.
            <span class="gradient-text">Quicky is yours.</span>"
          </p>
          <p class="text-sm text-muted-foreground mt-2">— The Quicky Team</p>
        </div>
      </div>
    </section>
  </div>
</template>
