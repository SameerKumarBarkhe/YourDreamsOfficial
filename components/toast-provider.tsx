"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast, ToastProvider as ToastPrimitiveProvider, ToastViewport } from "@/components/ui/toast"
import { useEffect, useState } from "react"

export function ToastProvider() {
  const { toasts, dismiss } = useToast()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ToastPrimitiveProvider>
      <div className="fixed top-0 right-0 z-50 flex flex-col gap-2 w-full max-w-sm p-4 md:max-w-md">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            onClose={() => dismiss(toast.id)}
            className="animate-in fade-in slide-in-from-top-5"
          >
            <div>
              <h3 className="font-medium">{toast.title}</h3>
              {toast.description && <p className="text-sm opacity-90">{toast.description}</p>}
            </div>
          </Toast>
        ))}
      </div>
      <ToastViewport />
    </ToastPrimitiveProvider>
  )
}

