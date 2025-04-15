"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageSwitcher";
import vi from "../app/i18n/news.vi";
import en from "../app/i18n/news.en";

export default function NewsRecruitment() {
  const { language } = useLanguage();
  const content = language === "vi" ? vi : en;
  const [activeTab, setActiveTab] = useState(content.tabs[0]);

  useEffect(() => {
    setActiveTab(content.tabs[0]);
  }, [language]);

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="mb-2 text-sm font-light tracking-wide text-gray-500 uppercase">
        _ DON&apos;T MISS OUT
      </p>
      <h2 className="text-2xl font-bold text-white">{content.sectionTitle}</h2>

      <div className="mt-4 flex space-x-4">
        {content.tabs.map((tab) => (
          <button
            key={tab}
            className={`rounded px-4 py-2 hover:cursor-pointer ${
              activeTab === tab
                ? "bg-[var(--color-text-red-theme-500)] text-white"
                : "bg-white text-[var(--color-text-red-theme-500)]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          {activeTab === content.tabs[0] &&
            content.categories.map((category) => (
              <button
                key={category}
                className="w-full rounded px-4 py-2 text-left text-sm hover:cursor-pointer hover:bg-[var(--color-text-red-theme-500)]"
              >
                {category}
              </button>
            ))}
        </div>

        <div className="w-full space-y-4 md:w-3/4">
          {activeTab === content.tabs[1] && (
            <>
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
                  {content.searchButton}
                </button>
              </div>
              {content.jobs.map((job) => (
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
          {activeTab === content.tabs[0] &&
            content.articles.map((article) => (
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

      <div className="mt-6 flex justify-center">
        <button className="rounded bg-[var(--color-text-red-theme-500)] px-6 py-3 text-white shadow-md hover:cursor-pointer hover:bg-white hover:text-[var(--color-text-red-theme-500)]">
          {content.seeAll}
        </button>
      </div>
    </section>
  );
}
