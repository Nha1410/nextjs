"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "Tất cả",
  "Cập nhật sản phẩm / dịch vụ",
  "Thông cáo báo chí",
  "Thông tin cập nhật",
  "VPS",
];

const jobs = [
  {
    title: "[THINKDEMY] Tuyển dụng 01 vị trí Intern Marketing Executive",
    company: "THINKDEMY",
    location: "Anywhere",
    type: "Internship",
    posted: "2 years ago",
  },
  {
    title: "[TP.HCM] Full-time Digital Media Executive",
    company: "Think Digital",
    location: "Anywhere",
    type: "Full Time",
    posted: "3 years ago",
  },
  {
    title: "[TP HCM] Tuyển Full-time Content Executive",
    company: "Think Digital",
    location: "Anywhere",
    type: "Full Time",
    posted: "3 years ago",
  },
  {
    title: "[TP HCM] Tuyển Full-time Account Executive",
    company: "Think Digital",
    location: "Anywhere",
    type: "Full Time",
    posted: "3 years ago",
  },
];

const articles = [
  {
    title: "4P trong Marketing là gì? Cách xây dựng chiến lược Marketing Mix 4P",
    date: "21/03/2025",
    category: "Think Digital",
    image: "/images/marketing_4p.jpg",
  },
  {
    title: "Brand Equity là gì? Cách đo lường, xây dựng tài sản thương hiệu",
    date: "21/03/2025",
    category: "Think Digital",
    image: "/images/brand_equity.jpg",
  },
  {
    title: "Target Audience là gì? Các xác định chính xác Target Audience",
    date: "20/03/2025",
    category: "Think Digital",
    image: "/images/target_audience.jpg",
  },
  {
    title: "Marcom là gì? 10 công cụ Marketing Communication phổ biến",
    date: "20/03/2025",
    category: "Think Digital",
    image: "/images/marcom.jpg",
  },
];

export default function NewsRecruitment() {
  const [activeTab, setActiveTab] = useState("Tin tức");

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="mb-2 text-sm font-light tracking-wide text-gray-500 uppercase">
        _ DON&lsquo;T MISS OUT
      </p>
      <h2 className="text-2xl font-bold text-white">Tin tức và tuyển dụng</h2>

      {/* Tab chọn Tin tức / Tuyển dụng */}
      <div className="mt-4 flex space-x-4">
        <button
          className={`rounded px-4 py-2 hover:cursor-pointer ${
            activeTab === "Tin tức"
              ? "bg-[var(--color-text-red-theme-500)] text-white"
              : "bg-white text-[var(--color-text-red-theme-500)]"
          }`}
          onClick={() => setActiveTab("Tin tức")}
        >
          Tin tức
        </button>
        <button
          className={`rounded px-4 py-2 hover:cursor-pointer ${
            activeTab === "Tuyển dụng"
              ? "bg-[var(--color-text-red-theme-500)] text-white"
              : "bg-white text-[var(--color-text-red-theme-500)]"
          }`}
          onClick={() => setActiveTab("Tuyển dụng")}
        >
          Tuyển dụng
        </button>
      </div>

      <div className="mt-4 flex flex-col md:flex-row">
        {/* Sidebar categories (dùng chung) */}
        <div className="w-full md:w-1/4">
          {activeTab === "Tin tức" &&
            categories.map((category) => (
              <button
                key={category}
                className="mr-5 w-full rounded px-4 py-2 text-left text-sm hover:cursor-pointer hover:bg-[var(--color-text-red-theme-500)]"
              >
                {category}
              </button>
            ))}
        </div>

        {/* Nội dung hiển thị theo tab */}
        <div className="w-full space-y-4 md:w-3/4">
          {/* Hiển thị FORM + Job listing nếu là tab Tuyển dụng */}
          {activeTab === "Tuyển dụng" && (
            <>
              {/* FORM TÌM KIẾM VIỆC */}
              <div className="rounded bg-[var(--color-text-red-theme-400)] p-4 shadow-sm hover:cursor-pointer">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Keywords"
                    className="rounded border border-gray-300 p-2"
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="rounded border border-gray-300 p-2"
                  />
                </div>

                <div className="mt-3 flex items-center space-x-2">
                  <input type="checkbox" id="remote" className="h-4 w-4" />
                  <label htmlFor="remote" className="text-sm text-gray-700">
                    Remote positions only
                  </label>
                </div>

                <button className="mt-3 rounded bg-[var(--color-text-red-theme-500)] px-4 py-2 text-white transition hover:cursor-pointer hover:opacity-70">
                  Search Jobs
                </button>

                {/* Checkbox job types + RSS */}
                <div className="mt-4 flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
                  <div className="space-x-4">
                    <label className="text-sm text-gray-700">
                      <input type="checkbox" className="mr-1" />
                      Freelance
                    </label>
                    <label className="text-sm text-gray-700">
                      <input type="checkbox" className="mr-1" />
                      Full Time
                    </label>
                    <label className="text-sm text-gray-700">
                      <input type="checkbox" className="mr-1" />
                      Internship
                    </label>
                    <label className="text-sm text-gray-700">
                      <input type="checkbox" className="mr-1" />
                      Part Time
                    </label>
                    <label className="text-sm text-gray-700">
                      <input type="checkbox" className="mr-1" />
                      Temporary
                    </label>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-text-red-theme-500)] hover:underline"
                    >
                      RSS
                    </a>
                  </div>
                </div>
              </div>

              {/* DANH SÁCH JOBS */}
              {jobs.map((job) => (
                <div key={job.title} className="flex flex-col rounded-lg bg-white p-4 shadow">
                  <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
                  <p className="text-sm text-gray-500">
                    {job.company} - {job.location} | {job.type}
                  </p>
                  <p className="text-xs text-gray-400">{job.posted}</p>
                </div>
              ))}
            </>
          )}

          {/* Hiển thị danh sách bài viết nếu là tab Tin tức */}
          {activeTab === "Tin tức" &&
            articles.map((article) => (
              <div
                key={article.title}
                className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  className="h-24 w-32 rounded object-cover"
                  width={128}
                  height={96}
                />
                <div>
                  <p className="text-sm text-gray-500">
                    {article.category} | {article.date}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-800">{article.title}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Nút xem tất cả */}
      <div className="mt-6 flex justify-center">
        <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
          Xem tất cả
        </button>
      </div>
    </section>
  );
}
