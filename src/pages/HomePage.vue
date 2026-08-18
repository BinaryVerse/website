<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading.vue'
import {
  Search, ShoppingCart, Bike, ArrowRight,
  Carrot, Pill, NotebookPen, Croissant, Shirt, Wrench,
  Smartphone, Flower2, Store, Percent, Navigation, ShieldCheck,
} from '@lucide/vue'

const categories = [
  { icon: Carrot, name: 'Grocery & Supermarket' },
  { icon: Pill, name: 'Pharmacy & Wellness' },
  { icon: NotebookPen, name: 'Stationery & Books' },
  { icon: Croissant, name: 'Bakery & Snacks' },
  { icon: Shirt, name: 'Fashion & Apparel' },
  { icon: Smartphone, name: 'Electronics' },
  { icon: Wrench, name: 'Hardware & Tools' },
  { icon: Flower2, name: 'Gifts & Flowers' },
]

const steps = [
  {
    icon: Search,
    title: 'Find Your Shops',
    description: 'Browse grocery stores, pharmacies, stationery shops, supermarkets, and more — all near you, in one app.',
  },
  {
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Pick what you need from one shop or mix items across multiple local sellers in a single order.',
  },
  {
    icon: Bike,
    title: 'Get It Delivered',
    description: 'Track your order in real time as it makes its way from the shop counter to your doorstep.',
  },
]

const offerings = [
  {
    icon: Store,
    title: 'Every Local Shop',
    description: 'From the corner grocery to the neighborhood stationery store — any shop owner can list and sell on Quicky.',
  },
  {
    icon: Bike,
    title: 'Fast Doorstep Delivery',
    description: 'A dedicated delivery network gets orders from shop counter to your door quickly and reliably.',
  },
  {
    icon: Percent,
    title: 'Fair Pricing',
    description: 'Transparent commissions for sellers and honest prices for shoppers — no hidden markups.',
  },
  {
    icon: Navigation,
    title: 'Live Order Tracking',
    description: 'Know exactly where your order is, from confirmation to delivery, every step of the way.',
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
          style="background-image: linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px); background-size: 40px 40px;"
        />
      </div>

      <!-- Radial glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand/5 blur-[120px]" />

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center pt-24 pb-20">
        <div class="animate-fade-in-up">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand/30 text-brand bg-brand/5 mb-6">
            Launching Soon
          </span>
        </div>

        <h1 class="animate-fade-in-up stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Every Shop Near You,
          <span class="gradient-text">One App Away</span>
        </h1>

        <p class="animate-fade-in-up stagger-2 mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Quicky brings your neighborhood grocery store, pharmacy, stationery shop, supermarket, and every other local business online — so you can order anything and have it delivered fast.
        </p>

        <div class="animate-fade-in-up stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <RouterLink to="/products">
            <Button size="lg" variant="outline" class="border-border hover:bg-white/5 text-foreground px-8 text-base">
              Sell on Quicky
            </Button>
          </RouterLink>
        </div>

        <!-- Floating stats -->
        <div class="animate-fade-in-up stagger-4 grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16">
          <div>
            <div class="text-2xl md:text-3xl font-bold gradient-text">10+</div>
            <div class="text-xs text-muted-foreground mt-1">Shop Categories</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold gradient-text">30 Min</div>
            <div class="text-xs text-muted-foreground mt-1">Target Delivery</div>
          </div>
          <div>
            <div class="text-2xl md:text-3xl font-bold gradient-text">1 App</div>
            <div class="text-xs text-muted-foreground mt-1">For Everything Local</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div class="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div class="w-1.5 h-3 rounded-full bg-brand animate-pulse" />
        </div>
      </div>
    </section>

    <!-- ═══ Categories ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Anything Local, Delivered"
          subtitle="Not just food — order from every kind of shop in your neighborhood, all in one place."
        />
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div
            v-for="(cat, index) in categories"
            :key="cat.name"
            class="animate-fade-in-up flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card/60 border border-border hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 group"
            :class="`stagger-${(index % 6) + 1}`"
          >
            <div class="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
              <component :is="cat.icon" class="w-7 h-7 text-brand" />
            </div>
            <span class="text-sm font-medium text-foreground">{{ cat.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ How It Works ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="How Quicky Works"
          subtitle="Three simple steps between you and everything your neighborhood shops have to offer."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative text-center animate-fade-in-up"
            :class="`stagger-${index + 1}`"
          >
            <div class="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/30 flex items-center justify-center mx-auto mb-5">
              <component :is="step.icon" class="w-7 h-7 text-brand" />
            </div>
            <div class="text-xs font-semibold text-brand mb-2 tracking-widest uppercase">Step {{ index + 1 }}</div>
            <h3 class="font-semibold font-[family-name:var(--font-heading)] text-lg mb-2">{{ step.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Why Quicky ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Why Quicky"
          subtitle="Built to make local shopping as easy as ordering food online."
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="(item, index) in offerings"
            :key="item.title"
            class="bg-card/60 border-border hover:border-brand/30 transition-all duration-300 hover:-translate-y-1 group"
          >
            <CardContent class="p-6">
              <div
                class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors animate-fade-in-up"
                :class="`stagger-${index + 1}`"
              >
                <component :is="item.icon" class="w-6 h-6 text-brand" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] text-lg mb-2">{{ item.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ item.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- ═══ For Shop Owners ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="relative order-2 lg:order-1">
            <div class="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card border border-border flex items-center justify-center overflow-hidden">
              <div class="relative w-3/4 h-3/4">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-brand/10 border border-brand/30 flex items-center justify-center animate-float">
                  <Store class="w-7 h-7 text-brand" />
                </div>
                <div class="absolute bottom-0 left-0 w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center animate-float stagger-2">
                  <ShieldCheck class="w-7 h-7 text-red-400" />
                </div>
                <div class="absolute bottom-0 right-0 w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float stagger-4">
                  <Percent class="w-7 h-7 text-amber-400" />
                </div>
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <line x1="100" y1="40" x2="40" y2="165" stroke="rgba(255,107,53,0.15)" stroke-width="1" stroke-dasharray="4 4" />
                  <line x1="100" y1="40" x2="160" y2="165" stroke="rgba(255,107,53,0.15)" stroke-width="1" stroke-dasharray="4 4" />
                  <line x1="40" y1="165" x2="160" y2="165" stroke="rgba(255,107,53,0.15)" stroke-width="1" stroke-dasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <SectionHeading
              title="Own a Shop? Sell Online in Minutes"
              subtitle="Whether it's groceries, stationery, medicines, or fashion — bring your business to every phone in your neighborhood."
              align="left"
            />
            <p class="text-muted-foreground leading-relaxed mb-6">
              Quicky is open to every shop owner — grocery stores, supermarkets, pharmacies, stationery shops, bakeries, and more. List your catalog, manage orders from a simple dashboard, and let our delivery network handle the rest.
            </p>
            <p class="text-muted-foreground leading-relaxed mb-8">
              No tech team required, no upfront cost to get started. Just register your shop and start reaching customers who are already nearby.
            </p>
            <RouterLink to="/products">
              <Button class="bg-gradient-to-r from-brand to-red-500 text-background font-semibold hover:opacity-90 transition-opacity">
                Register Your Shop
                <ArrowRight class="ml-2 w-4 h-4" />
              </Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ Who We Are ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8 bg-card/30">
      <div class="max-w-7xl mx-auto text-center">
        <SectionHeading
          title="Who We Are"
          subtitle="A team on a mission to bring every local shop online and make neighborhood shopping effortless."
        />
        <p class="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
          Quicky is built on a simple idea: the shops that make up your neighborhood — the grocer, the chemist, the stationer, the supermarket — deserve the same reach as any big online store. We're building the app that connects them all to you, with the speed and convenience you already expect.
        </p>
        <RouterLink to="/about">
          <Button variant="outline" class="border-brand/30 text-brand hover:bg-brand/5">
            Learn More About Us
            <ArrowRight class="ml-2 w-4 h-4" />
          </Button>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
