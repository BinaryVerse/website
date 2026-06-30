<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, rgba(0,242,254,0.4) 1px, transparent 1px); background-size: 24px 24px;"
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge variant="outline" class="border-cyan-accent/30 text-cyan-accent mb-6">
          Legal
        </Badge>
        <h1 class="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up">
          Privacy
          <span class="gradient-text">Policy</span>
        </h1>
        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
          How we collect, use, and protect your information.
        </p>
      </div>
    </section>

    <!-- ═══ Content ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-3xl mx-auto">
        <Card class="bg-card/60 border-border">
          <CardContent class="p-8 md:p-12 space-y-8">
            <p class="text-sm text-muted-foreground">
              Last updated: June 30, 2026
            </p>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">1. Introduction</h2>
              <p class="text-muted-foreground leading-relaxed">
                Binaryverse ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <a href="https://bversetech.com" class="text-cyan-accent hover:underline">bversetech.com</a> and use our services.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">2. Information We Collect</h2>
              <p class="text-muted-foreground leading-relaxed">
                We collect information you voluntarily provide to us when you fill out forms on our website, including:
              </p>
              <ul class="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Your name</li>
                <li>Email address</li>
                <li>Company name (optional)</li>
                <li>Message content</li>
              </ul>
              <p class="text-muted-foreground leading-relaxed">
                We do not use cookies for tracking purposes. We use Cloudflare Turnstile for bot verification, which may process certain browser-level data as described in <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" class="text-cyan-accent hover:underline">Cloudflare's Privacy Policy</a>.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">3. How We Use Your Information</h2>
              <p class="text-muted-foreground leading-relaxed">
                We use the information we collect solely for the following purposes:
              </p>
              <ul class="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>To respond to your inquiries and contact requests</li>
                <li>To schedule product demos when requested</li>
                <li>To communicate with you about our products and services</li>
                <li>To improve our website and services</li>
              </ul>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">4. Data Storage & Security</h2>
              <p class="text-muted-foreground leading-relaxed">
                Your contact form submissions are transmitted securely and processed by our backend services. We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">5. Third-Party Services</h2>
              <p class="text-muted-foreground leading-relaxed">
                We use the following third-party services:
              </p>
              <ul class="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li><strong class="text-foreground">Cloudflare Turnstile</strong> — for bot protection and form verification</li>
                <li><strong class="text-foreground">GitHub Pages</strong> — for website hosting</li>
              </ul>
              <p class="text-muted-foreground leading-relaxed">
                We do not sell, rent, or share your personal information with any third parties for marketing purposes.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">6. Your Rights</h2>
              <p class="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul class="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">7. Contact Us</h2>
              <p class="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or your personal data, please contact us at:
              </p>
              <p class="text-muted-foreground">
                <a href="mailto:info@bversetech.com" class="text-cyan-accent hover:underline">info@bversetech.com</a><br />
                Phone: <a href="tel:+917092208101" class="text-cyan-accent hover:underline">+91 7092208101</a><br />
                No. 145, F block, Ambedkar Street, Arumbakkam, MMDA Colony, Chennai-600106
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
