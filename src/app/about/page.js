import AboutPage from "./AboutClient";

export default function About() {
    return <AboutPage/>;
}

export const metadata = {
    title: "Giới thiệu ANN Multimedia - Sứ mệnh & Giá trị",
    description: "ANN Multimedia - Sứ mệnh, tầm nhìn và giá trị cốt lõi. Chúng tôi cam kết mang đến giải pháp truyền thông, quảng cáo, marketing sáng tạo và hiệu quả cho doanh nghiệp.",
    openGraph: {
        title: "Giới thiệu ANN Multimedia - Sứ mệnh & Giá trị",
        description: "ANN Multimedia - Sứ mệnh, tầm nhìn và giá trị cốt lõi. Chúng tôi cam kết mang đến giải pháp truyền thông, quảng cáo, marketing sáng tạo và hiệu quả cho doanh nghiệp.",
        url: "https://your-domain.com/about",
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
        canonical: "https://your-domain.com/about",
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "giới thiệu", "sứ mệnh", "tầm nhìn", "giá trị cốt lõi", "ANN Multimedia", "agency marketing", "truyền thông", "quảng cáo", "marketing"
    ]
};
