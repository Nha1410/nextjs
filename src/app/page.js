import Home from "./home/page";

export default function HomePage() {
    return <Home />;
}

export const metadata = {
    title: "ANN Multimedia - Dịch vụ Quảng cáo, Marketing & Truyền thông chuyên nghiệp",
    description:
        "ANN Multimedia cung cấp giải pháp quảng cáo, marketing, truyền thông sáng tạo, tối ưu hiệu quả cho doanh nghiệp. Dịch vụ Digital Marketing, quảng cáo đa kênh, xây dựng thương hiệu, truyền thông xã hội, sản xuất nội dung chuyên nghiệp.",
    openGraph: {
        title: "ANN Multimedia - Dịch vụ Quảng cáo, Marketing & Truyền thông chuyên nghiệp",
        description:
            "ANN Multimedia cung cấp giải pháp quảng cáo, marketing, truyền thông sáng tạo, tối ưu hiệu quả cho doanh nghiệp. Dịch vụ Digital Marketing, quảng cáo đa kênh, xây dựng thương hiệu, truyền thông xã hội, sản xuất nội dung chuyên nghiệp.",
        url: "https://your-domain.com/",
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
        canonical: "https://your-domain.com/",
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "quảng cáo", "marketing", "truyền thông", "digital marketing", "quảng cáo Facebook", "quảng cáo Google", "xây dựng thương hiệu", "agency marketing", "dịch vụ quảng cáo", "truyền thông xã hội", "sản xuất nội dung"
    ]
};
