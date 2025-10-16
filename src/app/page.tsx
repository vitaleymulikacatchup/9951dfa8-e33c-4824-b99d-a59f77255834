"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/6188305/pexels-photo-6188305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A young couple having milkshakes and pizza at a cozy cafe. Relaxed and joyful atmosphere." },
  { "id": "product1", "url": "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A mouthwatering slice of pepperoni pizza with cheese and spices, ideal for any meal." },
  { "id": "product2", "url": "https://images.pexels.com/photos/5848245/pexels-photo-5848245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Delicious gourmet pizza in an open cardboard box, shot from above for a classic flat lay presentation." },
  { "id": "product3", "url": "https://images.pexels.com/photos/6605245/pexels-photo-6605245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Overhead view of friends sharing pizza and beer at a table indoors in a casual setting." },
  { "id": "team1", "url": "https://images.pexels.com/photos/5953548/pexels-photo-5953548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Pizza deliveryman carrying stacked boxes in a restaurant kitchen setting." },
  { "id": "team2", "url": "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A waiter serves a fresh salad and hors d'oeuvres in a cozy restaurant setting." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Pizzeria"
            description="Enjoy the best pizza in town with fresh ingredients and rich flavors."
            buttons={[
              { text: "See Menu", href: "menu" },
              { text: "Contact Us", href: "contact" }
            ]}
            imageSrc="https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Our Pizzeria"
            description={["Our pizzeria has been crafting delightful pizzas for over a decade, using traditional recipes and the finest ingredients."]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Pizza Selection"
            products={[
              { id: "1", name: "Pepperoni Pizza", price: "$12.99", imageSrc: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Vegetarian Pizza", price: "$11.99", imageSrc: "https://images.pexels.com/photos/5848245/pexels-photo-5848245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "3", name: "Margherita Pizza", price: "$10.99", imageSrc: "https://images.pexels.com/photos/6605245/pexels-photo-6605245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            title="Meet Our Team"
            members={[
              { id: "1", name: "Chef Luigi", role: "Head Chef", description: "Expert in Italian cuisine with over 20 years of experience.", imageSrc: "https://images.pexels.com/photos/5953548/pexels-photo-5953548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Maria", role: "Service Manager", description: "Ensuring top-notch customer service since Day 1.", imageSrc: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Contact Us"
            description="For reservations or inquiries, please leave us a message."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Your message", rows: 5 }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Pizzeria", items: [
                { label: "Menu", href: "menu" },
                { label: "Contact", href: "contact" }]
              },
              { title: "Legal", items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms & Conditions", href: "terms" }]
              }
            ]}
            copyrightText="© 2023 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
