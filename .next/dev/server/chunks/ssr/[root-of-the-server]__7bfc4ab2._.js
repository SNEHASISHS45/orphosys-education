module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/gallery.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "photos",
    ()=>photos,
    "videos",
    ()=>videos
]);
const photos = [
    // Collage Activities
    {
        id: "photo-1",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxFcj0BD1OV-4MsWeJVgX119S_RngP0CSLUX9_YnHrKZh5AUA4x-8f3YxMSY_MtgmNLCXcfYEgNRXO5mkeQV0yrpD_M0e_0cyMfHGRorjx4oXtbzhBwnYAfuf3AnuH-wOU6MtljhdFmr1drPt4CaOsnfXSDGtFWePTAJwlwagnCgLYbM3PSzoBy46GitsU1oxzpd93rUs5bBVrCuU8LUZKXHCWLbRVnkAY5m3YRBhVIMbyS3yFJJa-T8UADzAPOqLbnx8EFz-eG9g",
        alt: "University students collaborating in a group study session",
        category: "Collage Activities"
    },
    {
        id: "photo-2",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyOsqC88uCJHIO98Oz3lO6m_79pirLW6Y8AO4FH-UbS3yJKICe1fgT9qCT_ll6eQ-IB2mbK801Q_EQDp9YxxZgfZUOWbH-ckFRehhG1icaKC0HUAITjBOXiZaEsG0iV4-1yDODXlha75grJkES3zgr4qbINfBgGAlYkdrxGtEJ7MB7444UpSVxMlcOcGYhmKt70eOSTuwBxZPWvpDcrPRBfa67HOzseK2NqVron2qD5hUPVyNqCJl0s_d3Hi5a5dFOj2LKo9HjN3I",
        alt: "Students celebrating graduation ceremony throwing caps",
        category: "Collage Activities"
    },
    {
        id: "photo-3",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5GOFW4u_RGSE2WvY6t8jgp3OluM_Wr-FA-FyINCiaXg3fTpqYywiahk894XStcHAy46_8WmxV-nUqeXvWoWX4eQF6baan2MzYpj8mI2kEtfkjFbsv0BZddKteRPQIDkBgWVRH1ROf7c5u3Hk4y5EKz3kFGGVI2HlsSclnvmO8pSlFuxR7Wygkaz8wxLHG3v8mpE0hr5LodcSc07mH4SrRlFKln-RjcRr2Q7po8BhwlsyUOvX_knvFJLQd50PZ-5OQo7yXjjwGvLU",
        alt: "Group of diverse students working on a laptop",
        category: "Collage Activities"
    },
    {
        id: "photo-4",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUApsjbLSa8W7BCIaR846e_3K1qlyn3uMe9qb1jaiq3Os0eBe5-KbyGykycK1rD27qE1pKiRXgNBXCba9zL-OdhoJiolOwpfwu_w4tzqY3Le3UAuCEkrfvaDrTCU_lb1jeXdbbhHs28MFj5Wmyk4yTKYkX2wd9TJTUGcJjkfymRvjTu-9yyKHx4ZbRJS_o01KlZFc51vWbJz9xXFxHOc4aHpPtZe_YZjZBR-5Eb-0k2jhCydrTCxchUpQ65_jBRIuz57yzypQRTL0",
        alt: "Students participating in a workshop or seminar",
        category: "Collage Activities"
    },
    // School Environment & Facilities
    {
        id: "photo-5",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS8YKwDZIPoc0Lc_y1wTR11wy86tyKU8eqjVXDKlTWf1DeIFygWwBkkQ1OyjhrvkYdU_HQdcQMLkfRSTahGfC6iCyfW7fl--N1eMmnUNZle7uqNj8xc10JiX1FKLF5KNgHcMyaZeBcFnp1NfYEqrgLiU1p1yTDWLY-sU2Q2iuzfhrFjG9LS57BVsU_6y514ioY9V1r8hi4pfFRWV83E2XnhfaoM65Qtws-8mUumneM5JSyxAadczSjdTmPJy4DUiYj8Lx7WWO1xbA",
        alt: "Modern spacious classroom with desks and whiteboard",
        category: "School Environment & Facilities"
    },
    {
        id: "photo-6",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOUYdpkLT9rSDKgdPMSPUQXQXNAkzqQ9wYlLA5cE9JVVabPiwYma2alM_yqMxKUrHKJHb-28t2tRCJbNQhJUJMr0o5BwP-QWRRoB1id7_SQXCLoo99lHQIELEEG13-SMcwV1w103TZF-LOJU1zh1KRlT4xRfGm4gYF9jdKVgHd5tzkDQMcMHy4_MzvWBHn2vJysapd1HE0u9sdvSifcuhdYuYZ0g-rL1eTONtYogz-i54sgnwb71TNT1Ex6m1pwOA_venozAzpCxs",
        alt: "Well stocked modern school library with books",
        category: "School Environment & Facilities"
    },
    {
        id: "photo-7",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV9MsqcRAx1iZwp-PsyvBszPfkwXHBYbCYK-WxevAzPxIheJ4IZNluAhMSYHMSUK-285XD2d62AJEzxq8U8Dz_k_TiVJWggestFqJ2SxEDjStOknGTMPAAqFIvaUrqdQUUCV5tT8O6HtjqGhJdhtSUUuiZnJ0GkYsuu7Cz37rFG4t04Lpwc2Fu-SKQLKn0rQs-sxspsZHA1BkVYEbiuHLuxhHspbOJ7zCVhszdPQh84aHDIn1M7TXB1LDDR2q0BwCB5SmukZcwNP8",
        alt: "Modern university building exterior architecture",
        category: "School Environment & Facilities"
    },
    {
        id: "photo-8",
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZqPhtzwMFfUhTGN-0uZUjehhtIW2Go1kT9SFEze8JIE1ldHQPYedjmgDi6Hzg0yHjrGwdz_dK8u-yg8WrYEGFajD3edgQLxeqN6Q-2nQ3kmrKli9yYmuf78llfyKn7prKwl7hBM0OHWpNuVekdeaAn_QagNbgje-LVucA4JjDNFlL82maiwz5bGugDrJk0RzV30mq1onS70yHAdHbMjB3LgD8BvAHw3fOy3hLub8DrjCAkoIl9yMhkHablkJojkOFYA02lhMiM4",
        alt: "Computer lab facility with high end workstations",
        category: "School Environment & Facilities"
    }
];
const videos = [
    {
        id: "video-1",
        title: "Mastering Advanced Mathematics",
        description: "Complete guide to calculus and trigonometry fundamentals.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIv9gkc-UqU0sryof5avpFGt-9OI-aC6dHsbPDtYwfUA6YWKssCYCmXZ5AuklyCt8fDkxhiLnVg1yW6ks1mmTlnKMWgA8oCZPCEaKB8vk06MsRmUtLyzVBM2XuE6emg3SW6Lz0LC247cLWJCOjXCQOtQI3fiWqSqe9neF4UwZKpOlNOi0fMl4rYn9g_NczDCB0K0ezaM57cWp3d7l5raxe5ut1oQ-TZ8DGFkE4Gsev7B3ALWtL_R7VroJIEAySV6hlfFlF3FrL1Zg",
        duration: "12:45"
    },
    {
        id: "video-2",
        title: "Physics Lab: Energy Dynamics",
        description: "Hands-on experiment demonstrating kinetic and potential energy.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyvGqm6VfInRYE_JEy6TnmWQIdrA6M-C4wEYEvtI6IPTbZ-xXhgfikaI2HGx6ZSNFlXz6sApEBEVnmaggeZR63jNyeHlCJXYVYuCvN_HSQfL438aZkrIb2dVTuhEdvEq7_uxRVzBtBqmHSBUxahqdvvJ8L0kX_mcfFTVIcGhPR3I0EHQz35CrZz-oCsXD7t5Wn9NKsAlR-dpx9EGUD_eiMkLkOSPvjJ7mknhVUUqxWWpHhFvA7_w5vxNeTPwO2D-KLOw9vN2hNseY",
        duration: "08:20"
    },
    {
        id: "video-3",
        title: "English Literature Seminar",
        description: "Deep dive into classical Shakespearean sonnets.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQWkQDoVnHf10wqfATzcRYM3FEPYbZG1N8ZLNSEXjfhxAB5NI4TA_nSsJhKtkixu0qAADAtnL2bDn9a_AdpJiM-Guwry5NIO20vyMEesBp9f-QYyogq_2unOyyO-cnlTFYK77E_voLZ53c_N05ceUP5cX7syJO8o1MHIDIhXfXS9twzIUDLjItk5WVJUh55vSiyp6lUGlX3DU0CA7ue5i73wcHotBRTjVFiKseLmp3Yf1NGobKyf8on5iFRIRWe2xsyvFpSVOPqY",
        duration: "15:10"
    },
    {
        id: "video-4",
        title: "Cellular Biology Workshop",
        description: "Visualizing cell structures and organelles in detail.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYfnAEU-FB2kCjNwIye-t_4K7wJMdEIhajGEoYvK8NoPeAGU9wN-l9jdV9DyOOP1t9ZsrQjTvMEhjPZzkHDvmsrsy9RwvRDoT8haT5MKm5Xn2P5PNCrVeoQWb4TDVIGxRtYWrAHXg-3juVQCIMJ_BiabDhI9vgFIbfORdCzgAMCdV3otd7N3tay4XJDzmSG8DQWaaZVAOT8u9D_Fu8ghzCzEM8YfHhrpkidxU4DdonjbSoL7mHMDibInCA9_kTRlPUKShgasgij1I",
        duration: "10:30"
    },
    {
        id: "video-5",
        title: "Effective Study Techniques",
        description: "Scientific methods to improve memory and concentration.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpJB0kytFT98guKo1ctp_PkuF4CF9Qg2_DJMLn5j-_b0HCHoukre5Tmc3yo2GMQZHHVbazkjpwubVVIuPcNHhbhI8TOotjJFunBrHvygOVAKfRY0I_bSUErJ-4OKI5x3W1j1WqA89kxBQI5DayP3IIqFpnUs8FCLy80X5XNJc64b-VPifBVCAJN2DmlC_zsE4XpgPerqsGqOcMk6DlxEz7EgJl5_BMIhq16Pp4xc4Rw-HiBf7weQ9v8VsUvH6NI12WTFNDNLzOGWw",
        duration: "22:00"
    },
    {
        id: "video-6",
        title: "History of World Civilizations",
        description: "An overview of major historical milestones across ages.",
        thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYRWSPHYBCxgrthv1EYaePiCwq3aBuuT62TKAvtgrAc6vmpYks0jM0rL8CM51proPBprnFfOiRakP9rr5R0_lu1Sa1ltu-b9TxXFECUEGliPHV9CVeov7ISSiwriEvmBrZpxCCbkxMhXQZ0OKmLwHZlS73C3Jw74P74Hk1XaWauIBEHQfZexQwW1KlnV7hx7RLVeAKmxBzEm4a-lGAuxnmitErx2LdB2bMB-92Jp5kWK_jID72RxeMZPoh74e4QfjmldFsGursN-I",
        duration: "18:15"
    }
];
}),
"[project]/app/gallery/video/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoGalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-rsc] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-rsc] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/gallery.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function VideoGalleryPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 lg:py-32 overflow-hidden bg-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2h37g_f5OiEei6Sa_YowpB9LMwB6xujjGlWTIAflRuApROBFdmJjbMc5alBa4To7eRJjAjasXtV2AMjOeclKhg3zvTM2JxyIWn9ezvU4it1k7qdWGkL5RpoNXrGWFTDd1Yl9sMz6FTQq3DR2mygxigHWr_ValpD9OKqRMg-enV5O4wftK7zhuyn23rkxGYyZLLekUQrLSyz2cCD8fU8sBhN1nvkwD5o-5qqkfwUkH3-FjttOYyQ7G7GEXuHRrrPvF2rrkPcK6WAE",
                            alt: "Video Gallery Background",
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 12,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/gallery/video/page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"
                    }, void 0, false, {
                        fileName: "[project]/app/gallery/video/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex justify-center items-center gap-2 mb-10 text-xs font-black uppercase tracking-[0.3em] text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "hover:text-primary transition-colors",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4 text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4 text-slate-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Videos"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gallery/video/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-none italic",
                                children: [
                                    "Learning ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient hover:brightness-110 transition-all",
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gallery/video/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-2xl mx-auto text-xl text-slate-300 font-bold leading-relaxed mb-12",
                                children: "Watch our specialized programs in action through our curated collection of educational and event videos."
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/video/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-5 h-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/app/gallery/video/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-black",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["videos"].length,
                                                " Educational Videos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gallery/video/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/gallery/video/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/gallery/video/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/gallery/video/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/gallery/video/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-[64px] p-10 lg:p-20 shadow-2xl shadow-slate-200/50 border border-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center mb-16 gap-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary font-black uppercase tracking-widest text-sm mb-4 inline-block",
                                        children: "Latest Releases"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl lg:text-5xl font-black text-slate-900 tracking-tight flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-4xl text-primary font-light",
                                                children: "new_releases"
                                            }, void 0, false, {
                                                fileName: "[project]/app/gallery/video/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            "Educational Content"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gallery/video/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$gallery$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["videos"].map((video, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group cursor-pointer animate-fade-in-up",
                                    style: {
                                        animationDelay: `${idx * 0.1}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-video overflow-hidden rounded-[40px] bg-slate-100 mb-8 shadow-xl group-hover:shadow-3xl transition-all duration-700 border-4 border-white group-hover:-translate-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: video.thumbnail,
                                                    alt: video.title,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-1000 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gallery/video/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-primary text-white w-20 h-20 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                            className: "w-12 h-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gallery/video/page.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gallery/video/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gallery/video/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-6 right-6 flex gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                            className: "w-4 h-4 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gallery/video/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/gallery/video/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 22
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gallery/video/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-6 right-6 bg-primary text-white text-[10px] px-4 py-2 rounded-full font-black tracking-widest uppercase shadow-xl flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/gallery/video/page.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        video.duration
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/gallery/video/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gallery/video/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-black text-2xl text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight leading-tight",
                                                    children: video.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gallery/video/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-slate-500 font-bold leading-relaxed line-clamp-2",
                                                    children: video.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/gallery/video/page.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 20
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/gallery/video/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, video.id, true, {
                                    fileName: "[project]/app/gallery/video/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-24 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "px-12 py-5 bg-white border-4 border-slate-50 text-slate-900 font-black rounded-3xl hover:border-primary hover:text-primary transition-all shadow-2xl shadow-slate-200/50 hover:-translate-y-1 active:scale-95 text-xl flex items-center gap-4 mx-auto",
                                children: [
                                    "Load More Gallery Videos",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/app/gallery/video/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/gallery/video/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gallery/video/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/video/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "pb-32 px-4 animate-fade-in-up",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto bg-primary rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"
                        }, void 0, false, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-tight",
                            children: [
                                "Start Your Journey with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/gallery/video/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 130
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic",
                                    children: "Orphosys"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/video/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 136
                                }, this),
                                " Today"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/student/login",
                            className: "inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl shadow-white/10",
                            children: [
                                "Register as a Student",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/gallery/video/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/gallery/video/page.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/gallery/video/page.tsx",
                    lineNumber: 112,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/gallery/video/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/gallery/video/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/gallery/video/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/gallery/video/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7bfc4ab2._.js.map