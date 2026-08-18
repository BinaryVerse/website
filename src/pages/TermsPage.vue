<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <div>
    <!-- ═══ Hero ═══ -->
    <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, rgba(255,107,53,0.4) 1px, transparent 1px); background-size: 24px 24px;"
      />
      <div class="relative max-w-7xl mx-auto px-4 md:px-8 text-center py-20">
        <Badge variant="outline" class="border-brand/30 text-brand mb-6">
          Legal
        </Badge>
        <h1 class="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] max-w-3xl mx-auto animate-fade-in-up">
          Terms of
          <span class="gradient-text">Service</span>
        </h1>
        <p class="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up stagger-1">
          The terms governing your use of the Quicky website and services.
        </p>
      </div>
    </section>

    <!-- ═══ Content ═══ -->
    <section class="py-20 md:py-28 px-4 md:px-8">
      <div class="max-w-3xl mx-auto">
        <Card class="bg-card/60 border-border">
          <CardContent class="p-8 md:p-12 space-y-8">
            <p class="text-sm text-muted-foreground">
              Last updated: August 18, 2026
            </p>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">1. Acceptance of Terms</h2>
              <p class="text-muted-foreground leading-relaxed">
                By accessing and using the Quicky website at <a href="https://bversetech.com" class="text-brand hover:underline">bversetech.com</a>, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the website.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">2. Description of Services</h2>
              <p class="text-muted-foreground leading-relaxed">
                Quicky, a product by Binaryverse, is a hyperlocal marketplace app designed to connect customers with local shop owners — including but not limited to grocery stores, supermarkets, pharmacies, stationery shops, bakeries, and other retail businesses — so that shop owners can list and sell their products online and customers can order from nearby shops for delivery. This website is currently an informational and early-access resource ahead of the app's launch, and provides a means to register interest as a customer, shop owner, or delivery partner.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">3. Use of Website</h2>
              <p class="text-muted-foreground leading-relaxed">
                You agree to use this website only for lawful purposes. You must not:
              </p>
              <ul class="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to interfere with the proper functioning of the website</li>
                <li>Submit false or misleading information through our sign-up or contact forms</li>
                <li>Use the website to transmit any harmful or malicious content</li>
              </ul>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">4. Early Access &amp; Shop Registration</h2>
              <p class="text-muted-foreground leading-relaxed">
                Submitting your details as a prospective customer, shop owner, or delivery partner does not create a binding agreement to use the Quicky app or platform. Onboarding, seller commissions, payout terms, and platform policies for shop owners and delivery partners will be provided separately once the Quicky app launches, and will require separate acceptance.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">5. Intellectual Property</h2>
              <p class="text-muted-foreground leading-relaxed">
                All content, features, and functionality on this website — including text, graphics, logos, icons, images, and software — including the "Quicky" name and branding, are the exclusive property of Binaryverse and are protected by Indian and international intellectual property laws.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">6. Disclaimer of Warranties</h2>
              <p class="text-muted-foreground leading-relaxed">
                The website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. Binaryverse does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">7. Limitation of Liability</h2>
              <p class="text-muted-foreground leading-relaxed">
                In no event shall Binaryverse be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or goodwill, arising out of or in connection with the use of this website.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">8. Governing Law</h2>
              <p class="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">9. Changes to Terms</h2>
              <p class="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes indicates your acceptance of the new terms.
              </p>
            </div>

            <div class="space-y-4">
              <h2 class="text-xl font-semibold font-[family-name:var(--font-heading)]">10. Contact Us</h2>
              <p class="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p class="text-muted-foreground">
                <a href="mailto:info@bversetech.com" class="text-brand hover:underline">info@bversetech.com</a><br />
                Phone: <a href="tel:+917092208101" class="text-brand hover:underline">+91 7092208101</a><br />
                No. 145, F block, Ambedkar Street, Arumbakkam, MMDA Colony, Chennai-600106
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
