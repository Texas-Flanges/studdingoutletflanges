import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studding Outlet Flange Experts | Studding Outlet Flanges",
  description:
    "Manufacturing and supplying a complete line of studding outlet flanges. Carbon steel, stainless steel, and alloy flanges per ASME, ANSI, AWWA, API standards.",
  keywords:
    "studding outlet flanges, pad flanges, pipe flanges, carbon steel flanges, stainless steel flanges, ASME flanges, industrial flanges",
  openGraph: {
    title: "Studding Outlet Flange Experts | Studding Outlet Flanges",
    description:
      "Manufacturing and supplying a complete line of studding outlet flanges. Carbon steel, stainless steel, and alloy flanges per ASME, ANSI, AWWA, API standards.",
    url: "https://studdingoutletflanges.com",
    siteName: "Studding Outlet Flanges",
    type: "website",
    images: [
      {
        url: "https://studdingoutletflanges.com/studding-outlet-flanges-hero.png",
        width: 1920,
        height: 1080,
        alt: "Studding Outlet Flanges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studding Outlet Flange Experts",
    description:
      "Manufacturing and supplying a complete line of studding outlet flanges per ASME, ANSI, AWWA, API standards.",
  },
  alternates: { canonical: "https://studdingoutletflanges.com" },
};

export default function Home() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            .rv { opacity: 1; transform: none; }
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Studding Outlet Flanges",
            url: "https://studdingoutletflanges.com",
            description:
              "Manufacturing and supplying a complete line of studding outlet flanges per ASME, ANSI, AWWA, API standards.",
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange & Fitting Supply",
              url: "https://texasflange.com?ref=studdingoutletflanges",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-281-484-8325",
              contactType: "sales",
              email: "sales@texasflange.com",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the primary purpose of Studding Outlet Flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Studding Outlet Flanges are designed to facilitate secure pipe connections between pipes and tanks or other pipes. They can be installed both on the inside and outside of vessels, tanks, and pipes.",
                },
              },
              {
                "@type": "Question",
                name: "How do Studding Outlet Flanges save space?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Their compact design allows them to fit into tight spaces where traditional flanges might not be suitable, making them ideal for complex piping configurations.",
                },
              },
              {
                "@type": "Question",
                name: "Are Studding Outlet Flanges expensive?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, Studding Outlet Flanges are cost-effective solutions that provide excellent value for industrial pipe connections.",
                },
              },
              {
                "@type": "Question",
                name: "Can Studding Outlet Flanges be customized?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Studding Outlet Flanges can be customized to meet specific project requirements.",
                },
              },
              {
                "@type": "Question",
                name: "What materials are Studding Outlet Flanges made from?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They are available in a variety of materials including Carbon Steel, Chrome Alloys, Stainless Steel, Aluminum, Hastalloy, Inconel, Incolloy, Monel, Copper, Duplex, and Titanium.",
                },
              },
              {
                "@type": "Question",
                name: "Can Studding Outlet Flanges handle high pressure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, they are engineered to handle high pressure and temperature environments, with pressure ratings from 150# to 2500#.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I source Studding Outlet Flanges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Various manufacturers supply Studding Outlet Flanges. The leading supplier is TexasFlange.com.",
                },
              },
            ],
          }),
        }}
      />

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#1a3a5c",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <span
          style={{ color: "#fff", fontSize: "20px", fontWeight: 700 }}
        >
          Studding Outlet Flanges
        </span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="#about" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            About
          </a>
          <a href="#types" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            Types
          </a>
          <a href="#specs" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            Specs
          </a>
          <a href="#faq" style={{ color: "#ddd", textDecoration: "none", fontSize: "15px" }}>
            FAQ
          </a>
          <a
            href="https://texasflange.com?ref=studdingoutletflanges"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#e63946",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Shop Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,58,92,0.72), rgba(26,58,92,0.72)), url(/studding-outlet-flanges-hero.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "520px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "60px 24px",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "48px",
            fontWeight: 800,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Studding Outlet Flange Experts
        </h1>
        <p
          style={{
            color: "#e0e0e0",
            fontSize: "18px",
            maxWidth: "700px",
            lineHeight: 1.7,
            marginBottom: "16px",
          }}
        >
          Carbon Steel / Stainless / Alloy Flanges per ASME / ANSI / AWWA / API.
          Offering a wide variety of flange types and sizes, ensuring that we can
          meet the needs of our customers across many industries.
        </p>
        <p
          style={{
            color: "#ccc",
            fontSize: "16px",
            maxWidth: "700px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          Manufacturing and Supplying a complete line of Industrial Pipe Flanges
          with Multiple materials available. Custom solutions or standard products,
          we have the ability to provide high-quality flanges that meet industry
          standards and specifications, providing safety and efficiency in your
          operations.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a
            href="#about"
            style={{
              backgroundColor: "transparent",
              border: "2px solid #fff",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Learn More
          </a>
          <a
            href="https://texasflange.com?ref=studdingoutletflanges"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#e63946",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Article Section */}
      <section
        id="about"
        className="rv"
        style={{
          padding: "80px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          The Role and Applications of Studding Outlet Flanges in Industries
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#444",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 40px",
          }}
        >
          Studding Outlet Flanges are specialized components used to connect pipes
          in various industrial applications. They offer unique advantages and are
          available in different types, sizes, and materials. Let&apos;s explore
          what they are and their key characteristics.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#1a3a5c",
                marginBottom: "16px",
              }}
            >
              Understanding Studding Outlet Flanges
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#555" }}>
              Studding Outlet Flanges, also known as &quot;pad flanges,&quot; are
              fittings that facilitate connections between pipes and tanks or other
              pipes. They are designed to be installed both on the inside and
              outside of vessels, tanks, and pipes. Think of them as puzzle pieces
              that ensure a snug and secure fit, allowing for the efficient flow of
              liquids and gases.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#999",
                marginTop: "12px",
                fontStyle: "italic",
              }}
            >
              Image source:{" "}
              <a
                href="https://texasflange.com?ref=studdingoutletflanges"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#999" }}
              >
                Texas Flange
              </a>
            </p>
          </div>
          <div>
            <img
              src="/studding-outlet-flanges-hero.png"
              alt="Studding outlet flanges on copper pipe"
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section
        id="types"
        className="rv"
        style={{
          padding: "80px 24px",
          backgroundColor: "#f5f7fa",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#1a3a5c",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Types of Studding Outlet Flanges
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              textAlign: "center",
              marginBottom: "40px",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Studding Outlet Flanges come in several distinct types, each tailored
            for specific purposes:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="/types-of-studding-outlet-flanges.png"
                alt="Types of studding outlet flanges"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
              <p
                style={{
                  fontSize: "12px",
                  color: "#999",
                  marginTop: "12px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Image source:{" "}
                <a
                  href="https://texasflange.com?ref=studdingoutletflanges"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#999" }}
                >
                  Texas Flange
                </a>
              </p>
            </div>
            <div>
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1a3a5c",
                    marginBottom: "8px",
                  }}
                >
                  Flat Bottom Type
                </h4>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  The most commonly used type, featuring a flat bottom suitable for
                  a wide range of applications.
                </p>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1a3a5c",
                    marginBottom: "8px",
                  }}
                >
                  Shell Mount Type
                </h4>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  Designed for external use, these flanges provide a secure
                  connection on the outside of vessels or pipes.
                </p>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1a3a5c",
                    marginBottom: "8px",
                  }}
                >
                  Head Mount Type
                </h4>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  Tailored for attachment to the top of vessels or tanks, these
                  flanges offer efficient connections.
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1a3a5c",
                    marginBottom: "8px",
                  }}
                >
                  Alternate Radius Type
                </h4>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.7 }}>
                  These flanges feature a different curvature, ideal for projects
                  requiring a non-standard fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size, Pressure, Materials Section */}
      <section
        id="specs"
        className="rv"
        style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1a3a5c",
                marginBottom: "16px",
              }}
            >
              Size and Pressure Range
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#555" }}>
              Studding Outlet Flanges are available in various sizes, spanning from
              smaller sizes like 1/2 inch to larger ones like 24 inches. This
              extensive range ensures suitability for both small-scale and
              large-scale applications. Additionally, they are offered in various
              pressure ratings, such as 150# to 2500#, to match specific pressure
              requirements.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#1a3a5c",
                marginBottom: "16px",
              }}
            >
              Materials Used
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#555" }}>
              Carbon Steel, Chrome Alloys, Stainless Steel, Aluminum, Hastalloy,
              Inconel, Incolloy, Monel, Copper, Duplex, Titanium
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section
        className="rv"
        style={{ padding: "80px 24px", backgroundColor: "#f5f7fa" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#1a3a5c",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Applications
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {[
              "Petrochemical Industry",
              "Water Treatment Facilities",
              "Oil and Gas Sector",
              "Manufacturing and Fabrication",
              "Construction",
            ].map((app) => (
              <div
                key={app}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px 16px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1a3a5c",
                  }}
                >
                  {app}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="rv"
        style={{ padding: "80px 24px", maxWidth: "900px", margin: "0 auto" }}
      >
        <h3
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#1a3a5c",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </h3>
        {[
          {
            q: "What is the primary purpose of Studding Outlet Flanges?",
            a: "Studding Outlet Flanges are designed to facilitate secure pipe connections between pipes and tanks or other pipes. They can be installed both on the inside and outside of vessels, tanks, and pipes.",
          },
          {
            q: "How do Studding Outlet Flanges save space?",
            a: "Their compact design allows them to fit into tight spaces where traditional flanges might not be suitable, making them ideal for complex piping configurations.",
          },
          {
            q: "Are Studding Outlet Flanges expensive?",
            a: "No, Studding Outlet Flanges are cost-effective solutions that provide excellent value for industrial pipe connections.",
          },
          {
            q: "Can they be customized?",
            a: "Yes, Studding Outlet Flanges can be customized to meet specific project requirements.",
          },
          {
            q: "Do they come in different sizes?",
            a: "Yes, they are available in a range of sizes from 1/2 inch to 24 inches.",
          },
          {
            q: "What materials are they made from?",
            a: "They are available in a variety of materials including Carbon Steel, Chrome Alloys, Stainless Steel, Aluminum, Hastalloy, Inconel, Incolloy, Monel, Copper, Duplex, and Titanium.",
          },
          {
            q: "Can they handle high pressure?",
            a: "Yes, they are engineered to handle high pressure and temperature environments, with pressure ratings from 150# to 2500#.",
          },
          {
            q: "What size and pressure options are available?",
            a: "Sizes range from 1/2 inch to 24 inches, and pressure ratings from 150# to 2500#.",
          },
          {
            q: "Where can I source Studding Outlet Flanges?",
            a: "Various manufacturers supply Studding Outlet Flanges. The leading supplier is TexasFlange.com.",
          },
          {
            q: "Are they easy to install?",
            a: "Yes, Studding Outlet Flanges are designed for straightforward installation.",
          },
        ].map((item, i) => (
          <details
            key={i}
            style={{
              marginBottom: "12px",
              borderBottom: "1px solid #e0e0e0",
              paddingBottom: "12px",
            }}
          >
            <summary
              style={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#1a3a5c",
                cursor: "pointer",
                padding: "12px 0",
              }}
            >
              {item.q}
            </summary>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#555",
                padding: "8px 0 16px 0",
              }}
            >
              {item.a}
            </p>
          </details>
        ))}
      </section>

      {/* Conclusion / CTA */}
      <section
        className="rv"
        style={{
          padding: "80px 24px",
          backgroundColor: "#1a3a5c",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            Ready to Get Started?
          </h3>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#ccc",
              marginBottom: "32px",
            }}
          >
            Studding Outlet Flanges are functional components that serve a specific
            purpose in pipe systems. They offer versatility in types, sizes, and
            materials, allowing for customization to meet project requirements.
            These flanges play a practical role in ensuring secure and efficient
            pipe connections across different industries. For more information
            regarding Studding Outlet Flanges visit{" "}
            <a
              href="https://texasflange.com?ref=studdingoutletflanges"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#82b1ff" }}
            >
              Texas Flange
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a
              href="https://texasflange.com?ref=studdingoutletflanges"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#e63946",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Shop Now
            </a>
            <a
              href="tel:281-484-8325"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #fff",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Call 281-484-8325
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0f2640",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#aaa", fontSize: "14px", marginBottom: "8px" }}>
          Phone:{" "}
          <a href="tel:281-484-8325" style={{ color: "#82b1ff" }}>
            281-484-8325
          </a>{" "}
          | Fax: 281-484-8730 | Email:{" "}
          <a href="mailto:sales@texasflange.com" style={{ color: "#82b1ff" }}>
            sales@texasflange.com
          </a>
        </p>
        <p style={{ color: "#666", fontSize: "13px" }}>
          &copy; 2025. All rights reserved.
        </p>
      </footer>
    </>
  );
}
