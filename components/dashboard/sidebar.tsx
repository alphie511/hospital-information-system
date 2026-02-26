"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { User } from "@/lib/auth"

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  user: User | null
}

const menuItems = [
  { id: "overview", label: "系统概览", icon: "📊" },
  { id: "requirements", label: "需求管理", icon: "📋" },
  { id: "engineers", label: "工程师管理", icon: "👨‍💻" },
  { id: "tasks", label: "任务进度", icon: "📈" },
  { id: "assignments", label: "任务分配", icon: "🎯" },
  { id: "task-management", label: "任务管理", icon: "✅" },
  { id: "task-progress", label: "进度追踪", icon: "📊" },
  { id: "duty-records", label: "值班记录", icon: "📝" },
  { id: "duty-schedule", label: "值班排班", icon: "📅" },
  { id: "duty-analytics", label: "值班统计", icon: "📉" },
  { id: "duty-to-task", label: "值班转任务", icon: "🔄" },
  { id: "meetings", label: "会议管理", icon: "🤝" },
  { id: "roles", label: "角色管理", icon: "🔐", permission: "manage_roles" },
  { id: "settings", label: "系统设置", icon: "⚙️", permission: "manage_settings" },
  { id: "departments", label: "部门管理", icon: "🏢", permission: "manage_settings" },
  { id: "task-labels", label: "标签管理", icon: "🏷️", permission: "manage_settings" },
]

export function Sidebar({ activeTab, onTabChange, user }: SidebarProps) {
  const filteredItems = menuItems.filter(
    (item) => !item.permission || user?.permissions?.includes(item.permission),
  )

  return (
    <div className="w-64 border-r bg-background h-full overflow-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">功能菜单</h2>
        <nav className="space-y-1">
          {filteredItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn("w-full justify-start gap-2")}
              onClick={() => onTabChange(item.id)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}
