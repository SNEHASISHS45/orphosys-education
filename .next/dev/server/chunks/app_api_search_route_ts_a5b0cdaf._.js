module.exports = [
"[project]/app/api/search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    if (!query || query.length < 2) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            results: []
        });
    }
    try {
        // Search across multiple entities in parallel
        const [courses, team, partners, programs] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].course.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            slug: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            shortDesc: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            category: {
                                contains: query,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    category: true
                },
                orderBy: {
                    updatedAt: "desc"
                },
                take: 5
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].teamMember.findMany({
                where: {
                    OR: [
                        {
                            name: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            role: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            bio: {
                                contains: query,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                select: {
                    id: true,
                    name: true,
                    role: true
                },
                orderBy: {
                    updatedAt: "desc"
                },
                take: 5
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].partner.findMany({
                where: {
                    name: {
                        contains: query,
                        mode: "insensitive"
                    }
                },
                select: {
                    id: true,
                    name: true
                },
                orderBy: {
                    updatedAt: "desc"
                },
                take: 5
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].program.findMany({
                where: {
                    OR: [
                        {
                            title: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            shortDesc: {
                                contains: query,
                                mode: "insensitive"
                            }
                        },
                        {
                            desc: {
                                contains: query,
                                mode: "insensitive"
                            }
                        }
                    ]
                },
                select: {
                    id: true,
                    title: true
                },
                orderBy: {
                    updatedAt: "desc"
                },
                take: 5
            })
        ]);
        // Flatten and tag results
        const results = [
            ...courses.map((item)=>({
                    id: item.id,
                    title: item.title,
                    subtitle: item.category || "Course",
                    type: "Course",
                    url: `/admin/courses/${item.id}`,
                    icon: "BookOpen"
                })),
            ...team.map((item)=>({
                    id: item.id,
                    title: item.name,
                    subtitle: item.role,
                    type: "Team Member",
                    url: `/admin/team/${item.id}`,
                    icon: "Users"
                })),
            ...programs.map((item)=>({
                    id: item.id,
                    title: item.title,
                    subtitle: "Core Program",
                    type: "Program",
                    url: `/admin/programs`,
                    icon: "Sparkles"
                })),
            ...partners.map((item)=>({
                    id: item.id,
                    title: item.name,
                    subtitle: "Affiliated Partner",
                    type: "Partner",
                    url: `/admin/partners`,
                    icon: "Handshake"
                }))
        ];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            results
        });
    } catch (error) {
        console.error("Search API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Search failed"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=app_api_search_route_ts_a5b0cdaf._.js.map