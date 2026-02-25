import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    projects: defineTable({ name: v.string(), client: v.optional(v.string()), color: v.string() }),
    tasks: defineTable({ projectId: v.id("projects"), name: v.string() }).index("by_project", ["projectId"]),
    timeEntries: defineTable({ taskId: v.id("tasks"), date: v.string(), durationMinutes: v.number(), notes: v.optional(v.string()), billable: v.boolean() }).index("by_date", ["date"])
});
