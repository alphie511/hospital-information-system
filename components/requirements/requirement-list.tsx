"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Requirement, User } from "@/lib/auth"

interface RequirementListProps {
  requirements: Requirement[]
  onStatusChange: (id: string, status: string, comment: string) => void
  onSubmit: (data: any) => void
  showForm: boolean
  onToggleForm: () => void
  departments: string[]
  currentUser: User | null
}

const priorityColors: Record<string, string> = {
  urgent: "destructive",
  high: "destructive",
  medium: "secondary",
  low: "outline",
}

const statusLabels: Record<string, string> = {
  pending: "待处理",
  reviewing: "评审中",
  approved: "已批准",
  rejected: "已拒绝",
}

export function RequirementList({
  requirements,
  onStatusChange,
  onSubmit,
  showForm,
  onToggleForm,
  departments,
  currentUser,
}: RequirementListProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">需求管理</h2>
        <Button onClick={onToggleForm}>{showForm ? "取消" : "提交新需求"}</Button>
      </div>
      <div className="grid gap-4">
        {requirements.map((req) => (
          <Card key={req.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{req.title}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant={priorityColors[req.priority] as any}>{req.priority}</Badge>
                  <Badge variant="outline">{statusLabels[req.status] || req.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{req.description}</p>
              <div className="mt-2 text-xs text-muted-foreground">
                {req.department} · {req.submittedBy} · {req.submittedAt}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
