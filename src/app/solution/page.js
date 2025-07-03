import SolutionContentClient from "./SolutionClient";

export default function SolutionContent() {
    return <SolutionContentClient />;
}

export const metadata = {
    title: "Dịch vụ & Giải pháp Marketing - ANN Multimedia",
    description: "Khám phá các dịch vụ và giải pháp marketing, quảng cáo, truyền thông sáng tạo của ANN Multimedia. Tối ưu hiệu quả, tăng trưởng doanh thu cho doanh nghiệp.",
    openGraph: {
        title: "Dịch vụ & Giải pháp Marketing - ANN Multimedia",
        description: "Khám phá các dịch vụ và giải pháp marketing, quảng cáo, truyền thông sáng tạo của ANN Multimedia. Tối ưu hiệu quả, tăng trưởng doanh thu cho doanh nghiệp.",
        url: "https://your-domain.com/solution",
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
        canonical: "https://your-domain.com/solution",
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "dịch vụ marketing", "giải pháp marketing", "quảng cáo", "truyền thông", "digital marketing", "ANN Multimedia", "agency marketing", "tăng trưởng doanh thu"
    ]
};
