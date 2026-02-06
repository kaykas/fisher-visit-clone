import Image from "next/image";

export default function VisitPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-fisher-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="/">
            <img
              src="https://cdn.prod.website-files.com/6539aab03867d0f5ae58ba24/6539aab03867d0f5ae58ba2c_logo__fisher.svg"
              alt="Fisher Vineyards Logo"
              className="h-16"
            />
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs tracking-[0.15em] uppercase font-mono">
            <a href="/wines" className="hover:text-fisher-gold transition-colors">Wines</a>
            <a href="/napa-valley-estate" className="hover:text-fisher-gold transition-colors">Calistoga Estate</a>
            <a href="/mayacamas-mountain-estate" className="hover:text-fisher-gold transition-colors">Mountain Estate</a>
            <a href="/unity" className="hover:text-fisher-gold transition-colors">Unity Wines</a>
            <a href="/visit" className="text-fisher-gold">Visit Us</a>
            <a href="/club" className="hover:text-fisher-gold transition-colors">Join Wine Club</a>
            <a href="/family" className="hover:text-fisher-gold transition-colors">Family</a>
            <a href="/story" className="hover:text-fisher-gold transition-colors">Story</a>
            <a href="/shop" className="hover:text-fisher-gold transition-colors">Shop</a>
          </div>
        </div>
      </nav>

      {/* Hero Cover */}
      <section className="relative h-[40vh] min-h-[300px] bg-[#2c2c2c] mt-20 flex items-center justify-center"
        style={{
          backgroundImage: "url('https://cdn.prod.website-files.com/6539aab03867d0f5ae58ba24/6539aab03867d0f5ae58ba3b_visit-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <div className="border border-white/40 px-16 py-12">
            <h1 className="text-white text-3xl md:text-4xl tracking-[0.2em] uppercase">
              Plan Your Visit
            </h1>
          </div>
        </div>
      </section>

      {/* VM TrueTour Virtual Experience */}
      <section className="py-16 border-b border-fisher-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl tracking-[0.15em] uppercase mb-4 text-center">
            Explore Our Winery Virtually
          </h2>
          <p className="text-center text-fisher-dark/60 mb-8 max-w-2xl mx-auto">
            Take an immersive virtual tour of Fisher Vineyards before your visit.
          </p>
          <div className="flex justify-center mb-6">
            <iframe
              src="https://truetour.app/properties/2359/media/143470?utm_campaign=single_asset_share&utm_bucket=asset%2Cchannel&utm_property=2359&utm_media_item=143470"
              width="720"
              height="600"
              className="max-w-full border-0"
              allow="fullscreen"
              title="Fisher Vineyards Virtual Tour"
            />
          </div>
          <div className="text-center">
            <a
              href="https://truetour.app/properties/2359/media/143470?utm_campaign=single_asset_share&utm_bucket=asset%2Cchannel&utm_property=2359&utm_media_item=143470"
              className="popup ttx-preview inline-block border border-fisher-dark/30 px-8 py-3 text-xs tracking-[0.15em] uppercase font-mono hover:border-fisher-gold hover:text-fisher-gold transition-colors"
              title="Fisher Vineyards Virtual Tour"
            >
              Open Full Virtual Tour
            </a>
          </div>
        </div>
      </section>

      {/* Visit Details */}
      <section className="border-b border-fisher-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <p className="leading-relaxed">
              A limited range of experiences are available to reserve online as you plan your visit{" "}
              <a href="https://www.exploretock.com/fisher-vineyards-calistoga" target="_blank" className="underline hover:text-fisher-gold">
                Calistoga Estate in Napa Valley
              </a>{" "}
              or our{" "}
              <a href="https://www.exploretock.com/fisher-vineyards-mountain-estate" target="_blank" className="underline hover:text-fisher-gold">
                Mountain Estate in Sonoma County
              </a>.
              <br /><br />
              Should you wish to contact the winery directly or inquire about additional availability, kindly complete the form below.
            </p>
            <p className="leading-relaxed">
              We are currently scheduling tasting visits for both our{" "}
              <a href="/napa-valley-estate" className="underline hover:text-fisher-gold whitespace-nowrap">
                Calistoga Estate
              </a>{" "}
              and <strong>Mountain Estate</strong> wineries (appointment required).
              <br /><br />
              <strong>
                Our visit fee is $95 per person (up to 6 guests); please inquire below for larger groups.
              </strong>{" "}
              We gladly waive one fee with each purchase of three bottles.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <form className="space-y-10">
            {/* Section 1: Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <FormField label="Name" required>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="form-input"
                  required
                />
              </FormField>
              <FormField label="Email Address" required>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-input"
                  required
                />
              </FormField>
              <FormField label="Phone Number" required>
                <input
                  type="tel"
                  placeholder="(000) 000-0000"
                  className="form-input"
                  required
                />
              </FormField>
            </div>

            {/* Section 2: Visit Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="Group Size" required>
                <select className="form-input" required>
                  <option value="">Select one...</option>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                  <option value="More than 6">More than 6</option>
                </select>
              </FormField>

              <FormField label="Preferred Date" required>
                <div className="grid grid-cols-3 gap-2">
                  <select className="form-input" required>
                    <option value="">Year</option>
                    {[2024, 2025, 2026].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <select className="form-input" required>
                    <option value="">Month</option>
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m, i) => (
                      <option key={m} value={m.slice(0, 3)}>{String(i + 1).padStart(2, "0")} {m}</option>
                    ))}
                  </select>
                  <select className="form-input" required>
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </FormField>

              <FormField label="Preferred Time">
                <select className="form-input">
                  <option value="">Select a time…</option>
                  <option value="10am">10am</option>
                  <option value="Noon">Noon</option>
                  <option value="2pm">2pm</option>
                </select>
              </FormField>

              <FormField label="Location">
                <select className="form-input">
                  <option value="">Which winery would you like to visit?</option>
                  <option value="Calistoga Estate">Calistoga Estate: Tasting or Pick-up</option>
                  <option value="Mountain Estate">Mountain Estate: Tasting or Pick-up</option>
                  <option value="Help Me">Not sure, let&apos;s talk…</option>
                </select>
              </FormField>
            </div>

            {/* Section 3: Additional Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="How did you discover Fisher?">
                <select className="form-input">
                  <option value="">Select one…</option>
                  <option value="Friend-Family">Family or friend</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Publication">Publication</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </select>
              </FormField>

              <FormField label="Have you visited Fisher before?">
                <div className="flex gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer font-mono text-sm">
                    <input type="radio" name="prior-visit" value="Yes" className="accent-fisher-gold" />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-mono text-sm">
                    <input type="radio" name="prior-visit" value="No" className="accent-fisher-gold" />
                    No
                  </label>
                </div>
              </FormField>
            </div>

            <FormField label="Comments">
              <textarea
                placeholder="Is there anything else we should know? Please include flexibility on day or time."
                className="form-input min-h-[120px] resize-y"
                maxLength={5000}
              />
            </FormField>

            <button
              type="submit"
              className="bg-fisher-dark text-white uppercase tracking-[0.15em] text-sm font-mono px-12 py-4 hover:bg-fisher-gold transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Estate Descriptions */}
      <section className="bg-fisher-gray py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl tracking-[0.15em] uppercase mb-12 text-center">
            The Best of Both Worlds
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="leading-relaxed">
              <strong>MAYACAMAS MOUNTAIN ESTATE, Sonoma County</strong>
              <br />
              An original homestead ranch, Fisher Vineyards&apos; Mayacamas Mountain Estate was purchased by Fred and Juelle Fisher in 1973 (unplanted at the time). Today, the pioneering work to develop these mountain vineyards is awe inspiring to every visitor. Our barn-style winery (1978) is constructed from timber grown and milled on the property and is the work of late architect and close family friend William Turnbull. Barrel aging caves were added deep beneath the winery in 1998, dug into the hillside below the winery and connected by a steep underground stairway.
            </p>
            <p className="leading-relaxed">
              <strong>CALISTOGA ESTATE, Napa Valley</strong>
              <br />
              At the foot of the Palisades Mountains, which line the eastern side of northern Napa Valley, lies our Napa Valley Estate (approximately one mile south of Calistoga). The property slopes gently to the west and is bordered by Simmons Creek, which flows from the neighboring Eisele Vineyard upstream to the east. The Estate&apos;s well drained alluvial vineyard soils are remarkably consistent, comprised primarily of cobble stones and loam. Our sleek modern barn-style winery (2019) lies along the Napa River beyond the famed vineyards of our flagship wine, Coach Insignia Cabernet.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fisher-dark text-white">
        <div className="flex justify-center py-8">
          <img
            src="https://cdn.prod.website-files.com/6539aab03867d0f5ae58ba24/6539aab03867d0f5ae58ba2f_logo__coach.svg"
            alt="Body by Fisher Coach Logo"
            className="h-16 w-16 opacity-60"
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-12">
          <div className="flex flex-wrap justify-center gap-6 text-xs tracking-[0.15em] uppercase font-mono mb-8">
            {["Wines", "Calistoga Estate", "Mountain Estate", "Unity", "Visit", "Wine Club", "Family", "Story", "Account", "Trade & Media"].map((link) => (
              <a key={link} href="#" className="hover:text-fisher-gold transition-colors opacity-80 hover:opacity-100">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-60 gap-4">
            <div className="text-center md:text-left">
              <div>6200 Saint Helena Road<br />Santa Rosa, CA 95404</div>
              <a href="tel:+17075397511" className="hover:text-fisher-gold">707.539.7511</a>
            </div>
            <div className="text-center md:text-right">
              <div>© 2020 Fisher Vineyards</div>
              <div className="flex gap-4 mt-1">
                <a href="/privacy" className="hover:text-fisher-gold">Privacy & Terms</a>
                <a href="/contact" className="hover:text-fisher-gold">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/shop" className="inline-block border border-white/30 px-8 py-3 text-xs tracking-[0.15em] uppercase font-mono hover:border-fisher-gold hover:text-fisher-gold transition-colors">
              Shop our Current Releases
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-1 mb-2">
        <label className="form-label text-xs tracking-[0.1em] uppercase text-fisher-dark/70">
          {label}
        </label>
        {required && <span className="text-red-500 text-xs">*</span>}
      </div>
      {children}
    </div>
  );
}
