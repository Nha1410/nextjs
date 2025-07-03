import ContactClient from "./ContactClient";

export default function Contact() {
    return <ContactClient />;
}

export const metadata = {
    title: "Liên hệ ANN Multimedia - Tư vấn quảng cáo, marketing, truyền thông",
    description: "Liên hệ ANN Multimedia để được tư vấn giải pháp quảng cáo, marketing, truyền thông chuyên nghiệp. Hỗ trợ doanh nghiệp phát triển thương hiệu và tăng trưởng doanh số.",
    openGraph: {
        title: "Liên hệ ANN Multimedia - Tư vấn quảng cáo, marketing, truyền thông",
        description: "Liên hệ ANN Multimedia để được tư vấn giải pháp quảng cáo, marketing, truyền thông chuyên nghiệp. Hỗ trợ doanh nghiệp phát triển thương hiệu và tăng trưởng doanh số.",
        url: "https://your-domain.com/contact",
        siteName: "ANN Multimedia",
        images: [
            {
                url: "/images/logo/logo-ann_mode-dark@3x.png",
                width: 1200,
                height: 630,
                alt: "ANN Multimedia Logo",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    alternates: {
        canonical: "https://your-domain.com/contact",
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "liên hệ", "tư vấn", "quảng cáo", "marketing", "truyền thông", "ANN Multimedia", "agency marketing", "hỗ trợ doanh nghiệp"
    ]
};
