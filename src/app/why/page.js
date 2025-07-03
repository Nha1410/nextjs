import WhyChooseUsClient from "./WhyClient";

export default function whyChooseUs() {
    return <WhyChooseUsClient />;
}

export const metadata = {
    title: "Lý do chọn ANN Multimedia - Đối tác truyền thông, marketing uy tín",
    description: "Tại sao nên chọn ANN Multimedia làm đối tác truyền thông, marketing? Chúng tôi sở hữu đội ngũ chuyên gia, giải pháp sáng tạo, cam kết hiệu quả cho doanh nghiệp.",
    openGraph: {
        title: "Lý do chọn ANN Multimedia - Đối tác truyền thông, marketing uy tín",
        description: "Tại sao nên chọn ANN Multimedia làm đối tác truyền thông, marketing? Chúng tôi sở hữu đội ngũ chuyên gia, giải pháp sáng tạo, cam kết hiệu quả cho doanh nghiệp.",
        url: "https://your-domain.com/why",
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
        canonical: "https://your-domain.com/why",
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "lý do chọn", "đối tác truyền thông", "đối tác marketing", "ANN Multimedia", "agency marketing", "giải pháp sáng tạo", "cam kết hiệu quả"
    ]
};
