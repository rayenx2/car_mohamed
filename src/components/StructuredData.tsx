import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        "name": "IV Export Service",
        "description": "Professional car export service from Germany. Exporting BMW, Mercedes, Audi, Porsche to Tunisia, Algeria, Morocco and worldwide.",
        "url": "https://ivexportservice.com",
        "telephone": "+49-176-69495526",
        "email": "Iv.exportservice@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bonn",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "50.7374",
            "longitude": "7.0982"
        },
        "areaServed": [
            { "@type": "Country", "name": "Tunisia" },
            { "@type": "Country", "name": "Algeria" },
            { "@type": "Country", "name": "Morocco" },
            { "@type": "Country", "name": "Germany" }
        ],
        "priceRange": "€€€",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ivexportservice.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://ivexportservice.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Stock",
                "item": "https://ivexportservice.com/stock"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "About",
                "item": "https://ivexportservice.com/about"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How to export cars from Germany?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Exporting cars from Germany requires proper documentation, customs clearance, and international shipping. IV Export Service handles the complete process including paperwork, customs, and door-to-door delivery."
                }
            },
            {
                "@type": "Question",
                "name": "How much does car export cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Car export costs vary based on vehicle type, destination, and shipping method. Contact us for a free quote on exporting your vehicle from Germany."
                }
            },
            {
                "@type": "Question",
                "name": "Can I export used cars from Germany?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in exporting both new and used German vehicles internationally to Tunisia, Algeria, Morocco, and worldwide destinations."
                }
            }
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
