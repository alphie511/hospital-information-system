"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Requirement } from "@/lib/auth"

interface AnalyticsOverviewProps {
  requirements: Requirement[]
}

export function AnalyticsOverview({ requirements }: AnalyticsOverviewProps) {
  const byStatus = requirements.reduce(
    (acc, req) => {
      acc[req.status] = (acc[req.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const byDepartment = requirements.reduce(
    (acc, req) => {
      acc[req.department] = (acc[req.department] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">数据概览</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">按状态统计</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(byStatus).map(([status, count]) => (
                <div key={status} className="flex justify-between text-sm">
                  <span>{status}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">按部门统计</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(byDepartment).map(([dept, count]) => (
                <div key={dept} className="flex justify-between text-sm">
                  <span>{dept}</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
