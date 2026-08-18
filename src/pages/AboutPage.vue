<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SectionHeading from '@/components/SectionHeading.vue'
import { Lightbulb, Target, Handshake, ShoppingBag, Store, Bike } from '@lucide/vue'

const values = [
  {
    icon: Handshake,
    title: 'Local First',
    description: 'We believe the shops that make up your neighborhood deserve the same reach as any big online store — so we built Quicky around them.',
  },
  {
    icon: Target,
    title: 'Reliability',
    description: 'From accurate stock to on-time delivery, every part of the experience is built to be something you can count on, every time.',
  },
  {
    icon: Lightbulb,
    title: 'Simplicity',
    description: 'Whether you\'re ordering groceries or listing your shop, Quicky is designed to be effortless for everyone involved.',
  },
]

const audiences = [
  {
    icon: ShoppingBag,
    title: 'Customers',
    description: 'One app to order groceries, medicines, stationery, and everything else from the shops already around you — delivered fast.',
  },
  {
    icon: Store,
    title: 'Shop Owners',
    description: 'Any local business — grocery, pharmacy, stationery, supermarket, and more — can open an account and start selling online in minutes.',
  },
  {
    icon: Bike,
    title: 'Delivery Partners',
    description: 'A dedicated network of delivery partners connects every shop to every doorstep, quickly and reliably.',
  },
]
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section class="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, rgba(255,107,53,0.4) 1px, transparent 1px); background-size: 24px 24px;"
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge variant="outline" class="border-brand/30 text-brand mb-6">
          About Us
        </Badge>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up">
          Bringing Every
          <span class="gradient-text">Local Shop</span>
          Online
        </h1>
        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
          We're a team building the app that connects neighborhood shops — grocery stores, pharmacies, stationery shops, and more — to the customers who already live around them.
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
              subtitle="Making neighborhood shopping as easy as ordering food online."
              align="left"
            />
            <div class="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Quicky was built on a simple but powerful belief: <strong class="text-foreground">every local shop deserves an online storefront, and every customer deserves the convenience of ordering from the businesses already around them.</strong>
              </p>
              <p>
                Apps like Swiggy and Zomato proved that people love ordering from nearby places and having it show up at their door. We saw no reason that convenience should stop at restaurants — grocery stores, supermarkets, pharmacies, and stationery shops deserve it just as much.
              </p>
              <p>
                So we built Quicky: one app where any shop owner can open an account and start selling, and any customer can browse and order from every kind of local business — all with the speed and simplicity people already expect.
              </p>
            </div>
          </div>

          <!-- Mission & Vision cards -->
          <div class="space-y-6">
            <Card class="bg-card/60 border-border">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                    <Target class="w-5 h-5 text-brand" />
                  </div>
                  <h3 class="text-lg font-semibold font-[family-name:var(--font-heading)]">Our Mission</h3>
                </div>
                <p class="text-muted-foreground leading-relaxed">
                  To give every local shop owner — no matter the category — an easy way to sell online, and give every customer a single app for everything they need nearby.
                </p>
              </CardContent>
            </Card>

            <Card class="bg-card/60 border-border">
              <CardContent class="p-8">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Lightbulb class="w-5 h-5 text-red-400" />
                  </div>
                  <h3 class="text-lg font-semibold font-[family-name:var(--font-heading)]">Our Vision</h3>
                </div>
                <p class="text-muted-foreground leading-relaxed">
                  A neighborhood where no shop is invisible online — where the local grocer, chemist, and stationer are just as easy to order from as any big-name delivery brand.
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
            class="bg-card/60 border-border hover:border-brand/30 transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <CardContent class="p-8">
              <div class="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-brand/20 transition-colors">
                <component :is="value.icon" class="w-7 h-7 text-brand" />
              </div>
              <h3 class="font-semibold font-[family-name:var(--font-heading)] text-xl mb-3">{{ value.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ value.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- ═══ Who Quicky Serves ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <SectionHeading
          title="Who Quicky Serves"
          subtitle="Three sides of the same neighborhood, brought together in one app."
        />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            v-for="item in audiences"
            :key="item.title"
            class="bg-card/60 border-border hover:border-brand/30 transition-all duration-300 group"
          >
            <CardContent class="p-8">
              <div class="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/20 transition-colors">
                <component :is="item.icon" class="w-6 h-6 text-brand" />
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
